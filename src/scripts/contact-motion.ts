import gsap from "gsap";

const SUBMIT_DELAY_MS = 1100;

function prefersReducedMotion(): boolean {
	return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function getInvalidFields(form: HTMLFormElement): HTMLElement[] {
	return [...form.querySelectorAll<HTMLElement>("[data-contact-field]")].filter((field) => {
		const input = field.querySelector<HTMLInputElement | HTMLTextAreaElement>("input, textarea");
		return input ? !input.checkValidity() : false;
	});
}

function autoGrowTextarea(textarea: HTMLTextAreaElement): void {
	textarea.style.height = "auto";
	textarea.style.height = `${textarea.scrollHeight}px`;
}

function drawCheckmark(icon: SVGSVGElement | null): void {
	if (!icon) return;

	const path = icon.querySelector<SVGPathElement>(".contact__check-path");
	if (!path) return;

	const length = path.getTotalLength();
	path.style.strokeDasharray = `${length}`;
	path.style.strokeDashoffset = `${length}`;

	if (prefersReducedMotion()) {
		path.style.strokeDashoffset = "0";
		return;
	}

	gsap.to(path, {
		strokeDashoffset: 0,
		duration: 0.55,
		ease: "expo.out",
		delay: 0.08,
	});
}

function clearFieldState(form: HTMLFormElement): void {
	form.querySelectorAll<HTMLElement>("[data-contact-field]").forEach((field) => {
		delete field.dataset.touched;
		delete field.dataset.valid;
	});

	form.querySelectorAll<HTMLTextAreaElement>("textarea").forEach((textarea) => {
		textarea.style.height = "";
	});
}

function releaseSubmitButton(submitBtn: HTMLButtonElement): void {
	submitBtn.disabled = false;
	submitBtn.removeAttribute("data-loading");
	submitBtn.removeAttribute("aria-busy");
	submitBtn.querySelector<HTMLElement>("[data-submit-loading]")?.setAttribute("aria-hidden", "true");
}

function setSubmitLoading(submitBtn: HTMLButtonElement): void {
	submitBtn.disabled = true;
	submitBtn.dataset.loading = "true";
	submitBtn.setAttribute("aria-busy", "true");
	submitBtn.querySelector<HTMLElement>("[data-submit-loading]")?.setAttribute("aria-hidden", "false");
}

function shakeFields(fields: HTMLElement[]): void {
	if (prefersReducedMotion() || fields.length === 0) return;

	gsap.fromTo(
		fields,
		{ x: 0 },
		{
			x: 6,
			duration: 0.07,
			repeat: 3,
			yoyo: true,
			ease: "power1.inOut",
		},
	);
}

function lockStage(stage: HTMLElement): number {
	const height = stage.offsetHeight;
	stage.classList.add("contact__stage--locked");
	gsap.set(stage, { height });
	return height;
}

function unlockStage(stage: HTMLElement): void {
	stage.classList.remove("contact__stage--locked");
	gsap.set(stage, { clearProps: "height" });
}

function measureSuccessHeight(success: HTMLElement): number {
	const prev = {
		hidden: success.hidden,
		overlay: success.classList.contains("contact__success--overlay"),
		visibility: success.style.visibility,
	};

	if (prev.overlay) success.classList.remove("contact__success--overlay");
	success.hidden = false;
	success.style.visibility = "hidden";

	const height = success.offsetHeight;

	success.style.visibility = prev.visibility;
	success.hidden = prev.hidden;
	if (prev.overlay) success.classList.add("contact__success--overlay");

	return height;
}

function showSuccess(
	form: HTMLFormElement,
	success: HTMLElement,
	stage: HTMLElement,
	wrap: HTMLElement,
	submitBtn: HTMLButtonElement,
	status: HTMLElement,
): void {
	const reduced = prefersReducedMotion();

	status.hidden = false;
	status.textContent =
		"Mensaje recibido. Lo revisará un socio del estudio. Os responderemos en un plazo máximo de veinticuatro horas laborables.";
	delete status.dataset.state;

	form.setAttribute("aria-hidden", "true");
	wrap.classList.add("contact__form-wrap--success");

	const icon = success.querySelector<SVGSVGElement>(".contact__check");
	const successCopy = success.querySelector<HTMLElement>("[data-success-copy]");
	const fields = form.querySelectorAll<HTMLElement>("[data-contact-field]");
	const submitRow = form.querySelector<HTMLElement>(".contact__submit-row");

	if (reduced) {
		form.hidden = true;
		success.hidden = false;
		success.setAttribute("aria-hidden", "false");
		drawCheckmark(icon);
		releaseSubmitButton(submitBtn);
		success.querySelector<HTMLElement>(".contact__success-title")?.focus();
		return;
	}

	lockStage(stage);
	const successHeight = measureSuccessHeight(success);

	form.classList.add("contact__form--leaving");
	success.classList.add("contact__success--overlay");
	gsap.set(success, { autoAlpha: 0 });
	success.hidden = false;
	success.setAttribute("aria-hidden", "false");

	gsap.set([icon, successCopy], { y: 14, autoAlpha: 0 });

	const tl = gsap.timeline({
		defaults: { ease: "expo.out" },
		onComplete: () => {
			form.hidden = true;
			form.classList.remove("contact__form--leaving");
			form.reset();
			clearFieldState(form);
			releaseSubmitButton(submitBtn);
			success.classList.remove("contact__success--overlay");
			gsap.set(success, { clearProps: "opacity,visibility" });
			gsap.set([icon, successCopy], { clearProps: "transform,opacity,visibility" });
			gsap.set([fields, submitRow], { clearProps: "all" });
			gsap.set(stage, { height: successHeight });
			requestAnimationFrame(() => {
				unlockStage(stage);
				success.querySelector<HTMLElement>(".contact__success-title")?.focus();
			});
		},
	});

	tl.to(fields, {
		y: -10,
		autoAlpha: 0,
		duration: 0.32,
		stagger: 0.035,
		ease: "expo.in",
	})
		.to(
			submitRow,
			{
				y: -6,
				autoAlpha: 0,
				duration: 0.28,
				ease: "expo.in",
			},
			0.08,
		)
		.to(
			success,
			{
				autoAlpha: 1,
				duration: 0.42,
			},
			0.18,
		)
		.to(
			icon,
			{
				y: 0,
				autoAlpha: 1,
				duration: 0.48,
			},
			0.28,
		)
		.add(() => drawCheckmark(icon), 0.34)
		.to(
			successCopy,
			{
				y: 0,
				autoAlpha: 1,
				duration: 0.52,
			},
			0.38,
		)
		.add(() => {
			form.hidden = true;
			form.classList.remove("contact__form--leaving");
		}, 0.36)
		.to(
			stage,
			{
				height: successHeight,
				duration: 0.45,
				ease: "expo.inOut",
			},
			0.38,
		);
}

function resetForm(
	form: HTMLFormElement,
	success: HTMLElement,
	stage: HTMLElement,
	wrap: HTMLElement,
	status: HTMLElement,
	submitBtn: HTMLButtonElement,
): void {
	const reduced = prefersReducedMotion();

	wrap.classList.remove("contact__form-wrap--success");
	success.hidden = true;
	success.setAttribute("aria-hidden", "true");
	success.classList.remove("contact__success--overlay");
	status.hidden = true;
	status.textContent = "";
	delete status.dataset.state;

	releaseSubmitButton(submitBtn);
	clearFieldState(form);

	const fields = form.querySelectorAll<HTMLElement>("[data-contact-field]");
	const icon = success.querySelector<SVGSVGElement>(".contact__check");
	const path = icon?.querySelector<SVGPathElement>(".contact__check-path");
	const successCopy = success.querySelector<HTMLElement>("[data-success-copy]");
	const submitRow = form.querySelector<HTMLElement>(".contact__submit-row");

	if (path) {
		const length = path.getTotalLength();
		path.style.strokeDashoffset = `${length}`;
	}

	if (reduced) {
		form.hidden = false;
		form.classList.remove("contact__form--leaving");
		form.removeAttribute("aria-hidden");
		gsap.set([success, icon, successCopy, fields, submitRow], { clearProps: "all" });
		return;
	}

	lockStage(stage);

	const tl = gsap.timeline({
		defaults: { ease: "expo.out" },
		onComplete: () => {
			unlockStage(stage);
			gsap.set([success, icon, successCopy, fields, submitRow], { clearProps: "all" });
		},
	});

	tl.to([success, icon, successCopy], {
		autoAlpha: 0,
		y: 10,
		duration: 0.28,
		ease: "expo.in",
		stagger: 0.04,
	})
		.set(form, { hidden: false })
		.call(() => {
			form.classList.remove("contact__form--leaving");
			form.removeAttribute("aria-hidden");
		})
		.fromTo(
			fields,
			{ y: 10, autoAlpha: 0 },
			{
				y: 0,
				autoAlpha: 1,
				duration: 0.4,
				stagger: 0.04,
			},
			0.12,
		)
		.fromTo(
			submitRow,
			{ y: 8, autoAlpha: 0 },
			{
				y: 0,
				autoAlpha: 1,
				duration: 0.36,
			},
			0.22,
		)
		.to(
			stage,
			{
				height: () => form.offsetHeight,
				duration: 0.4,
				ease: "expo.inOut",
			},
			0.1,
		);
}

export function initContactForm(root: HTMLElement): () => void {
	const form = root.querySelector<HTMLFormElement>("[data-contact-form]");
	const wrap = root.querySelector<HTMLElement>("[data-contact-form-wrap]");
	const stage = root.querySelector<HTMLElement>("[data-contact-stage]");
	const success = root.querySelector<HTMLElement>("[data-contact-success]");
	const status = root.querySelector<HTMLElement>("[data-form-status]");
	const submitBtn = root.querySelector<HTMLButtonElement>("[data-contact-submit]");
	const resetBtn = root.querySelector<HTMLButtonElement>("[data-contact-reset]");
	const textarea = root.querySelector<HTMLTextAreaElement>("#mensaje");

	if (!form || !wrap || !stage || !success || !status || !submitBtn) {
		return () => {};
	}

	success.hidden = true;

	const onTextareaInput = () => {
		if (textarea) autoGrowTextarea(textarea);
	};

	const onFieldInput = (event: Event) => {
		const target = event.target;
		if (!(target instanceof HTMLInputElement || target instanceof HTMLTextAreaElement)) return;

		const field = target.closest<HTMLElement>("[data-contact-field]");
		if (!field) return;

		field.dataset.touched = "true";
		if (target.checkValidity()) {
			field.dataset.valid = "true";
		} else {
			delete field.dataset.valid;
		}
	};

	const onSubmit = (event: Event) => {
		event.preventDefault();

		if (submitBtn.disabled) return;

		form.querySelectorAll<HTMLElement>("[data-contact-field]").forEach((field) => {
			field.dataset.touched = "true";
		});

		if (!form.checkValidity()) {
			const invalid = getInvalidFields(form);
			shakeFields(invalid);
			status.hidden = false;
			status.textContent =
				"Revisad los campos señalados — necesitamos un nombre, correo y mensaje para poder ayudaros.";
			status.dataset.state = "error";
			form.reportValidity();
			invalid[0]?.querySelector<HTMLElement>("input, textarea")?.focus();
			return;
		}

		status.hidden = true;
		delete status.dataset.state;
		setSubmitLoading(submitBtn);

		window.setTimeout(() => {
			showSuccess(form, success, stage, wrap, submitBtn, status);
		}, SUBMIT_DELAY_MS);
	};

	const onReset = () => {
		resetForm(form, success, stage, wrap, status, submitBtn);
		form.querySelector<HTMLInputElement>("#nombre")?.focus();
	};

	textarea?.addEventListener("input", onTextareaInput);
	form.addEventListener("input", onFieldInput);
	form.addEventListener("submit", onSubmit);
	resetBtn?.addEventListener("click", onReset);

	return () => {
		textarea?.removeEventListener("input", onTextareaInput);
		form.removeEventListener("input", onFieldInput);
		form.removeEventListener("submit", onSubmit);
		resetBtn?.removeEventListener("click", onReset);
		gsap.killTweensOf([
			form,
			success,
			stage,
			wrap,
			...form.querySelectorAll("[data-contact-field]"),
			form.querySelector(".contact__submit-row"),
		]);
	};
}
