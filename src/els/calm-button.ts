import 'calm-base';
import 'els/calm-tappable';

import makeElement from '@marcoms/make-element';
import {makeFocusMixin} from 'calm-base';

const CalmButton = makeElement({
	props: {
		disabled: {
			attr: 'disabled',
			boolAttr: true,
			init: false,
			set(val) {
				if (val) {
					this.$['button'].setAttribute('aria-disabled', 'true');
				} else {
					this.$['button'].setAttribute('aria-disabled', 'false');
				}
			},
		},
	},

	shadowDom: true,
	template: `
		<style>
			:host {
				display: block;

				--outline-shadow: inset 0 0 0 1px var(--calm-color-outline);
				--raised-light-shadow: inset 0 2px rgba(255, 255, 255, 0.25);
				--raised-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
			}

			#button {
				position: relative;

				display: inline-block;

				border-radius: var(--calm-border-radius);
				border: none;
				background: rgba(0, 0, 0, 0.025);
				box-shadow:
					var(--outline-shadow),
					var(--raised-light-shadow),
					var(--raised-shadow);

				font-family: sans-serif;
				user-select: none;

				transition-property: box-shadow, background;
				transition-duration: var(--calm-duration-blip);
				transition-timing-function: linear;
			}

			#button:hover {
				background: rgba(255, 255, 255, 0.1);
			}

			#button[active] {
				box-shadow: var(--outline-shadow);
				transition: none;
			}

			:host([disabled]) #button {
				pointer-events: none;
				opacity: 0.5;
			}

			#contents {
				display: flex;
				justify-content: center;

				padding: 8px 12px;
				min-width: 64px;
			}

			${makeFocusMixin('#button')}
		</style>

		<calm-tappable role="button" id="button" tabindex="0">
			<div id="contents">
				<slot></slot>
			</div>
		</calm-tappable>
	`,
});

customElements.define('calm-button', CalmButton);

export default CalmButton;
