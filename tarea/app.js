class Tarea {
  constructor(descripcion, hora) {
    this.descripcion = descripcion;
    this.hora = hora;
  }
}

const productos = [];

const inputTarea = document.querySelector("#tarea");
const inputHora = document.querySelector("#hora");
const btnAgregar = document.querySelector("#btnAgregar");
const lista = document.querySelector("#tareas");

const formulario = document.querySelector("#formTarea");

formulario.addEventListener("submit", (event) => {

  event.preventDefault();
  const nuevaTarea = new Tarea(inputTarea.value, inputHora.value);
  productos[productos.length] = nuevaTarea;

  const li = document.createElement("li");
  li.textContent = nuevaTarea.descripcion + " - " + nuevaTarea.hora + " horas ";
  const btnBorrar = document.createElement("button");
  btnBorrar.textContent = "Borrar";
  btnBorrar.addEventListener("click", () => {
    li.remove();
  });   
  li.appendChild(btnBorrar);
  lista.appendChild(li);
});