import gsap from "gsap";

export function initHeroMotion(root: HTMLElement): () => void {
	if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
		return () => {};
	}

	root.classList.add("hero--js");

	const metaChars = root.querySelectorAll<HTMLElement>(".hero__meta-char");
	const wordInners = root.querySelectorAll<HTMLElement>(".hero__word-inner");
	const subheadLines = root.querySelectorAll<HTMLElement>(".hero__subhead-line-inner");
	const mediaInner = root.querySelector<HTMLElement>(".hero__media-inner");
	const actions = root.querySelector<HTMLElement>(".hero__actions");
	const metaRule = root.querySelector<HTMLElement>(".hero__meta-rule");

	const animatedLayers = [
		mediaInner,
		...wordInners,
		...subheadLines,
		...metaChars,
		actions,
	].filter(Boolean) as HTMLElement[];

	const clearWillChange = () => {
		for (const layer of animatedLayers) {
			layer.style.willChange = "auto";
		}
	};

	const ctx = gsap.context(() => {
		gsap.set(wordInners, { yPercent: 110 });
		gsap.set(subheadLines, { yPercent: 100, autoAlpha: 0 });
		gsap.set(metaChars, { autoAlpha: 0 });
		gsap.set(mediaInner, { scale: 1.1, autoAlpha: 0.55 });
		gsap.set(actions, { y: 18, autoAlpha: 0 });
		if (metaRule) gsap.set(metaRule, { scaleX: 0, transformOrigin: "left center" });

		const tl = gsap.timeline({
			defaults: { ease: "expo.out" },
			delay: 0.08,
			onComplete: clearWillChange,
		});

		tl.to(
			mediaInner,
			{
				scale: 1,
				autoAlpha: 1,
				duration: 1.35,
			},
			0,
		)
			.to(
				metaChars,
				{
					autoAlpha: 1,
					duration: 0.03,
					stagger: { each: 0.022, from: "start" },
					ease: "none",
				},
				0.18,
			)
			.to(
				wordInners,
				{
					yPercent: 0,
					duration: 0.95,
					stagger: { each: 0.055, from: "start" },
				},
				0.32,
			)
			.to(
				metaRule,
				{
					scaleX: 1,
					duration: 0.9,
					ease: "expo.inOut",
				},
				0.42,
			)
			.to(
				subheadLines,
				{
					yPercent: 0,
					autoAlpha: 1,
					duration: 0.8,
					stagger: 0.14,
				},
				0.72,
			)
			.to(
				actions,
				{
					y: 0,
					autoAlpha: 1,
					duration: 0.65,
				},
				1.05,
			);

		scheduleParallax(mediaInner, root);
	}, root);

	return () => ctx.revert();
}

function scheduleParallax(mediaInner: HTMLElement | null, root: HTMLElement): void {
	if (!mediaInner || !window.matchMedia("(min-width: 56rem)").matches) return;

	const initParallax = () => {
		void import("gsap/ScrollTrigger").then(({ ScrollTrigger }) => {
			gsap.registerPlugin(ScrollTrigger);
			gsap.to(mediaInner, {
				yPercent: 6,
				ease: "none",
				scrollTrigger: {
					trigger: root,
					start: "top top",
					end: "bottom top",
					scrub: 0.6,
				},
			});
		});
	};

	if ("requestIdleCallback" in window) {
		requestIdleCallback(initParallax, { timeout: 2500 });
	} else {
		window.setTimeout(initParallax, 1500);
	}
}
