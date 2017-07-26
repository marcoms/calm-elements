export const fns = {
	getStyleProp(el: HTMLElement, propName: string) {
		return el.style.getPropertyValue(`--${propName}`);
	},
};

export function makeFocusMixin(selector: string) {
	return `
		${selector} {
			outline: none;
		}

		${selector}::after {
			content: '';

			position: absolute;
			top: -4px;
			left: -4px;

			display: block;
			width: calc(100% + 8px);
			height: calc(100% + 8px);

			box-shadow: 0 0 2px 2px var(--calm-color-focus);
			border-radius: 8px;
			opacity: 0;
			transform: scale(1.1);

			transition-property: transform, opacity;
			transition-duration: 80ms;
			transition-timing-function: linear;

			pointer-events: none;
		}

		${selector}:focus::after {
			transform: none;
			opacity: 1;

			transition-duration: 320ms;
			transition-timing-function: var(--calm-ease-out);
		}
	`;
}

if (!(window as any).calmStylesInjected) {
	const styleEl = document.createElement('style');
	styleEl.innerHTML = `
		:root {
			--calm-color-blue: #2196f3;
			--calm-color-blue-dark: #1976d2;

			--calm-color-focus: rgba(25, 118, 210, 0.35);

			--calm-color-active: rgba(0, 0, 0, 0.1);
			--calm-color-active-spotlight: rgba(255, 255, 255, 0.1);

			--calm-color-outline: rgba(0, 0, 0, 0.25);
			--calm-color-outline-darkbg: rgba(255, 255, 255, 0.1);

			--calm-ease-out: cubic-bezier(0.165, 0.84, 0.44, 1);
			--calm-ease-in: cubic-bezier(0.895, 0.03, 0.685, 0.22);

			--calm-duration-blip: 80ms;
			--calm-duration-short: 160ms;
			--calm-duration-medium: 320ms;
			--calm-duration-long: 420ms;
			--calm-duration-extreme: 960ms;

			--calm-shadow-1: 0 1px 4px rgba(0, 0, 0, 0.3);
			--calm-shadow-2: 0 2px 8px rgba(0, 0, 0, 0.35);
			--calm-shadow-3: 0 4px 16px rgba(0, 0, 0, 0.4);
			--calm-shadow-4: 0 8px 24px rgba(0, 0, 0, 0.45);

			--calm-border-radius: 3px;
		}
	`;

	document.head.appendChild(styleEl);

	(window as any).calmStylesInjected = true;
}
