import { LitElement, html, css } from 'lit-element';
import '../icon/retro-box-icon';
import '../counter/retro-box-counter';

export class RetroBoxCard extends LitElement {

  static get styles() {
    return css`

      /* Custom CSS */
      @font-face {
        font-family: 'Roboto' ;
        src: url('https://fonts.googleapis.com/css?family=Roboto');
      }
      
      .retro-box-card-font {
        font-family: 'Roboto';
      }

      .retro-box-card-container {
        padding: 16px;
        width: 80%;
        margin:48px 0;
      }
      .retro-box-card-body {
        margin: 10px 0;
        height: 250px;
        max-height: 150px;
      }

      .retro-box-card-head {
        margin: 0 0 20px 0;
      }

      .counter {
        padding: 0 0 0 8px;
      }

      .icon:hover {
        cursor: pointer;
      }
      .icon {
        user-select: none;
      }

    `;
  }

  constructor(param) {
    super();
    this.status = param.status;

    this.title = 'Click To Edit';
    this.subtitle = 'Click To Edit';
    this.body = 'Click To Edit';
    this.counter = 0;

    this.editTempl = html`
      <header class="mdc-typography retro-box-card-head">
        <div contenteditable='true' class='mdc-typography--headline6'>${this.title}</div>
        <div contenteditable='true' class="mdc-typography--subtitle2">${this.subtitle}</div>
      </header>
      <section class="mdc-typography">
        <div contenteditable='true' class="mdc-typography--caption" @click='${this.editDiv}'>${this.body}</div>
      </section>
    `;

    this.nonEditTempl = html`
      <header class="mdc-typography retro-box-card-head">
        <div class="mdc-typography--headline6">${this.title}</div>
        <div class="mdc-typography--subtitle2">${this.subtitle}</div>
      </header>
      <section class="mdc-typography">
        <div class="mdc-typography--caption">${this.body}</div>
      </section>
    `;

    this.favoriteClick = (e) => {
      const counterElem = this.shadowRoot.querySelector('retro-box-counter');
      counterElem.counter = ++this.counter;

      const event = new CustomEvent('favclick');
      const elem = e.target;
      elem.dispatchEvent(event);
    }
  }

  render() {
    return html`
      <!-- Importing SCSS Generated File -->
      <link rel='stylesheet' href='bundle.css'>

      <!-- DOM Definition -->
      <div class="mdc-card retro-box-card-container mdc-theme--primary">
        <div class="mdc-card__media retro-box-card-body">
          <div class="mdc-card__media-content retro-box-card-font">
            ${this.status == 'edit' ? html`${this.editTempl}` : html`${this.nonEditTempl}`}
          </div>
        </div>

        <div class="mdc-card__actions">
          <retro-box-icon class='icon' icon='favorite_border' @click='${this.favoriteClick}'></retro-box-icon>
          <retro-box-counter class='counter retro-box-card-font' counter='${this.counter}'></retro-box-counter>
        </div>
      </div>
    `;
  }
}

customElements.define('retro-box-card', RetroBoxCard);