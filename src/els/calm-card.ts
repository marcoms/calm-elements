import 'calm-base';

import makeElement from '@marcoms/make-element';

const CalmCard = makeElement({
	props: {
		z: {
			attr: 'z',
			fromAttr: Number,
			init: 1,
		},

		fullWidth: {
			attr: 'full-width',
			boolAttr: true,
			init: false,
		},
	},

	shadowDom: true,
	template: `
		<style>
			#card {
				--outline-shadow: 0 0 0 1px var(--calm-color-outline);

				border-radius: var(--calm-border-radius);
				padding: 16px;
			}

			:host([z="1"]) #card {
				box-shadow: var(--calm-shadow-1);
			}

			:host([z="2"]) #card {
				box-shadow: var(--calm-shadow-2), var(--outline-shadow);
			}

			:host([z="3"]) #card {
				box-shadow: var(--calm-shadow-3), var(--outline-shadow);
			}

			:host([z="4"]) #card {
				box-shadow: var(--calm-shadow-4), var(--outline-shadow);
			}

			:host([full-width]) #card {
				width: 100%;
				border-radius: 0;
			}
		</style>

		<div id="card">
			<slot></slot>
		</div>
	`,
});

customElements.define('calm-card', CalmCard);

export default CalmCard;
