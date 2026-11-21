# Bitacora de JavaScript interactivo
 
Laboratorio 08: JavaScript Interactivo - DOM, Eventos y Objetos.
Navegador usado: (escribe aqui cual usaste)
 
## Ejercicio 2: Seleccionar y modificar el DOM

| Instruccion | Que cambio en la pantalla | Se mantiene al recargar (Si/No) |
|-------------|---------------------------|---------------------------------|
| textContent desde app.js | El contenido del título cambió |  Si |
| style.color | El color del título | Si |

 
## Ejercicio 3: Evento click

| Tipo de evento | Que accion lo dispara | Cuanto suma por accion |
|----------------|-----------------------|------------------------|
| click | Un click | +1 |
| dblclick | Doble click | +1 |
| mouseover | Al pasar el mouse | +1 |

- **evento.type** Muestra el la consola el tipo de evento (click, dblclick, mouseover)
- **evento.target** Muestra en la consola el elemento que recibe el evento (button)

 
## Ejercicio 4: Eventos input y submit
 
| Prueba | Que paso en la pantalla | Se recargo la pagina (Si/No) |
|--------|-------------------------|------------------------------|
| Escribir en el campo nombre | Se muestra letra por letra | Si |
| Enviar sin preventDefault | Muestra enviado | Si |
| Enviar con preventDefault, correo sin @ | Mensaje de correo incorrecto | No |
| Enviar con preventDefault, correo con @ | Muestra el correo enviado | No |

## Ejercicio 5: Clases y objetos

| Objeto | nombre | precio | conDescuento(0.25) |
|--------|--------|--------|--------------------|
| laptop | Laptop | 2500.00 | 1875.00 |
| mouse | Mouse | 45.00 | 33.75 |
| teclado | Teclado | 120.00 | 90.00 |

Podemos usar la clase para crear diferentes productos y podemos agregar nuevos productos de una forma más rápida.
