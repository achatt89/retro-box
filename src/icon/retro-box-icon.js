import { LitElement, html, css} from 'lit-element'

export class RetroBoxIcon extends LitElement {
	static get properties() {
			return {
				icon: {attribute:true}
			}
	}

	static get styles() {

		// Copied from @material/mwc-icon/mwc-icon-host-css.js
		return css`
			:host{font-family:var(--mdc-icon-font, "Material Icons");font-weight:normal;font-style:normal;font-size:var(--mdc-icon-size, 24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-feature-settings:"liga";-webkit-font-smoothing:antialiased};
		`;
	}

	constructor() {
			super();

			const fontEl = document.createElement('link');
			fontEl.rel = 'stylesheet';
			fontEl.href = 'https://fonts.googleapis.com/icon?family=Material+Icons';
			document.head.appendChild(fontEl);

			this.addEventListener('favclick', (e)=> {
				this.icon = 'favorite';
			});
	}

	render() {
			return html`
				<div class='icon'>${this.icon}</div>
			`
	}
}

customElements.define('retro-box-icon', RetroBoxIcon);