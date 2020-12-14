gulp_place("types/nodeName.type.sub.js", "file_once");
gulp_place("types/link_properties.type.sub.js", "file_once");
gulp_place("types/script_properties.type.sub.js", "file_once");
gulp_place("./document_shortcuts.sub.js", "file_once");/* global dCE */
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
    const element= Object.assign(dCE(tag_name), attrs);
    element.onload= onsuccess;
    element.onerror= element.onabort= onerror;
    return element;
}