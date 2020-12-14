# dynamic_resources – Documentation
[⇠ Go back to GitHub repository](https://github.com/jaandrle/dynamic_resources#readme)
<hr>
<p>Overview</p>
<hr>

## Objects

<dl>
<dt><a href="#dynamic_resources">dynamic_resources</a> : <code>object</code></dt>
<dd></dd>
</dl>

## Typedefs

<dl>
<dt><a href="#url">url</a> : <code>String</code></dt>
<dd><p>Is a <a href="https://developer.mozilla.org/en-US/docs/Web/API/DOMString">DOMString</a> representing the URL of an external resource.
It reflects the <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script#attr-src"><code>src</code></a> attribute (similary for <code>href</code>).</p>
</dd>
<dt><a href="#link_properties">link_properties</a> : <code>Object</code></dt>
<dd><p>Is a object representing all <a href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLLinkElement#Properties">HTMLLinkElement properties</a>!</p>
</dd>
<dt><a href="#nodeName">nodeName</a> : <code>String</code></dt>
<dd><p>Eg. &#39;script&#39;, see <a href="https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeName">Node.nodeName - Web APIs | MDN</a>.</p>
</dd>
<dt><a href="#script_properties">script_properties</a> : <code>Object</code></dt>
<dd><p>Is a object representing all <a href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLScriptElement#Properties">HTMLScriptElement properties</a>!</p>
</dd>
</dl>

<hr>
<p>Content</p>
<hr>

<a name="dynamic_resources"></a>

## dynamic\_resources : <code>object</code>
**Kind**: global namespace <a name="dynamic_resources" href="https://github.com/jaandrle/dynamic_resources/blob/master/bin/dynamic_resources-namespace.js#L1" title="dynamic_resources-namespace.js:1"><small>(defined@1)</small></a>  

* [dynamic_resources](#dynamic_resources) : <code>object</code>
    * _static_
        * [.css_(url, [attrs])](#dynamic_resources.css_) ⇒ <code>Promise</code>
        * [.script_(url, [attrs])](#dynamic_resources.script_) ⇒ <code>Promise</code>
    * _inner_
        * [~attrs_link_default](#dynamic_resources..attrs_link_default)
        * [~attrs_script_default](#dynamic_resources..attrs_script_default)
        * [~createEl(tag_name, attrs, onsuccess, onerror)](#dynamic_resources..createEl) ⇒ <code>HTMLScriptElement</code> \| <code>HTMLLinkElement</code>


* * *

<a name="dynamic_resources.css_"></a>

### dynamic_resources.css\_(url, [attrs]) ⇒ <code>Promise</code>
>Creates `<link>` (for loading **CSS** stylesheet) and retunrs Promise.

**Kind**: static method of [<code>dynamic\_resources</code>](#dynamic_resources) <a name="dynamic_resources.css_" href="https://github.com/jaandrle/dynamic_resources/blob/master/bin/dynamic_resources-namespace.js#L65" title="dynamic_resources-namespace.js:65"><small>(defined@65)</small></a>  
**Access**: public  
**.then**:   
**.catch**: <code>Error</code>  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| url | [<code>url</code>](#url) |  | `href` attribute for `<link>` |
| [attrs] | [<code>link\_properties</code>](#link_properties) | <code>&#x27;null&#x27;</code> | Default `<link>` properties are `href` (based on `url`) and [attrs_link_default](#dynamic_resources..attrs_link_default). |


* * *

<a name="dynamic_resources.script_"></a>

### dynamic_resources.script\_(url, [attrs]) ⇒ <code>Promise</code>
>Creates `<script>` and retunrs Promise.

**Kind**: static method of [<code>dynamic\_resources</code>](#dynamic_resources) <a name="dynamic_resources.script_" href="https://github.com/jaandrle/dynamic_resources/blob/master/bin/dynamic_resources-namespace.js#L97" title="dynamic_resources-namespace.js:97"><small>(defined@97)</small></a>  
**Access**: public  
**.then**:   
**.catch**: <code>Error</code>  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| url | [<code>url</code>](#url) |  | `src` attribute for `<script>` |
| [attrs] | [<code>script\_properties</code>](#script_properties) | <code>&#x27;null&#x27;</code> | Default properties for `<script>` are `src` (based on `url`) and [attrs_script_default](#dynamic_resources..attrs_script_default). |


* * *

<a name="dynamic_resources..attrs_link_default"></a>

### dynamic_resources~attrs\_link\_default
**Kind**: inner constant of [<code>dynamic\_resources</code>](#dynamic_resources) <a name="dynamic_resources..attrs_link_default" href="https://github.com/jaandrle/dynamic_resources/blob/master/bin/dynamic_resources-namespace.js#L26" title="dynamic_resources-namespace.js:26"><small>(defined@26)</small></a>  

| Param | Type | Description |
| --- | --- | --- |
| rel | <code>string</code> | "stylesheet" |
| type | <code>string</code> | "text/css" |

**Properties**

| Type |
| --- |
| [<code>link\_properties</code>](#link_properties) | 


* * *

<a name="dynamic_resources..attrs_script_default"></a>

### dynamic_resources~attrs\_script\_default
>Default properties for `<script>`
Not needed (see [\<script\>: The Script element - HTML: HyperText Markup Language | MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script)):
- `type: "text/javascript"`: by default => reduntant info
- `charset: "utf-8"`: deprecated

**Kind**: inner constant of [<code>dynamic\_resources</code>](#dynamic_resources) <a name="dynamic_resources..attrs_script_default" href="https://github.com/jaandrle/dynamic_resources/blob/master/bin/dynamic_resources-namespace.js#L85" title="dynamic_resources-namespace.js:85"><small>(defined@85)</small></a>  

| Param | Type | Description |
| --- | --- | --- |
| async | <code>boolean</code> | true |
| crossOrigin | <code>string</code> | "anonymous" |

**Properties**

| Type |
| --- |
| [<code>script\_properties</code>](#script_properties) | 


* * *

<a name="dynamic_resources..createEl"></a>

### dynamic_resources~createEl(tag_name, attrs, onsuccess, onerror) ⇒ <code>HTMLScriptElement</code> \| <code>HTMLLinkElement</code>
>Creates element (eg. `<script>`).

**Kind**: inner method of [<code>dynamic\_resources</code>](#dynamic_resources) <a name="dynamic_resources..createEl" href="https://github.com/jaandrle/dynamic_resources/blob/master/bin/dynamic_resources-namespace.js#L49" title="dynamic_resources-namespace.js:49"><small>(defined@49)</small></a>  

| Param | Type | Description |
| --- | --- | --- |
| tag_name | [<code>nodeName</code>](#nodeName) | Typically 'script'/'link' |
| attrs | [<code>script\_properties</code>](#script_properties) \| [<code>link\_properties</code>](#link_properties) | Rest of the script attributes. |
| onsuccess | <code>function</code> | Callback when tag successfully loaded. |
| onerror | <code>function</code> | Callback when error/abort. |


* * *

<a name="url"></a>

## url : <code>String</code>
>Is a [DOMString](https://developer.mozilla.org/en-US/docs/Web/API/DOMString) representing the URL of an external resource.
It reflects the [`src`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script#attr-src) attribute (similary for `href`).

**Kind**: global typedef <a name="url" href="https://github.com/jaandrle/dynamic_resources/blob/master/bin/dynamic_resources-namespace.js#L7" title="dynamic_resources-namespace.js:7"><small>(defined@7)</small></a>  

* * *

<a name="link_properties"></a>

## link\_properties : <code>Object</code>
>Is a object representing all [HTMLLinkElement properties](https://developer.mozilla.org/en-US/docs/Web/API/HTMLLinkElement#Properties)!

**Kind**: global typedef <a name="link_properties" href="https://github.com/jaandrle/dynamic_resources/blob/master/bin/dynamic_resources-namespace.js#L13" title="dynamic_resources-namespace.js:13"><small>(defined@13)</small></a>  

* * *

<a name="nodeName"></a>

## nodeName : <code>String</code>
>Eg. 'script', see [Node.nodeName - Web APIs | MDN](https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeName).

**Kind**: global typedef <a name="nodeName" href="https://github.com/jaandrle/dynamic_resources/blob/master/bin/dynamic_resources-namespace.js#L27" title="dynamic_resources-namespace.js:27"><small>(defined@27)</small></a>  

* * *

<a name="script_properties"></a>

## script\_properties : <code>Object</code>
>Is a object representing all [HTMLScriptElement properties](https://developer.mozilla.org/en-US/docs/Web/API/HTMLScriptElement#Properties)!

**Kind**: global typedef <a name="script_properties" href="https://github.com/jaandrle/dynamic_resources/blob/master/bin/dynamic_resources-namespace.js#L33" title="dynamic_resources-namespace.js:33"><small>(defined@33)</small></a>  

* * *

