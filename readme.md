# codecode.
----

### What is `codecode`?
As a reader of many programming blogs and tutorials, authors will commonly share code samples. I often have the problem of either looking ahead to the code without reading the text, or I just want to refer back to the code as I'm digesting the author's point. My laptop monitor is only so tall, so I want to be able to see both at the same time.

That's what `codecode` helps with. It's a jQuery plug-in which will split your page in two, allowing your readers to see your code as they read your article.

### Will it work with [SyntaxHighlighter](http://alexgorbatchev.com/SyntaxHighlighter/)?
Omg, yes! Just include `codecode.js` on your page, and... that's it!

### I use my own syntax highlighter / How do I use `codecode`?
`codecode` can be dropped onto your website, anywhere code blocks are used, such as:

```html
<!doctype html>
<html>
  <head>
  <meta charset="utf-8">
  <title>This is a website!</title>
  ...
```

All you need to do is:

1. Have jQuery available.
2. Download and include `codecode.js` or `codecode.min.js`.
3. Call `$('.codeblock').codecode();`

You're done!
