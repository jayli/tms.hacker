
(function(){
	var delay;
	// Initialize CodeMirror editor with a nice html5 canvas demo.
	var editor = CodeMirror.fromTextArea(document.getElementById('example_1'), {
		mode: 'text/html',
		tabMode: 'indent',
		lineNumbers:true,
		extraKeys: {
            "F11": function() {
              var scroller = editor.getScrollerElement();
              if (scroller.className.search(/\bCodeMirror-fullscreen\b/) === -1) {
				  document.body.scroll = 'no';
                scroller.className += " CodeMirror-fullscreen";
                scroller.style.height = "100%";
                scroller.style.width = "100%";
                editor.refresh();
              } else {
				  document.body.scroll = 'auto';
                scroller.className = scroller.className.replace(" CodeMirror-fullscreen", "");
                scroller.style.height = '';
                scroller.style.width = '';
                editor.refresh();
              }
            },
            "Esc": function() {
              var scroller = editor.getScrollerElement();
              if (scroller.className.search(/\bCodeMirror-fullscreen\b/) !== -1) {
                scroller.className = scroller.className.replace(" CodeMirror-fullscreen", "");
                scroller.style.height = '';
                scroller.style.width = '';
                editor.refresh();
              }
            }
        },
		onChange: function() {
			var that = this;
			clearTimeout(delay);
			delay = setTimeout(function(){
				that.toTextArea();
			}, 300);
		}

	});

}());
