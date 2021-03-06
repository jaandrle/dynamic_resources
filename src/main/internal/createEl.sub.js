gulp_place("./domAssign.sub.js", "file_once");/* global domAssign */
gulp_place("types/nodeName.type.sub.js", "file_once");
gulp_place("types/link_properties.type.sub.js", "file_once");
gulp_place("types/script_properties.type.sub.js", "file_once");
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