import { LitElement, html } from 'lit';
import { property } from 'lit/decorators.js';

export class ProductCounter extends LitElement {
    //@property({ type: Number }) itemCount = 0;
  
  static get properties() { return {
    itemCount: { type: Number, state: true },
    readNumber: { type: Number, state: true },
    testVar: { type: Number, state: true }
  };}

  constructor() {
    super()

    this.itemCount = 0
    this.readNumber = 0
    this.testVar = 3
  }

  connectedCallback() {
    super.connectedCallback()
    this.fetchData()
    this.readData()

    console.log('connectedCallback')
  }

  async fetchData() {
    try {
        const response = await fetch('https://dummyjson.com/products');
        const data = await response.json();
        this.itemCount = data.total;
        console.log(this.itemCount)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
  }

  readData() {
    try {
      const data = JSON.parse(localStorage.getItem('data')) || [];
      this.readNumber = data.length;
      console.log(`set readNumber to ${data.length}`)
      console.log(`value of readNumber ${this.readNumber}`)
    } catch (error) {
      console.error('Error reading data from localStorage:', error);
    }
  }

  firstUpdated() {
    console.log('firstUpdated')

    //this.testVar = 7
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

  _current(e) {
    //console.log('current')
    const current = this.itemCount
    console.log(`current: ${current}`)
    console.log(`readNumber: ${this.readNumber}`)
  }

  render() {
    console.log('render')
    return html`
      <div>
        <div>
          itemCount ${this.itemCount}
          readNumber ${this.readNumber}
          testVar ${this.testVar}
        </div>
        <button @click="${this._current}">
          Current
        </button>
      </div>
    `;
  }
}

customElements.define('product-counter', ProductCounter);