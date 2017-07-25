import 'calm-base';

import makeElement from '@marcoms/make-element';
import quicktap from 'quicktap';

const CalmTappable = makeElement({
	props: {
		darkbg: {
			init: false,
			attr: 'darkbg',
			boolAttr: true,
		},

		active: {
			init: false,
			attr: 'active',
			boolAttr: true,
		},
	},

	shadowDom: true,
	template: `
		<style>
			:host {
				display: block;
			}

			#tappable {
				cursor: default;
				border-radius: inherit;
				transition-property: background, box-shadow;
				transition-duration: 80ms;
				transition-timing-function: linear;

				-webkit-tap-highlight-color: transparent;
			}

			#tappable.active {
				background: var(--calm-color-active);
				box-shadow: inset 0 2px rgba(0, 0, 0, 0.1);
				transition: none;
			}

			:host([darkbg]) #tappable.active {
				background: var(--calm-color-active-darkbg);
			}
		</style>

		<div id="tappable">
			<slot></slot>
		</div>
	`,

	ready() {
		quicktap(this.$['tappable']);
		this.$['tappable'].addEventListener('activate', () => {
			this.active = true;
			this.dispatchEvent(new CustomEvent('activate'));
		});

		this.$['tappable'].addEventListener('deactivate', () => {
			this.active = false;
			this.dispatchEvent(new CustomEvent('deactivate'));
		});
	}
});

window.customElements.define('calm-tappable', CalmTappable);

export default CalmTappable;
