## codecode.

#### What is `codecode`?
As a reader of many programming blogs and tutorials, authors will commonly share code samples. I often have the problem of either looking ahead to the code without reading the text, or I just want to refer back to the code as I'm digesting the author's point. My laptop monitor is only so tall, so I want to be able to see both at the same time.

That's what `codecode` helps with. It's a jQuery plug-in which will split your page in two, allowing your readers to see your code as they read your article.

#### How do I use it?
`codecode` can be dropped onto your website, anywhere code blocks are used.

It's almost a given you're using some kind of syntax highlighter for the code blocks you write, such as:

    <!doctype html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>This is a website!</title>

These are likely already wrapped in a container element with a consistent class name. All you need to do is:

1. Have jQuery.
2. Download and include `codecode.js` or `codecode.min.js`.
3. Call `$('.codeblock').codecode();`

You're done!
