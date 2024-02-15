import { LitElement, html, css } from 'lit';

/**
 * Now it's your turn. Here's what we need to try and do
 * 1. 
 */

export class MyCard extends LitElement {

  static get tag() {
    return 'my-card';
  }

  constructor() {
    super();
    this.title = "My card";
    this.image = "Image";
    this.text = "Paragraph";
    this.link = "Link";
    this.borderColor = "borderColor";
    this.btnColor = "#808080";
    this.fancy = false;
    this.description = '';
  }

  static get styles() {
    return css`
    :host {
      display: inline-flex;
      border: 1px solid black;
      margin: 20px;
      padding: 20px;
    }
  
    :host([fancy]) {
      display: block;
        background-color: pink;
        border: 2px solid fuchsia;
        box-shadow: 10px 5px 5px red;
      }
      

      body {
        margin: 0;
        padding: 0;
        align-items: center;
        background-image: linear-gradient(blue, hotpink);
        height: 300px;
      }
      .card {
        width: 300%;
      }
    }
      
      .pic1 {
        width: 100%;
        border-radius: 10px 10px 10px 10px;
      }

      .card img {
        height: 200px;
        width: 100%;
      }
      
      
      h3 {
        color: purple;
        text-shadow: 2px 2px 5px black;
        text-align: left;
        font-family: sans-serif;
      }
      
      p {
        color: white;
        text-align: left;
        font-size: 18px;
        font-family:Courier New;
      }
      
      
      #mycard {
        display: flex;
       
      }
      
      
      .bdaycard {
        display: inline-flex;
        max-width: 400px;
        border: 3px solid black;
        border-radius: 10px;
        padding: 8px;
        margin: 8px;
        background-color: var(--button-color, #808080);
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
      }
      
      
      .card-title {
        background-color: lightblue;
        text-align: center;
        margin-top: 10px;
        padding: 8px 8px 10px;
        margin: 0 -1px;
      }
      
      
      .card-text {
        width: 200px;
        padding: 0 8px 8px 8px;
        background-color: hotpink;
        margin: 0 0 0 8px;
      }
      
      
      .change-color {
        background-color: yellow;
      }
      
      
      @media screen and (max-width: 800px) and (min-width: 500px) {
        .button {
          visibility: visible;
        }
      }
      
      @media screen and (max-width: 500px) {
      }   
      
    `;
  }

  render() {
    return html`
    <div id="mycard" class="bdaycard">
    <section class="card" style="--border-color: ${this.borderColor};">
    <img src="${this.image}" alt=${this.title}" class="pic1">
    <div class="p">
    <h3 class="card-title">${this.title}</h3>
    <details ?open="${this.fancy}">
    <summary>Description</summary>
    <p class="card-text">${this.text}</p>
    <a href="${this.link}"><button class="btn" style="background-color: ${this.btnColor}">Details</button></a>

      <slot>$(this.description)</slot>
  
    </div>
    </section>
    
    </div>`;
  }

  static get properties() {
    return {
      fancy: { type: Boolean, reflect: true },
      title: { type: String },
      description: { type: String},
      image: { type: String },
      text: { type: String },
      link: { type: String },
      borderColor: { type: String },
      btnColor: { type: String },
    };
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);
