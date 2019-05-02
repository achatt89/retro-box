import { LitElement, html, css } from 'lit-element';
import './card/retro-box-card.js';
import './layout/retro-box-layout';
import './icon/retro-box-icon';
import './topBar/retro-box-top-bar';

import Logo from './assets/AIB_Logo.jpg';

class RetroBox extends LitElement {

  static get styles() {
    return css`
     /* Custom CSS */
    `
  }

  constructor() {
    super();

    this.colNames = JSON.stringify([{ colNames: 'Start' }, { colNames: 'Continue' }, { colNames: 'Stop' }]);
    this.logo = Logo;

    this.title = 'Team Retrospective Box';
    this.variant = 'dense-fixed-adjust';

    this.addCard = (e) => {
      const elem = e.target;
      const event = new CustomEvent('addCard', {
        bubbles: true,
        composed: true,
        detail: {
          target: e.target.slot,
          status: 'edit'
        }
      });

      elem.dispatchEvent(event);
    }

  }

  render() {
    return html`

      
      <retro-box-layout colNames='${this.colNames}'>
        <retro-box-icon slot='Start' icon='add_circle_outline' @click='${this.addCard}'></retro-box-icon>
        <retro-box-icon slot='Continue' icon='add_circle_outline' @click='${this.addCard}'></retro-box-icon>
        <retro-box-icon slot='Stop' icon='add_circle_outline' @click='${this.addCard}'></retro-box-icon>
      </retro-box-layout>
    `;
  }
}

customElements.define('retro-box', RetroBox);
