import { LitElement, html } from 'lit';
import { setCount, getCount } from '../stores/counter.js'

export class LitCounter extends LitElement {
  static get properties() { return {
    count: { type: Number },
  };}

  /*static get observedAttributes() {
    return ['count']
  }*/

  constructor() {
    super()

    this.count = 0
  }

  connectedCallback() {
    super.connectedCallback()

    console.log('connectedCallback')

    console.log(window.localStorage.getItem('count'))
    //this.count = getCount()
    console.log(getCount())

    //this.count = window.localStorage.getItem('count')
    //this.count = Math.floor(Math.random() * 10)

    this.count = 4
  }

  attributeChangedCallback(name, oldval, newval) {
    console.log('attribute change: ', name, newval);
    super.attributeChangedCallback(name, oldval, newval);
  }

  updated(changedProperties) {
    changedProperties.forEach((oldValue, propName) => {
      console.log(`${propName} changed. oldValue: ${oldValue}`);

      if (propName === 'count') {
        console.log('updated this.count')
        this.count = this[propName]
      }
    });
  }

  update(change, second, third) {
    super.update(change);
    console.log(change)
    //console.log(this[propName])
    change.forEach((oldValue, propName) => {
      console.log(`${propName} changed. oldValue: ${oldValue}`);
      console.log(`new value: ${this[propName]}`)

      if (propName === 'count') {
        console.log('set this.count')
        this.count = this[propName]
      }
    });
  }

  _increment(e) {
    console.log('increment')
    //counterStore.set(counterStore.get() + 1)
  }

  _current(e) {
    //console.log('current')
    const current = this.count
    console.log(`current: ${current}`)
  }

  _random(e) {
    const random = Math.floor(Math.random() * 10)
    console.log(`set random ${random}`)
    this.count = random
    //setCount(random)
  }

  render() {
    return html`
      <div>
        <div>
          Count ${this.count} (Lit)
        </div>
        <button @click="${this._increment}">
          + 1
        </button>
        <button @click="${this._current}">
          Current
        </button>
        <button @click="${this._random}">
          Random
        </button>
      </div>
    `;
  }
}

customElements.define('lit-counter', LitCounter);