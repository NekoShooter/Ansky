<h1 align="center">✨ Ansky ✨</h1>
<p align="center">
<a href="#"><img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExY2FoMWVxcm1sMzVtNzEzbGd4b3hpaWFzZjBrdGJsOGJ1OWd5dmludCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/qU7jYnrVUyeJiz0te9/source.gif" alt="github.gif" border="0"></a>
<p/>
<br/>

``` javascript
import ansky from "ansky"

const div = document.createElement("div");
document.body.appendChild(div);

ansky(div,`
    width:50px; 
    height:50px;
    background-color: blue;
    padding: 5px;
    border: 1px solid red;
`);
```
## Detalles

``` javascript
ansky(objHTML, css);
```
 * **`objHTML`** : El elemento HTML o Array de elementos HTML al que se aplicarán los estilos.
 * **`css`** : Una cadena de texto que contiene los estilos en la sintaxis clásica de _`CSS`_.  
<br/>

## Limpiar Estilos

Si decide usar **`ansky`** para eliminar algunos estilos, puede hacerlo no declarando la propiedad del estilo.  
###### _ejemplo:_
``` javascript
    ansky(div,`
        padding:;
        border:;
    `);
```
> _el punto y coma `;` es importante_

<br/>

 ## Recomendaciones y sugerencias

 + Los estilos propios y exclusivos de los navegadores podrían ser omitidos.
 + Puede construir sus `string` con código CSS usando acentos graves ( \` ) para una lectura más amena.

 + Ansky fue pensada únicamente para el front-end, por lo que debería considerar un empaquetador como `webpack` o extraer Ansky.js y usarla directamente.