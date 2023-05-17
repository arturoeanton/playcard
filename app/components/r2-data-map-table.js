import { html, css, LitElement } from 'lit';

class R2DataMapTable extends LitElement {
  static properties = {
    data: { type: Object }
  };

  static styles = css`
    table {
      border-collapse: collapse;
      width: 100%;
      color: #fff;
      background-color: #333;
    }

    th, td {
      border: 1px solid #fff;
      padding: 8px;
      text-align: left;
    }

    @media (max-width: 600px) {
      table {
        display: block;
        overflow-x: auto;
      }
      
      th, td {
        display: block;
        width: auto;
      }
    }
  `;

  render() {
    return html`
      <table>
        ${Array.from(this.data.entries()).map(([key, value]) => html`
          <tr>
            <th>${key}</th>
            <td>${value}</td>
          </tr>
        `)}
      </table>
    `;
  }
}

customElements.define('r2-data-map-table', R2DataMapTable);
