type Cleanup = () => void;

export function lazyInitWhenVisible(
	root: HTMLElement,
	init: () => Cleanup,
	options?: IntersectionObserverInit,
): Cleanup {
	if (shouldInitImmediately(root)) {
		return init();
	}

	let cleanup: Cleanup | undefined;
	let observer: IntersectionObserver | undefined;

	const start = () => {
		if (cleanup) return;
		cleanup = init();
		observer?.disconnect();
		observer = undefined;
	};

	observer = new IntersectionObserver(
		(entries) => {
			if (entries.some((entry) => entry.isIntersecting)) {
				start();
			}
		},
		{ rootMargin: "240px 0px", threshold: 0, ...options },
	);

	observer.observe(root);

	return () => {
		observer?.disconnect();
		cleanup?.();
	};
}

function shouldInitImmediately(root: HTMLElement): boolean {
	const hash = window.location.hash.slice(1);
	if (hash && (root.id === hash || root.querySelector(`#${CSS.escape(hash)}`))) {
		return true;
	}

	const rect = root.getBoundingClientRect();
	return rect.top < window.innerHeight + 240;
}
