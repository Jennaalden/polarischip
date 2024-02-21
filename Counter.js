import { LitElement, html, css } from 'lit';

/**
 * Now it's your turn. Here's what we need to try and do
 * 1. 
 */

export class Counter extends LitElement {

  static get tag() {
    return 'counter-app';
  }

  constructor() {
   this.counter = 16;
   this.min = 10;
   this.max = 25;
  }

  static get styles() {
    return css`
      
      
    `;
  }

  render() {
    return html`
   <div class= "card">
    <h3 class = "p">${this.counter}</h3>
      <button class= "max">+</button>
      <button class= "min">-</button>
  </div>
  
    `
  }

  static get properties() {
    return {
      counter: { type: Number },
      min: { type: Number },
      max: { type: Number }

    };
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);
