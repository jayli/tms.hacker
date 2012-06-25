// ==UserScript==
// @name           TMS Hacker
// @namespace      TMS Code Editor! Just enjoy yourself!
// @description    http://github.com/jayli/tms-hacker
// @include        http://tms.taobao.com/page/editTemplate.htm
// @include        http://tms.taobao.com/page/editTemplate.htm*
// @date           2012-7-01
// @require 		http://jayli.github.com/sandbox/core/sandbox.js
// @version			1.0
// ==/UserScript==

(function(){

	var base_js = 'http://a.tbcdn.cn/app/dp/s/tms-hacker/??' + [
		'lib/cm/lib/codemirror.js',
		'lib/cm/mode/xml/xml.js',
		'lib/cm/mode/javascript/javascript.js',
		'lib/cm/mode/css/css.js',
		'lib/cm/mode/htmlmixed/htmlmixed.js',
		'src/debug.js'
	].join(',');

	var base_css = 'http://a.tbcdn.cn/app/dp/s/tms-hacker/??' + [
		'lib/cm/lib/codemirror.css',
		"lib/cm/theme/neat.css",
		"lib/cm/theme/elegant.css",
		"lib/cm/theme/erlang-dark.css",
		"lib/cm/theme/night.css",
		"lib/cm/theme/monokai.css",
		"lib/cm/theme/cobalt.css",
		"lib/cm/theme/eclipse.css",
		"lib/cm/theme/rubyblue.css",
		"lib/cm/theme/lesser-dark.css",
		"lib/cm/theme/xq-dark.css",
		"lib/cm/theme/ambiance.css",
		"lib/cm/theme/blackboard.css",
		"lib/cm/theme/vibrant-ink.css",
		'src/debug.css'
	].join(',');

	Sandbox.load(
		base_js,
		base_css
	);

})();

