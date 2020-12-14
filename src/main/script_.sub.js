gulp_place("types/url.type.sub.js", "file_once");
gulp_place("types/script_properties.type.sub.js", "file_once");
gulp_place("./internal/attrs_script_default.sub.js", "file_once");/* global attrs_script_default */
gulp_place("./internal/createEl.sub.js", "file_once");/* global createEl */
/**
 * Creates `<script>` and retunrs Promise.
 * @memberof dynamic_resources
 * @public
 * @param {url} url `src` attribute for `<script>`
 * @param {script_properties} [attrs='null'] Default properties for `<script>` are `src` (based on `url`) and {@link dynamic_resources~attrs_script_default}.
 * @returns {Promise}
 * @.then
 * @.catch {Error}
 */
export function script_(url, attrs= null){
    return new Promise(function(resolve,reject){
        document.body.appendChild(createEl("script", Object.assign( { src: url }, attrs_script_default, attrs ), resolve, reject));
    });
}