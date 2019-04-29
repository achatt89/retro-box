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
        background-color: lightgray !important;
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

      /* @import url('./mdc.card.min.css'); */
      /* -------- MDC Card Component --------- */
      /*!
      Material Components for the Web
      Copyright (c) 2019 Google Inc.
      License: MIT
      */
      .mdc-card{border-radius:4px;background-color:#fff;background-color:var(--mdc-theme-surface, #fff);box-shadow:0px 2px 1px -1px rgba(0, 0, 0, 0.2),0px 1px 1px 0px rgba(0, 0, 0, 0.14),0px 1px 3px 0px rgba(0,0,0,.12);display:flex;flex-direction:column;box-sizing:border-box}.mdc-card--outlined{box-shadow:0px 0px 0px 0px rgba(0, 0, 0, 0.2),0px 0px 0px 0px rgba(0, 0, 0, 0.14),0px 0px 0px 0px rgba(0,0,0,.12);border-width:1px;border-style:solid;border-color:#e0e0e0}.mdc-card__media{position:relative;box-sizing:border-box;background-repeat:no-repeat;background-position:center;background-size:cover}.mdc-card__media::before{display:block;content:""}.mdc-card__media:first-child{border-top-left-radius:inherit;border-top-right-radius:inherit}.mdc-card__media:last-child{border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.mdc-card__media--square::before{margin-top:100%}.mdc-card__media--16-9::before{margin-top:56.25%}.mdc-card__media-content{position:absolute;top:0;right:0;bottom:0;left:0;box-sizing:border-box}.mdc-card__primary-action{display:flex;flex-direction:column;box-sizing:border-box;position:relative;outline:none;color:inherit;text-decoration:none;cursor:pointer;overflow:hidden}.mdc-card__primary-action:first-child{border-top-left-radius:inherit;border-top-right-radius:inherit}.mdc-card__primary-action:last-child{border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.mdc-card__actions{display:flex;flex-direction:row;align-items:center;box-sizing:border-box;min-height:52px;padding:8px}.mdc-card__actions--full-bleed{padding:0}.mdc-card__action-buttons,.mdc-card__action-icons{display:flex;flex-direction:row;align-items:center;box-sizing:border-box}.mdc-card__action-icons{color:rgba(0,0,0,.6);flex-grow:1;justify-content:flex-end}.mdc-card__action-buttons+.mdc-card__action-icons{margin-left:16px;margin-right:0}[dir=rtl] .mdc-card__action-buttons+.mdc-card__action-icons,.mdc-card__action-buttons+.mdc-card__action-icons[dir=rtl]{margin-left:0;margin-right:16px}.mdc-card__action{display:inline-flex;flex-direction:row;align-items:center;box-sizing:border-box;justify-content:center;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.mdc-card__action:focus{outline:none}.mdc-card__action--button{margin-left:0;margin-right:8px;padding:0 8px}[dir=rtl] .mdc-card__action--button,.mdc-card__action--button[dir=rtl]{margin-left:8px;margin-right:0}.mdc-card__action--button:last-child{margin-left:0;margin-right:0}[dir=rtl] .mdc-card__action--button:last-child,.mdc-card__action--button:last-child[dir=rtl]{margin-left:0;margin-right:0}.mdc-card__actions--full-bleed .mdc-card__action--button{justify-content:space-between;width:100%;height:auto;max-height:none;margin:0;padding:8px 16px;text-align:left}[dir=rtl] .mdc-card__actions--full-bleed .mdc-card__action--button,.mdc-card__actions--full-bleed .mdc-card__action--button[dir=rtl]{text-align:right}.mdc-card__action--icon{margin:-6px 0;padding:12px}.mdc-card__action--icon:not(:disabled){color:rgba(0,0,0,.6)}@-webkit-keyframes mdc-ripple-fg-radius-in{from{-webkit-animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-webkit-transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{-webkit-transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-radius-in{from{-webkit-animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-webkit-transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{-webkit-transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@-webkit-keyframes mdc-ripple-fg-opacity-in{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-in{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@-webkit-keyframes mdc-ripple-fg-opacity-out{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}@keyframes mdc-ripple-fg-opacity-out{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}.mdc-ripple-surface--test-edge-var-bug{--mdc-ripple-surface-test-edge-var: 1px solid #000;visibility:hidden}.mdc-ripple-surface--test-edge-var-bug::before{border:var(--mdc-ripple-surface-test-edge-var)}.mdc-card__primary-action{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0);will-change:transform,opacity}.mdc-card__primary-action::before,.mdc-card__primary-action::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-card__primary-action::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1}.mdc-card__primary-action.mdc-ripple-upgraded::before{-webkit-transform:scale(var(--mdc-ripple-fg-scale, 1));transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-card__primary-action.mdc-ripple-upgraded::after{top:0;left:0;-webkit-transform:scale(0);transform:scale(0);-webkit-transform-origin:center center;transform-origin:center center}.mdc-card__primary-action.mdc-ripple-upgraded--unbounded::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-card__primary-action.mdc-ripple-upgraded--foreground-activation::after{-webkit-animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards;animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-card__primary-action.mdc-ripple-upgraded--foreground-deactivation::after{-webkit-animation:mdc-ripple-fg-opacity-out 150ms;animation:mdc-ripple-fg-opacity-out 150ms;-webkit-transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-card__primary-action::before,.mdc-card__primary-action::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-card__primary-action.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-card__primary-action::before,.mdc-card__primary-action::after{background-color:#000}.mdc-card__primary-action:hover::before{opacity:.04}.mdc-card__primary-action:not(.mdc-ripple-upgraded):focus::before,.mdc-card__primary-action.mdc-ripple-upgraded--background-focused::before{transition-duration:75ms;opacity:.12}.mdc-card__primary-action:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-card__primary-action:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:.12}.mdc-card__primary-action.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: 0.12}
      /*# sourceMappingURL=mdc.card.min.css.map*/

      /* @import url('../node_modules/@material/typography/dist/mdc.typography.min.css'); */
      /* -------- MDC Typography --------- */
      /*!
      Material Components for the Web
      Copyright (c) 2019 Google Inc.
      License: MIT
      */
      .mdc-typography{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased}.mdc-typography--headline1{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:6rem;line-height:6rem;font-weight:300;letter-spacing:-0.015625em;text-decoration:inherit;text-transform:inherit}.mdc-typography--headline2{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:3.75rem;line-height:3.75rem;font-weight:300;letter-spacing:-0.0083333333em;text-decoration:inherit;text-transform:inherit}.mdc-typography--headline3{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:3rem;line-height:3.125rem;font-weight:400;letter-spacing:normal;text-decoration:inherit;text-transform:inherit}.mdc-typography--headline4{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:2.125rem;line-height:2.5rem;font-weight:400;letter-spacing:.0073529412em;text-decoration:inherit;text-transform:inherit}.mdc-typography--headline5{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:1.5rem;line-height:2rem;font-weight:400;letter-spacing:normal;text-decoration:inherit;text-transform:inherit}.mdc-typography--headline6{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:1.25rem;line-height:2rem;font-weight:500;letter-spacing:.0125em;text-decoration:inherit;text-transform:inherit}.mdc-typography--subtitle1{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:1rem;line-height:1.75rem;font-weight:400;letter-spacing:.009375em;text-decoration:inherit;text-transform:inherit}.mdc-typography--subtitle2{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:.875rem;line-height:1.375rem;font-weight:500;letter-spacing:.0071428571em;text-decoration:inherit;text-transform:inherit}.mdc-typography--body1{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:1rem;line-height:1.5rem;font-weight:400;letter-spacing:.03125em;text-decoration:inherit;text-transform:inherit}.mdc-typography--body2{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:.875rem;line-height:1.25rem;font-weight:400;letter-spacing:.0178571429em;text-decoration:inherit;text-transform:inherit}.mdc-typography--caption{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:.75rem;line-height:1.25rem;font-weight:400;letter-spacing:.0333333333em;text-decoration:inherit;text-transform:inherit}.mdc-typography--button{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:.875rem;line-height:2.25rem;font-weight:500;letter-spacing:.0892857143em;text-decoration:none;text-transform:uppercase}.mdc-typography--overline{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:.75rem;line-height:2rem;font-weight:500;letter-spacing:.1666666667em;text-decoration:none;text-transform:uppercase}
      /*# sourceMappingURL=mdc.typography.min.css.map*/

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

    setTimeout(() => {
      let captionElem = this.shadowRoot.querySelector('.mdc-typography--caption');

      let config = {
        innerHTML: true,
        subtree: true,
        attributes: true,
        childList: true
      }

      let cb = (mutationList, observer) => {
        for (let mutation of mutationList) {
          if (mutation.type == 'innerHTML') {
            console.log('tada');
          }

          if (mutation.type == 'childList') {
            console.log('bada');
          }
        }
      }

      let observer = new MutationObserver(cb);
      observer.observe(captionElem, config);
    }, 10);
  }

  render() {
    return html`
      <div class="mdc-card mdc-card--outline retro-box-card-container">
        <div class="my-card__media mdc-card__media retro-box-card-body">
          <div class="mdc-card__media-content retro-box-card-font">
            ${this.status == 'edit' ? html`${this.editTempl}` : html`${this.nonEditTempl}`};
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