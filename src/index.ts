export const fns = {
	getStyleProp(el: HTMLElement, propName: string) {
		return el.style.getPropertyValue(`--${propName}`);
	},
};

if (!(window as any).calmStylesInjected) {
	const styleEl = document.createElement('style');
	styleEl.innerHTML = `
		:root {
			--calm-ease-out: cubic-bezier(0.165, 0.84, 0.44, 1);
			--calm-ease-in: cubic-bezier(0.895, 0.03, 0.685, 0.22);

			--calm-duration-short: 160ms;
			--calm-duration-medium: 320ms;
			--calm-duration-long: 420ms;
			--calm-duration-extreme: 960ms;

			--calm-border-radius: 3px;
		}
	`;

	(window as any).calmStylesInjected = true;
}
