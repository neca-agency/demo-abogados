import gsap from "gsap";

const OPEN_DURATION = 0.38;
const CLOSE_DURATION = 0.28;

function prefersReducedMotion(): boolean {
	return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function getPanel(item: HTMLDetailsElement): HTMLElement | null {
	return item.querySelector<HTMLElement>("[data-faq-panel]");
}

function getInner(panel: HTMLElement): HTMLElement | null {
	return panel.querySelector<HTMLElement>(".faq__answer-inner");
}

function closeItem(item: HTMLDetailsElement): Promise<void> {
	const panel = getPanel(item);
	if (!panel || !item.open) return Promise.resolve();

	const inner = getInner(panel);

	if (prefersReducedMotion()) {
		item.open = false;
		return Promise.resolve();
	}

	gsap.killTweensOf([panel, inner]);

	const height = panel.offsetHeight;

	return new Promise((resolve) => {
		const tl = gsap.timeline({
			defaults: { ease: "expo.in" },
			onComplete: () => {
				item.open = false;
				gsap.set(panel, { clearProps: "height" });
				if (inner) gsap.set(inner, { clearProps: "all" });
				resolve();
			},
		});

		if (inner) {
			tl.to(inner, { autoAlpha: 0, y: -6, duration: CLOSE_DURATION * 0.75 }, 0);
		}

		tl.to(panel, { height: 0, duration: CLOSE_DURATION }, 0);
	});
}

function openItem(item: HTMLDetailsElement): void {
	const panel = getPanel(item);
	if (!panel) return;

	const inner = getInner(panel);

	if (prefersReducedMotion()) {
		item.open = true;
		return;
	}

	item.open = true;
	const targetHeight = panel.scrollHeight;

	gsap.killTweensOf([panel, inner]);
	gsap.set(panel, { height: 0, overflow: "hidden" });
	if (inner) gsap.set(inner, { autoAlpha: 0, y: 8 });

	const tl = gsap.timeline({ defaults: { ease: "expo.out" } });

	tl.to(panel, {
		height: targetHeight,
		duration: OPEN_DURATION,
		onComplete: () => {
			gsap.set(panel, { height: "auto" });
		},
	});

	if (inner) {
		tl.to(
			inner,
			{
				autoAlpha: 1,
				y: 0,
				duration: OPEN_DURATION * 0.9,
			},
			0.08,
		);
	}
}

export function initFaqAccordion(root: HTMLElement): () => void {
	const items = [...root.querySelectorAll<HTMLDetailsElement>(".faq__item")];

	if (prefersReducedMotion()) {
		const onToggle = (item: HTMLDetailsElement) => {
			if (!item.open) return;
			items.forEach((other) => {
				if (other !== item) other.open = false;
			});
		};

		const handlers = items.map((item) => {
			const listener = () => onToggle(item);
			item.addEventListener("toggle", listener);
			return () => item.removeEventListener("toggle", listener);
		});

		return () => handlers.forEach((remove) => remove());
	}

	items.forEach((item) => {
		const panel = getPanel(item);
		if (!panel) return;

		gsap.set(panel, { overflow: "hidden" });
		if (!item.open) gsap.set(panel, { height: 0 });
	});

	const cleanups: (() => void)[] = [];

	items.forEach((item) => {
		const summary = item.querySelector<HTMLElement>(".faq__question");
		if (!summary) return;

		const onClick = async (event: Event) => {
			event.preventDefault();

			if (item.open) {
				await closeItem(item);
				return;
			}

			await Promise.all(items.filter((other) => other !== item && other.open).map(closeItem));
			openItem(item);
		};

		summary.addEventListener("click", onClick);
		cleanups.push(() => summary.removeEventListener("click", onClick));
	});

	return () => {
		cleanups.forEach((remove) => remove());
		gsap.killTweensOf(root.querySelectorAll("[data-faq-panel], .faq__answer-inner"));
	};
}
