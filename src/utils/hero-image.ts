import { hero } from "../data/site";

export function heroImageUrl(width: number, height: number): string {
	const url = new URL(hero.image.src);
	url.searchParams.set("w", String(width));
	url.searchParams.set("h", String(height));
	url.searchParams.set("fit", "crop");
	url.searchParams.set("q", "75");
	return url.toString();
}

export function heroSrcsetFor(widths: number[], aspect: number): string {
	return widths.map((w) => `${heroImageUrl(w, Math.round(w / aspect))} ${w}w`).join(", ");
}

export const heroMobileSrcset = heroSrcsetFor([320, 480, 640, 800], 5 / 4);
export const heroTabletSrcset = heroSrcsetFor([640, 900, 1200], 3 / 2);
export const heroDesktopSrcset = heroSrcsetFor([800, 1000, 1200], 4 / 5);
export const heroLcpPreloadHref = heroImageUrl(480, 384);
