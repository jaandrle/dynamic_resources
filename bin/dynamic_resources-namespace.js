/**
 * @namespace dynamic_resources
 */
const dynamic_resources= (function dynamic_resources_iief(){
    "use strict";
    /**
     * Is a [DOMString](https://developer.mozilla.org/en-US/docs/Web/API/DOMString) representing the URL of an external resource.
     * It reflects the [`src`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script#attr-src) attribute (similary for `href`).
     * @typedef url
     * @type {string}
     * @global
     */
    /**
     * Is a object representing all [HTMLLinkElement properties](https://developer.mozilla.org/en-US/docs/Web/API/HTMLLinkElement#Properties)!
     * @typedef link_properties
     * @type {object}
     * @global
     */

    /**
     * @type {link_properties}
     * @param {string} rel "stylesheet"
     * @param {string} type "text/css"
     * @memberof dynamic_resources
     * @inner
     */
    const attrs_link_default= Object.freeze({ rel: "stylesheet", type: "text/css" });
    /**
     * This slighlty extended version of `Object.assign` (eg. proper assign of `dataset`).
     * @memberof dynamic_resources
     * @inner
     * @param {HTMLElement} target JS represantion of element (in this library typically `<script>`).
     * @param {link_properties|script_properties} source
     */
    function domAssign(target, source){
        const keys= Object.keys(source);
        for(let i=0, key;( key= keys[i] ); i++){
            if(key!=="dataset"){
                target[key]= source[key];
            } else {
                Object.assign(target[key], source[key]);
            }
        }
        return target;
    }
    /**
     * Eg. 'script', see [Node.nodeName - Web APIs | MDN](https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeName).
     * @typedef nodeName
     * @type {string}
     * @global
     */

    /**
     * Is a object representing all [HTMLScriptElement properties](https://developer.mozilla.org/en-US/docs/Web/API/HTMLScriptElement#Properties)!
     * @typedef script_properties
     * @type {object}
     * @global
     */
    /**
     * Creates element (eg. `<script>`).
     * @memberof dynamic_resources
     * @inner
     * @param {nodeName} tag_name Typically 'script'/'link'
     * @param {script_properties|link_properties} attrs Rest of the script attributes.
     * @param {function} onsuccess Callback when tag successfully loaded.
     * @param {function} onerror Callback when error/abort.
     * @returns {HTMLScriptElement|HTMLLinkElement}
     */
    function createEl(tag_name, attrs, onsuccess, onerror){
        const element= domAssign(document.createElement(tag_name), attrs);
        element.onload= onsuccess;
        element.onerror= element.onabort= onerror;
        return element;
    }
    /**
     * Creates `<link>` (for loading **CSS** stylesheet) and retunrs Promise.
     * @memberof dynamic_resources
     * @public
     * @param {url} url `href` attribute for `<link>`
     * @param {link_properties|null} [attrs=`null`] Default `<link>` properties are `href` (based on `url`) and {@link dynamic_resources~attrs_link_default}.
     * @returns {Promise}
     * @.then {Event} The `load` event.
     * @.catch {Error}
     */
    function css_(url, attrs= null){
        return new Promise(function(resolve,reject){
            document.head.appendChild(createEl("link", Object.assign( { href: url }, attrs_link_default, attrs ), resolve, reject));
        });
    }



    /**
     * Default properties for `<script>`
     * Not needed (see [\<script\>: The Script element - HTML: HyperText Markup Language | MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script)):
     * - `type: "text/javascript"`: by default => reduntant info
     * - `charset: "utf-8"`: deprecated
     * @type {script_properties}
     * @param {boolean} async true
     * @param {string} crossOrigin "anonymous"
     * @memberof dynamic_resources
     * @inner
     */
    const attrs_script_default= Object.freeze({ async: true, crossOrigin: "anonymous" });

    /**
     * Creates `<script>` and retunrs Promise.
     * @memberof dynamic_resources
     * @public
     * @param {url} url `src` attribute for `<script>`
     * @param {script_properties|null} [attrs=`null`] Default properties for `<script>` are `src` (based on `url`) and {@link dynamic_resources~attrs_script_default}.
     * @returns {Promise}
     * @.then {Event} The `load` event.
     * @.catch {Error}
     */
    function script_(url, attrs= null){
        return new Promise(function(resolve,reject){
            document.body.appendChild(createEl("script", Object.assign( { src: url }, attrs_script_default, attrs ), resolve, reject));
        });
    }
    return { css_, script_ };
})();