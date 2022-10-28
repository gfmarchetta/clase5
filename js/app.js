import Button from "./components/buttons.js";
import Video from "./components/videos.js";
import Input from "./components/inputs.js";
import Formulario from './components/formulario.js';

const myApp = document.getElementById("myApp");

let myButton = new Button("Login", "'btn btn-danger'");
myApp.innerHTML = myButton.render();

let myVideo = new Video("https://www.w3schools.com/tags/movie.mp4", 320, 240, "none")
myApp.innerHTML += myVideo.render();

let myInput = new Input("Nombre", "text", "'Ingrese su nombre'");
myApp.innerHTML += myInput.render();

let nombre = new Input("Nombre", "text", "'Ingrese su nombre'");
let apellido = new Input("Apellido", "text", "'Ingrese su apellido'");
let edad = new Input("Edad", "number", "'Ingrese su edad'");
let myForm = new Formulario("datosPersonales", "", "", "row w-100")

myForm.innerHTML += myForm.render();

let datosPersonales = document.getElementById(myForm.id)
datosPersonales.innerHTML = `
${nombre.render()}
${apellido.render()}
${edad.render()}
`





