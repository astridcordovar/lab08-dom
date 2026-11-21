# Tarea: Mi componente interactivo
 
## Componente elegido

Para el desarrollo de la tarea elegí un formulario para agregar tareas y la duración en cantidad de horas.
 
## Codigo principal
```js
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
```
 
## Pruebas realizadas
| Accion | Resultado esperado | Cumple (Si/No) |
|--------|--------------------|----------------|
|Ingresar una tarea y sus horas|Se registran los datos ingresados|Si|
|Presionar el botón Agregar|La tarea aparece en la lista con su descripción y duración|Si|
|Presionar el botón Borrar|La tarea desaparece de la lista.|Si|
 
## Por que disene asi mi clase
De acuerdo a las indicaciones la clase debía tener dos atributos, en este caso use la descripción y horas para indicar la tarea y cuanto tiempo ocupará. Además cada tarea puede ser eliminada.
