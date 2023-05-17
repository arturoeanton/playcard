import { html, css, LitElement } from 'lit';

class R2LoadingModal extends LitElement {
  static styles = [css`
    .modal {
      display: flex;
      align-items: center;
      justify-content: center;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      z-index: 9999;
    }

    .loading-spinner {
      display: inline-block;
      width: 50px;
      height: 50px;
      border: 3px solid #f3f3f3;
      border-top: 3px solid #3498db;
      border-radius: 50%;
      animation: spin 1s linear infinite;
    }

    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  `];

  static properties = {
    loading: { type: Boolean }
  };

  render() {
    if (!this.loading) {
      return html``;
    }
    return html`
      <div class="modal">
        <div class="loading-spinner"></div>
      </div>
    `;
  }
}

customElements.define('r2-loading-modal', R2LoadingModal);
