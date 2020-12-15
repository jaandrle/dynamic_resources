/**
 * @namespace dynamic_resources
 */
const dynamic_resources= (function dynamic_resources_iief(){
    "use strict";
    /**
     * Is a [DOMString](https://developer.mozilla.org/en-US/docs/Web/API/DOMString) representing the URL of an external resource.
     * It reflects the [`src`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script#attr-src) attribute (similary for `href`).
     * @typedef {String} url
     * @global
     */
    /**
     * Is a object representing all [HTMLLinkElement properties](https://developer.mozilla.org/en-US/docs/Web/API/HTMLLinkElement#Properties)!
     * @typedef {Object} link_properties
     * @global
     */

    /**
     * @property {link_properties}
     * @param {string} rel "stylesheet"
     * @param {string} type "text/css"
     * @memberof dynamic_resources
     * @inner
     */
    const attrs_link_default= Object.freeze({ rel: "stylesheet", type: "text/css" });
    /**
     * Eg. 'script', see [Node.nodeName - Web APIs | MDN](https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeName).
     * @typedef {String} nodeName
     * @global
     */

    /**
     * Is a object representing all [HTMLScriptElement properties](https://developer.mozilla.org/en-US/docs/Web/API/HTMLScriptElement#Properties)!
     * @typedef {Object} script_properties
     * @global
     */
    /**
     * Creates element (eg. `<script>`).
     * @memberof dynamic_resources
     * @inner
     * @param {nodeName} tag_name Typically 'script'/'link'
     * @param {script_properties|link_properties} attrs Rest of the script attributes.
     * @param {Function} onsuccess Callback when tag successfully loaded.
     * @param {Function} onerror Callback when error/abort.
     * @returns {HTMLScriptElement|HTMLLinkElement}
     */
    function createEl(tag_name, attrs, onsuccess, onerror){
        const element= Object.assign(document.createElement(tag_name), attrs);
        element.onload= onsuccess;
        element.onerror= element.onabort= onerror;
        return element;
    }
    /**
     * Creates `<link>` (for loading **CSS** stylesheet) and retunrs Promise.
     * @memberof dynamic_resources
     * @public
     * @param {url} url `href` attribute for `<link>`
     * @param {link_properties} [attrs='null'] Default `<link>` properties are `href` (based on `url`) and {@link dynamic_resources~attrs_link_default}.
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
     * @property {script_properties}
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
     * @param {script_properties} [attrs='null'] Default properties for `<script>` are `src` (based on `url`) and {@link dynamic_resources~attrs_script_default}.
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