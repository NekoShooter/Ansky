/**
 * Aplica estilos **CSS** a un elemento **HTML** o a un *Array de elementos* HTML.
 * @param {HTMLElement|HTMLElement[]} objHTML - El elemento `HTML o un Array de elementos HTML` al que se aplicarán los estilos.
 * @param {string} css - Una cadena de texto que contiene los estilos en la sintaxis clasica de **`CSS`**.
 */

export default function ansky(objHTML,css){
    const esArray = objHTML instanceof Array;
    if(!(objHTML instanceof HTMLElement || esArray) || typeof(css) != 'string' || css == '')
        return;

    const lista = css.split(';');
    for(const e of lista){
        const elementos = e.split(':');
        const PARAMETRO = reParametrizar(elementos[0].trim());
        if(elementos.length != 2 || !PARAMETRO) continue;
        
        const VALOR = elementos[1].trim();

        if(esArray){
            for(const elemento of objHTML){
                if(elemento instanceof HTMLElement)
                    elemento.style[PARAMETRO]= VALOR;}}
        else objHTML.style[PARAMETRO] = VALOR;}}

function reParametrizar(str){
    if(/^-{}\//.test(str)) return undefined;

    const parametro = str.split('-');

    if(parametro.length == 1) return parametro[0];
    for(let i = 1; i < parametro.length; ++i){
        parametro[i] = parametro[i][0].toUpperCase() + parametro[i].slice(1);}

    return parametro.join('');}