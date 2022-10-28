export default class Formulario{
    constructor(id = '', accion = '', metodo = '', css = '') {
        this.id = id;
        this.accion = accion;
        this.metodo = metodo;
        this.css = css;
    }

    render() {
        `<form 
        ${this.id ? 'id="' + this.id + '"' : ''}
        ${this.accion ? 'accion="' + this.id + '"' : ''}
        ${this.metodo ? 'metodo="' + this.id + '"' : ''}
        class = ${this.css}
        ></form>`
    }   
}