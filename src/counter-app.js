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
   super();
   this.counter = 16;
   this.min = 10;
   this.max = 25;
  }



  static get styles() {
    return css`
    :host([counter="18"]) .hello {
      color: pink;
    }
    /* :host {
      --text-color: pink;
    } */
    .hello {
      color: red;
    }


      
    `
  }

  increase(){
    this.counter++;
  }

  decrease(){
    this.counter--;
  }

  render() {
    return html`
    <style>
    /* :host([counter="${this.min}"]) h3{
      color: pink;
    } */
    /* :host {
      --text-color: ${this.counter === 18 ? 'black' : 'pink'}
    } */
      </style>
   <div class= "card">
    <h3 class = "hello">${this.counter}</h3>
      <button class= "max" @click="${this.increase}" ?disabled="${this.max === this.counter}">+</button>
      <button class= "min" @click="${this.decrease}" ?disabled="${this.min === this.counter}">-</button>
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

globalThis.customElements.define(Counter.tag, Counter);
