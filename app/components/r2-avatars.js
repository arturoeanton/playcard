import { LitElement, html, css } from 'lit';

export class R2Avatars extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding-left: 4rem;
    }

    ::slotted(*) {
      width: 120px;
      height: 120px;
      border-radius: 100%;
      border: 2px solid #fff;
      margin: 0 0 0 -2rem;
    }
    
  `;

  static properties = {
    hover: { type: Boolean },
  };

  constructor() {
    super();
    this.hover = false;
  }

  render() {
    return html`
      <slot></slot>
    `;
  }
}

customElements.define('r2-avatars', R2Avatars);
