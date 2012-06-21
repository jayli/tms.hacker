// ==UserScript==
// @name           TMS Hacker
// @namespace      TMS Code Editor! Just enjoy yourself!
// @description    http://github.com/jayli/tms-hacker
// @include        http://tms.taobao.com/page/editTemplate.htm
// @include        http://tms.taobao.com/page/editTemplate.htm*
// @date           2012-7-01
// @require 		http://b.ued.taobao.net/bachi/jayli/tms.hacker/lib/sandbox.js
// @version			1.0
// ==/UserScript==

var base = 'http://b.ued.taobao.net/bachi/jayli/tms.hacker/';

Sandbox.ready(function(S){
	
},{
	requires:[
		base + 'lib/cm/lib/codemirror.js',
		base + 'lib/cm/mode/xml/xml.js',
		base + 'lib/cm/mode/javascript/javascript.js',
		base + 'lib/cm/mode/css/css.js',
		base + 'lib/cm/mode/htmlmixed/htmlmixed.js',
		base + 'lib/cm/lib/codemirror.css',
		base + 'src/debug.css',
		base + 'src/debug.js'
	]
});
