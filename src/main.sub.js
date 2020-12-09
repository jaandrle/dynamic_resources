gulp_place("./types.sub.js", "file_once");
const { createElement: dCE, body: dB, head: dH }= document;
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
    const element= Object.assign(dCE(tag_name), attrs);
    element.onload= onsuccess;
    element.onerror= element.onabort= onerror;
    return element;
}
/**
 * Creates `<script>` and retunrs Promise.
 * @param {url} url `src` attribute for `<script>`
 * @param {script_properties} [attrs=attrs_script_default] 
 * @returns {Promise}
 * @.then
 * @.catch {Error}
 */
export function script(url, attrs= attrs_script_default){
    return new Promise(function(resolve,reject){
        attrs.src= url;
        dB.appendChild(create("script", attrs, resolve, reject));
    });
}
/**
 * Creates `<link>` (for loading **CSS** stylesheet) and retunrs Promise.
 * @param {url} url `href` attribute for `<link>`
 * @param {link_properties} [attrs=attrs_link_default] 
 * @returns {Promise}
 * @.then
 * @.catch {Error}
 */
export function css(url, attrs= attrs_link_default){
    return new Promise(function(resolve,reject){
        attrs.href= url;
        dH.appendChild(create("link", attrs, resolve, reject));
    });
}