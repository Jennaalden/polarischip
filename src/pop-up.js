import { LitElement, html, css } from 'lit';

export class popup extends LitElement {

static get tag() {
    return 'pop-up';
}


constructor() {
    super();
    this.message = "This is an alert message.";
    this.sticky = false;
    this.opened = true;
    if(localStorage.getItem("pop-up-opened") === 'false'){
        this.opened = false;
    }


    this.date = '';
    this.issueLevel = "";
}

static get styles() {
    return css`
    :host {
        font-size: 15px;
        width: 100%;
        height: 200px;
    }

    body{
        height: 200px;
        width: 100%;
    }

    .sticky {
        position: sticky;
        top: 0;
        z-index: 100;
    }

    .alert-message {
        font-size: 20px;
        transition: opacity 0.3s ease-in-out;
        padding: 15px;
        margin: 15px;
        display: block;
        box-shadow: 0 0 15px 5px #ccc;
        
    }


    .message {
        font-size: 20px;
        color: black;
    }

    .closed-button-toggle {
        display: flex;
        font-weight: bold;
        align-items: center;
        font-size: 30px;
        padding: 30px;
    }
    `; }

    toggleAlert() {
        this.opened = !this.opened;
        localStorage.setItem("pop-up-opened", this.opened);
    }

    openedView(color) {
        return html `
        <div class="alert-message ${(this.sticky) ? "sticky" : ""}" style="background-color:${color}">
        <p class="message">${this.message}</p>
        <p class="date">${this.date}</p>
        <button @click="${this.toggleAlert}">Close</button></div>
    </div>
        `; }

    closedView() {
        return html `
            <div class="closedContainer ${(this.sticky) ? "sticky" : ""}">
             <div class="closed-button" @click="${this.alertClosed}">
             <button @click="${this.toggleAlert}">Open</button>
            <div>This is closed</div>
    `; }

            render() {
                let color = "white";
                if(this.issueLevel === "notice") color = "green";
                if(this.issueLevel === "Warning") color = "yellow";
                if(this.issueLevel === "Alert") color = "red";
                if(this.issueLevel === "Welcome") color = "blue";

                if(this.issueLevel === "notice") (this.message) = "Just so your aware look out for this today:)";
                if(this.issueLevel === "Welcome") (this.message) = "Welcome to this page!";
                if(this.issueLevel === "Warning") (this.message) = "Warning proceede with caution!";
                if(this.issueLevel === "Alert") (this.message) = "This is an ALERT! This is an EMERGENCY!";
                return (this.opened) ? this.openedView(color) : this.closedView();
            }

            static get properties() {
                return {
                    issueLevel: {type: String},
                    message: {type: String},
                    sticky: {type: Boolean},
                    opened: {type: Boolean, reflect: true},
                };
            }

            toggle() {
                this.opened = !this.opened;
                if (!this.opened) {
                    localStorage.setItem('alertClosed', 'true');
                }
                else{
                    localStorage.removeItem('alertClosed');
                }
                const oppButton = this.shadowRoot.querySelector('.btn'); {
                    oppButton.focus();
                }
            }








} 
globalThis.customElements.define(popup.tag, popup);