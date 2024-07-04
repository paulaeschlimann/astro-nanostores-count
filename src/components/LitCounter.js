import { LitElement, html } from 'lit';
import { counterStore } from '../stores/count.js'

export class LitCounter extends LitElement {
  static properties = {
    count: { state: true },
  };

  constructor() {
    super();

    this.count = 0
  }

  firstUpdated() {
    counterStore.subscribe((value) => {
      this.count = value
  })
  }

  _increment(e) {
    counterStore.set(this.count + 1)
  }

  _current(e) {
    const current = counterStore.get()
    console.log(`current: ${current}`)
  }

  render() {
    return html`
      <div>
        <div>
          Count  ${this.count} (Lit)
        </div>
        <button @click="${this._increment}">
          + 1
        </button>
        <button @click="${this._current}">
          Current
        </button>
      </div>
    `;
  }
}

customElements.define('lit-counter', LitCounter);