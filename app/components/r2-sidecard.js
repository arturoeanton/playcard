import { html, css, LitElement } from 'lit';

class R2Sidecard extends LitElement {
  static styles = [css`
    /* Estilos para el sidecard usando lit-element */
    .sidecard {
      position: fixed;
      top: 0;
      left: 0; /* Inicialmente oculto fuera de la pantalla */
      width: 200px;
      height: 100vh;
      background-color: #333;
      color: #fff;
      padding: 20px;
      transition: left 0.3s ease-in-out;
    }

    /* Estilos para la versión responsive */
    @media (max-width: 768px) {
      .sidecard {
        left: -190px; /* Oculto fuera de la pantalla en resoluciones pequeñas */
      }
    }
  `];

  render() {
    return html`
      <div class="sidecard">
            <slot></slot>
      </div>
    `;
  }
}

customElements.define('r2-sidecard', R2Sidecard);