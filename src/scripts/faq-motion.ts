import { initDetailsAccordion } from "./details-accordion";

const faqAccordionConfig = {
	itemSelector: ".faq__item",
	summarySelector: ".faq__question",
	panelSelector: "[data-faq-panel]",
	innerSelector: ".faq__answer-inner",
} as const;

export function initFaqAccordion(root: HTMLElement): () => void {
	return initDetailsAccordion(root, faqAccordionConfig);
}
