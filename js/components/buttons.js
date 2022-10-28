export default class Button {
    constructor(texto, css_class) {
        this.texto = texto;
        this.css_class = css_class;
    }
    render() {
        let myHTML = `<div></div><button type="button" class=${this.css_class}>${this.texto}</button></div>`;
        return myHTML;
    }
}