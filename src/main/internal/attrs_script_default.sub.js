gulp_place("types/script_properties.type.sub.js", "file_once");
/**
 * Default properties for `<script>`
 * Not needed (see [<script>: The Script element - HTML: HyperText Markup Language | MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script)):
 * - `type: "text/javascript"`: by default => reduntant info
 * - `charset: "utf-8"`: deprecated
 * @property {script_properties}
 */
const attrs_script_default= Object.freeze({ async: true, crossOrigin: "anonymous" });