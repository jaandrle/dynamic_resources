# dynamic_resources
Yet another lightweight promise-based scripts/stylesheets loader (no support for IE).

## Vanilla JavaScript
Use `import`:
```JavaScript
import("module_path")
.then(successFunction)
.catch(errorFunction);
```
Or `<script>`:
```JavaScript
const _import= src=> new Promise(function(onload,onerror){
    return document.body.appendChild(Object.assign(
        document.createElement("script"),
        { src, onload, onerror }
    ));
});
_import("script url")
.then(successFunction)
.catch(errorFunction);
```