(function($, doc) {
  var styles
  ='.acodecode {'
  +  'cursor: pointer;'
  +'}'

  +'.acodecodeactive {'
  +  'cursor: default;'
  +'}'

  +'.codecodecode {'
  +  'position: fixed;'
  +  'z-index: 100;'
  +  'left: 2%;'
  +  'bottom: -30px;'
  +  'width: 96%;'
  +  'height: 0;'
  +  'max-height: 35%;'
  +'}'

  +'.codecodecode > div {'
  +'  box-shadow: 0 0 3px #444;'
  +'}'

  +'.codecodecontrols {'
  +  'height: 30px;'
  +  'margin-top: -30px;'
  +  'background-color: #fff;'
  +  'background-color: rgba(255, 255, 255, .8);'
  +  'border-radius: 8px 8px 0 0;'
  +'}'

  +'.codecodecontrols a {'
  +  'float: left;'
  +  'line-height: 30px;'
  +  'margin-left: 6px;'
  +  'font-family: Arial;'
  +  'font-size: 12px;'
  +'}'

  +'.codecodecontrols .closecodecode {'
  +  'float: right;'
  +  'margin-right: 6px;'
  +'}'

  +'.codecode {'
  +  'position: relative !important;'
  +  'width: 100% !important;'
  +  'height: 100%; !important;'
  +  'padding: 0 !important;'
  +  'margin: 0 !important;'
  +  'overflow: auto !important;'
  +  'cursor: default;'
  +'}'

  +'.codecode [id^=highlighter] .bar.show {'
  +  'display: none !important;'
  +'}';

  var el = {};
  el.codecodecode
  = $('<div class="codecodecode">'
     +  '<div class="codecodecontrols">'
     +    '<a class="gobacktothecode" href="#">go back to the code.</a>'
     +    '<a class="closecodecode" href="#">close.</a>'
     +  '</div>'
     +  '<div class="codecode"></div>'
     +'</div>');

  el.gobacktothecode
  = el.codecodecode.find('.gobacktothecode');

  el.closecodecode
  = el.codecodecode.find('.closecodecode');

  el.codecode
  = el.codecodecode.find('.codecode');

  $(doc.body)
    .append('<style>'+styles+'</style>')
    .append(el.codecodecode);

  var gobacktothecode = function(e) {
    e.preventDefault();

    closecodecode();

    $(doc.body).animate({ scrollTop: codeposition - 20 }, 2000);
  };

  var closecodecode = function(e, callback) {
    if ($.type(e) === 'object')
      e.preventDefault();

    el.codecodecode
      .animate({ bottom: '-300px' }, 300, callback || $.noop);

    $('.acodecodeactive').removeClass('acodecodeactive');
  };

  var opencodecode = function(codeblock) {
    el.codecodecode
      .animate({ bottom: 0 }, 500);

    $('.acodecodeactive').removeClass('acodecodeactive');

    codeblock
      .addClass('acodecodeactive');
  };

  var init = function() {
    var codeblock = $(this);

    codeblock.click(function() {
      if (codeblock.hasClass('acodecodeactive'))
        return;

      codeposition = $(this).position().top;

      var clone =
        codeblock
          .clone()
            .unbind('click')
            .addClass('codecode');

      closecodecode(null, function() {
        el.codecode
          .empty()
          .append(clone)
          .css('margin', '0 !important')
          .height('auto');

        el.codecodecode
          .height(el.codecode.height() > 300 ? 300 : el.codecode.height());

        el.codecode
          .height('100%');
      });

      opencodecode(codeblock);
    });
  };

  el.gobacktothecode
    .click(gobacktothecode);

  el.closecodecode
    .click(closecodecode);

  var allofthecodes, codeposition;
  $.fn.codecode = function() {
    allofthecodes = this.addClass('acodecode');
    return this.each(init);
  };

  if ($.type(SyntaxHighlighter) !== 'undefined')
    $('.syntaxhighlighter').codecode();

})(jQuery, document);
