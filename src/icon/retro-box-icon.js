import { LitElement, html, css } from 'lit-element';

export class RetroBoxIcon extends LitElement {
	static get properties() {
		return {
			icon: { attribute: true }
		}
	}

	static get styles() {
		return css`
		 /* Custom CSS */
		`;
	}

	constructor() {
		super();

		this.addEventListener('favclick', () => {
			this.icon = 'favorite';
		});

	}

	render() {
		return html`
      <!-- Importing SCSS Generated File -->
      <link rel='stylesheet' href='bundle.css'>

			<!-- DOM Definition -->
			<button class='mdc-icon-button'>
				<i class="material-icons mdc-icon-button__icon">${this.icon}</i>
			</button>
		`;
	}
}

customElements.define('retro-box-icon', RetroBoxIcon);