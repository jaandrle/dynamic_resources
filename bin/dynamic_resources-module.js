/**
 * Eg. 'script', see [Node.nodeName - Web APIs | MDN](https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeName).
 * @typedef {String} nodeName
 */
/**
 * Is a [DOMString](https://developer.mozilla.org/en-US/docs/Web/API/DOMString) representing the URL of an external resource. It reflects the [`src`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script#attr-src) attribute (similary for `href`).
 * @typedef {String} url
 */
/**
 * Is a object representing all [HTMLScriptElement properties](https://developer.mozilla.org/en-US/docs/Web/API/HTMLScriptElement#Properties) except `src`!
 * @typedef {Object} script_properties
 */
/**
 * Is a object representing all [HTMLLinkElement properties](https://developer.mozilla.org/en-US/docs/Web/API/HTMLLinkElement#Properties) except `href`!
 * @typedef {Object} link_properties
 */
const { createElement: ce, body, head }= document;
/**
 * Not needed (see [<script>: The Script element - HTML: HyperText Markup Language | MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script)):
 * - `type: "text/javascript"`: by default => reduntant info
 * - `charset: "utf-8"`: deprecated
 */
const attrs_script_default= Object.freeze({ async: true, crossOrigin: "anonymous" });
const attrs_link_default= Object.freeze({ rel: "stylesheet", type: "text/css" });
/**
 * Creates element (eg. `<script>`).
 * @param {nodeName} tag_name Typically 'script'/'link'
 * @param {script_properties|link_properties} attrs Rest of the script attributes.
 * @param {Function} onsuccess Callback when tag successfully loaded.
 * @param {Function} onerror Callback when error/abort.
 * @returns {HTMLScriptElement|HTMLLinkElement}
 */
function create(tag_name, attrs, onsuccess, onerror){
    const element= Object.assign(ce(tag_name), attrs);
    element.onload= onsuccess;
    element.onerror= element.onabort= onerror;
    return element;
}
/**
 * Creates `<script>` and retunrs Promise.
 * @param {url} url `src` attribute for `<script>`
 * @param {script_properties} attrs 
 * @returns {Promise}
 * @.then
 * @.catch {Error}
 */
export function script(url, attrs= attrs_script_default){
    return new Promise(function(resolve,reject){
        attrs.src= url;
        body.appendChild(create("script", attrs, resolve, reject));
    });
}
/**
 * Creates `<link>` (for loading **CSS** stylesheet) and retunrs Promise.
 * @param {url} url `href` attribute for `<link>`
 * @param {link_properties} attrs 
 * @returns {Promise}
 * @.then
 * @.catch {Error}
 */
export function css(url, attrs= attrs_link_default){
    return new Promise(function(resolve,reject){
        attrs.href= url;
        head.appendChild(create("link", attrs, resolve, reject));
    });
}