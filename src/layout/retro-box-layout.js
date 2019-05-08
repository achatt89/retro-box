import { LitElement, html, css } from 'lit-element';
import { RetroBoxCard } from '../card/retro-box-card';
import '../topBar/retro-box-top-bar';
import '../icon/retro-box-icon';

export class RetroBoxLayout extends LitElement {
	static get styles() {
		return css`
			/* Custom-CSS */
			.retro-box-layout-font {
				font-family: 'Roboto';
			}
		`;
	}

	static get properties() {
		return {
			logo: { attribute: true },
			colNames: { attribute: true }
		}
	}

	constructor() {
		super();
		setTimeout(() => {
			this.colNames = JSON.parse(this.colNames);
			this.colSpanVal = 12 / this.colNames.length;
			this.cols = [];
			this.colNames.forEach(element => {
				this.cols.push(element.colNames);
			});

			const elem = this.shadowRoot;
			elem.addEventListener('addCard', (e) => {
				let cardSlotElem = e.currentTarget.getElementById(e.detail.target);
				const cellElem = document.createElement('div');
				cellElem.setAttribute('class', 'mdc-layout-grid__cell--span-6');
				cardSlotElem.appendChild(cellElem);

				const cardElem = new RetroBoxCard({
					status: e.detail.status
				});

				cardSlotElem = cardSlotElem.querySelectorAll('.mdc-layout-grid__cell--span-6');
				cardSlotElem = cardSlotElem[cardSlotElem.length - 1]
				cardSlotElem.appendChild(cardElem);

			}, false);
		}, 10);
	}

	render() {
		return html`
		<!-- Importing SCSS Generated File -->
		<link rel='stylesheet' href='bundle.css'>

		<!-- DOM Definition -->
		<div class="mdc-layout-grid">
			<div class="mdc-layout-grid__inner">
				${this.cols.map(i => html`
					<div class="mdc-layout-grid__cell--span-${this.colSpanVal}">${i}
						<div class="mdc-layout-grid__inner">
							<slot name='${i}' class="mdc-layout-grid__cell--span-12"></slot>
						</div>
						<div class="mdc-layout-grid__inner" id='${i}'>
							<!-- DIV Element for retrospective cards -->
						</div>
					</div>
				`)}
			</div>
		</div>
		`;
	}
}

customElements.define('retro-box-layout', RetroBoxLayout);
