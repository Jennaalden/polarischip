import { LitElement, html, css } from 'lit';

export class popup extends LitElement {

static get tag() {
    return 'alert-message';
}


constructor() {
    super();
    this.message = "This is an alert message.";
    this.sticky = false;
    this.opened = true;
    this.date = '';
    this.issueLevel = "";
}

static get styles() {
    return css`
    :host {
        font-size: 15px;
        width: 100%;
    }

    .sticky {
        position: sticky;
        top: 0;
        z-index: 100;
    }

    .alert-message {
        font-size: 20px;
        padding: 15px;
        margin: 15px;
        display: block;
    }

    .message {
        font-size: 20px;
        color: red;
    }

    .closed-button-toggle {
        display: flex;
        align-items: center;
        background-color: green;
        font-size: 20px;
        padding: 30px;
    }
    `; }

    toggleAlert() {
        this.opened = !this.opened;
    }

    openedView(color) {
        return html `
        <div class="alert-message ${(this.sticky) ? "sticky" : ""}" style="background-color:${color}">
        <p class="message">${this.message}</p>
        <p class="date">${this.date}</p>
        <button @click="${this.toggleAlert}">Close</button>

    </div>
        `; }

        closedView() {
            return html `
            <!-- <div class="closed-button-toggle" @click="${this.toggleAlert}> -->
            <div>This is closed</div>
    
            `; }








} 
globalThis.customElements.define(popup.tag, popup);