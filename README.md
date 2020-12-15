# dynamic_resources
Yet another lightweight promise-based scripts/stylesheets loader (no support for IE).

This library provide `Promise` way of loading resources such as *JavaScripts* and *CSSs*.

## Content
- [Vanilla JavaScript](#Vanilla-JavaScript)
- [Another libraries](#Another-libraries)
- [This library](#This-library)
- [Usage](#Usage)
- [Documentation and examples](#Documentation-and-examples)

Firstly, it is possible you don’t need special library…

## Vanilla JavaScript
For loading scripts, you can use [Dynamic Imports | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import#Dynamic_Imports) – use `import`:
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

## Another libraries
For more sofistikated usage, you can use librares:
- [MiguelCastillo/load-js: Promise based script loader for the browser using script tags](https://github.com/MiguelCastillo/load-js)
- [codeKonami/load-external-scripts: dynamically load external scripts, and report when is completed (Promise)](https://github.com/codeKonami/load-external-scripts)
- [wanghongrui/loadScript: Load JS or CSS with Promise](https://github.com/wanghongrui/loadScript)
- [stormid/storm-load: Lightweight promise-based script loader](https://github.com/stormid/storm-load)
- [tomek-f/simple-load-script: Very simple promise based script loader and JSONP](https://github.com/tomek-f/simple-load-script)

## This library
Benefit of this library is providing more functionalities than [Vanilla JavaScript](#Vanilla-JavaScript) and is focused on post-IE browsers (ligter/cleaner than [Another librares](#Another-libraries)).

Also, there is no internal implementation for bacth import, because you can use `Promise.all`/`Promise.race`/etc.

For now(?), there is no support for detecting of duplications – you can implement the right for your needs (eg. using hhml id).

There are 3 different kind of this library (in folder [./bin](./bin)) such as [JavaScript modules | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules) version.

## Usage
NOTE: The **'_'** is my convetnion for function returning `Promise`.

```JavaScript
import { script_ } from "./bin/dynamic_resources-module.min";
// just simple example
script_("path")
.then(/* onsuccess */)
.catch(/* onerror */);
// or more komplex
if(!document.querySelectorAll("[data-remote=true]").length){
    Promise.all([ "path1", "path2" ].map(path=> script_(path, { dataset: { remote: true } })))
    .then(/* onsuccess */)
    .catch(event=> void(event.target.dataset.remote= false));
    /* probably better logic needed (eg. something like "try again") */
}
```

## Documentation and examples
- [Documentation](./docs/dynamic_resources-namespace.md): [css_](./docs/dynamic_resources-namespace.md#dynamic_resources.css_), [script_](./docs/dynamic_resources-namespace.md#dynamic_resources.script_)
- [Examples](https://jaandrle.github.io/dynamic_resources/examples.html)