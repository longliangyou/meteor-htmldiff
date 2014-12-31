# meteor-htmldiff
### HTML Diffing in JavaScript (ok, CoffeeScript actually.). repackaged for Meteor


`htmldiff.js` is a meteor port of https://github.com/tnwinc/htmldiff.js.git

This is diffing that understands HTML. Best suited for cases when you
want to show a diff of user-generated HTML (like from a wysiwyg editor).

##Install

`meteor add long:htmldiff`

##Usage
You use it like this:

  console.log Htmldiff '<p>this is some text</p>', '<p>this is some more text</p>'
```
And you get:

```html
<p>this is some <ins>more </ins>text</p>
```

Licensed under the MIT License. See the `LICENSE` file for details.
