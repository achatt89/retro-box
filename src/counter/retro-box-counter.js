import {LitElement, html} from 'lit-element';

class RetroBoxCounter extends LitElement {
	static get properties() {
		return {
			counter: {attribute:true}
		}
	}

	constructor() {
		super();

		this.addEventListener('favclick', (e)=> {
			console.log(e.detail);
			this.counter = e.detail.counterVal + 1;
		});
	}

	render() {
		return html`
			<div>${this.counter}</div>
		`
	}
}

customElements.define('retro-box-counter', RetroBoxCounter);