export default class Input {
  constructor(
    nombre,
      tipo,
      placeholder = ''
  ) {
    this.nombre = nombre;
      this.tipo = tipo;
      this.placeholder = placeholder;
  }

  verificarInput() {}

  render() {
      let newInput = `
        <div class="form-floating mb-3">
            <input type=${this.tipo} class="form-control form-control-sm" id="floatingInput" placeholder=${'this.placeholder'}>
            <label for="floatingInput">${this.nombre}</label>
        </div>`
      
      return newInput;
  }
}
