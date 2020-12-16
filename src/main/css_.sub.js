gulp_place("types/url.type.sub.js", "file_once");
gulp_place("types/link_properties.type.sub.js", "file_once");
gulp_place("./internal/attrs_link_default.sub.js", "file_once");/* global attrs_link_default */
gulp_place("./internal/createEl.sub.js", "file_once");/* global createEl */
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
export function css_(url, attrs= null){
    return new Promise(function(resolve,reject){
        document.head.appendChild(createEl("link", Object.assign( { href: url }, attrs_link_default, attrs ), resolve, reject));
    });
}