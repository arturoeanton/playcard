import { LitElement, html, css } from 'lit';

export class R2Card extends LitElement {
  static styles = css`
    :host {
      display: block;
      width: 250px;
      padding: 16px;
      border-radius: 8px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      background-color: #2e2e2e;
      color: #fff;
      font-family: Arial, sans-serif;
    }

    .card-header {
      font-size: 24px;
      font-weight: bold;
      margin-bottom: 16px;
    }

    .card-footer {
      margin-top: 16px;
      text-align: right;
    }

    ::slotted(*) {
      margin-bottom: 8px;
    }
  `;

  static properties = {
    title: { type: String },
    footer: { type: String },
  };

  constructor() {
    super();
    this.header = '';
    this.footer = '';
  }

  render() {
    return html`
      <div class="card-header">${this.title}</div>
      <div class="card-content">
        <slot></slot>
      </div>
      <div class="card-footer">${this.footer}         <slot name="footer"></slot></div>
    `;
  }
}

customElements.define('r2-card', R2Card);