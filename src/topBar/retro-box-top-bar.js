import { LitElement, css, html } from "lit-element";
import '../icon/retro-box-icon';

export class RetroBoxTopBar extends LitElement {
	static get styles() {
		return css`
			/* Custom CSS */
			@font-face {
		font-family: 'Roboto' ;
		src: url('https://fonts.googleapis.com/css?family=Roboto');
			}
		`;
	}

	static get properties() {
		return {
			variant: { attribute: true },
			title: { attribute: true },
			logo : {attribute: true}
		}
	};

	constructor() {
		super();

		this.topBarTemplate = (title, logo) => {
			return html `
			<div class="mdc-top-app-bar__row">
				<section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">
					<retro-box-icon class="material-icons mdc-top-app-bar__navigation-icon" icon="menu"></retro-box-icon>
					<span>${this.logo != undefined ? html`<img src='${logo}' height='100' width='100' />`: html``}</span>
					<span class="mdc-top-app-bar__title">${title}</span>
				</section>
				<section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-end" role="toolbar">
					<retro-box-icon class="material-icons mdc-top-app-bar__action-item" aria-label="Download" icon="file_download"></retro-box-icon>
					<retro-box-icon class="material-icons mdc-top-app-bar__action-item" aria-label="Print this page" icon="print"></retro-box-icon>
					<retro-box-icon class="material-icons mdc-top-app-bar__action-item" aria-label="Bookmark this page" icon="bookmark"></retro-box-icon>
				</section>
			</div>
		`;}
	}

	render() {
		return html`
		<!-- Importing SCSS Generated File -->
		<link rel='stylesheet' href='bundle.css'>
		${this.variant != undefined ? html`<header class='mdc-top-app-bar mdc-top-app-bar--${this.variant}'>${this.topBarTemplate(this.title, this.logo)}` : html`<header class='mdc-top-app-bar'>${this.topBarTemplate(this.title, this.logo)}`}
		`
	}
}

customElements.define('retro-box-top-bar', RetroBoxTopBar);