/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(1);
	
	__webpack_require__(5);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(2);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/sass-loader/index.js?sourceMap!./main.scss", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/sass-loader/index.js?sourceMap!./main.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports
	
	
	// module
	exports.push([module.id, "html, body, body div, span, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, abbr, address, cite, code, del, dfn, em, img, ins, kbd, q, samp, small, strong, sub, sup, var, b, i, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, figure, footer, header, menu, nav, section, time, mark, audio, video, details, summary {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font-weight: normal;\n  vertical-align: baseline;\n  background: transparent; }\n\narticle, aside, figure, footer, header, nav, section, details, summary {\n  display: block; }\n\nhtml {\n  box-sizing: border-box; }\n\n*,\n*:before,\n*:after {\n  box-sizing: inherit; }\n\nimg,\nobject,\nembed {\n  max-width: 100%; }\n\nhtml {\n  overflow-y: scroll; }\n\nul {\n  list-style: none; }\n\nblockquote, q {\n  quotes: none; }\n\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: '';\n  content: none; }\n\na {\n  margin: 0;\n  padding: 0;\n  font-size: 100%;\n  vertical-align: baseline;\n  background: transparent; }\n\ndel {\n  text-decoration: line-through; }\n\nabbr[title], dfn[title] {\n  border-bottom: 1px dotted #000;\n  cursor: help; }\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\n\nth {\n  font-weight: bold;\n  vertical-align: bottom; }\n\ntd {\n  font-weight: normal;\n  vertical-align: top; }\n\nhr {\n  display: block;\n  height: 1px;\n  border: 0;\n  border-top: 1px solid #ccc;\n  margin: 1em 0;\n  padding: 0; }\n\ninput, select {\n  vertical-align: middle; }\n\npre {\n  white-space: pre;\n  white-space: pre-wrap;\n  white-space: pre-line;\n  word-wrap: break-word; }\n\ninput[type=\"radio\"] {\n  vertical-align: text-bottom; }\n\ninput[type=\"checkbox\"] {\n  vertical-align: bottom; }\n\nselect, input, textarea {\n  font: 99% sans-serif; }\n\ntable {\n  font-size: inherit;\n  font: 100%; }\n\nsmall {\n  font-size: 85%; }\n\nstrong {\n  font-weight: bold; }\n\ntd, td img {\n  vertical-align: top; }\n\nsub, sup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative; }\n\nsup {\n  top: -0.5em; }\n\nsub {\n  bottom: -0.25em; }\n\npre, code, kbd, samp {\n  font-family: monospace, sans-serif; }\n\nlabel,\ninput[type=button],\ninput[type=submit],\ninput[type=file],\nbutton {\n  cursor: pointer; }\n\nbutton, input, select, textarea {\n  margin: 0; }\n\nbutton,\ninput[type=button] {\n  width: auto;\n  overflow: visible; }\n\n@keyframes spin-around {\n  from {\n    transform: rotate(0deg); }\n  to {\n    transform: rotate(359deg); } }\n\nhtml {\n  background-color: #f5f7fa;\n  font-size: 14px;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  min-width: 300px;\n  overflow-x: hidden;\n  overflow-y: scroll;\n  text-rendering: optimizeLegibility; }\n\narticle,\naside,\nfigure,\nfooter,\nheader,\nhgroup,\nsection {\n  display: block; }\n\nbody,\nbutton,\ninput,\nselect,\ntextarea {\n  font-family: \"Helvetica Neue\", \"Helvetica\", \"Arial\", sans-serif; }\n\ncode,\npre {\n  -moz-osx-font-smoothing: auto;\n  -webkit-font-smoothing: auto;\n  font-family: \"Source Code Pro\", \"Monaco\", \"Inconsolata\", monospace;\n  line-height: 1.25; }\n\nbody {\n  color: #69707a;\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.428571428571429; }\n\na {\n  color: #1fc8db;\n  cursor: pointer;\n  text-decoration: none;\n  transition: none 86ms ease-out; }\n  a:hover {\n    color: #222324; }\n\ncode {\n  background-color: #f5f7fa;\n  color: #ed6c63;\n  font-size: 12px;\n  font-weight: normal;\n  padding: 1px 2px 2px; }\n\nhr {\n  border-top-color: #d3d6db;\n  margin: 40px 0; }\n\nimg {\n  max-width: 100%; }\n\ninput[type=\"checkbox\"],\ninput[type=\"radio\"] {\n  vertical-align: baseline; }\n\nsmall {\n  font-size: 11px; }\n\nspan {\n  font-style: inherit;\n  font-weight: inherit; }\n\nstrong {\n  color: #222324;\n  font-weight: 700; }\n\npre {\n  background-color: #f5f7fa;\n  color: #69707a;\n  white-space: pre;\n  word-wrap: normal; }\n  pre code {\n    background-color: #f5f7fa;\n    color: #69707a;\n    display: block;\n    overflow-x: auto;\n    padding: 16px 20px; }\n\ntable {\n  width: 100%; }\n  table td,\n  table th {\n    text-align: left;\n    vertical-align: top; }\n  table th {\n    color: #222324; }\n\n.block:not(:last-child), .box:not(:last-child), .content:not(:last-child), .notification:not(:last-child), .progress:not(:last-child), .title:not(:last-child),\n.subtitle:not(:last-child), .highlight:not(:last-child), .level:not(:last-child), .message:not(:last-child), .tabs:not(:last-child) {\n  margin-bottom: 20px; }\n\n.container {\n  position: relative; }\n  @media screen and (min-width: 980px) {\n    .container {\n      margin: 0 auto;\n      max-width: 960px; }\n      .container.is-fluid {\n        margin: 0 20px;\n        max-width: none; } }\n  @media screen and (min-width: 1180px) {\n    .container {\n      max-width: 1200px; } }\n\n.fa {\n  font-size: 21px;\n  text-align: center;\n  vertical-align: top; }\n\n.is-block {\n  display: block; }\n\n@media screen and (max-width: 768px) {\n  .is-block-mobile {\n    display: block !important; } }\n\n@media screen and (min-width: 769px) {\n  .is-block-tablet {\n    display: block !important; } }\n\n@media screen and (min-width: 769px) and (max-width: 979px) {\n  .is-block-tablet-only {\n    display: block !important; } }\n\n@media screen and (max-width: 979px) {\n  .is-block-touch {\n    display: block !important; } }\n\n@media screen and (min-width: 980px) {\n  .is-block-desktop {\n    display: block !important; } }\n\n@media screen and (min-width: 980px) and (max-width: 1179px) {\n  .is-block-desktop-only {\n    display: block !important; } }\n\n@media screen and (min-width: 1180px) {\n  .is-block-widescreen {\n    display: block !important; } }\n\n.is-flex {\n  display: flex; }\n\n@media screen and (max-width: 768px) {\n  .is-flex-mobile {\n    display: flex !important; } }\n\n@media screen and (min-width: 769px) {\n  .is-flex-tablet {\n    display: flex !important; } }\n\n@media screen and (min-width: 769px) and (max-width: 979px) {\n  .is-flex-tablet-only {\n    display: flex !important; } }\n\n@media screen and (max-width: 979px) {\n  .is-flex-touch {\n    display: flex !important; } }\n\n@media screen and (min-width: 980px) {\n  .is-flex-desktop {\n    display: flex !important; } }\n\n@media screen and (min-width: 980px) and (max-width: 1179px) {\n  .is-flex-desktop-only {\n    display: flex !important; } }\n\n@media screen and (min-width: 1180px) {\n  .is-flex-widescreen {\n    display: flex !important; } }\n\n.is-inline {\n  display: inline; }\n\n@media screen and (max-width: 768px) {\n  .is-inline-mobile {\n    display: inline !important; } }\n\n@media screen and (min-width: 769px) {\n  .is-inline-tablet {\n    display: inline !important; } }\n\n@media screen and (min-width: 769px) and (max-width: 979px) {\n  .is-inline-tablet-only {\n    display: inline !important; } }\n\n@media screen and (max-width: 979px) {\n  .is-inline-touch {\n    display: inline !important; } }\n\n@media screen and (min-width: 980px) {\n  .is-inline-desktop {\n    display: inline !important; } }\n\n@media screen and (min-width: 980px) and (max-width: 1179px) {\n  .is-inline-desktop-only {\n    display: inline !important; } }\n\n@media screen and (min-width: 1180px) {\n  .is-inline-widescreen {\n    display: inline !important; } }\n\n.is-inline-block {\n  display: inline-block; }\n\n@media screen and (max-width: 768px) {\n  .is-inline-block-mobile {\n    display: inline-block !important; } }\n\n@media screen and (min-width: 769px) {\n  .is-inline-block-tablet {\n    display: inline-block !important; } }\n\n@media screen and (min-width: 769px) and (max-width: 979px) {\n  .is-inline-block-tablet-only {\n    display: inline-block !important; } }\n\n@media screen and (max-width: 979px) {\n  .is-inline-block-touch {\n    display: inline-block !important; } }\n\n@media screen and (min-width: 980px) {\n  .is-inline-block-desktop {\n    display: inline-block !important; } }\n\n@media screen and (min-width: 980px) and (max-width: 1179px) {\n  .is-inline-block-desktop-only {\n    display: inline-block !important; } }\n\n@media screen and (min-width: 1180px) {\n  .is-inline-block-widescreen {\n    display: inline-block !important; } }\n\n.is-inline-flex {\n  display: inline-flex; }\n\n@media screen and (max-width: 768px) {\n  .is-inline-flex-mobile {\n    display: inline-flex !important; } }\n\n@media screen and (min-width: 769px) {\n  .is-inline-flex-tablet {\n    display: inline-flex !important; } }\n\n@media screen and (min-width: 769px) and (max-width: 979px) {\n  .is-inline-flex-tablet-only {\n    display: inline-flex !important; } }\n\n@media screen and (max-width: 979px) {\n  .is-inline-flex-touch {\n    display: inline-flex !important; } }\n\n@media screen and (min-width: 980px) {\n  .is-inline-flex-desktop {\n    display: inline-flex !important; } }\n\n@media screen and (min-width: 980px) and (max-width: 1179px) {\n  .is-inline-flex-desktop-only {\n    display: inline-flex !important; } }\n\n@media screen and (min-width: 1180px) {\n  .is-inline-flex-widescreen {\n    display: inline-flex !important; } }\n\n.is-clearfix:after {\n  clear: both;\n  content: \" \";\n  display: table; }\n\n.is-pulled-left {\n  float: left; }\n\n.is-pulled-right {\n  float: right; }\n\n.is-clipped {\n  overflow: hidden !important; }\n\n.is-overlay {\n  bottom: 0;\n  left: 0;\n  position: absolute;\n  right: 0;\n  top: 0; }\n\n.has-text-centered {\n  text-align: center; }\n\n.has-text-left {\n  text-align: left; }\n\n.has-text-right {\n  text-align: right; }\n\n.is-hidden {\n  display: none !important; }\n\n@media screen and (max-width: 768px) {\n  .is-hidden-mobile {\n    display: none !important; } }\n\n@media screen and (min-width: 769px) {\n  .is-hidden-tablet {\n    display: none !important; } }\n\n@media screen and (min-width: 769px) and (max-width: 979px) {\n  .is-hidden-tablet-only {\n    display: none !important; } }\n\n@media screen and (max-width: 979px) {\n  .is-hidden-touch {\n    display: none !important; } }\n\n@media screen and (min-width: 980px) {\n  .is-hidden-desktop {\n    display: none !important; } }\n\n@media screen and (min-width: 980px) and (max-width: 1179px) {\n  .is-hidden-desktop-only {\n    display: none !important; } }\n\n@media screen and (min-width: 1180px) {\n  .is-hidden-widescreen {\n    display: none !important; } }\n\n.is-disabled {\n  pointer-events: none; }\n\n.is-marginless {\n  margin: 0 !important; }\n\n.box {\n  background-color: #fff;\n  border-radius: 5px;\n  box-shadow: 0 2px 3px rgba(17, 17, 17, 0.1), 0 0 0 1px rgba(17, 17, 17, 0.1);\n  display: block;\n  padding: 20px; }\n\na.box:hover, a.box:focus {\n  box-shadow: 0 2px 3px rgba(17, 17, 17, 0.1), 0 0 0 1px #1fc8db; }\n\na.box:active {\n  box-shadow: inset 0 1px 2px rgba(17, 17, 17, 0.2), 0 0 0 1px #1fc8db; }\n\n.button {\n  -moz-appearance: none;\n  -webkit-appearance: none;\n  align-items: center;\n  background-color: white;\n  border: 1px solid #d3d6db;\n  border-radius: 3px;\n  color: #222324;\n  display: inline-flex;\n  font-size: 14px;\n  height: 32px;\n  justify-content: flex-start;\n  line-height: 24px;\n  padding-left: 8px;\n  padding-right: 8px;\n  position: relative;\n  vertical-align: top;\n  justify-content: center;\n  padding-left: 10px;\n  padding-right: 10px;\n  text-align: center;\n  white-space: nowrap; }\n  .button:hover {\n    border-color: #aeb1b5; }\n  .button:active, .button:focus, .button.is-active {\n    border-color: #1fc8db;\n    outline: none; }\n  .button[disabled], .button.is-disabled {\n    background-color: #f5f7fa;\n    border-color: #d3d6db;\n    cursor: not-allowed;\n    pointer-events: none; }\n    .button[disabled]::-moz-placeholder, .button.is-disabled::-moz-placeholder {\n      color: rgba(34, 35, 36, 0.3); }\n    .button[disabled]::-webkit-input-placeholder, .button.is-disabled::-webkit-input-placeholder {\n      color: rgba(34, 35, 36, 0.3); }\n    .button[disabled]:-moz-placeholder, .button.is-disabled:-moz-placeholder {\n      color: rgba(34, 35, 36, 0.3); }\n    .button[disabled]:-ms-input-placeholder, .button.is-disabled:-ms-input-placeholder {\n      color: rgba(34, 35, 36, 0.3); }\n  .button strong {\n    color: inherit; }\n  .button small {\n    display: block;\n    font-size: 11px;\n    line-height: 1;\n    margin-top: 5px; }\n  .button .icon:first-child,\n  .button .tag:first-child {\n    margin-left: -2px;\n    margin-right: 4px; }\n  .button .icon:last-child,\n  .button .tag:last-child {\n    margin-left: 4px;\n    margin-right: -2px; }\n  .button:hover, .button:focus, .button.is-active {\n    color: #222324; }\n  .button:active {\n    box-shadow: inset 0 1px 2px rgba(17, 17, 17, 0.2); }\n  .button.is-white {\n    background-color: #fff;\n    border-color: transparent;\n    color: #111; }\n    .button.is-white:hover, .button.is-white:focus, .button.is-white.is-active {\n      background-color: #e6e6e6;\n      border-color: transparent;\n      color: #111; }\n    .button.is-white:active {\n      border-color: transparent; }\n    .button.is-white.is-inverted {\n      background-color: #111;\n      color: #fff; }\n      .button.is-white.is-inverted:hover {\n        background-color: #040404; }\n    .button.is-white.is-loading:after {\n      border-color: transparent transparent #111 #111 !important; }\n    .button.is-white.is-outlined {\n      background-color: transparent;\n      border-color: #fff;\n      color: #fff; }\n      .button.is-white.is-outlined:hover, .button.is-white.is-outlined:focus {\n        background-color: #fff;\n        border-color: #fff;\n        color: #111; }\n  .button.is-black {\n    background-color: #111;\n    border-color: transparent;\n    color: #fff; }\n    .button.is-black:hover, .button.is-black:focus, .button.is-black.is-active {\n      background-color: black;\n      border-color: transparent;\n      color: #fff; }\n    .button.is-black:active {\n      border-color: transparent; }\n    .button.is-black.is-inverted {\n      background-color: #fff;\n      color: #111; }\n      .button.is-black.is-inverted:hover {\n        background-color: #f2f2f2; }\n    .button.is-black.is-loading:after {\n      border-color: transparent transparent #fff #fff !important; }\n    .button.is-black.is-outlined {\n      background-color: transparent;\n      border-color: #111;\n      color: #111; }\n      .button.is-black.is-outlined:hover, .button.is-black.is-outlined:focus {\n        background-color: #111;\n        border-color: #111;\n        color: #fff; }\n  .button.is-light {\n    background-color: #f5f7fa;\n    border-color: transparent;\n    color: #69707a; }\n    .button.is-light:hover, .button.is-light:focus, .button.is-light.is-active {\n      background-color: #d3dce9;\n      border-color: transparent;\n      color: #69707a; }\n    .button.is-light:active {\n      border-color: transparent; }\n    .button.is-light.is-inverted {\n      background-color: #69707a;\n      color: #f5f7fa; }\n      .button.is-light.is-inverted:hover {\n        background-color: #5d636c; }\n    .button.is-light.is-loading:after {\n      border-color: transparent transparent #69707a #69707a !important; }\n    .button.is-light.is-outlined {\n      background-color: transparent;\n      border-color: #f5f7fa;\n      color: #f5f7fa; }\n      .button.is-light.is-outlined:hover, .button.is-light.is-outlined:focus {\n        background-color: #f5f7fa;\n        border-color: #f5f7fa;\n        color: #69707a; }\n  .button.is-dark {\n    background-color: #69707a;\n    border-color: transparent;\n    color: #f5f7fa; }\n    .button.is-dark:hover, .button.is-dark:focus, .button.is-dark.is-active {\n      background-color: #51575f;\n      border-color: transparent;\n      color: #f5f7fa; }\n    .button.is-dark:active {\n      border-color: transparent; }\n    .button.is-dark.is-inverted {\n      background-color: #f5f7fa;\n      color: #69707a; }\n      .button.is-dark.is-inverted:hover {\n        background-color: #e4e9f2; }\n    .button.is-dark.is-loading:after {\n      border-color: transparent transparent #f5f7fa #f5f7fa !important; }\n    .button.is-dark.is-outlined {\n      background-color: transparent;\n      border-color: #69707a;\n      color: #69707a; }\n      .button.is-dark.is-outlined:hover, .button.is-dark.is-outlined:focus {\n        background-color: #69707a;\n        border-color: #69707a;\n        color: #f5f7fa; }\n  .button.is-primary {\n    background-color: #1fc8db;\n    border-color: transparent;\n    color: white; }\n    .button.is-primary:hover, .button.is-primary:focus, .button.is-primary.is-active {\n      background-color: #199fae;\n      border-color: transparent;\n      color: white; }\n    .button.is-primary:active {\n      border-color: transparent; }\n    .button.is-primary.is-inverted {\n      background-color: white;\n      color: #1fc8db; }\n      .button.is-primary.is-inverted:hover {\n        background-color: #f2f2f2; }\n    .button.is-primary.is-loading:after {\n      border-color: transparent transparent white white !important; }\n    .button.is-primary.is-outlined {\n      background-color: transparent;\n      border-color: #1fc8db;\n      color: #1fc8db; }\n      .button.is-primary.is-outlined:hover, .button.is-primary.is-outlined:focus {\n        background-color: #1fc8db;\n        border-color: #1fc8db;\n        color: white; }\n  .button.is-info {\n    background-color: #42afe3;\n    border-color: transparent;\n    color: white; }\n    .button.is-info:hover, .button.is-info:focus, .button.is-info.is-active {\n      background-color: #1f99d3;\n      border-color: transparent;\n      color: white; }\n    .button.is-info:active {\n      border-color: transparent; }\n    .button.is-info.is-inverted {\n      background-color: white;\n      color: #42afe3; }\n      .button.is-info.is-inverted:hover {\n        background-color: #f2f2f2; }\n    .button.is-info.is-loading:after {\n      border-color: transparent transparent white white !important; }\n    .button.is-info.is-outlined {\n      background-color: transparent;\n      border-color: #42afe3;\n      color: #42afe3; }\n      .button.is-info.is-outlined:hover, .button.is-info.is-outlined:focus {\n        background-color: #42afe3;\n        border-color: #42afe3;\n        color: white; }\n  .button.is-success {\n    background-color: #97cd76;\n    border-color: transparent;\n    color: white; }\n    .button.is-success:hover, .button.is-success:focus, .button.is-success.is-active {\n      background-color: #7bbf51;\n      border-color: transparent;\n      color: white; }\n    .button.is-success:active {\n      border-color: transparent; }\n    .button.is-success.is-inverted {\n      background-color: white;\n      color: #97cd76; }\n      .button.is-success.is-inverted:hover {\n        background-color: #f2f2f2; }\n    .button.is-success.is-loading:after {\n      border-color: transparent transparent white white !important; }\n    .button.is-success.is-outlined {\n      background-color: transparent;\n      border-color: #97cd76;\n      color: #97cd76; }\n      .button.is-success.is-outlined:hover, .button.is-success.is-outlined:focus {\n        background-color: #97cd76;\n        border-color: #97cd76;\n        color: white; }\n  .button.is-warning {\n    background-color: #fce473;\n    border-color: transparent;\n    color: rgba(17, 17, 17, 0.5); }\n    .button.is-warning:hover, .button.is-warning:focus, .button.is-warning.is-active {\n      background-color: #fbda41;\n      border-color: transparent;\n      color: rgba(17, 17, 17, 0.5); }\n    .button.is-warning:active {\n      border-color: transparent; }\n    .button.is-warning.is-inverted {\n      background-color: rgba(17, 17, 17, 0.5);\n      color: #fce473; }\n      .button.is-warning.is-inverted:hover {\n        background-color: rgba(4, 4, 4, 0.5); }\n    .button.is-warning.is-loading:after {\n      border-color: transparent transparent rgba(17, 17, 17, 0.5) rgba(17, 17, 17, 0.5) !important; }\n    .button.is-warning.is-outlined {\n      background-color: transparent;\n      border-color: #fce473;\n      color: #fce473; }\n      .button.is-warning.is-outlined:hover, .button.is-warning.is-outlined:focus {\n        background-color: #fce473;\n        border-color: #fce473;\n        color: rgba(17, 17, 17, 0.5); }\n  .button.is-danger {\n    background-color: #ed6c63;\n    border-color: transparent;\n    color: white; }\n    .button.is-danger:hover, .button.is-danger:focus, .button.is-danger.is-active {\n      background-color: #e84135;\n      border-color: transparent;\n      color: white; }\n    .button.is-danger:active {\n      border-color: transparent; }\n    .button.is-danger.is-inverted {\n      background-color: white;\n      color: #ed6c63; }\n      .button.is-danger.is-inverted:hover {\n        background-color: #f2f2f2; }\n    .button.is-danger.is-loading:after {\n      border-color: transparent transparent white white !important; }\n    .button.is-danger.is-outlined {\n      background-color: transparent;\n      border-color: #ed6c63;\n      color: #ed6c63; }\n      .button.is-danger.is-outlined:hover, .button.is-danger.is-outlined:focus {\n        background-color: #ed6c63;\n        border-color: #ed6c63;\n        color: white; }\n  .button.is-link {\n    background-color: transparent;\n    border-color: transparent;\n    color: #69707a;\n    text-decoration: underline; }\n    .button.is-link:hover, .button.is-link:focus {\n      background-color: #d3d6db;\n      color: #222324; }\n  .button.is-small {\n    border-radius: 2px;\n    font-size: 11px;\n    height: 24px;\n    line-height: 16px;\n    padding-left: 6px;\n    padding-right: 6px; }\n  .button.is-medium {\n    font-size: 18px;\n    height: 40px;\n    padding-left: 14px;\n    padding-right: 14px; }\n  .button.is-large {\n    font-size: 22px;\n    height: 48px;\n    padding-left: 20px;\n    padding-right: 20px; }\n  .button[disabled], .button.is-disabled {\n    opacity: 0.5; }\n  .button.is-fullwidth {\n    display: flex;\n    width: 100%; }\n  .button.is-loading {\n    color: transparent !important;\n    pointer-events: none; }\n    .button.is-loading:after {\n      left: 50%;\n      margin-left: -8px;\n      margin-top: -8px;\n      position: absolute;\n      top: 50%;\n      position: absolute !important; }\n\n.content a:not(.button) {\n  border-bottom: 1px solid #d3d6db; }\n  .content a:not(.button):visited {\n    color: #847bb9; }\n  .content a:not(.button):hover {\n    border-bottom-color: #1fc8db; }\n\n.content li + li {\n  margin-top: 0.25em; }\n\n.content blockquote:not(:last-child),\n.content p:not(:last-child),\n.content ol:not(:last-child),\n.content ul:not(:last-child) {\n  margin-bottom: 1em; }\n\n.content h1,\n.content h2,\n.content h3,\n.content h4,\n.content h5,\n.content h6 {\n  color: #222324;\n  font-weight: 300;\n  line-height: 1.125;\n  margin-bottom: 20px; }\n\n.content h1:not(:first-child),\n.content h2:not(:first-child),\n.content h3:not(:first-child) {\n  margin-top: 40px; }\n\n.content blockquote {\n  background-color: #f5f7fa;\n  border-left: 5px solid #d3d6db;\n  padding: 1.5em; }\n\n.content h1 {\n  font-size: 2em; }\n\n.content h2 {\n  font-size: 1.75em; }\n\n.content h3 {\n  font-size: 1.5em; }\n\n.content h4 {\n  font-size: 1.25em; }\n\n.content h5 {\n  font-size: 1.125em; }\n\n.content h6 {\n  font-size: 1em; }\n\n.content ol {\n  list-style: decimal outside;\n  margin-left: 2em;\n  margin-right: 2em;\n  margin-top: 1em; }\n\n.content ul {\n  list-style: disc outside;\n  margin-left: 2em;\n  margin-right: 2em;\n  margin-top: 1em; }\n  .content ul ul {\n    list-style-type: circle;\n    margin-top: 0.5em; }\n    .content ul ul ul {\n      list-style-type: square; }\n\n.content.is-medium {\n  font-size: 18px; }\n  .content.is-medium code {\n    font-size: 14px; }\n\n.content.is-large {\n  font-size: 24px; }\n  .content.is-large code {\n    font-size: 18px; }\n\n.input, .textarea {\n  -moz-appearance: none;\n  -webkit-appearance: none;\n  align-items: center;\n  background-color: white;\n  border: 1px solid #d3d6db;\n  border-radius: 3px;\n  color: #222324;\n  display: inline-flex;\n  font-size: 14px;\n  height: 32px;\n  justify-content: flex-start;\n  line-height: 24px;\n  padding-left: 8px;\n  padding-right: 8px;\n  position: relative;\n  vertical-align: top;\n  box-shadow: inset 0 1px 2px rgba(17, 17, 17, 0.1);\n  max-width: 100%;\n  width: 100%; }\n  .input:hover, .textarea:hover {\n    border-color: #aeb1b5; }\n  .input:active, .textarea:active, .input:focus, .textarea:focus, .input.is-active, .is-active.textarea {\n    border-color: #1fc8db;\n    outline: none; }\n  .input[disabled], [disabled].textarea, .input.is-disabled, .is-disabled.textarea {\n    background-color: #f5f7fa;\n    border-color: #d3d6db;\n    cursor: not-allowed;\n    pointer-events: none; }\n    .input[disabled]::-moz-placeholder, [disabled].textarea::-moz-placeholder, .input.is-disabled::-moz-placeholder, .is-disabled.textarea::-moz-placeholder {\n      color: rgba(34, 35, 36, 0.3); }\n    .input[disabled]::-webkit-input-placeholder, [disabled].textarea::-webkit-input-placeholder, .input.is-disabled::-webkit-input-placeholder, .is-disabled.textarea::-webkit-input-placeholder {\n      color: rgba(34, 35, 36, 0.3); }\n    .input[disabled]:-moz-placeholder, [disabled].textarea:-moz-placeholder, .input.is-disabled:-moz-placeholder, .is-disabled.textarea:-moz-placeholder {\n      color: rgba(34, 35, 36, 0.3); }\n    .input[disabled]:-ms-input-placeholder, [disabled].textarea:-ms-input-placeholder, .input.is-disabled:-ms-input-placeholder, .is-disabled.textarea:-ms-input-placeholder {\n      color: rgba(34, 35, 36, 0.3); }\n  .input.is-white, .is-white.textarea {\n    border-color: #fff; }\n  .input.is-black, .is-black.textarea {\n    border-color: #111; }\n  .input.is-light, .is-light.textarea {\n    border-color: #f5f7fa; }\n  .input.is-dark, .is-dark.textarea {\n    border-color: #69707a; }\n  .input.is-primary, .is-primary.textarea {\n    border-color: #1fc8db; }\n  .input.is-info, .is-info.textarea {\n    border-color: #42afe3; }\n  .input.is-success, .is-success.textarea {\n    border-color: #97cd76; }\n  .input.is-warning, .is-warning.textarea {\n    border-color: #fce473; }\n  .input.is-danger, .is-danger.textarea {\n    border-color: #ed6c63; }\n  .input[type=\"search\"], [type=\"search\"].textarea {\n    border-radius: 290486px; }\n  .input.is-small, .is-small.textarea {\n    border-radius: 2px;\n    font-size: 11px;\n    height: 24px;\n    line-height: 16px;\n    padding-left: 6px;\n    padding-right: 6px; }\n  .input.is-medium, .is-medium.textarea {\n    font-size: 18px;\n    height: 40px;\n    line-height: 32px;\n    padding-left: 10px;\n    padding-right: 10px; }\n  .input.is-large, .is-large.textarea {\n    font-size: 24px;\n    height: 48px;\n    line-height: 40px;\n    padding-left: 12px;\n    padding-right: 12px; }\n  .input.is-fullwidth, .is-fullwidth.textarea {\n    display: block;\n    width: 100%; }\n  .input.is-inline, .is-inline.textarea {\n    display: inline;\n    width: auto; }\n\n.textarea {\n  display: block;\n  line-height: 1.2;\n  max-height: 600px;\n  max-width: 100%;\n  min-height: 120px;\n  min-width: 100%;\n  padding: 10px;\n  resize: vertical; }\n\n.checkbox, .radio {\n  cursor: pointer;\n  display: inline-block;\n  line-height: 16px;\n  position: relative;\n  vertical-align: top; }\n  .checkbox input, .radio input {\n    cursor: pointer; }\n  .checkbox:hover, .radio:hover {\n    color: #222324; }\n  .is-disabled.checkbox, .is-disabled.radio {\n    color: #aeb1b5;\n    pointer-events: none; }\n    .is-disabled.checkbox input, .is-disabled.radio input {\n      pointer-events: none; }\n\n.radio + .radio {\n  margin-left: 10px; }\n\n.select {\n  display: inline-block;\n  height: 32px;\n  position: relative;\n  vertical-align: top; }\n  .select select {\n    -moz-appearance: none;\n    -webkit-appearance: none;\n    align-items: center;\n    background-color: white;\n    border: 1px solid #d3d6db;\n    border-radius: 3px;\n    color: #222324;\n    display: inline-flex;\n    font-size: 14px;\n    height: 32px;\n    justify-content: flex-start;\n    line-height: 24px;\n    padding-left: 8px;\n    padding-right: 8px;\n    position: relative;\n    vertical-align: top;\n    cursor: pointer;\n    display: block;\n    outline: none;\n    padding-right: 36px; }\n    .select select:hover {\n      border-color: #aeb1b5; }\n    .select select:active, .select select:focus, .select select.is-active {\n      border-color: #1fc8db;\n      outline: none; }\n    .select select[disabled], .select select.is-disabled {\n      background-color: #f5f7fa;\n      border-color: #d3d6db;\n      cursor: not-allowed;\n      pointer-events: none; }\n      .select select[disabled]::-moz-placeholder, .select select.is-disabled::-moz-placeholder {\n        color: rgba(34, 35, 36, 0.3); }\n      .select select[disabled]::-webkit-input-placeholder, .select select.is-disabled::-webkit-input-placeholder {\n        color: rgba(34, 35, 36, 0.3); }\n      .select select[disabled]:-moz-placeholder, .select select.is-disabled:-moz-placeholder {\n        color: rgba(34, 35, 36, 0.3); }\n      .select select[disabled]:-ms-input-placeholder, .select select.is-disabled:-ms-input-placeholder {\n        color: rgba(34, 35, 36, 0.3); }\n    .select select.is-white {\n      border-color: #fff; }\n    .select select.is-black {\n      border-color: #111; }\n    .select select.is-light {\n      border-color: #f5f7fa; }\n    .select select.is-dark {\n      border-color: #69707a; }\n    .select select.is-primary {\n      border-color: #1fc8db; }\n    .select select.is-info {\n      border-color: #42afe3; }\n    .select select.is-success {\n      border-color: #97cd76; }\n    .select select.is-warning {\n      border-color: #fce473; }\n    .select select.is-danger {\n      border-color: #ed6c63; }\n    .select select:hover {\n      border-color: #aeb1b5; }\n    .select select::ms-expand {\n      display: none; }\n  .select.is-fullwidth {\n    width: 100%; }\n    .select.is-fullwidth select {\n      width: 100%; }\n  .select:after {\n    border: 1px solid #1fc8db;\n    border-right: 0;\n    border-top: 0;\n    content: \" \";\n    display: block;\n    height: 7px;\n    pointer-events: none;\n    position: absolute;\n    transform: rotate(-45deg);\n    width: 7px;\n    margin-top: -6px;\n    right: 16px;\n    top: 50%; }\n  .select:hover:after {\n    border-color: #222324; }\n  .select.is-small {\n    height: 24px; }\n    .select.is-small select {\n      border-radius: 2px;\n      font-size: 11px;\n      height: 24px;\n      line-height: 16px;\n      padding-left: 6px;\n      padding-right: 6px;\n      padding-right: 28px; }\n  .select.is-medium {\n    height: 40px; }\n    .select.is-medium select {\n      font-size: 18px;\n      height: 40px;\n      line-height: 32px;\n      padding-left: 10px;\n      padding-right: 10px;\n      padding-right: 44px; }\n  .select.is-large {\n    height: 48px; }\n    .select.is-large select {\n      font-size: 24px;\n      height: 48px;\n      line-height: 40px;\n      padding-left: 12px;\n      padding-right: 12px;\n      padding-right: 52px; }\n\n.label {\n  color: #222324;\n  display: block;\n  font-weight: bold; }\n  .label:not(:last-child) {\n    margin-bottom: 5px; }\n\n.help {\n  display: block;\n  font-size: 11px;\n  margin-top: 5px; }\n  .help.is-white {\n    color: #fff; }\n  .help.is-black {\n    color: #111; }\n  .help.is-light {\n    color: #f5f7fa; }\n  .help.is-dark {\n    color: #69707a; }\n  .help.is-primary {\n    color: #1fc8db; }\n  .help.is-info {\n    color: #42afe3; }\n  .help.is-success {\n    color: #97cd76; }\n  .help.is-warning {\n    color: #fce473; }\n  .help.is-danger {\n    color: #ed6c63; }\n\n@media screen and (max-width: 768px) {\n  .control-label {\n    margin-bottom: 5px; } }\n\n@media screen and (min-width: 769px) {\n  .control-label {\n    flex-grow: 1;\n    margin-right: 20px;\n    padding-top: 7px;\n    text-align: right; } }\n\n.control {\n  position: relative;\n  text-align: left; }\n  .control:not(:last-child) {\n    margin-bottom: 10px; }\n  .control.has-addons {\n    display: flex;\n    justify-content: flex-start; }\n    .control.has-addons .button,\n    .control.has-addons .input,\n    .control.has-addons .textarea,\n    .control.has-addons .select {\n      border-radius: 0;\n      margin-right: -1px;\n      width: auto; }\n      .control.has-addons .button:hover,\n      .control.has-addons .input:hover,\n      .control.has-addons .textarea:hover,\n      .control.has-addons .select:hover {\n        z-index: 2; }\n      .control.has-addons .button:active, .control.has-addons .button:focus,\n      .control.has-addons .input:active,\n      .control.has-addons .textarea:active,\n      .control.has-addons .input:focus,\n      .control.has-addons .textarea:focus,\n      .control.has-addons .select:active,\n      .control.has-addons .select:focus {\n        z-index: 3; }\n      .control.has-addons .button:first-child,\n      .control.has-addons .input:first-child,\n      .control.has-addons .textarea:first-child,\n      .control.has-addons .select:first-child {\n        border-radius: 3px 0 0 3px; }\n        .control.has-addons .button:first-child select,\n        .control.has-addons .input:first-child select,\n        .control.has-addons .textarea:first-child select,\n        .control.has-addons .select:first-child select {\n          border-radius: 3px 0 0 3px; }\n      .control.has-addons .button:last-child,\n      .control.has-addons .input:last-child,\n      .control.has-addons .textarea:last-child,\n      .control.has-addons .select:last-child {\n        border-radius: 0 3px 3px 0; }\n        .control.has-addons .button:last-child select,\n        .control.has-addons .input:last-child select,\n        .control.has-addons .textarea:last-child select,\n        .control.has-addons .select:last-child select {\n          border-radius: 0 3px 3px 0; }\n      .control.has-addons .button.is-expanded,\n      .control.has-addons .input.is-expanded,\n      .control.has-addons .is-expanded.textarea,\n      .control.has-addons .select.is-expanded {\n        flex-grow: 1; }\n    .control.has-addons.has-addons-centered {\n      justify-content: center; }\n    .control.has-addons.has-addons-right {\n      justify-content: flex-end; }\n    .control.has-addons.has-addons-fullwidth .button,\n    .control.has-addons.has-addons-fullwidth .input,\n    .control.has-addons.has-addons-fullwidth .textarea,\n    .control.has-addons.has-addons-fullwidth .select {\n      flex-grow: 1; }\n  .control.has-icon > .fa {\n    display: inline-block;\n    font-size: 14px;\n    height: 24px;\n    line-height: 24px;\n    text-align: center;\n    vertical-align: top;\n    width: 24px;\n    color: #aeb1b5;\n    pointer-events: none;\n    position: absolute;\n    top: 4px;\n    z-index: 4; }\n  .control.has-icon .input:focus + .fa, .control.has-icon .textarea:focus + .fa {\n    color: #222324; }\n  .control.has-icon .input.is-small + .fa, .control.has-icon .is-small.textarea + .fa {\n    font-size: 10.5px;\n    top: 0; }\n  .control.has-icon .input.is-medium + .fa, .control.has-icon .is-medium.textarea + .fa {\n    font-size: 21px;\n    top: 8px; }\n  .control.has-icon .input.is-large + .fa, .control.has-icon .is-large.textarea + .fa {\n    font-size: 21px;\n    top: 12px; }\n  .control.has-icon:not(.has-icon-right) > .fa {\n    left: 4px; }\n  .control.has-icon:not(.has-icon-right) .input, .control.has-icon:not(.has-icon-right) .textarea {\n    padding-left: 32px; }\n    .control.has-icon:not(.has-icon-right) .input.is-small, .control.has-icon:not(.has-icon-right) .is-small.textarea {\n      padding-left: 24px; }\n      .control.has-icon:not(.has-icon-right) .input.is-small + .fa, .control.has-icon:not(.has-icon-right) .is-small.textarea + .fa {\n        left: 0; }\n    .control.has-icon:not(.has-icon-right) .input.is-medium, .control.has-icon:not(.has-icon-right) .is-medium.textarea {\n      padding-left: 40px; }\n      .control.has-icon:not(.has-icon-right) .input.is-medium + .fa, .control.has-icon:not(.has-icon-right) .is-medium.textarea + .fa {\n        left: 8px; }\n    .control.has-icon:not(.has-icon-right) .input.is-large, .control.has-icon:not(.has-icon-right) .is-large.textarea {\n      padding-left: 48px; }\n      .control.has-icon:not(.has-icon-right) .input.is-large + .fa, .control.has-icon:not(.has-icon-right) .is-large.textarea + .fa {\n        left: 12px; }\n  .control.has-icon.has-icon-right > .fa {\n    right: 4px; }\n  .control.has-icon.has-icon-right .input, .control.has-icon.has-icon-right .textarea {\n    padding-right: 32px; }\n    .control.has-icon.has-icon-right .input.is-small, .control.has-icon.has-icon-right .is-small.textarea {\n      padding-right: 24px; }\n      .control.has-icon.has-icon-right .input.is-small + .fa, .control.has-icon.has-icon-right .is-small.textarea + .fa {\n        right: 0; }\n    .control.has-icon.has-icon-right .input.is-medium, .control.has-icon.has-icon-right .is-medium.textarea {\n      padding-right: 40px; }\n      .control.has-icon.has-icon-right .input.is-medium + .fa, .control.has-icon.has-icon-right .is-medium.textarea + .fa {\n        right: 8px; }\n    .control.has-icon.has-icon-right .input.is-large, .control.has-icon.has-icon-right .is-large.textarea {\n      padding-right: 48px; }\n      .control.has-icon.has-icon-right .input.is-large + .fa, .control.has-icon.has-icon-right .is-large.textarea + .fa {\n        right: 12px; }\n  .control.is-grouped {\n    display: flex;\n    justify-content: flex-start; }\n    .control.is-grouped > .control:not(:last-child) {\n      margin-bottom: 0;\n      margin-right: 10px; }\n    .control.is-grouped > .control.is-expanded {\n      flex-grow: 1; }\n    .control.is-grouped.is-grouped-centered {\n      justify-content: center; }\n    .control.is-grouped.is-grouped-right {\n      justify-content: flex-end; }\n  @media screen and (min-width: 769px) {\n    .control.is-horizontal {\n      display: flex; }\n      .control.is-horizontal > .control {\n        display: flex;\n        flex-grow: 5; } }\n  .control.is-loading:after {\n    position: absolute !important;\n    right: 8px;\n    top: 8px; }\n\n.image {\n  display: block;\n  position: relative; }\n  .image img {\n    display: block;\n    height: auto;\n    width: 100%; }\n  .image.is-square img, .image.is-1by1 img, .image.is-4by3 img, .image.is-3by2 img, .image.is-16by9 img, .image.is-2by1 img {\n    bottom: 0;\n    left: 0;\n    position: absolute;\n    right: 0;\n    top: 0;\n    height: 100%;\n    width: 100%; }\n  .image.is-square, .image.is-1by1 {\n    padding-top: 100%; }\n  .image.is-4by3 {\n    padding-top: 75%; }\n  .image.is-3by2 {\n    padding-top: 66.6666%; }\n  .image.is-16by9 {\n    padding-top: 56.25%; }\n  .image.is-2by1 {\n    padding-top: 50%; }\n  .image.is-16x16 {\n    height: 16px;\n    width: 16px; }\n  .image.is-24x24 {\n    height: 24px;\n    width: 24px; }\n  .image.is-32x32 {\n    height: 32px;\n    width: 32px; }\n  .image.is-48x48 {\n    height: 48px;\n    width: 48px; }\n  .image.is-64x64 {\n    height: 64px;\n    width: 64px; }\n  .image.is-96x96 {\n    height: 96px;\n    width: 96px; }\n  .image.is-128x128 {\n    height: 128px;\n    width: 128px; }\n\n.notification {\n  background-color: #f5f7fa;\n  border-radius: 3px;\n  padding: 16px 20px;\n  position: relative; }\n  .notification:after {\n    clear: both;\n    content: \" \";\n    display: table; }\n  .notification .delete, .notification .modal-close {\n    border-radius: 0 3px;\n    float: right;\n    margin: -16px -20px 0 20px; }\n  .notification .subtitle,\n  .notification .title {\n    color: inherit; }\n  .notification.is-white {\n    background-color: #fff;\n    color: #111; }\n  .notification.is-black {\n    background-color: #111;\n    color: #fff; }\n  .notification.is-light {\n    background-color: #f5f7fa;\n    color: #69707a; }\n  .notification.is-dark {\n    background-color: #69707a;\n    color: #f5f7fa; }\n  .notification.is-primary {\n    background-color: #1fc8db;\n    color: white; }\n  .notification.is-info {\n    background-color: #42afe3;\n    color: white; }\n  .notification.is-success {\n    background-color: #97cd76;\n    color: white; }\n  .notification.is-warning {\n    background-color: #fce473;\n    color: rgba(17, 17, 17, 0.5); }\n  .notification.is-danger {\n    background-color: #ed6c63;\n    color: white; }\n\n.progress {\n  -moz-appearance: none;\n  -webkit-appearance: none;\n  border: none;\n  border-radius: 290486px;\n  display: block;\n  height: 12px;\n  overflow: hidden;\n  padding: 0;\n  width: 100%; }\n  .progress::-webkit-progress-bar {\n    background-color: #d3d6db; }\n  .progress::-webkit-progress-value {\n    background-color: #69707a; }\n  .progress::-moz-progress-bar {\n    background-color: #69707a; }\n  .progress.is-white::-webkit-progress-value {\n    background-color: #fff; }\n  .progress.is-white::-moz-progress-bar {\n    background-color: #fff; }\n  .progress.is-black::-webkit-progress-value {\n    background-color: #111; }\n  .progress.is-black::-moz-progress-bar {\n    background-color: #111; }\n  .progress.is-light::-webkit-progress-value {\n    background-color: #f5f7fa; }\n  .progress.is-light::-moz-progress-bar {\n    background-color: #f5f7fa; }\n  .progress.is-dark::-webkit-progress-value {\n    background-color: #69707a; }\n  .progress.is-dark::-moz-progress-bar {\n    background-color: #69707a; }\n  .progress.is-primary::-webkit-progress-value {\n    background-color: #1fc8db; }\n  .progress.is-primary::-moz-progress-bar {\n    background-color: #1fc8db; }\n  .progress.is-info::-webkit-progress-value {\n    background-color: #42afe3; }\n  .progress.is-info::-moz-progress-bar {\n    background-color: #42afe3; }\n  .progress.is-success::-webkit-progress-value {\n    background-color: #97cd76; }\n  .progress.is-success::-moz-progress-bar {\n    background-color: #97cd76; }\n  .progress.is-warning::-webkit-progress-value {\n    background-color: #fce473; }\n  .progress.is-warning::-moz-progress-bar {\n    background-color: #fce473; }\n  .progress.is-danger::-webkit-progress-value {\n    background-color: #ed6c63; }\n  .progress.is-danger::-moz-progress-bar {\n    background-color: #ed6c63; }\n  .progress.is-small {\n    height: 8px; }\n  .progress.is-medium {\n    height: 16px; }\n  .progress.is-large {\n    height: 20px; }\n\n.table {\n  background-color: #fff;\n  color: #222324;\n  margin-bottom: 20px;\n  width: 100%; }\n  .table td,\n  .table th {\n    border: 1px solid #d3d6db;\n    border-width: 0 0 1px;\n    padding: 8px 10px;\n    vertical-align: top; }\n    .table td.is-icon,\n    .table th.is-icon {\n      padding: 5px;\n      text-align: center;\n      white-space: nowrap;\n      width: 1%; }\n      .table td.is-icon .fa,\n      .table th.is-icon .fa {\n        display: inline-block;\n        font-size: 21px;\n        height: 24px;\n        line-height: 24px;\n        text-align: center;\n        vertical-align: top;\n        width: 24px; }\n      .table td.is-icon.is-link,\n      .table th.is-icon.is-link {\n        padding: 0; }\n        .table td.is-icon.is-link > a,\n        .table th.is-icon.is-link > a {\n          padding: 5px; }\n    .table td.is-link,\n    .table th.is-link {\n      padding: 0; }\n      .table td.is-link > a,\n      .table th.is-link > a {\n        display: block;\n        padding: 8px 10px; }\n        .table td.is-link > a:hover,\n        .table th.is-link > a:hover {\n          background-color: #1fc8db;\n          color: white; }\n    .table td.is-narrow,\n    .table th.is-narrow {\n      white-space: nowrap;\n      width: 1%; }\n  .table th {\n    color: #222324;\n    text-align: left; }\n  .table tr:hover {\n    background-color: #f5f7fa;\n    color: #222324; }\n  .table thead td,\n  .table thead th {\n    border-width: 0 0 2px;\n    color: #aeb1b5; }\n  .table tbody tr:last-child td,\n  .table tbody tr:last-child th {\n    border-bottom-width: 0; }\n  .table tfoot td,\n  .table tfoot th {\n    border-width: 2px 0 0;\n    color: #aeb1b5; }\n  .table.is-bordered td,\n  .table.is-bordered th {\n    border-width: 1px; }\n  .table.is-bordered tr:last-child td,\n  .table.is-bordered tr:last-child th {\n    border-bottom-width: 1px; }\n  .table.is-narrow td,\n  .table.is-narrow th {\n    padding: 5px 10px; }\n    .table.is-narrow td.is-icon,\n    .table.is-narrow th.is-icon {\n      padding: 2px; }\n      .table.is-narrow td.is-icon.is-link,\n      .table.is-narrow th.is-icon.is-link {\n        padding: 0; }\n        .table.is-narrow td.is-icon.is-link > a,\n        .table.is-narrow th.is-icon.is-link > a {\n          padding: 2px; }\n    .table.is-narrow td.is-link,\n    .table.is-narrow th.is-link {\n      padding: 0; }\n      .table.is-narrow td.is-link > a,\n      .table.is-narrow th.is-link > a {\n        padding: 5px 10px; }\n  .table.is-striped tbody tr:hover {\n    background-color: #eef2f7; }\n  .table.is-striped tbody tr:nth-child(2n) {\n    background-color: #f5f7fa; }\n    .table.is-striped tbody tr:nth-child(2n):hover {\n      background-color: #eef2f7; }\n\n.title,\n.subtitle {\n  font-weight: 300;\n  word-break: break-word; }\n  .title em,\n  .title span,\n  .subtitle em,\n  .subtitle span {\n    font-weight: 300; }\n  .title a:hover,\n  .subtitle a:hover {\n    border-bottom: 1px solid; }\n  .title strong,\n  .subtitle strong {\n    font-weight: 500; }\n  .title .tag,\n  .subtitle .tag {\n    vertical-align: bottom; }\n\n.title {\n  color: #222324;\n  font-size: 28px;\n  line-height: 1; }\n  .title code {\n    display: inline-block;\n    font-size: 28px; }\n  .title strong {\n    color: inherit; }\n  .title + .highlight {\n    margin-top: -10px; }\n  .title + .subtitle {\n    margin-top: -10px; }\n  .title.is-1 {\n    font-size: 48px; }\n    .title.is-1 code {\n      font-size: 40px; }\n  .title.is-2 {\n    font-size: 40px; }\n    .title.is-2 code {\n      font-size: 28px; }\n  .title.is-3 {\n    font-size: 28px; }\n    .title.is-3 code {\n      font-size: 24px; }\n  .title.is-4 {\n    font-size: 24px; }\n    .title.is-4 code {\n      font-size: 18px; }\n  .title.is-5 {\n    font-size: 18px; }\n    .title.is-5 code {\n      font-size: 14px; }\n  .title.is-6 {\n    font-size: 14px; }\n    .title.is-6 code {\n      font-size: 14px; }\n  .title.is-normal {\n    font-weight: 400; }\n    .title.is-normal strong {\n      font-weight: 700; }\n  @media screen and (min-width: 769px) {\n    .title + .subtitle {\n      margin-top: -15px; } }\n\n.subtitle {\n  color: #69707a;\n  font-size: 18px;\n  line-height: 1.125; }\n  .subtitle code {\n    border-radius: 3px;\n    display: inline-block;\n    font-size: 14px;\n    padding: 2px 3px;\n    vertical-align: top; }\n  .subtitle strong {\n    color: #222324; }\n  .subtitle + .title {\n    margin-top: -20px; }\n  .subtitle.is-1 {\n    font-size: 48px; }\n    .subtitle.is-1 code {\n      font-size: 40px; }\n  .subtitle.is-2 {\n    font-size: 40px; }\n    .subtitle.is-2 code {\n      font-size: 28px; }\n  .subtitle.is-3 {\n    font-size: 28px; }\n    .subtitle.is-3 code {\n      font-size: 24px; }\n  .subtitle.is-4 {\n    font-size: 24px; }\n    .subtitle.is-4 code {\n      font-size: 18px; }\n  .subtitle.is-5 {\n    font-size: 18px; }\n    .subtitle.is-5 code {\n      font-size: 14px; }\n  .subtitle.is-6 {\n    font-size: 14px; }\n    .subtitle.is-6 code {\n      font-size: 14px; }\n  .subtitle.is-normal {\n    font-weight: 400; }\n    .subtitle.is-normal strong {\n      font-weight: 700; }\n\n.delete, .modal-close {\n  -moz-appearance: none;\n  -webkit-appearance: none;\n  background-color: rgba(17, 17, 17, 0.2);\n  border: none;\n  border-radius: 290486px;\n  cursor: pointer;\n  display: inline-block;\n  height: 24px;\n  position: relative;\n  vertical-align: top;\n  width: 24px; }\n  .delete:before, .modal-close:before, .delete:after, .modal-close:after {\n    background-color: #fff;\n    content: \"\";\n    display: block;\n    height: 2px;\n    left: 50%;\n    margin-left: -25%;\n    margin-top: -1px;\n    position: absolute;\n    top: 50%;\n    width: 50%; }\n  .delete:before, .modal-close:before {\n    transform: rotate(45deg); }\n  .delete:after, .modal-close:after {\n    transform: rotate(-45deg); }\n  .delete:hover, .modal-close:hover {\n    background-color: rgba(17, 17, 17, 0.5); }\n  .delete.is-small, .tag:not(.is-large) .delete, .tag:not(.is-large) .modal-close, .is-small.modal-close {\n    height: 16px;\n    width: 16px; }\n  .delete.is-medium, .is-medium.modal-close {\n    height: 32px;\n    width: 32px; }\n  .delete.is-large, .is-large.modal-close {\n    height: 40px;\n    width: 40px; }\n\n.icon {\n  display: inline-block;\n  font-size: 21px;\n  height: 24px;\n  line-height: 24px;\n  text-align: center;\n  vertical-align: top;\n  width: 24px; }\n  .icon .fa {\n    font-size: inherit;\n    line-height: inherit; }\n  .icon.is-small {\n    display: inline-block;\n    font-size: 14px;\n    height: 16px;\n    line-height: 16px;\n    text-align: center;\n    vertical-align: top;\n    width: 16px; }\n  .icon.is-medium {\n    display: inline-block;\n    font-size: 28px;\n    height: 32px;\n    line-height: 32px;\n    text-align: center;\n    vertical-align: top;\n    width: 32px; }\n  .icon.is-large {\n    display: inline-block;\n    font-size: 42px;\n    height: 48px;\n    line-height: 48px;\n    text-align: center;\n    vertical-align: top;\n    width: 48px; }\n\n.hamburger, .nav-toggle {\n  cursor: pointer;\n  display: block;\n  height: 50px;\n  position: relative;\n  width: 50px; }\n  .hamburger span, .nav-toggle span {\n    background-color: #69707a;\n    display: block;\n    height: 1px;\n    left: 50%;\n    margin-left: -7px;\n    position: absolute;\n    top: 50%;\n    transition: none 86ms ease-out;\n    transition-property: background, left, opacity, transform;\n    width: 15px; }\n    .hamburger span:nth-child(1), .nav-toggle span:nth-child(1) {\n      margin-top: -6px; }\n    .hamburger span:nth-child(2), .nav-toggle span:nth-child(2) {\n      margin-top: -1px; }\n    .hamburger span:nth-child(3), .nav-toggle span:nth-child(3) {\n      margin-top: 4px; }\n  .hamburger:hover, .nav-toggle:hover {\n    background-color: #f5f7fa; }\n  .hamburger.is-active span, .is-active.nav-toggle span {\n    background-color: #1fc8db; }\n    .hamburger.is-active span:nth-child(1), .is-active.nav-toggle span:nth-child(1) {\n      margin-left: -5px;\n      transform: rotate(45deg);\n      transform-origin: left top; }\n    .hamburger.is-active span:nth-child(2), .is-active.nav-toggle span:nth-child(2) {\n      opacity: 0; }\n    .hamburger.is-active span:nth-child(3), .is-active.nav-toggle span:nth-child(3) {\n      margin-left: -5px;\n      transform: rotate(-45deg);\n      transform-origin: left bottom; }\n\n.heading {\n  display: block;\n  font-size: 11px;\n  letter-spacing: 1px;\n  margin-bottom: 5px;\n  text-transform: uppercase; }\n\n.highlight {\n  font-size: 12px;\n  font-weight: normal;\n  max-width: 100%;\n  overflow: hidden;\n  padding: 0; }\n  .highlight pre {\n    overflow: auto;\n    max-width: 100%; }\n\n.loader, .button.is-loading:after, .control.is-loading:after {\n  animation: spin-around 500ms infinite linear;\n  border: 2px solid #d3d6db;\n  border-radius: 290486px;\n  border-right-color: transparent;\n  border-top-color: transparent;\n  content: \"\";\n  display: block;\n  height: 16px;\n  position: relative;\n  width: 16px; }\n\n.number {\n  background-color: #f5f7fa;\n  border-radius: 290486px;\n  display: inline-block;\n  font-size: 18px;\n  vertical-align: top; }\n\n.tag {\n  align-items: center;\n  background-color: #f5f7fa;\n  border-radius: 290486px;\n  color: #69707a;\n  display: inline-flex;\n  font-size: 12px;\n  height: 24px;\n  justify-content: center;\n  line-height: 16px;\n  padding-left: 10px;\n  padding-right: 10px;\n  vertical-align: top;\n  white-space: nowrap; }\n  .tag .delete, .tag .modal-close {\n    margin-left: 4px;\n    margin-right: -6px; }\n  .tag.is-white {\n    background-color: #fff;\n    color: #111; }\n  .tag.is-black {\n    background-color: #111;\n    color: #fff; }\n  .tag.is-light {\n    background-color: #f5f7fa;\n    color: #69707a; }\n  .tag.is-dark {\n    background-color: #69707a;\n    color: #f5f7fa; }\n  .tag.is-primary {\n    background-color: #1fc8db;\n    color: white; }\n  .tag.is-info {\n    background-color: #42afe3;\n    color: white; }\n  .tag.is-success {\n    background-color: #97cd76;\n    color: white; }\n  .tag.is-warning {\n    background-color: #fce473;\n    color: rgba(17, 17, 17, 0.5); }\n  .tag.is-danger {\n    background-color: #ed6c63;\n    color: white; }\n  .tag.is-small {\n    font-size: 11px;\n    height: 20px;\n    padding-left: 8px;\n    padding-right: 8px; }\n  .tag.is-medium {\n    font-size: 14px;\n    height: 32px;\n    padding-left: 14px;\n    padding-right: 14px; }\n  .tag.is-large {\n    font-size: 18px;\n    height: 40px;\n    line-height: 24px;\n    padding-left: 18px;\n    padding-right: 18px; }\n    .tag.is-large .delete, .tag.is-large .modal-close {\n      margin-left: 4px;\n      margin-right: -8px; }\n\n.unselectable, .is-unselectable, .button, .delete, .modal-close, .tabs {\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none; }\n\n.card-header {\n  align-items: stretch;\n  box-shadow: 0 1px 2px rgba(17, 17, 17, 0.1);\n  display: flex;\n  min-height: 40px; }\n\n.card-header-title {\n  align-items: flex-start;\n  color: #222324;\n  display: flex;\n  flex-grow: 1;\n  font-weight: bold;\n  padding: 10px; }\n\n.card-header-icon {\n  align-items: center;\n  cursor: pointer;\n  display: flex;\n  justify-content: center;\n  width: 40px; }\n\n.card-image {\n  display: block;\n  position: relative; }\n\n.card-content {\n  padding: 20px; }\n  .card-content .title + .subtitle {\n    margin-top: -20px; }\n\n.card-footer {\n  border-top: 1px solid #d3d6db;\n  align-items: stretch;\n  display: flex; }\n\n.card-footer-item {\n  align-items: center;\n  display: flex;\n  flex-grow: 1;\n  justify-content: center;\n  padding: 10px; }\n  .card-footer-item:not(:last-child) {\n    border-right: 1px solid #d3d6db; }\n\n.card {\n  background-color: #fff;\n  box-shadow: 0 2px 3px rgba(17, 17, 17, 0.1), 0 0 0 1px rgba(17, 17, 17, 0.1);\n  color: #69707a;\n  max-width: 100%;\n  position: relative;\n  width: 300px; }\n  .card .media:not(:last-child) {\n    margin-bottom: 10px; }\n  .card.is-fullwidth {\n    width: 100%; }\n  .card.is-rounded {\n    border-radius: 5px; }\n\n.column {\n  flex-basis: 0;\n  flex-grow: 1;\n  flex-shrink: 1;\n  padding: 10px; }\n  .columns.is-mobile > .column.is-narrow {\n    flex: none; }\n  .columns.is-mobile > .column.is-full {\n    flex: none;\n    width: 100%; }\n  .columns.is-mobile > .column.is-three-quarters {\n    flex: none;\n    width: 75%; }\n  .columns.is-mobile > .column.is-two-thirds {\n    flex: none;\n    width: 66.6666%; }\n  .columns.is-mobile > .column.is-half {\n    flex: none;\n    width: 50%; }\n  .columns.is-mobile > .column.is-one-third {\n    flex: none;\n    width: 33.3333%; }\n  .columns.is-mobile > .column.is-one-quarter {\n    flex: none;\n    width: 25%; }\n  .columns.is-mobile > .column.is-offset-three-quarters {\n    margin-left: 75%; }\n  .columns.is-mobile > .column.is-offset-two-thirds {\n    margin-left: 66.6666%; }\n  .columns.is-mobile > .column.is-offset-half {\n    margin-left: 50%; }\n  .columns.is-mobile > .column.is-offset-one-third {\n    margin-left: 33.3333%; }\n  .columns.is-mobile > .column.is-offset-one-quarter {\n    margin-left: 25%; }\n  .columns.is-mobile > .column.is-1 {\n    flex: none;\n    width: 8.33333%; }\n  .columns.is-mobile > .column.is-offset-1 {\n    margin-left: 8.33333%; }\n  .columns.is-mobile > .column.is-2 {\n    flex: none;\n    width: 16.66667%; }\n  .columns.is-mobile > .column.is-offset-2 {\n    margin-left: 16.66667%; }\n  .columns.is-mobile > .column.is-3 {\n    flex: none;\n    width: 25%; }\n  .columns.is-mobile > .column.is-offset-3 {\n    margin-left: 25%; }\n  .columns.is-mobile > .column.is-4 {\n    flex: none;\n    width: 33.33333%; }\n  .columns.is-mobile > .column.is-offset-4 {\n    margin-left: 33.33333%; }\n  .columns.is-mobile > .column.is-5 {\n    flex: none;\n    width: 41.66667%; }\n  .columns.is-mobile > .column.is-offset-5 {\n    margin-left: 41.66667%; }\n  .columns.is-mobile > .column.is-6 {\n    flex: none;\n    width: 50%; }\n  .columns.is-mobile > .column.is-offset-6 {\n    margin-left: 50%; }\n  .columns.is-mobile > .column.is-7 {\n    flex: none;\n    width: 58.33333%; }\n  .columns.is-mobile > .column.is-offset-7 {\n    margin-left: 58.33333%; }\n  .columns.is-mobile > .column.is-8 {\n    flex: none;\n    width: 66.66667%; }\n  .columns.is-mobile > .column.is-offset-8 {\n    margin-left: 66.66667%; }\n  .columns.is-mobile > .column.is-9 {\n    flex: none;\n    width: 75%; }\n  .columns.is-mobile > .column.is-offset-9 {\n    margin-left: 75%; }\n  .columns.is-mobile > .column.is-10 {\n    flex: none;\n    width: 83.33333%; }\n  .columns.is-mobile > .column.is-offset-10 {\n    margin-left: 83.33333%; }\n  .columns.is-mobile > .column.is-11 {\n    flex: none;\n    width: 91.66667%; }\n  .columns.is-mobile > .column.is-offset-11 {\n    margin-left: 91.66667%; }\n  .columns.is-mobile > .column.is-12 {\n    flex: none;\n    width: 100%; }\n  .columns.is-mobile > .column.is-offset-12 {\n    margin-left: 100%; }\n  @media screen and (max-width: 768px) {\n    .column.is-narrow-mobile {\n      flex: none; }\n    .column.is-full-mobile {\n      flex: none;\n      width: 100%; }\n    .column.is-three-quarters-mobile {\n      flex: none;\n      width: 75%; }\n    .column.is-two-thirds-mobile {\n      flex: none;\n      width: 66.6666%; }\n    .column.is-half-mobile {\n      flex: none;\n      width: 50%; }\n    .column.is-one-third-mobile {\n      flex: none;\n      width: 33.3333%; }\n    .column.is-one-quarter-mobile {\n      flex: none;\n      width: 25%; }\n    .column.is-offset-three-quarters-mobile {\n      margin-left: 75%; }\n    .column.is-offset-two-thirds-mobile {\n      margin-left: 66.6666%; }\n    .column.is-offset-half-mobile {\n      margin-left: 50%; }\n    .column.is-offset-one-third-mobile {\n      margin-left: 33.3333%; }\n    .column.is-offset-one-quarter-mobile {\n      margin-left: 25%; }\n    .column.is-1-mobile {\n      flex: none;\n      width: 8.33333%; }\n    .column.is-offset-1-mobile {\n      margin-left: 8.33333%; }\n    .column.is-2-mobile {\n      flex: none;\n      width: 16.66667%; }\n    .column.is-offset-2-mobile {\n      margin-left: 16.66667%; }\n    .column.is-3-mobile {\n      flex: none;\n      width: 25%; }\n    .column.is-offset-3-mobile {\n      margin-left: 25%; }\n    .column.is-4-mobile {\n      flex: none;\n      width: 33.33333%; }\n    .column.is-offset-4-mobile {\n      margin-left: 33.33333%; }\n    .column.is-5-mobile {\n      flex: none;\n      width: 41.66667%; }\n    .column.is-offset-5-mobile {\n      margin-left: 41.66667%; }\n    .column.is-6-mobile {\n      flex: none;\n      width: 50%; }\n    .column.is-offset-6-mobile {\n      margin-left: 50%; }\n    .column.is-7-mobile {\n      flex: none;\n      width: 58.33333%; }\n    .column.is-offset-7-mobile {\n      margin-left: 58.33333%; }\n    .column.is-8-mobile {\n      flex: none;\n      width: 66.66667%; }\n    .column.is-offset-8-mobile {\n      margin-left: 66.66667%; }\n    .column.is-9-mobile {\n      flex: none;\n      width: 75%; }\n    .column.is-offset-9-mobile {\n      margin-left: 75%; }\n    .column.is-10-mobile {\n      flex: none;\n      width: 83.33333%; }\n    .column.is-offset-10-mobile {\n      margin-left: 83.33333%; }\n    .column.is-11-mobile {\n      flex: none;\n      width: 91.66667%; }\n    .column.is-offset-11-mobile {\n      margin-left: 91.66667%; }\n    .column.is-12-mobile {\n      flex: none;\n      width: 100%; }\n    .column.is-offset-12-mobile {\n      margin-left: 100%; } }\n  @media screen and (min-width: 769px) {\n    .column.is-narrow, .column.is-narrow-tablet {\n      flex: none; }\n    .column.is-full, .column.is-full-tablet {\n      flex: none;\n      width: 100%; }\n    .column.is-three-quarters, .column.is-three-quarters-tablet {\n      flex: none;\n      width: 75%; }\n    .column.is-two-thirds, .column.is-two-thirds-tablet {\n      flex: none;\n      width: 66.6666%; }\n    .column.is-half, .column.is-half-tablet {\n      flex: none;\n      width: 50%; }\n    .column.is-one-third, .column.is-one-third-tablet {\n      flex: none;\n      width: 33.3333%; }\n    .column.is-one-quarter, .column.is-one-quarter-tablet {\n      flex: none;\n      width: 25%; }\n    .column.is-offset-three-quarters, .column.is-offset-three-quarters-tablet {\n      margin-left: 75%; }\n    .column.is-offset-two-thirds, .column.is-offset-two-thirds-tablet {\n      margin-left: 66.6666%; }\n    .column.is-offset-half, .column.is-offset-half-tablet {\n      margin-left: 50%; }\n    .column.is-offset-one-third, .column.is-offset-one-third-tablet {\n      margin-left: 33.3333%; }\n    .column.is-offset-one-quarter, .column.is-offset-one-quarter-tablet {\n      margin-left: 25%; }\n    .column.is-1, .column.is-1-tablet {\n      flex: none;\n      width: 8.33333%; }\n    .column.is-offset-1, .column.is-offset-1-tablet {\n      margin-left: 8.33333%; }\n    .column.is-2, .column.is-2-tablet {\n      flex: none;\n      width: 16.66667%; }\n    .column.is-offset-2, .column.is-offset-2-tablet {\n      margin-left: 16.66667%; }\n    .column.is-3, .column.is-3-tablet {\n      flex: none;\n      width: 25%; }\n    .column.is-offset-3, .column.is-offset-3-tablet {\n      margin-left: 25%; }\n    .column.is-4, .column.is-4-tablet {\n      flex: none;\n      width: 33.33333%; }\n    .column.is-offset-4, .column.is-offset-4-tablet {\n      margin-left: 33.33333%; }\n    .column.is-5, .column.is-5-tablet {\n      flex: none;\n      width: 41.66667%; }\n    .column.is-offset-5, .column.is-offset-5-tablet {\n      margin-left: 41.66667%; }\n    .column.is-6, .column.is-6-tablet {\n      flex: none;\n      width: 50%; }\n    .column.is-offset-6, .column.is-offset-6-tablet {\n      margin-left: 50%; }\n    .column.is-7, .column.is-7-tablet {\n      flex: none;\n      width: 58.33333%; }\n    .column.is-offset-7, .column.is-offset-7-tablet {\n      margin-left: 58.33333%; }\n    .column.is-8, .column.is-8-tablet {\n      flex: none;\n      width: 66.66667%; }\n    .column.is-offset-8, .column.is-offset-8-tablet {\n      margin-left: 66.66667%; }\n    .column.is-9, .column.is-9-tablet {\n      flex: none;\n      width: 75%; }\n    .column.is-offset-9, .column.is-offset-9-tablet {\n      margin-left: 75%; }\n    .column.is-10, .column.is-10-tablet {\n      flex: none;\n      width: 83.33333%; }\n    .column.is-offset-10, .column.is-offset-10-tablet {\n      margin-left: 83.33333%; }\n    .column.is-11, .column.is-11-tablet {\n      flex: none;\n      width: 91.66667%; }\n    .column.is-offset-11, .column.is-offset-11-tablet {\n      margin-left: 91.66667%; }\n    .column.is-12, .column.is-12-tablet {\n      flex: none;\n      width: 100%; }\n    .column.is-offset-12, .column.is-offset-12-tablet {\n      margin-left: 100%; } }\n  @media screen and (min-width: 980px) {\n    .column.is-narrow-desktop {\n      flex: none; }\n    .column.is-full-desktop {\n      flex: none;\n      width: 100%; }\n    .column.is-three-quarters-desktop {\n      flex: none;\n      width: 75%; }\n    .column.is-two-thirds-desktop {\n      flex: none;\n      width: 66.6666%; }\n    .column.is-half-desktop {\n      flex: none;\n      width: 50%; }\n    .column.is-one-third-desktop {\n      flex: none;\n      width: 33.3333%; }\n    .column.is-one-quarter-desktop {\n      flex: none;\n      width: 25%; }\n    .column.is-offset-three-quarters-desktop {\n      margin-left: 75%; }\n    .column.is-offset-two-thirds-desktop {\n      margin-left: 66.6666%; }\n    .column.is-offset-half-desktop {\n      margin-left: 50%; }\n    .column.is-offset-one-third-desktop {\n      margin-left: 33.3333%; }\n    .column.is-offset-one-quarter-desktop {\n      margin-left: 25%; }\n    .column.is-1-desktop {\n      flex: none;\n      width: 8.33333%; }\n    .column.is-offset-1-desktop {\n      margin-left: 8.33333%; }\n    .column.is-2-desktop {\n      flex: none;\n      width: 16.66667%; }\n    .column.is-offset-2-desktop {\n      margin-left: 16.66667%; }\n    .column.is-3-desktop {\n      flex: none;\n      width: 25%; }\n    .column.is-offset-3-desktop {\n      margin-left: 25%; }\n    .column.is-4-desktop {\n      flex: none;\n      width: 33.33333%; }\n    .column.is-offset-4-desktop {\n      margin-left: 33.33333%; }\n    .column.is-5-desktop {\n      flex: none;\n      width: 41.66667%; }\n    .column.is-offset-5-desktop {\n      margin-left: 41.66667%; }\n    .column.is-6-desktop {\n      flex: none;\n      width: 50%; }\n    .column.is-offset-6-desktop {\n      margin-left: 50%; }\n    .column.is-7-desktop {\n      flex: none;\n      width: 58.33333%; }\n    .column.is-offset-7-desktop {\n      margin-left: 58.33333%; }\n    .column.is-8-desktop {\n      flex: none;\n      width: 66.66667%; }\n    .column.is-offset-8-desktop {\n      margin-left: 66.66667%; }\n    .column.is-9-desktop {\n      flex: none;\n      width: 75%; }\n    .column.is-offset-9-desktop {\n      margin-left: 75%; }\n    .column.is-10-desktop {\n      flex: none;\n      width: 83.33333%; }\n    .column.is-offset-10-desktop {\n      margin-left: 83.33333%; }\n    .column.is-11-desktop {\n      flex: none;\n      width: 91.66667%; }\n    .column.is-offset-11-desktop {\n      margin-left: 91.66667%; }\n    .column.is-12-desktop {\n      flex: none;\n      width: 100%; }\n    .column.is-offset-12-desktop {\n      margin-left: 100%; } }\n  @media screen and (min-width: 1180px) {\n    .column.is-narrow-widescreen {\n      flex: none; }\n    .column.is-full-widescreen {\n      flex: none;\n      width: 100%; }\n    .column.is-three-quarters-widescreen {\n      flex: none;\n      width: 75%; }\n    .column.is-two-thirds-widescreen {\n      flex: none;\n      width: 66.6666%; }\n    .column.is-half-widescreen {\n      flex: none;\n      width: 50%; }\n    .column.is-one-third-widescreen {\n      flex: none;\n      width: 33.3333%; }\n    .column.is-one-quarter-widescreen {\n      flex: none;\n      width: 25%; }\n    .column.is-offset-three-quarters-widescreen {\n      margin-left: 75%; }\n    .column.is-offset-two-thirds-widescreen {\n      margin-left: 66.6666%; }\n    .column.is-offset-half-widescreen {\n      margin-left: 50%; }\n    .column.is-offset-one-third-widescreen {\n      margin-left: 33.3333%; }\n    .column.is-offset-one-quarter-widescreen {\n      margin-left: 25%; }\n    .column.is-1-widescreen {\n      flex: none;\n      width: 8.33333%; }\n    .column.is-offset-1-widescreen {\n      margin-left: 8.33333%; }\n    .column.is-2-widescreen {\n      flex: none;\n      width: 16.66667%; }\n    .column.is-offset-2-widescreen {\n      margin-left: 16.66667%; }\n    .column.is-3-widescreen {\n      flex: none;\n      width: 25%; }\n    .column.is-offset-3-widescreen {\n      margin-left: 25%; }\n    .column.is-4-widescreen {\n      flex: none;\n      width: 33.33333%; }\n    .column.is-offset-4-widescreen {\n      margin-left: 33.33333%; }\n    .column.is-5-widescreen {\n      flex: none;\n      width: 41.66667%; }\n    .column.is-offset-5-widescreen {\n      margin-left: 41.66667%; }\n    .column.is-6-widescreen {\n      flex: none;\n      width: 50%; }\n    .column.is-offset-6-widescreen {\n      margin-left: 50%; }\n    .column.is-7-widescreen {\n      flex: none;\n      width: 58.33333%; }\n    .column.is-offset-7-widescreen {\n      margin-left: 58.33333%; }\n    .column.is-8-widescreen {\n      flex: none;\n      width: 66.66667%; }\n    .column.is-offset-8-widescreen {\n      margin-left: 66.66667%; }\n    .column.is-9-widescreen {\n      flex: none;\n      width: 75%; }\n    .column.is-offset-9-widescreen {\n      margin-left: 75%; }\n    .column.is-10-widescreen {\n      flex: none;\n      width: 83.33333%; }\n    .column.is-offset-10-widescreen {\n      margin-left: 83.33333%; }\n    .column.is-11-widescreen {\n      flex: none;\n      width: 91.66667%; }\n    .column.is-offset-11-widescreen {\n      margin-left: 91.66667%; }\n    .column.is-12-widescreen {\n      flex: none;\n      width: 100%; }\n    .column.is-offset-12-widescreen {\n      margin-left: 100%; } }\n\n.columns {\n  margin-left: -10px;\n  margin-right: -10px;\n  margin-top: -10px; }\n  .columns:last-child {\n    margin-bottom: -10px; }\n  .columns:not(:last-child) {\n    margin-bottom: 10px; }\n  .columns.is-centered {\n    justify-content: center; }\n  .columns.is-gapless {\n    margin-left: 0;\n    margin-right: 0;\n    margin-top: 0; }\n    .columns.is-gapless:last-child {\n      margin-bottom: 0; }\n    .columns.is-gapless:not(:last-child) {\n      margin-bottom: 20px; }\n    .columns.is-gapless > .column {\n      margin: 0;\n      padding: 0; }\n  @media screen and (min-width: 769px) {\n    .columns.is-grid {\n      flex-wrap: wrap; }\n      .columns.is-grid > .column {\n        max-width: 33.3333%;\n        padding: 10px;\n        width: 33.3333%; }\n        .columns.is-grid > .column + .column {\n          margin-left: 0; } }\n  .columns.is-mobile {\n    display: flex; }\n  .columns.is-multiline {\n    flex-wrap: wrap; }\n  .columns.is-vcentered {\n    align-items: center; }\n  @media screen and (min-width: 769px) {\n    .columns:not(.is-desktop) {\n      display: flex; } }\n  @media screen and (min-width: 980px) {\n    .columns.is-desktop {\n      display: flex; } }\n\n.tile {\n  align-items: stretch;\n  flex-basis: auto;\n  flex-grow: 1;\n  flex-shrink: 1;\n  min-height: min-content; }\n  .tile.is-ancestor {\n    margin-left: -10px;\n    margin-right: -10px;\n    margin-top: -10px; }\n    .tile.is-ancestor:last-child {\n      margin-bottom: -10px; }\n    .tile.is-ancestor:not(:last-child) {\n      margin-bottom: 10px; }\n  .tile.is-child {\n    margin: 0 !important; }\n  .tile.is-parent {\n    padding: 10px; }\n  .tile.is-vertical {\n    flex-direction: column; }\n    .tile.is-vertical > .tile.is-child:not(:last-child) {\n      margin-bottom: 20px !important; }\n  @media screen and (min-width: 769px) {\n    .tile:not(.is-child) {\n      display: flex; }\n    .tile.is-1 {\n      flex: none;\n      width: 8.33333%; }\n    .tile.is-2 {\n      flex: none;\n      width: 16.66667%; }\n    .tile.is-3 {\n      flex: none;\n      width: 25%; }\n    .tile.is-4 {\n      flex: none;\n      width: 33.33333%; }\n    .tile.is-5 {\n      flex: none;\n      width: 41.66667%; }\n    .tile.is-6 {\n      flex: none;\n      width: 50%; }\n    .tile.is-7 {\n      flex: none;\n      width: 58.33333%; }\n    .tile.is-8 {\n      flex: none;\n      width: 66.66667%; }\n    .tile.is-9 {\n      flex: none;\n      width: 75%; }\n    .tile.is-10 {\n      flex: none;\n      width: 83.33333%; }\n    .tile.is-11 {\n      flex: none;\n      width: 91.66667%; }\n    .tile.is-12 {\n      flex: none;\n      width: 100%; } }\n\n.highlight {\n  background-color: #fdf6e3;\n  color: #586e75; }\n  .highlight .c {\n    color: #93a1a1; }\n  .highlight .err,\n  .highlight .g {\n    color: #586e75; }\n  .highlight .k {\n    color: #859900; }\n  .highlight .l,\n  .highlight .n {\n    color: #586e75; }\n  .highlight .o {\n    color: #859900; }\n  .highlight .x {\n    color: #cb4b16; }\n  .highlight .p {\n    color: #586e75; }\n  .highlight .cm {\n    color: #93a1a1; }\n  .highlight .cp {\n    color: #859900; }\n  .highlight .c1 {\n    color: #93a1a1; }\n  .highlight .cs {\n    color: #859900; }\n  .highlight .gd {\n    color: #2aa198; }\n  .highlight .ge {\n    color: #586e75;\n    font-style: italic; }\n  .highlight .gr {\n    color: #dc322f; }\n  .highlight .gh {\n    color: #cb4b16; }\n  .highlight .gi {\n    color: #859900; }\n  .highlight .go,\n  .highlight .gp {\n    color: #586e75; }\n  .highlight .gs {\n    color: #586e75;\n    font-weight: bold; }\n  .highlight .gu {\n    color: #cb4b16; }\n  .highlight .gt {\n    color: #586e75; }\n  .highlight .kc {\n    color: #cb4b16; }\n  .highlight .kd {\n    color: #268bd2; }\n  .highlight .kn,\n  .highlight .kp {\n    color: #859900; }\n  .highlight .kr {\n    color: #268bd2; }\n  .highlight .kt {\n    color: #dc322f; }\n  .highlight .ld {\n    color: #586e75; }\n  .highlight .m,\n  .highlight .s {\n    color: #2aa198; }\n  .highlight .na {\n    color: #B58900; }\n  .highlight .nb {\n    color: #586e75; }\n  .highlight .nc {\n    color: #268bd2; }\n  .highlight .no {\n    color: #cb4b16; }\n  .highlight .nd {\n    color: #268bd2; }\n  .highlight .ni,\n  .highlight .ne {\n    color: #cb4b16; }\n  .highlight .nf {\n    color: #268bd2; }\n  .highlight .nl,\n  .highlight .nn,\n  .highlight .nx,\n  .highlight .py {\n    color: #586e75; }\n  .highlight .nt,\n  .highlight .nv {\n    color: #268bd2; }\n  .highlight .ow {\n    color: #859900; }\n  .highlight .w {\n    color: #586e75; }\n  .highlight .mf,\n  .highlight .mh,\n  .highlight .mi,\n  .highlight .mo {\n    color: #2aa198; }\n  .highlight .sb {\n    color: #93a1a1; }\n  .highlight .sc {\n    color: #2aa198; }\n  .highlight .sd {\n    color: #586e75; }\n  .highlight .s2 {\n    color: #2aa198; }\n  .highlight .se {\n    color: #cb4b16; }\n  .highlight .sh {\n    color: #586e75; }\n  .highlight .si,\n  .highlight .sx {\n    color: #2aa198; }\n  .highlight .sr {\n    color: #dc322f; }\n  .highlight .s1,\n  .highlight .ss {\n    color: #2aa198; }\n  .highlight .bp,\n  .highlight .vc,\n  .highlight .vg,\n  .highlight .vi {\n    color: #268bd2; }\n  .highlight .il {\n    color: #2aa198; }\n\n.level-item .title,\n.level-item .subtitle {\n  margin-bottom: 0; }\n\n@media screen and (max-width: 768px) {\n  .level-item:not(:last-child) {\n    margin-bottom: 10px; } }\n\n.level-left .level-item:not(:last-child),\n.level-right .level-item:not(:last-child) {\n  margin-right: 10px; }\n\n.level-left .level-item.is-flexible,\n.level-right .level-item.is-flexible {\n  flex-grow: 1; }\n\n@media screen and (max-width: 768px) {\n  .level-left + .level-right {\n    margin-top: 20px; } }\n\n@media screen and (min-width: 769px) {\n  .level-left {\n    align-items: center;\n    display: flex; } }\n\n@media screen and (min-width: 769px) {\n  .level-right {\n    align-items: center;\n    display: flex;\n    justify-content: flex-end; } }\n\n.level {\n  align-items: center;\n  justify-content: space-between; }\n  .level code {\n    border-radius: 3px; }\n  .level img {\n    display: inline-block;\n    vertical-align: top; }\n  .level.is-mobile {\n    display: flex; }\n    .level.is-mobile > .level-item:not(:last-child) {\n      margin-bottom: 0; }\n    .level.is-mobile > .level-item:not(.is-narrow) {\n      flex-grow: 1; }\n  @media screen and (min-width: 769px) {\n    .level {\n      display: flex; }\n      .level > .level-item:not(.is-narrow) {\n        flex-grow: 1; } }\n\n.media-number {\n  background-color: #f5f7fa;\n  border-radius: 290486px;\n  display: inline-block;\n  font-size: 18px;\n  height: 32px;\n  line-height: 24px;\n  min-width: 32px;\n  padding: 4px 8px;\n  text-align: center;\n  vertical-align: top; }\n  @media screen and (max-width: 768px) {\n    .media-number {\n      margin-bottom: 10px; } }\n  @media screen and (min-width: 769px) {\n    .media-number {\n      margin-right: 10px; } }\n\n.media-left {\n  margin-right: 10px; }\n\n.media-right {\n  margin-left: 10px; }\n\n.media-content {\n  flex-grow: 1;\n  text-align: left; }\n\n.media {\n  align-items: flex-start;\n  display: flex;\n  text-align: left; }\n  .media .content:not(:last-child) {\n    margin-bottom: 10px; }\n  .media .media {\n    border-top: 1px solid rgba(211, 214, 219, 0.5);\n    display: flex;\n    padding-top: 10px; }\n    .media .media .content:not(:last-child),\n    .media .media .control:not(:last-child) {\n      margin-bottom: 5px; }\n    .media .media .media {\n      padding-top: 5px; }\n      .media .media .media + .media {\n        margin-top: 5px; }\n  .media + .media {\n    border-top: 1px solid rgba(211, 214, 219, 0.5);\n    margin-top: 10px;\n    padding-top: 10px; }\n  .media.is-large + .media {\n    margin-top: 20px;\n    padding-top: 20px; }\n  @media screen and (min-width: 769px) {\n    .media.is-large .media-number {\n      margin-right: 20px; } }\n\n.menu-nav a {\n  display: block;\n  padding: 5px 10px; }\n\n.menu-list a {\n  border-radius: 2px;\n  color: #69707a;\n  display: block;\n  padding: 5px 10px; }\n  .menu-list a:hover {\n    background-color: #f5f7fa;\n    color: #1fc8db; }\n  .menu-list a.is-active {\n    background-color: #1fc8db;\n    color: white; }\n\n.menu-list li ul {\n  border-left: 1px solid #d3d6db;\n  margin: 10px;\n  padding-left: 10px; }\n\n.menu-label {\n  color: #aeb1b5;\n  font-size: 11px;\n  letter-spacing: 1px;\n  margin-bottom: 5px;\n  text-transform: uppercase; }\n  .menu-label:not(:first-child) {\n    margin-top: 20px; }\n\n.message-body {\n  border: 1px solid #d3d6db;\n  border-radius: 3px;\n  padding: 12px 15px; }\n  .message-body strong {\n    color: inherit; }\n\n.message-header {\n  background-color: #69707a;\n  border-radius: 3px 3px 0 0;\n  color: white;\n  padding: 7px 10px; }\n  .message-header strong {\n    color: inherit; }\n  .message-header + .message-body {\n    border-radius: 0 0 3px 3px;\n    border-top: none; }\n\n.message {\n  background-color: #f5f7fa;\n  border-radius: 3px; }\n  .message.is-white {\n    background-color: white; }\n    .message.is-white .message-header {\n      background-color: #fff;\n      color: #111; }\n    .message.is-white .message-body {\n      border-color: #fff;\n      color: #666666; }\n  .message.is-black {\n    background-color: whitesmoke; }\n    .message.is-black .message-header {\n      background-color: #111;\n      color: #fff; }\n    .message.is-black .message-body {\n      border-color: #111;\n      color: gray; }\n  .message.is-light {\n    background-color: #f5f7fa; }\n    .message.is-light .message-header {\n      background-color: #f5f7fa;\n      color: #69707a; }\n    .message.is-light .message-body {\n      border-color: #f5f7fa;\n      color: #666666; }\n  .message.is-dark {\n    background-color: #f4f5f6; }\n    .message.is-dark .message-header {\n      background-color: #69707a;\n      color: #f5f7fa; }\n    .message.is-dark .message-body {\n      border-color: #69707a;\n      color: gray; }\n  .message.is-primary {\n    background-color: #edfbfc; }\n    .message.is-primary .message-header {\n      background-color: #1fc8db;\n      color: white; }\n    .message.is-primary .message-body {\n      border-color: #1fc8db;\n      color: gray; }\n  .message.is-info {\n    background-color: #edf7fc; }\n    .message.is-info .message-header {\n      background-color: #42afe3;\n      color: white; }\n    .message.is-info .message-body {\n      border-color: #42afe3;\n      color: gray; }\n  .message.is-success {\n    background-color: #f4faf0; }\n    .message.is-success .message-header {\n      background-color: #97cd76;\n      color: white; }\n    .message.is-success .message-body {\n      border-color: #97cd76;\n      color: gray; }\n  .message.is-warning {\n    background-color: #fffbeb; }\n    .message.is-warning .message-header {\n      background-color: #fce473;\n      color: rgba(17, 17, 17, 0.5); }\n    .message.is-warning .message-body {\n      border-color: #fce473;\n      color: #666666; }\n  .message.is-danger {\n    background-color: #fdeeed; }\n    .message.is-danger .message-header {\n      background-color: #ed6c63;\n      color: white; }\n    .message.is-danger .message-body {\n      border-color: #ed6c63;\n      color: gray; }\n\n.modal-background {\n  bottom: 0;\n  left: 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n  background-color: rgba(17, 17, 17, 0.86); }\n\n.modal-content, .modal-card {\n  margin: 0 20px;\n  max-height: calc(100vh - 160px);\n  overflow: auto;\n  position: relative;\n  width: 100%; }\n  @media screen and (min-width: 769px) {\n    .modal-content, .modal-card {\n      margin: 0 auto;\n      max-height: calc(100vh - 40px);\n      width: 640px; } }\n\n.modal-close {\n  background: none;\n  height: 40px;\n  position: fixed;\n  right: 20px;\n  top: 20px;\n  width: 40px; }\n\n.modal-card {\n  background-color: #fff;\n  border-radius: 5px;\n  display: flex;\n  flex-direction: column;\n  max-height: calc(100vh - 40px);\n  overflow: hidden; }\n\n.modal-card-head,\n.modal-card-foot {\n  align-items: center;\n  background-color: #f5f7fa;\n  display: flex;\n  flex-shrink: 0;\n  justify-content: flex-start;\n  padding: 20px;\n  position: relative; }\n\n.modal-card-head {\n  border-bottom: 1px solid #d3d6db; }\n\n.modal-card-title {\n  color: #222324;\n  flex-grow: 1;\n  font-size: 24px;\n  line-height: 1; }\n\n.modal-card-foot {\n  border-top: 1px solid #d3d6db; }\n  .modal-card-foot .button:not(:last-child) {\n    margin-right: 10px; }\n\n.modal-card-body {\n  flex-grow: 1;\n  overflow: auto;\n  padding: 20px; }\n\n.modal {\n  bottom: 0;\n  left: 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n  align-items: center;\n  display: none;\n  justify-content: center;\n  overflow: hidden;\n  position: fixed;\n  z-index: 1986; }\n  .modal.is-active {\n    display: flex; }\n\n@media screen and (min-width: 769px) {\n  .nav-toggle {\n    display: none; } }\n\n.nav-item {\n  align-items: center;\n  display: flex;\n  justify-content: center;\n  padding: 10px; }\n  .nav-item a {\n    flex-grow: 1; }\n  .nav-item img {\n    max-height: 24px; }\n  .nav-item .button + .button {\n    margin-left: 10px; }\n  .nav-item .tag:first-child {\n    margin-right: 5px; }\n  .nav-item .tag:last-child {\n    margin-left: 5px; }\n  @media screen and (max-width: 768px) {\n    .nav-item {\n      justify-content: flex-start; } }\n\n.nav-item a,\na.nav-item {\n  color: #69707a; }\n  .nav-item a:hover,\n  a.nav-item:hover {\n    color: #222324; }\n  .nav-item a.is-active,\n  a.nav-item.is-active {\n    color: #222324; }\n  .nav-item a.is-tab,\n  a.nav-item.is-tab {\n    border-bottom: 1px solid transparent;\n    border-top: 1px solid transparent;\n    padding-left: 12px;\n    padding-right: 12px; }\n    .nav-item a.is-tab:hover,\n    a.nav-item.is-tab:hover {\n      border-bottom: 1px solid #1fc8db;\n      border-top: 1px solid transparent; }\n    .nav-item a.is-tab.is-active,\n    a.nav-item.is-tab.is-active {\n      border-bottom: 3px solid #1fc8db;\n      border-top: 3px solid transparent;\n      color: #1fc8db; }\n\n@media screen and (max-width: 768px) {\n  .nav-menu {\n    background-color: #fff;\n    box-shadow: 0 4px 7px rgba(17, 17, 17, 0.1);\n    left: 0;\n    display: none;\n    right: 0;\n    top: 100%;\n    position: absolute; }\n    .nav-menu .nav-item {\n      border-top: 1px solid rgba(211, 214, 219, 0.5);\n      padding: 10px; }\n    .nav-menu.is-active {\n      display: block; } }\n\n@media screen and (min-width: 769px) and (max-width: 979px) {\n  .nav-menu {\n    padding-right: 20px; } }\n\n.nav-left {\n  align-items: stretch;\n  display: flex;\n  flex-basis: 0;\n  flex-grow: 1;\n  justify-content: flex-start;\n  overflow: hidden;\n  overflow-x: auto;\n  white-space: nowrap; }\n\n.nav-center {\n  align-items: stretch;\n  display: flex;\n  justify-content: center;\n  margin-left: auto;\n  margin-right: auto; }\n\n@media screen and (min-width: 769px) {\n  .nav-right {\n    align-items: stretch;\n    display: flex;\n    flex-basis: 0;\n    flex-grow: 1;\n    justify-content: flex-end; } }\n\n.nav {\n  align-items: stretch;\n  background-color: #fff;\n  display: flex;\n  min-height: 50px;\n  position: relative;\n  text-align: center;\n  z-index: 2; }\n  .nav > .container {\n    align-items: stretch;\n    display: flex;\n    min-height: 50px;\n    width: 100%; }\n    .nav > .container > .nav-left > .nav-item:first-child:not(.is-tab) {\n      padding-left: 0; }\n    .nav > .container > .nav-right > .nav-item:last-child:not(.is-tab) {\n      padding-right: 0; }\n  .container > .nav > .nav-left > .nav-item:first-child:not(.is-tab) {\n    padding-left: 0; }\n  .container > .nav > .nav-right > .nav-item:last-child:not(.is-tab) {\n    padding-right: 0; }\n  .nav.has-shadow {\n    box-shadow: 0 2px 3px rgba(17, 17, 17, 0.1); }\n  @media screen and (max-width: 979px) {\n    .nav > .container > .nav-left > .nav-item.is-brand:first-child,\n    .container > .nav > .nav-left > .nav-item.is-brand:first-child {\n      padding-left: 20px; } }\n\n.pagination {\n  align-items: center;\n  display: flex;\n  justify-content: center;\n  text-align: center; }\n  .pagination a {\n    display: block;\n    min-width: 32px;\n    padding: 3px 8px; }\n  .pagination span {\n    color: #aeb1b5;\n    display: block;\n    margin: 0 4px; }\n  .pagination li {\n    margin: 0 2px; }\n  .pagination ul {\n    align-items: center;\n    display: flex;\n    flex-grow: 1;\n    justify-content: center; }\n  @media screen and (max-width: 768px) {\n    .pagination {\n      flex-wrap: wrap; }\n      .pagination > a {\n        width: calc(50% - 5px); }\n        .pagination > a:not(:first-child) {\n          margin-left: 10px; }\n      .pagination li {\n        flex-grow: 1; }\n      .pagination ul {\n        margin-top: 10px; } }\n  @media screen and (min-width: 769px) {\n    .pagination > a:not(:first-child) {\n      order: 1; } }\n\n.panel-icon {\n  display: inline-block;\n  font-size: 14px;\n  height: 16px;\n  line-height: 16px;\n  text-align: center;\n  vertical-align: top;\n  width: 16px;\n  color: #aeb1b5;\n  float: left;\n  margin: 0 4px 0 -2px; }\n  .panel-icon .fa {\n    font-size: inherit;\n    line-height: inherit; }\n\n.panel-heading {\n  background-color: #f5f7fa;\n  border-bottom: 1px solid #d3d6db;\n  border-radius: 4px 4px 0 0;\n  color: #222324;\n  font-size: 18px;\n  font-weight: 300;\n  padding: 10px; }\n\n.panel-list a {\n  color: #69707a; }\n  .panel-list a:hover {\n    color: #1fc8db; }\n\n.panel-tabs {\n  display: flex;\n  font-size: 11px;\n  padding: 5px 10px 0;\n  justify-content: center; }\n  .panel-tabs a {\n    border-bottom: 1px solid #d3d6db;\n    margin-bottom: -1px;\n    padding: 5px; }\n    .panel-tabs a.is-active {\n      border-bottom-color: #222324;\n      color: #222324; }\n  .panel-tabs:not(:last-child) {\n    border-bottom: 1px solid #d3d6db; }\n\n.panel-block {\n  color: #222324;\n  display: block;\n  line-height: 16px;\n  padding: 10px; }\n  .panel-block:not(:last-child) {\n    border-bottom: 1px solid #d3d6db; }\n\na.panel-block:hover {\n  background-color: #f5f7fa; }\n\n.panel {\n  border: 1px solid #d3d6db;\n  border-radius: 5px; }\n  .panel:not(:last-child) {\n    margin-bottom: 20px; }\n\n.tabs {\n  align-items: stretch;\n  display: flex;\n  justify-content: space-between;\n  line-height: 24px;\n  overflow: hidden;\n  overflow-x: auto;\n  white-space: nowrap; }\n  .tabs a {\n    align-items: center;\n    border-bottom: 1px solid #d3d6db;\n    color: #69707a;\n    display: flex;\n    justify-content: center;\n    margin-bottom: -1px;\n    padding: 6px 12px;\n    vertical-align: top; }\n    .tabs a:hover {\n      border-bottom-color: #222324;\n      color: #222324; }\n  .tabs li {\n    display: block; }\n    .tabs li.is-active a {\n      border-bottom-color: #1fc8db;\n      color: #1fc8db; }\n  .tabs ul {\n    align-items: center;\n    border-bottom: 1px solid #d3d6db;\n    display: flex;\n    flex-grow: 1;\n    justify-content: flex-start; }\n    .tabs ul.is-left {\n      padding-right: 10px; }\n    .tabs ul.is-center {\n      flex: none;\n      justify-content: center;\n      padding-left: 10px;\n      padding-right: 10px; }\n    .tabs ul.is-right {\n      justify-content: flex-end;\n      padding-left: 10px; }\n  .tabs .icon:first-child {\n    margin-right: 8px; }\n  .tabs .icon:last-child {\n    margin-left: 8px; }\n  .tabs.is-centered ul {\n    justify-content: center; }\n  .tabs.is-right ul {\n    justify-content: flex-end; }\n  .tabs.is-boxed a {\n    border: 1px solid transparent;\n    border-radius: 3px 3px 0 0;\n    padding-bottom: 5px;\n    padding-top: 5px; }\n    .tabs.is-boxed a:hover {\n      background-color: #f5f7fa;\n      border-bottom-color: #d3d6db; }\n  .tabs.is-boxed li.is-active a {\n    background-color: #fff;\n    border-color: #d3d6db;\n    border-bottom-color: transparent !important; }\n  .tabs.is-fullwidth li {\n    flex-grow: 1; }\n  .tabs.is-toggle a {\n    border: 1px solid #d3d6db;\n    margin-bottom: 0;\n    padding-bottom: 5px;\n    padding-top: 5px;\n    position: relative; }\n    .tabs.is-toggle a:hover {\n      background-color: #f5f7fa;\n      border-color: #aeb1b5;\n      z-index: 2; }\n  .tabs.is-toggle li + li {\n    margin-left: -1px; }\n  .tabs.is-toggle li:first-child a {\n    border-radius: 3px 0 0 3px; }\n  .tabs.is-toggle li:last-child a {\n    border-radius: 0 3px 3px 0; }\n  .tabs.is-toggle li.is-active a {\n    background-color: #1fc8db;\n    border-color: #1fc8db;\n    color: white;\n    z-index: 1; }\n  .tabs.is-toggle ul {\n    border-bottom: none; }\n  .tabs.is-small {\n    font-size: 11px; }\n    .tabs.is-small a {\n      padding: 2px 8px; }\n    .tabs.is-small.is-boxed a, .tabs.is-small.is-toggle a {\n      padding-bottom: 1px;\n      padding-top: 1px; }\n  .tabs.is-medium {\n    font-size: 18px; }\n    .tabs.is-medium a {\n      padding: 10px 16px; }\n    .tabs.is-medium.is-boxed a, .tabs.is-medium.is-toggle a {\n      padding-bottom: 9px;\n      padding-top: 9px; }\n  .tabs.is-large {\n    font-size: 28px; }\n    .tabs.is-large a {\n      padding: 14px 20px; }\n    .tabs.is-large.is-boxed a, .tabs.is-large.is-toggle a {\n      padding-bottom: 13px;\n      padding-top: 13px; }\n\n.hero-video {\n  bottom: 0;\n  left: 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n  overflow: hidden; }\n  .hero-video video {\n    left: 50%;\n    min-height: 100%;\n    min-width: 100%;\n    position: absolute;\n    top: 50%;\n    transform: translate3d(-50%, -50%, 0); }\n  .hero-video.is-transparent {\n    opacity: 0.3; }\n  @media screen and (max-width: 768px) {\n    .hero-video {\n      display: none; } }\n\n.hero-buttons {\n  margin-top: 20px; }\n  @media screen and (max-width: 768px) {\n    .hero-buttons .button {\n      display: flex; }\n      .hero-buttons .button:not(:last-child) {\n        margin-bottom: 10px; } }\n  @media screen and (min-width: 769px) {\n    .hero-buttons {\n      display: flex;\n      justify-content: center; }\n      .hero-buttons .button:not(:last-child) {\n        margin-right: 20px; } }\n\n.hero-head,\n.hero-foot {\n  flex-shrink: 0; }\n\n.hero-body {\n  flex-grow: 1;\n  padding: 40px 20px; }\n  @media screen and (min-width: 980px) {\n    .hero-body {\n      padding-left: 0;\n      padding-right: 0; } }\n\n.hero {\n  align-items: stretch;\n  background-color: #fff;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between; }\n  .hero .nav {\n    background: none;\n    box-shadow: 0 1px 0 rgba(211, 214, 219, 0.3); }\n  .hero .tabs ul {\n    border-bottom: none; }\n  .hero.is-white {\n    background-color: #fff;\n    color: #111; }\n    .hero.is-white .title {\n      color: #111; }\n      .hero.is-white .title a,\n      .hero.is-white .title strong {\n        color: inherit; }\n    .hero.is-white .subtitle {\n      color: rgba(17, 17, 17, 0.7); }\n      .hero.is-white .subtitle a,\n      .hero.is-white .subtitle strong {\n        color: #111; }\n    .hero.is-white .nav {\n      box-shadow: 0 1px 0 rgba(17, 17, 17, 0.2); }\n    @media screen and (max-width: 768px) {\n      .hero.is-white .nav-menu {\n        background-color: #fff; } }\n    .hero.is-white a.nav-item,\n    .hero.is-white .nav-item a:not(.button) {\n      color: rgba(17, 17, 17, 0.5); }\n      .hero.is-white a.nav-item:hover, .hero.is-white a.nav-item.is-active,\n      .hero.is-white .nav-item a:not(.button):hover,\n      .hero.is-white .nav-item a:not(.button).is-active {\n        color: #111; }\n    .hero.is-white .tabs a {\n      color: #111;\n      opacity: 0.5; }\n      .hero.is-white .tabs a:hover {\n        opacity: 1; }\n    .hero.is-white .tabs li.is-active a {\n      opacity: 1; }\n    .hero.is-white .tabs.is-boxed a, .hero.is-white .tabs.is-toggle a {\n      color: #111; }\n      .hero.is-white .tabs.is-boxed a:hover, .hero.is-white .tabs.is-toggle a:hover {\n        background-color: rgba(17, 17, 17, 0.1); }\n    .hero.is-white .tabs.is-boxed li.is-active a, .hero.is-white .tabs.is-boxed li.is-active a:hover, .hero.is-white .tabs.is-toggle li.is-active a, .hero.is-white .tabs.is-toggle li.is-active a:hover {\n      background-color: #111;\n      border-color: #111;\n      color: #fff; }\n    .hero.is-white.is-bold {\n      background-image: linear-gradient(141deg, #e6e6e6 0%, #fff 71%, white 100%); }\n    @media screen and (max-width: 768px) {\n      .hero.is-white .nav-toggle span {\n        background-color: #111; }\n      .hero.is-white .nav-toggle:hover {\n        background-color: rgba(17, 17, 17, 0.1); }\n      .hero.is-white .nav-toggle.is-active span {\n        background-color: #111; }\n      .hero.is-white .nav-menu .nav-item {\n        border-top-color: rgba(17, 17, 17, 0.2); } }\n  .hero.is-black {\n    background-color: #111;\n    color: #fff; }\n    .hero.is-black .title {\n      color: #fff; }\n      .hero.is-black .title a,\n      .hero.is-black .title strong {\n        color: inherit; }\n    .hero.is-black .subtitle {\n      color: rgba(255, 255, 255, 0.7); }\n      .hero.is-black .subtitle a,\n      .hero.is-black .subtitle strong {\n        color: #fff; }\n    .hero.is-black .nav {\n      box-shadow: 0 1px 0 rgba(255, 255, 255, 0.2); }\n    @media screen and (max-width: 768px) {\n      .hero.is-black .nav-menu {\n        background-color: #111; } }\n    .hero.is-black a.nav-item,\n    .hero.is-black .nav-item a:not(.button) {\n      color: rgba(255, 255, 255, 0.5); }\n      .hero.is-black a.nav-item:hover, .hero.is-black a.nav-item.is-active,\n      .hero.is-black .nav-item a:not(.button):hover,\n      .hero.is-black .nav-item a:not(.button).is-active {\n        color: #fff; }\n    .hero.is-black .tabs a {\n      color: #fff;\n      opacity: 0.5; }\n      .hero.is-black .tabs a:hover {\n        opacity: 1; }\n    .hero.is-black .tabs li.is-active a {\n      opacity: 1; }\n    .hero.is-black .tabs.is-boxed a, .hero.is-black .tabs.is-toggle a {\n      color: #fff; }\n      .hero.is-black .tabs.is-boxed a:hover, .hero.is-black .tabs.is-toggle a:hover {\n        background-color: rgba(17, 17, 17, 0.1); }\n    .hero.is-black .tabs.is-boxed li.is-active a, .hero.is-black .tabs.is-boxed li.is-active a:hover, .hero.is-black .tabs.is-toggle li.is-active a, .hero.is-black .tabs.is-toggle li.is-active a:hover {\n      background-color: #fff;\n      border-color: #fff;\n      color: #111; }\n    .hero.is-black.is-bold {\n      background-image: linear-gradient(141deg, black 0%, #111 71%, #1f1c1c 100%); }\n    @media screen and (max-width: 768px) {\n      .hero.is-black .nav-toggle span {\n        background-color: #fff; }\n      .hero.is-black .nav-toggle:hover {\n        background-color: rgba(17, 17, 17, 0.1); }\n      .hero.is-black .nav-toggle.is-active span {\n        background-color: #fff; }\n      .hero.is-black .nav-menu .nav-item {\n        border-top-color: rgba(255, 255, 255, 0.2); } }\n  .hero.is-light {\n    background-color: #f5f7fa;\n    color: #69707a; }\n    .hero.is-light .title {\n      color: #69707a; }\n      .hero.is-light .title a,\n      .hero.is-light .title strong {\n        color: inherit; }\n    .hero.is-light .subtitle {\n      color: rgba(105, 112, 122, 0.7); }\n      .hero.is-light .subtitle a,\n      .hero.is-light .subtitle strong {\n        color: #69707a; }\n    .hero.is-light .nav {\n      box-shadow: 0 1px 0 rgba(105, 112, 122, 0.2); }\n    @media screen and (max-width: 768px) {\n      .hero.is-light .nav-menu {\n        background-color: #f5f7fa; } }\n    .hero.is-light a.nav-item,\n    .hero.is-light .nav-item a:not(.button) {\n      color: rgba(105, 112, 122, 0.5); }\n      .hero.is-light a.nav-item:hover, .hero.is-light a.nav-item.is-active,\n      .hero.is-light .nav-item a:not(.button):hover,\n      .hero.is-light .nav-item a:not(.button).is-active {\n        color: #69707a; }\n    .hero.is-light .tabs a {\n      color: #69707a;\n      opacity: 0.5; }\n      .hero.is-light .tabs a:hover {\n        opacity: 1; }\n    .hero.is-light .tabs li.is-active a {\n      opacity: 1; }\n    .hero.is-light .tabs.is-boxed a, .hero.is-light .tabs.is-toggle a {\n      color: #69707a; }\n      .hero.is-light .tabs.is-boxed a:hover, .hero.is-light .tabs.is-toggle a:hover {\n        background-color: rgba(17, 17, 17, 0.1); }\n    .hero.is-light .tabs.is-boxed li.is-active a, .hero.is-light .tabs.is-boxed li.is-active a:hover, .hero.is-light .tabs.is-toggle li.is-active a, .hero.is-light .tabs.is-toggle li.is-active a:hover {\n      background-color: #69707a;\n      border-color: #69707a;\n      color: #f5f7fa; }\n    .hero.is-light.is-bold {\n      background-image: linear-gradient(141deg, #d0e0ec 0%, #f5f7fa 71%, white 100%); }\n    @media screen and (max-width: 768px) {\n      .hero.is-light .nav-toggle span {\n        background-color: #69707a; }\n      .hero.is-light .nav-toggle:hover {\n        background-color: rgba(17, 17, 17, 0.1); }\n      .hero.is-light .nav-toggle.is-active span {\n        background-color: #69707a; }\n      .hero.is-light .nav-menu .nav-item {\n        border-top-color: rgba(105, 112, 122, 0.2); } }\n  .hero.is-dark {\n    background-color: #69707a;\n    color: #f5f7fa; }\n    .hero.is-dark .title {\n      color: #f5f7fa; }\n      .hero.is-dark .title a,\n      .hero.is-dark .title strong {\n        color: inherit; }\n    .hero.is-dark .subtitle {\n      color: rgba(245, 247, 250, 0.7); }\n      .hero.is-dark .subtitle a,\n      .hero.is-dark .subtitle strong {\n        color: #f5f7fa; }\n    .hero.is-dark .nav {\n      box-shadow: 0 1px 0 rgba(245, 247, 250, 0.2); }\n    @media screen and (max-width: 768px) {\n      .hero.is-dark .nav-menu {\n        background-color: #69707a; } }\n    .hero.is-dark a.nav-item,\n    .hero.is-dark .nav-item a:not(.button) {\n      color: rgba(245, 247, 250, 0.5); }\n      .hero.is-dark a.nav-item:hover, .hero.is-dark a.nav-item.is-active,\n      .hero.is-dark .nav-item a:not(.button):hover,\n      .hero.is-dark .nav-item a:not(.button).is-active {\n        color: #f5f7fa; }\n    .hero.is-dark .tabs a {\n      color: #f5f7fa;\n      opacity: 0.5; }\n      .hero.is-dark .tabs a:hover {\n        opacity: 1; }\n    .hero.is-dark .tabs li.is-active a {\n      opacity: 1; }\n    .hero.is-dark .tabs.is-boxed a, .hero.is-dark .tabs.is-toggle a {\n      color: #f5f7fa; }\n      .hero.is-dark .tabs.is-boxed a:hover, .hero.is-dark .tabs.is-toggle a:hover {\n        background-color: rgba(17, 17, 17, 0.1); }\n    .hero.is-dark .tabs.is-boxed li.is-active a, .hero.is-dark .tabs.is-boxed li.is-active a:hover, .hero.is-dark .tabs.is-toggle li.is-active a, .hero.is-dark .tabs.is-toggle li.is-active a:hover {\n      background-color: #f5f7fa;\n      border-color: #f5f7fa;\n      color: #69707a; }\n    .hero.is-dark.is-bold {\n      background-image: linear-gradient(141deg, #495a67 0%, #69707a 71%, #6e768e 100%); }\n    @media screen and (max-width: 768px) {\n      .hero.is-dark .nav-toggle span {\n        background-color: #f5f7fa; }\n      .hero.is-dark .nav-toggle:hover {\n        background-color: rgba(17, 17, 17, 0.1); }\n      .hero.is-dark .nav-toggle.is-active span {\n        background-color: #f5f7fa; }\n      .hero.is-dark .nav-menu .nav-item {\n        border-top-color: rgba(245, 247, 250, 0.2); } }\n  .hero.is-primary {\n    background-color: #1fc8db;\n    color: white; }\n    .hero.is-primary .title {\n      color: white; }\n      .hero.is-primary .title a,\n      .hero.is-primary .title strong {\n        color: inherit; }\n    .hero.is-primary .subtitle {\n      color: rgba(255, 255, 255, 0.7); }\n      .hero.is-primary .subtitle a,\n      .hero.is-primary .subtitle strong {\n        color: white; }\n    .hero.is-primary .nav {\n      box-shadow: 0 1px 0 rgba(255, 255, 255, 0.2); }\n    @media screen and (max-width: 768px) {\n      .hero.is-primary .nav-menu {\n        background-color: #1fc8db; } }\n    .hero.is-primary a.nav-item,\n    .hero.is-primary .nav-item a:not(.button) {\n      color: rgba(255, 255, 255, 0.5); }\n      .hero.is-primary a.nav-item:hover, .hero.is-primary a.nav-item.is-active,\n      .hero.is-primary .nav-item a:not(.button):hover,\n      .hero.is-primary .nav-item a:not(.button).is-active {\n        color: white; }\n    .hero.is-primary .tabs a {\n      color: white;\n      opacity: 0.5; }\n      .hero.is-primary .tabs a:hover {\n        opacity: 1; }\n    .hero.is-primary .tabs li.is-active a {\n      opacity: 1; }\n    .hero.is-primary .tabs.is-boxed a, .hero.is-primary .tabs.is-toggle a {\n      color: white; }\n      .hero.is-primary .tabs.is-boxed a:hover, .hero.is-primary .tabs.is-toggle a:hover {\n        background-color: rgba(17, 17, 17, 0.1); }\n    .hero.is-primary .tabs.is-boxed li.is-active a, .hero.is-primary .tabs.is-boxed li.is-active a:hover, .hero.is-primary .tabs.is-toggle li.is-active a, .hero.is-primary .tabs.is-toggle li.is-active a:hover {\n      background-color: white;\n      border-color: white;\n      color: #1fc8db; }\n    .hero.is-primary.is-bold {\n      background-image: linear-gradient(141deg, #0fb8ad 0%, #1fc8db 71%, #2cb5e8 100%); }\n    @media screen and (max-width: 768px) {\n      .hero.is-primary .nav-toggle span {\n        background-color: white; }\n      .hero.is-primary .nav-toggle:hover {\n        background-color: rgba(17, 17, 17, 0.1); }\n      .hero.is-primary .nav-toggle.is-active span {\n        background-color: white; }\n      .hero.is-primary .nav-menu .nav-item {\n        border-top-color: rgba(255, 255, 255, 0.2); } }\n  .hero.is-info {\n    background-color: #42afe3;\n    color: white; }\n    .hero.is-info .title {\n      color: white; }\n      .hero.is-info .title a,\n      .hero.is-info .title strong {\n        color: inherit; }\n    .hero.is-info .subtitle {\n      color: rgba(255, 255, 255, 0.7); }\n      .hero.is-info .subtitle a,\n      .hero.is-info .subtitle strong {\n        color: white; }\n    .hero.is-info .nav {\n      box-shadow: 0 1px 0 rgba(255, 255, 255, 0.2); }\n    @media screen and (max-width: 768px) {\n      .hero.is-info .nav-menu {\n        background-color: #42afe3; } }\n    .hero.is-info a.nav-item,\n    .hero.is-info .nav-item a:not(.button) {\n      color: rgba(255, 255, 255, 0.5); }\n      .hero.is-info a.nav-item:hover, .hero.is-info a.nav-item.is-active,\n      .hero.is-info .nav-item a:not(.button):hover,\n      .hero.is-info .nav-item a:not(.button).is-active {\n        color: white; }\n    .hero.is-info .tabs a {\n      color: white;\n      opacity: 0.5; }\n      .hero.is-info .tabs a:hover {\n        opacity: 1; }\n    .hero.is-info .tabs li.is-active a {\n      opacity: 1; }\n    .hero.is-info .tabs.is-boxed a, .hero.is-info .tabs.is-toggle a {\n      color: white; }\n      .hero.is-info .tabs.is-boxed a:hover, .hero.is-info .tabs.is-toggle a:hover {\n        background-color: rgba(17, 17, 17, 0.1); }\n    .hero.is-info .tabs.is-boxed li.is-active a, .hero.is-info .tabs.is-boxed li.is-active a:hover, .hero.is-info .tabs.is-toggle li.is-active a, .hero.is-info .tabs.is-toggle li.is-active a:hover {\n      background-color: white;\n      border-color: white;\n      color: #42afe3; }\n    .hero.is-info.is-bold {\n      background-image: linear-gradient(141deg, #13bfdf 0%, #42afe3 71%, #53a1eb 100%); }\n    @media screen and (max-width: 768px) {\n      .hero.is-info .nav-toggle span {\n        background-color: white; }\n      .hero.is-info .nav-toggle:hover {\n        background-color: rgba(17, 17, 17, 0.1); }\n      .hero.is-info .nav-toggle.is-active span {\n        background-color: white; }\n      .hero.is-info .nav-menu .nav-item {\n        border-top-color: rgba(255, 255, 255, 0.2); } }\n  .hero.is-success {\n    background-color: #97cd76;\n    color: white; }\n    .hero.is-success .title {\n      color: white; }\n      .hero.is-success .title a,\n      .hero.is-success .title strong {\n        color: inherit; }\n    .hero.is-success .subtitle {\n      color: rgba(255, 255, 255, 0.7); }\n      .hero.is-success .subtitle a,\n      .hero.is-success .subtitle strong {\n        color: white; }\n    .hero.is-success .nav {\n      box-shadow: 0 1px 0 rgba(255, 255, 255, 0.2); }\n    @media screen and (max-width: 768px) {\n      .hero.is-success .nav-menu {\n        background-color: #97cd76; } }\n    .hero.is-success a.nav-item,\n    .hero.is-success .nav-item a:not(.button) {\n      color: rgba(255, 255, 255, 0.5); }\n      .hero.is-success a.nav-item:hover, .hero.is-success a.nav-item.is-active,\n      .hero.is-success .nav-item a:not(.button):hover,\n      .hero.is-success .nav-item a:not(.button).is-active {\n        color: white; }\n    .hero.is-success .tabs a {\n      color: white;\n      opacity: 0.5; }\n      .hero.is-success .tabs a:hover {\n        opacity: 1; }\n    .hero.is-success .tabs li.is-active a {\n      opacity: 1; }\n    .hero.is-success .tabs.is-boxed a, .hero.is-success .tabs.is-toggle a {\n      color: white; }\n      .hero.is-success .tabs.is-boxed a:hover, .hero.is-success .tabs.is-toggle a:hover {\n        background-color: rgba(17, 17, 17, 0.1); }\n    .hero.is-success .tabs.is-boxed li.is-active a, .hero.is-success .tabs.is-boxed li.is-active a:hover, .hero.is-success .tabs.is-toggle li.is-active a, .hero.is-success .tabs.is-toggle li.is-active a:hover {\n      background-color: white;\n      border-color: white;\n      color: #97cd76; }\n    .hero.is-success.is-bold {\n      background-image: linear-gradient(141deg, #8ecb45 0%, #97cd76 71%, #96d885 100%); }\n    @media screen and (max-width: 768px) {\n      .hero.is-success .nav-toggle span {\n        background-color: white; }\n      .hero.is-success .nav-toggle:hover {\n        background-color: rgba(17, 17, 17, 0.1); }\n      .hero.is-success .nav-toggle.is-active span {\n        background-color: white; }\n      .hero.is-success .nav-menu .nav-item {\n        border-top-color: rgba(255, 255, 255, 0.2); } }\n  .hero.is-warning {\n    background-color: #fce473;\n    color: rgba(17, 17, 17, 0.5); }\n    .hero.is-warning .title {\n      color: rgba(17, 17, 17, 0.5); }\n      .hero.is-warning .title a,\n      .hero.is-warning .title strong {\n        color: inherit; }\n    .hero.is-warning .subtitle {\n      color: rgba(17, 17, 17, 0.7); }\n      .hero.is-warning .subtitle a,\n      .hero.is-warning .subtitle strong {\n        color: rgba(17, 17, 17, 0.5); }\n    .hero.is-warning .nav {\n      box-shadow: 0 1px 0 rgba(17, 17, 17, 0.2); }\n    @media screen and (max-width: 768px) {\n      .hero.is-warning .nav-menu {\n        background-color: #fce473; } }\n    .hero.is-warning a.nav-item,\n    .hero.is-warning .nav-item a:not(.button) {\n      color: rgba(17, 17, 17, 0.5); }\n      .hero.is-warning a.nav-item:hover, .hero.is-warning a.nav-item.is-active,\n      .hero.is-warning .nav-item a:not(.button):hover,\n      .hero.is-warning .nav-item a:not(.button).is-active {\n        color: rgba(17, 17, 17, 0.5); }\n    .hero.is-warning .tabs a {\n      color: rgba(17, 17, 17, 0.5);\n      opacity: 0.5; }\n      .hero.is-warning .tabs a:hover {\n        opacity: 1; }\n    .hero.is-warning .tabs li.is-active a {\n      opacity: 1; }\n    .hero.is-warning .tabs.is-boxed a, .hero.is-warning .tabs.is-toggle a {\n      color: rgba(17, 17, 17, 0.5); }\n      .hero.is-warning .tabs.is-boxed a:hover, .hero.is-warning .tabs.is-toggle a:hover {\n        background-color: rgba(17, 17, 17, 0.1); }\n    .hero.is-warning .tabs.is-boxed li.is-active a, .hero.is-warning .tabs.is-boxed li.is-active a:hover, .hero.is-warning .tabs.is-toggle li.is-active a, .hero.is-warning .tabs.is-toggle li.is-active a:hover {\n      background-color: rgba(17, 17, 17, 0.5);\n      border-color: rgba(17, 17, 17, 0.5);\n      color: #fce473; }\n    .hero.is-warning.is-bold {\n      background-image: linear-gradient(141deg, #ffbd3d 0%, #fce473 71%, #fffe8a 100%); }\n    @media screen and (max-width: 768px) {\n      .hero.is-warning .nav-toggle span {\n        background-color: rgba(17, 17, 17, 0.5); }\n      .hero.is-warning .nav-toggle:hover {\n        background-color: rgba(17, 17, 17, 0.1); }\n      .hero.is-warning .nav-toggle.is-active span {\n        background-color: rgba(17, 17, 17, 0.5); }\n      .hero.is-warning .nav-menu .nav-item {\n        border-top-color: rgba(17, 17, 17, 0.2); } }\n  .hero.is-danger {\n    background-color: #ed6c63;\n    color: white; }\n    .hero.is-danger .title {\n      color: white; }\n      .hero.is-danger .title a,\n      .hero.is-danger .title strong {\n        color: inherit; }\n    .hero.is-danger .subtitle {\n      color: rgba(255, 255, 255, 0.7); }\n      .hero.is-danger .subtitle a,\n      .hero.is-danger .subtitle strong {\n        color: white; }\n    .hero.is-danger .nav {\n      box-shadow: 0 1px 0 rgba(255, 255, 255, 0.2); }\n    @media screen and (max-width: 768px) {\n      .hero.is-danger .nav-menu {\n        background-color: #ed6c63; } }\n    .hero.is-danger a.nav-item,\n    .hero.is-danger .nav-item a:not(.button) {\n      color: rgba(255, 255, 255, 0.5); }\n      .hero.is-danger a.nav-item:hover, .hero.is-danger a.nav-item.is-active,\n      .hero.is-danger .nav-item a:not(.button):hover,\n      .hero.is-danger .nav-item a:not(.button).is-active {\n        color: white; }\n    .hero.is-danger .tabs a {\n      color: white;\n      opacity: 0.5; }\n      .hero.is-danger .tabs a:hover {\n        opacity: 1; }\n    .hero.is-danger .tabs li.is-active a {\n      opacity: 1; }\n    .hero.is-danger .tabs.is-boxed a, .hero.is-danger .tabs.is-toggle a {\n      color: white; }\n      .hero.is-danger .tabs.is-boxed a:hover, .hero.is-danger .tabs.is-toggle a:hover {\n        background-color: rgba(17, 17, 17, 0.1); }\n    .hero.is-danger .tabs.is-boxed li.is-active a, .hero.is-danger .tabs.is-boxed li.is-active a:hover, .hero.is-danger .tabs.is-toggle li.is-active a, .hero.is-danger .tabs.is-toggle li.is-active a:hover {\n      background-color: white;\n      border-color: white;\n      color: #ed6c63; }\n    .hero.is-danger.is-bold {\n      background-image: linear-gradient(141deg, #f32a3e 0%, #ed6c63 71%, #f39376 100%); }\n    @media screen and (max-width: 768px) {\n      .hero.is-danger .nav-toggle span {\n        background-color: white; }\n      .hero.is-danger .nav-toggle:hover {\n        background-color: rgba(17, 17, 17, 0.1); }\n      .hero.is-danger .nav-toggle.is-active span {\n        background-color: white; }\n      .hero.is-danger .nav-menu .nav-item {\n        border-top-color: rgba(255, 255, 255, 0.2); } }\n  @media screen and (min-width: 769px) {\n    .hero.is-medium .hero-body {\n      padding-bottom: 120px;\n      padding-top: 120px; } }\n  @media screen and (min-width: 769px) {\n    .hero.is-large .hero-body {\n      padding-bottom: 240px;\n      padding-top: 240px; } }\n  .hero.is-fullheight {\n    min-height: 100vh; }\n    .hero.is-fullheight .hero-body {\n      align-items: center;\n      display: flex; }\n      .hero.is-fullheight .hero-body > .container {\n        flex-grow: 1; }\n\n.section {\n  background-color: #fff;\n  padding: 40px 20px; }\n  @media screen and (min-width: 980px) {\n    .section.is-medium {\n      padding: 120px 20px; }\n    .section.is-large {\n      padding: 240px 20px; } }\n\n.footer {\n  background-color: #f5f7fa;\n  padding: 40px 20px 80px; }\n  .footer a, .footer a:visited {\n    color: #69707a; }\n    .footer a:hover, .footer a:visited:hover {\n      color: #222324; }\n    .footer a:not(.icon), .footer a:visited:not(.icon) {\n      border-bottom: 1px solid #d3d6db; }\n      .footer a:not(.icon):hover, .footer a:visited:not(.icon):hover {\n        border-bottom-color: #1fc8db; }\n", "", {"version":3,"sources":["/./src/sass/node_modules/bulma/sass/utilities/reset.sass","/./src/sass/node_modules/bulma/sass/utilities/animations.sass","/./src/sass/node_modules/bulma/sass/base/generic.sass","/./src/sass/node_modules/bulma/sass/utilities/variables.sass","/./src/sass/node_modules/bulma/sass/base/classes.sass","/./src/sass/node_modules/bulma/sass/utilities/mixins.sass","/./src/sass/node_modules/bulma/sass/base/helpers.sass","/./src/sass/node_modules/bulma/sass/elements/box.sass","/./src/sass/node_modules/bulma/sass/elements/button.sass","/./src/sass/node_modules/bulma/sass/utilities/controls.sass","/./src/sass/node_modules/bulma/sass/utilities/functions.sass","/./src/sass/node_modules/bulma/sass/elements/content.sass","/./src/sass/node_modules/bulma/sass/elements/form.sass","/./src/sass/node_modules/bulma/sass/elements/image.sass","/./src/sass/node_modules/bulma/sass/elements/notification.sass","/./src/sass/node_modules/bulma/sass/elements/progress.sass","/./src/sass/node_modules/bulma/sass/elements/table.sass","/./src/sass/node_modules/bulma/sass/elements/title.sass","/./src/sass/node_modules/bulma/sass/elements/other.sass","/./src/sass/node_modules/bulma/sass/components/card.sass","/./src/sass/node_modules/bulma/sass/components/grid.sass","/./src/sass/node_modules/bulma/sass/components/highlight.sass","/./src/sass/node_modules/bulma/sass/components/level.sass","/./src/sass/node_modules/bulma/sass/components/media.sass","/./src/sass/node_modules/bulma/sass/components/menu.sass","/./src/sass/node_modules/bulma/sass/components/message.sass","/./src/sass/node_modules/bulma/sass/components/modal.sass","/./src/sass/node_modules/bulma/sass/components/nav.sass","/./src/sass/node_modules/bulma/sass/components/pagination.sass","/./src/sass/node_modules/bulma/sass/components/panel.sass","/./src/sass/node_modules/bulma/sass/components/tabs.sass","/./src/sass/node_modules/bulma/sass/layout/hero.sass","/./src/sass/node_modules/bulma/sass/layout/section.sass","/./src/sass/node_modules/bulma/sass/layout/footer.sass"],"names":[],"mappings":"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","file":"main.scss","sourcesContent":["//\n//  HTML5 Reset :: style.css\n//  ----------------------------------------------------------\n//  We have learned much from/been inspired by/taken code where offered from:\n//\n//  Eric Meyer          :: http://meyerweb.com\n//  HTML5 Doctor        :: http://html5doctor.com\n//  and the HTML5 Boilerplate :: http://html5boilerplate.com\n//\n//-------------------------------------------------------------------------------\n\n// Let's default this puppy out\n\nhtml, body, body div, span, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, abbr, address, cite, code, del, dfn, em, img, ins, kbd, q, samp, small, strong, sub, sup, var, b, i, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, figure, footer, header, menu, nav, section, time, mark, audio, video, details, summary {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font-weight: normal;\n  vertical-align: baseline;\n  background: transparent; }\n\narticle, aside, figure, footer, header, nav, section, details, summary {\n  display: block; }\n\n// Handle box-sizing while better addressing child elements:\n// http://css-tricks.com/inheriting-box-sizing-probably-slightly-better-best-practice/\nhtml {\n  box-sizing: border-box; }\n\n*,\n*:before,\n*:after {\n  box-sizing: inherit; }\n\n// consider resetting the default cursor: https://gist.github.com/murtaugh/5247154\n\n// Responsive images and other embedded objects\nimg,\nobject,\nembed {\n  max-width: 100%; }\n\n//\n//   Note: keeping IMG here will cause problems if you're using foreground images as sprites.\n//   In fact, it *will* cause problems with Google Maps' controls at small size.\n//  If this is the case for you, try uncommenting the following:\n//\n//#map img {\n//    max-width: none;\n//}\n\n// force a vertical scrollbar to prevent a jumpy page\nhtml {\n  overflow-y: scroll; }\n\n// we use a lot of ULs that aren't bulleted.\n//  don't forget to restore the bullets within content.\nul {\n  list-style: none; }\n\nblockquote, q {\n  quotes: none; }\n\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: '';\n  content: none; }\n\na {\n  margin: 0;\n  padding: 0;\n  font-size: 100%;\n  vertical-align: baseline;\n  background: transparent; }\n\ndel {\n  text-decoration: line-through; }\n\nabbr[title], dfn[title] {\n  border-bottom: 1px dotted #000;\n  cursor: help; }\n\n// tables still need cellspacing=\"0\" in the markup\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\n\nth {\n  font-weight: bold;\n  vertical-align: bottom; }\n\ntd {\n  font-weight: normal;\n  vertical-align: top; }\n\nhr {\n  display: block;\n  height: 1px;\n  border: 0;\n  border-top: 1px solid #ccc;\n  margin: 1em 0;\n  padding: 0; }\n\ninput, select {\n  vertical-align: middle; }\n\npre {\n  white-space: pre;\n  // CSS2\n  white-space: pre-wrap;\n  // CSS 2.1\n  white-space: pre-line;\n  // CSS 3 (and 2.1 as well, actually)\n  word-wrap: break-word;\n }  // IE\n\ninput[type=\"radio\"] {\n  vertical-align: text-bottom; }\n\ninput[type=\"checkbox\"] {\n  vertical-align: bottom; }\n\nselect, input, textarea {\n  font: 99% sans-serif; }\n\ntable {\n  font-size: inherit;\n  font: 100%; }\n\nsmall {\n  font-size: 85%; }\n\nstrong {\n  font-weight: bold; }\n\ntd, td img {\n  vertical-align: top; }\n\n// Make sure sup and sub don't mess with your line-heights http://gist.github.com/413930\nsub, sup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative; }\n\nsup {\n  top: -0.5em; }\n\nsub {\n  bottom: -0.25em; }\n\n// standardize any monospaced elements\npre, code, kbd, samp {\n  font-family: monospace, sans-serif; }\n\n// hand cursor on clickable elements\nlabel,\ninput[type=button],\ninput[type=submit],\ninput[type=file],\nbutton {\n  cursor: pointer; }\n\n// Webkit browsers add a 2px margin outside the chrome of form elements\nbutton, input, select, textarea {\n  margin: 0; }\n\n// make buttons play nice in IE\nbutton,\ninput[type=button] {\n  width: auto;\n  overflow: visible; }\n","@keyframes spin-around {\n  from {\n    transform: rotate(0deg); }\n  to {\n    transform: rotate(359deg); } }\n","html {\n  background-color: $body-background;\n  font-size: $size-normal;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  min-width: 300px;\n  overflow-x: hidden;\n  overflow-y: scroll;\n  text-rendering: optimizeLegibility; }\n\narticle,\naside,\nfigure,\nfooter,\nheader,\nhgroup,\nsection {\n  display: block; }\n\nbody,\nbutton,\ninput,\nselect,\ntextarea {\n  font-family: $family-primary; }\n\ncode,\npre {\n  -moz-osx-font-smoothing: auto;\n  -webkit-font-smoothing: auto;\n  font-family: $family-code;\n  line-height: 1.25; }\n\nbody {\n  color: $text;\n  font-size: 1rem;\n  font-weight: $weight-normal;\n  line-height: 1.428571428571429; }\n\n// Inline\n\na {\n  color: $link;\n  cursor: pointer;\n  text-decoration: none;\n  transition: none $speed $easing;\n  &:hover {\n    color: $link-hover; } }\n\ncode {\n  background-color: $code-background;\n  color: $code;\n  font-size: 12px;\n  font-weight: normal;\n  padding: 1px 2px 2px; }\n\nhr {\n  border-top-color: $border;\n  margin: 40px 0; }\n\nimg {\n  max-width: 100%; }\n\ninput[type=\"checkbox\"],\ninput[type=\"radio\"] {\n  vertical-align: baseline; }\n\nsmall {\n  font-size: $size-small; }\n\nspan {\n  font-style: inherit;\n  font-weight: inherit; }\n\nstrong {\n  color: $text-strong;\n  font-weight: $weight-bold; }\n\n// Block\n\npre {\n  background-color: $pre-background;\n  color: $pre;\n  white-space: pre;\n  word-wrap: normal;\n  code {\n    background-color: $pre-background;\n    color: $pre;\n    display: block;\n    overflow-x: auto;\n    padding: 16px 20px; } }\n\ntable {\n  width: 100%;\n  td,\n  th {\n    text-align: left;\n    vertical-align: top; }\n  th {\n    color: $text-strong; } }\n","// 1. Initial variables\n\n// Colors\n\n$black: #111 !default;\n$grey-darker: #222324 !default;\n$grey-dark: #69707a !default;\n$grey: #aeb1b5 !default;\n$grey-light: #d3d6db !default;\n$grey-lighter: #f5f7fa !default;\n$white: #fff !default;\n\n$blue: #42afe3 !default;\n$green: #97cd76 !default;\n$orange: #f68b39 !default;\n$purple: #847bb9 !default;\n$red: #ed6c63 !default;\n$turquoise: #1fc8db !default;\n$yellow: #fce473 !default;\n\n// Typography\n\n$family-sans-serif: \"Helvetica Neue\", \"Helvetica\", \"Arial\", sans-serif !default;\n$family-monospace: \"Source Code Pro\", \"Monaco\", \"Inconsolata\", monospace !default;\n\n$size-1: 48px !default;\n$size-2: 40px !default;\n$size-3: 28px !default;\n$size-4: 24px !default;\n$size-5: 18px !default;\n$size-6: 14px !default;\n\n$size-7: 11px !default;\n\n$weight-normal: 400 !default;\n$weight-bold: 700 !default;\n$weight-title-normal: 300 !default;\n$weight-title-bold: 500 !default;\n\n// Breakpoints\n\n$tablet: 769px !default;\n$desktop: 980px !default;\n$widescreen: 1180px !default;\n\n// Dimensions\n\n$column-gap: 20px !default;\n\n$nav-height: 50px !default;\n\n// Miscellaneous\n\n$easing: ease-out !default;\n$radius-small: 2px !default;\n$radius: 3px !default;\n$radius-large: 5px !default;\n$speed: 86ms !default;\n\n// 2. Primary colors\n\n$primary: $turquoise !default;\n\n$info: $blue !default;\n$success: $green !default;\n$warning: $yellow !default;\n$danger: $red !default;\n\n$light: $grey-lighter !default;\n$dark: $grey-dark !default;\n\n$text: $grey-dark !default;\n\n// 3. Generated variables\n\n// Invert colors\n\n$primary-invert: findColorInvert($primary) !default;\n\n$info-invert: findColorInvert($info) !default;\n$success-invert: findColorInvert($success) !default;\n$warning-invert: findColorInvert($warning) !default;\n$danger-invert: findColorInvert($danger) !default;\n\n$light-invert: $dark !default;\n$dark-invert: $light !default;\n\n// General colors\n\n$body-background: $grey-lighter !default;\n\n$background: $grey-lighter !default;\n\n$border: $grey-light !default;\n$border-hover: $grey !default;\n\n// Text colors\n\n$text-invert: findColorInvert($text) !default;\n$text-light: $grey !default;\n$text-strong: $grey-darker !default;\n\n// Code colors\n\n$code: $red !default;\n$code-background: $background !default;\n\n$pre: $text !default;\n$pre-background: $background !default;\n\n// Link colors\n\n$link: $primary !default;\n$link-invert: $primary-invert !default;\n$link-visited: $purple !default;\n\n$link-hover: $grey-darker !default;\n$link-hover-background: $grey-lighter !default;\n$link-hover-border: $grey-darker !default;\n\n$link-active: $grey-darker !default;\n$link-active-border: $grey-darker !default;\n\n// Control colors\n\n$control: $text-strong !default;\n$control-background: $text-invert !default;\n$control-border: $border !default;\n\n$control-hover: $link-hover !default;\n$control-hover-border: $border-hover !default;\n\n$control-active: $link !default;\n$control-active-background: $link !default;\n$control-active-background-invert: $link-invert !default;\n$control-active-border: $link !default;\n\n// Typography\n\n$family-primary: $family-sans-serif !default;\n$family-code: $family-monospace !default;\n\n$size-small: $size-7 !default;\n$size-normal: $size-6 !default;\n$size-medium: $size-5 !default;\n$size-large: $size-3 !default;\n$size-huge: $size-1 !default;\n\n// 4. Lists and maps\n\n$colors: (white: ($white, $black), black: ($black, $white), light: ($light, $light-invert), dark: ($dark, $dark-invert), primary: ($primary, $primary-invert), info: ($info, $info-invert), success: ($success, $success-invert), warning: ($warning, $warning-invert), danger: ($danger, $danger-invert)) !default;\n\n$sizes: $size-1 $size-2 $size-3 $size-4 $size-5 $size-6 !default;\n",".block {\n  &:not(:last-child) {\n    margin-bottom: 20px; } }\n\n.container {\n  position: relative;\n  @include desktop {\n    margin: 0 auto;\n    max-width: 960px;\n    // Modifiers\n    &.is-fluid {\n      margin: 0 20px;\n      max-width: none; } }\n  @include widescreen {\n    max-width: 1200px; } }\n\n.fa {\n  font-size: 21px;\n  text-align: center;\n  vertical-align: top; }\n","@mixin arrow($color) {\n  border: 1px solid $color;\n  border-right: 0;\n  border-top: 0;\n  content: \" \";\n  display: block;\n  height: 7px;\n  pointer-events: none;\n  position: absolute;\n  transform: rotate(-45deg);\n  width: 7px; }\n\n@mixin clearfix {\n  &:after {\n    clear: both;\n    content: \" \";\n    display: table; } }\n\n@mixin center($size) {\n  left: 50%;\n  margin-left: -($size / 2);\n  margin-top: -($size / 2);\n  position: absolute;\n  top: 50%; }\n\n@mixin fa($size, $dimensions) {\n  display: inline-block;\n  font-size: $size;\n  height: $dimensions;\n  line-height: $dimensions;\n  text-align: center;\n  vertical-align: top;\n  width: $dimensions; }\n\n@mixin overlay($offset: 0) {\n  bottom: $offset;\n  left: $offset;\n  position: absolute;\n  right: $offset;\n  top: $offset; }\n\n@mixin placeholder {\n  $placeholders: ':-moz' ':-webkit-input' '-moz' '-ms-input';\n  @each $placeholder in $placeholders {\n    &:#{$placeholder}-placeholder {\n      @content; } } }\n\n@mixin replace($background, $width, $height) {\n  background-color: $background;\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: $width $height;\n  display: block;\n  height: $height;\n  outline: none;\n  overflow: hidden;\n  text-indent: -290486px;\n  width: $width; }\n\n@mixin from($device) {\n  @media screen and (min-width: $device) {\n    @content; } }\n\n@mixin until($device) {\n  @media screen and (max-width: $device - 1px) {\n    @content; } }\n\n@mixin mobile {\n  @media screen and (max-width: $tablet - 1px) {\n    @content; } }\n\n@mixin tablet {\n  @media screen and (min-width: $tablet) {\n    @content; } }\n\n@mixin tablet-only {\n  @media screen and (min-width: $tablet) and (max-width: $desktop - 1px) {\n    @content; } }\n\n@mixin touch {\n  @media screen and (max-width: $desktop - 1px) {\n    @content; } }\n\n@mixin desktop {\n  @media screen and (min-width: $desktop) {\n    @content; } }\n\n@mixin desktop-only {\n  @media screen and (min-width: $desktop) and (max-width: $widescreen - 1px) {\n    @content; } }\n\n@mixin widescreen {\n  @media screen and (min-width: $widescreen) {\n    @content; } }\n","// Display\n\n$displays: 'block' 'flex' 'inline' 'inline-block' 'inline-flex';\n\n@each $display in $displays {\n  .is-#{$display} {\n    display: #{$display}; }\n  .is-#{$display}-mobile {\n    @include mobile {\n      display: #{$display} !important; } }\n  .is-#{$display}-tablet {\n    @include tablet {\n      display: #{$display} !important; } }\n  .is-#{$display}-tablet-only {\n    @include tablet-only {\n      display: #{$display} !important; } }\n  .is-#{$display}-touch {\n    @include touch {\n      display: #{$display} !important; } }\n  .is-#{$display}-desktop {\n    @include desktop {\n      display: #{$display} !important; } }\n  .is-#{$display}-desktop-only {\n    @include desktop-only {\n      display: #{$display} !important; } }\n  .is-#{$display}-widescreen {\n    @include widescreen {\n      display: #{$display} !important; } } }\n\n// Float\n\n.is-clearfix {\n  @include clearfix; }\n\n.is-pulled-left {\n  float: left; }\n\n.is-pulled-right {\n  float: right; }\n\n// Overflow\n\n.is-clipped {\n  overflow: hidden !important; }\n\n// Overlay\n\n.is-overlay {\n  @include overlay; }\n\n// Text\n\n.has-text-centered {\n  text-align: center; }\n\n.has-text-left {\n  text-align: left; }\n\n.has-text-right {\n  text-align: right; }\n\n// Visibility\n\n.is-hidden {\n  display: none !important; }\n\n.is-hidden-mobile {\n  @include mobile {\n    display: none !important; } }\n\n.is-hidden-tablet {\n  @include tablet {\n    display: none !important; } }\n\n.is-hidden-tablet-only {\n  @include tablet-only {\n    display: none !important; } }\n\n.is-hidden-touch {\n  @include touch {\n    display: none !important; } }\n\n.is-hidden-desktop {\n  @include desktop {\n    display: none !important; } }\n\n.is-hidden-desktop-only {\n  @include desktop-only {\n    display: none !important; } }\n\n.is-hidden-widescreen {\n  @include widescreen {\n    display: none !important; } }\n\n// Other\n\n.is-disabled {\n  pointer-events: none; }\n\n.is-marginless {\n  margin: 0 !important; }\n\n.is-unselectable {\n  @extend .unselectable; }\n",".box {\n  @extend .block;\n  background-color: $white;\n  border-radius: $radius-large;\n  box-shadow: 0 2px 3px rgba($black, 0.1), 0 0 0 1px rgba($black, 0.1);\n  display: block;\n  padding: 20px; }\n\na.box {\n  &:hover,\n  &:focus {\n    box-shadow: 0 2px 3px rgba($black, 0.1), 0 0 0 1px $link; }\n  &:active {\n    box-shadow: inset 0 1px 2px rgba($black, 0.2), 0 0 0 1px $link; } }\n","@mixin button-small {\n  border-radius: $radius-small;\n  font-size: 11px;\n  height: 24px;\n  line-height: 16px;\n  padding-left: 6px;\n  padding-right: 6px; }\n@mixin button-medium {\n  font-size: 18px;\n  height: 40px;\n  padding-left: 14px;\n  padding-right: 14px; }\n@mixin button-large {\n  font-size: 22px;\n  height: 48px;\n  padding-left: 20px;\n  padding-right: 20px; }\n\n.button {\n  @include control;\n  @extend .unselectable;\n  justify-content: center;\n  padding-left: 10px;\n  padding-right: 10px;\n  text-align: center;\n  white-space: nowrap;\n  strong {\n    color: inherit; }\n  small {\n    display: block;\n    font-size: $size-small;\n    line-height: 1;\n    margin-top: 5px; }\n  .icon,\n  .tag {\n    &:first-child {\n      margin-left: -2px;\n      margin-right: 4px; }\n    &:last-child {\n      margin-left: 4px;\n      margin-right: -2px; } }\n  &:hover,\n  &:focus,\n  &.is-active {\n    color: $control-hover; }\n  &:active {\n    box-shadow: inset 0 1px 2px rgba($black, 0.2); }\n  // Colors\n  @each $name, $pair in $colors {\n    $color: nth($pair, 1);\n    $color-invert: nth($pair, 2);\n    &.is-#{$name} {\n      background-color: $color;\n      border-color: transparent;\n      color: $color-invert;\n      &:hover,\n      &:focus,\n      &.is-active {\n        background-color: darken($color, 10%);\n        border-color: transparent;\n        color: $color-invert; }\n      &:active {\n        border-color: transparent; }\n      &.is-inverted {\n        background-color: $color-invert;\n        color: $color;\n        &:hover {\n          background-color: darken($color-invert, 5%); } }\n      &.is-loading {\n        &:after {\n          border-color: transparent transparent $color-invert $color-invert !important; } }\n      &.is-outlined {\n        background-color: transparent;\n        border-color: $color;\n        color: $color;\n        &:hover,\n        &:focus {\n          background-color: $color;\n          border-color: $color;\n          color: $color-invert; } } } }\n  &.is-link {\n    background-color: transparent;\n    border-color: transparent;\n    color: $text;\n    text-decoration: underline;\n    &:hover,\n    &:focus {\n      background-color: $border;\n      color: $text-strong; } }\n  // Sizes\n  &.is-small {\n    @include button-small; }\n  &.is-medium {\n    @include button-medium; }\n  &.is-large {\n    @include button-large; }\n  // Modifiers\n  &[disabled],\n  &.is-disabled {\n    opacity: 0.5; }\n  &.is-fullwidth {\n    display: flex;\n    width: 100%; }\n  &.is-loading {\n    color: transparent !important;\n    pointer-events: none;\n    &:after {\n      @extend .loader;\n      @include center(16px);\n      position: absolute !important; } } }\n","@mixin control {\n  -moz-appearance: none;\n  -webkit-appearance: none;\n  align-items: center;\n  background-color: $control-background;\n  border: 1px solid $control-border;\n  border-radius: $radius;\n  color: $control;\n  display: inline-flex;\n  font-size: $size-normal;\n  height: 32px;\n  justify-content: flex-start;\n  line-height: 24px;\n  padding-left: 8px;\n  padding-right: 8px;\n  position: relative;\n  vertical-align: top;\n  &:hover {\n    border-color: $control-hover-border; }\n  &:active,\n  &:focus,\n  &.is-active {\n    border-color: $control-active-border;\n    outline: none; }\n  &[disabled],\n  &.is-disabled {\n    background-color: $background;\n    border-color: $control-border;\n    cursor: not-allowed;\n    pointer-events: none;\n    @include placeholder {\n      color: rgba($control, 0.3); } } }\n\n@mixin control-small {\n  border-radius: $radius-small;\n  font-size: 11px;\n  height: 24px;\n  line-height: 16px;\n  padding-left: 6px;\n  padding-right: 6px; }\n@mixin control-medium {\n  font-size: 18px;\n  height: 40px;\n  line-height: 32px;\n  padding-left: 10px;\n  padding-right: 10px; }\n@mixin control-large {\n  font-size: 24px;\n  height: 48px;\n  line-height: 40px;\n  padding-left: 12px;\n  padding-right: 12px; }\n","@function powerNumber($number, $exp) {\n  $value: 1;\n  @if $exp > 0 {\n    @for $i from 1 through $exp {\n      $value: $value * $number; } }\n  @else if $exp < 0 {\n    @for $i from 1 through -$exp {\n      $value: $value / $number; } }\n  @return $value; }\n\n@function colorLuminance($color) {\n  $color-rgb: ('red': red($color),'green': green($color),'blue': blue($color));\n  @each $name, $value in $color-rgb {\n    $adjusted: 0;\n    $value: $value / 255;\n    @if $value < 0.03928 {\n      $value: $value / 12.92; }\n    @else {\n      $value: ($value + .055) / 1.055;\n      $value: powerNumber($value, 2); }\n    $color-rgb: map-merge($color-rgb, ($name: $value)); }\n  @return (map-get($color-rgb, 'red') * .2126) + (map-get($color-rgb, 'green') * .7152) + (map-get($color-rgb, 'blue') * .0722); }\n\n@function closestEvenNumber($number) {\n  @if ($number % 2 == 0px) {\n    @return $number; }\n  @else {\n    @return ($number + 1px); } }\n\n@function findColorInvert($color) {\n  @if (colorLuminance($color) > 0.8) {\n    @return rgba($black, 0.5); }\n  @else {\n    @return white; } }\n",".content {\n  @extend .block;\n  // Inline\n  a:not(.button) {\n    border-bottom: 1px solid $border;\n    &:visited {\n      color: $link-visited; }\n    &:hover {\n      border-bottom-color: $link; } }\n  li + li {\n    margin-top: 0.25em; }\n  // Block\n  blockquote,\n  p,\n  ol,\n  ul {\n    &:not(:last-child) {\n      margin-bottom: 1em; } }\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n    color: $text-strong;\n    font-weight: 300;\n    line-height: 1.125;\n    margin-bottom: 20px; }\n  h1,\n  h2,\n  h3 {\n    &:not(:first-child) {\n      margin-top: 40px; } }\n  blockquote {\n    background-color: $background;\n    border-left: 5px solid $border;\n    padding: 1.5em; }\n  h1 {\n    font-size: 2em; }\n  h2 {\n    font-size: 1.75em; }\n  h3 {\n    font-size: 1.5em; }\n  h4 {\n    font-size: 1.25em; }\n  h5 {\n    font-size: 1.125em; }\n  h6 {\n    font-size: 1em; }\n  ol {\n    list-style: decimal outside;\n    margin-left: 2em;\n    margin-right: 2em;\n    margin-top: 1em; }\n  ul {\n    list-style: disc outside;\n    margin-left: 2em;\n    margin-right: 2em;\n    margin-top: 1em;\n    ul {\n      list-style-type: circle;\n      margin-top: 0.5em;\n      ul {\n        list-style-type: square; } } }\n  // Sizes\n  &.is-medium {\n    font-size: $size-5;\n    code {\n      font-size: $size-6; } }\n  &.is-large {\n    font-size: $size-4;\n    code {\n      font-size: $size-5; } } }\n","@mixin form-control {\n  @include control;\n  @each $name, $pair in $colors {\n    $color: nth($pair, 1);\n    &.is-#{$name} {\n      border-color: $color; } } }\n\n.input {\n  @include form-control;\n  box-shadow: inset 0 1px 2px rgba($black, 0.1);\n  max-width: 100%;\n  width: 100%;\n  &[type=\"search\"] {\n    border-radius: 290486px; }\n  // Sizes\n  &.is-small {\n    @include control-small; }\n  &.is-medium {\n    @include control-medium; }\n  &.is-large {\n    @include control-large; }\n  // Modifiers\n  &.is-fullwidth {\n    display: block;\n    width: 100%; }\n  &.is-inline {\n    display: inline;\n    width: auto; } }\n\n.textarea {\n  @extend .input;\n  display: block;\n  line-height: 1.2;\n  max-height: 600px;\n  max-width: 100%;\n  min-height: 120px;\n  min-width: 100%;\n  padding: 10px;\n  resize: vertical; }\n\n%control-with-element {\n  cursor: pointer;\n  display: inline-block;\n  line-height: 16px;\n  position: relative;\n  vertical-align: top;\n  input {\n    cursor: pointer; }\n  &:hover {\n    color: $control-hover; }\n  &.is-disabled {\n    color: $text-light;\n    pointer-events: none;\n    input {\n      pointer-events: none; } } }\n\n.checkbox {\n  @extend %control-with-element; }\n\n.radio {\n  @extend %control-with-element;\n  & + .radio {\n    margin-left: 10px; } }\n\n.select {\n  display: inline-block;\n  height: 32px;\n  position: relative;\n  vertical-align: top;\n  select {\n    @include form-control;\n    cursor: pointer;\n    display: block;\n    outline: none;\n    padding-right: 36px;\n    &:hover {\n      border-color: $control-hover-border; }\n    &::ms-expand {\n      display: none; } }\n  &.is-fullwidth {\n    width: 100%;\n    select {\n      width: 100%; } }\n  &:after {\n    @include arrow($link);\n    margin-top: -6px;\n    right: 16px;\n    top: 50%; }\n  &:hover {\n    &:after {\n      border-color: $link-hover; } }\n  &.is-small {\n    height: 24px;\n    select {\n      @include control-small;\n      padding-right: 28px; } }\n  &.is-medium {\n    height: 40px;\n    select {\n      @include control-medium;\n      padding-right: 44px; } }\n  &.is-large {\n    height: 48px;\n    select {\n      @include control-large;\n      padding-right: 52px; } } }\n\n.label {\n  color: $text-strong;\n  display: block;\n  font-weight: bold;\n  &:not(:last-child) {\n    margin-bottom: 5px; } }\n\n.help {\n  display: block;\n  font-size: $size-small;\n  margin-top: 5px;\n  @each $name, $pair in $colors {\n    $color: nth($pair, 1);\n    &.is-#{$name} {\n      color: $color; } } }\n\n// Containers\n\n.control-label {\n  @include mobile {\n    margin-bottom: 5px; }\n  @include tablet {\n    flex-grow: 1;\n    margin-right: 20px;\n    padding-top: 7px;\n    text-align: right; } }\n\n.control {\n  position: relative;\n  text-align: left;\n  &:not(:last-child) {\n    margin-bottom: 10px; }\n  // Modifiers\n  &.has-addons {\n    display: flex;\n    justify-content: flex-start;\n    .button,\n    .input,\n    .select {\n      border-radius: 0;\n      margin-right: -1px;\n      width: auto;\n      &:hover {\n        z-index: 2; }\n      &:active,\n      &:focus {\n        z-index: 3; }\n      &:first-child {\n        border-radius: $radius 0 0 $radius;\n        select {\n          border-radius: $radius 0 0 $radius; } }\n      &:last-child {\n        border-radius: 0 $radius $radius 0;\n        select {\n          border-radius: 0 $radius $radius 0; } }\n      &.is-expanded {\n        flex-grow: 1; } }\n    &.has-addons-centered {\n      justify-content: center; }\n    &.has-addons-right {\n      justify-content: flex-end; }\n    &.has-addons-fullwidth {\n      .button,\n      .input,\n      .select {\n        flex-grow: 1; } } }\n  &.has-icon {\n    & > .fa {\n      @include fa(14px, 24px);\n      color: $text-light;\n      pointer-events: none;\n      position: absolute;\n      top: 4px;\n      z-index: 4; }\n    .input {\n      &:focus + .fa {\n        color: $text-strong; }\n      &.is-small + .fa {\n        font-size: 10.5px;\n        top: 0; }\n      &.is-medium + .fa {\n        font-size: 21px;\n        top: 8px; }\n      &.is-large + .fa {\n        font-size: 21px;\n        top: 12px; } }\n    &:not(.has-icon-right) {\n      & > .fa {\n        left: 4px; }\n      .input {\n        padding-left: 32px;\n        &.is-small {\n          padding-left: 24px;\n          & + .fa {\n            left: 0; } }\n        &.is-medium {\n          padding-left: 40px;\n          & + .fa {\n            left: 8px; } }\n        &.is-large {\n          padding-left: 48px;\n          & + .fa {\n            left: 12px; } } } }\n    &.has-icon-right {\n      & > .fa {\n        right: 4px; }\n      .input {\n        padding-right: 32px;\n        &.is-small {\n          padding-right: 24px;\n          & + .fa {\n            right: 0; } }\n        &.is-medium {\n          padding-right: 40px;\n          & + .fa {\n            right: 8px; } }\n        &.is-large {\n          padding-right: 48px;\n          & + .fa {\n            right: 12px; } } } } }\n  &.is-grouped {\n    display: flex;\n    justify-content: flex-start;\n    & > .control {\n      &:not(:last-child) {\n        margin-bottom: 0;\n        margin-right: 10px; }\n      &.is-expanded {\n        flex-grow: 1; } }\n    &.is-grouped-centered {\n      justify-content: center; }\n    &.is-grouped-right {\n      justify-content: flex-end; } }\n  &.is-horizontal {\n    @include tablet {\n      display: flex;\n      & > .control {\n        display: flex;\n        flex-grow: 5; } } }\n  &.is-loading {\n    &:after {\n      @extend .loader;\n      position: absolute !important;\n      right: 8px;\n      top: 8px; } } }\n","$dimensions: 16 24 32 48 64 96 128;\n\n.image {\n  display: block;\n  position: relative;\n  img {\n    display: block;\n    height: auto;\n    width: 100%; }\n  // Ratio\n  &.is-square,\n  &.is-1by1,\n  &.is-4by3,\n  &.is-3by2,\n  &.is-16by9,\n  &.is-2by1 {\n    img {\n      @include overlay;\n      height: 100%;\n      width: 100%; } }\n  &.is-square,\n  &.is-1by1 {\n    padding-top: 100%; }\n  &.is-4by3 {\n    padding-top: 75%; }\n  &.is-3by2 {\n    padding-top: 66.6666%; }\n  &.is-16by9 {\n    padding-top: 56.25%; }\n  &.is-2by1 {\n    padding-top: 50%; }\n  // Sizes\n  @each $dimension in $dimensions {\n    &.is-#{$dimension}x#{$dimension} {\n      height: $dimension * 1px;\n      width: $dimension * 1px; } } }\n",".notification {\n  @extend .block;\n  @include clearfix;\n  background-color: $background;\n  border-radius: $radius;\n  padding: 16px 20px;\n  position: relative;\n  .delete {\n    border-radius: 0 $radius;\n    float: right;\n    margin: -16px -20px 0 20px; }\n  .subtitle,\n  .title {\n    color: inherit; }\n  // Colors\n  @each $name, $pair in $colors {\n    $color: nth($pair, 1);\n    $color-invert: nth($pair, 2);\n    &.is-#{$name} {\n      background-color: $color;\n      color: $color-invert; } } }\n",".progress {\n  @extend .block;\n  -moz-appearance: none;\n  -webkit-appearance: none;\n  border: none;\n  border-radius: 290486px;\n  display: block;\n  height: 12px;\n  overflow: hidden;\n  padding: 0;\n  width: 100%;\n  &::-webkit-progress-bar {\n    background-color: $border; }\n  &::-webkit-progress-value {\n    background-color: $text; }\n  &::-moz-progress-bar {\n    background-color: $text; }\n  // Colors\n  @each $name, $pair in $colors {\n    $color: nth($pair, 1);\n    &.is-#{$name} {\n      &::-webkit-progress-value {\n        background-color: $color; }\n      &::-moz-progress-bar {\n        background-color: $color; } } }\n  // Sizes\n  &.is-small {\n    height: 8px; }\n  &.is-medium {\n    height: 16px; }\n  &.is-large {\n    height: 20px; } }\n",".table {\n  background-color: $white;\n  color: $text-strong;\n  margin-bottom: 20px;\n  width: 100%;\n  td,\n  th {\n    border: 1px solid $border;\n    border-width: 0 0 1px;\n    padding: 8px 10px;\n    vertical-align: top;\n    // Modifiers\n    &.is-icon {\n      padding: 5px;\n      text-align: center;\n      white-space: nowrap;\n      width: 1%;\n      .fa {\n        @include fa(21px, 24px); }\n      &.is-link {\n        padding: 0;\n        & > a {\n          padding: 5px; } } }\n    &.is-link {\n      padding: 0;\n      & > a {\n        display: block;\n        padding: 8px 10px;\n        &:hover {\n          background-color: $link;\n          color: $link-invert; } } }\n    &.is-narrow {\n      white-space: nowrap;\n      width: 1%; } }\n  th {\n    color: $text-strong;\n    text-align: left; }\n  tr {\n    &:hover {\n      background-color: $background;\n      color: $text-strong; } }\n  thead {\n    td,\n    th {\n      border-width: 0 0 2px;\n      color: $text-light; } }\n  tbody {\n    tr {\n      &:last-child {\n        td,\n        th {\n          border-bottom-width: 0; } } } }\n  tfoot {\n    td,\n    th {\n      border-width: 2px 0 0;\n      color: $text-light; } }\n  // Modifiers\n  &.is-bordered {\n    td,\n    th {\n      border-width: 1px; }\n    tr {\n      &:last-child {\n        td,\n        th {\n          border-bottom-width: 1px; } } } }\n  &.is-narrow {\n    td,\n    th {\n      padding: 5px 10px;\n      // Modifiers\n      &.is-icon {\n        padding: 2px;\n        &.is-link {\n          padding: 0;\n          & > a {\n            padding: 2px; } } }\n      &.is-link {\n        padding: 0;\n        & > a {\n          padding: 5px 10px; } } } }\n  &.is-striped {\n    tbody {\n      tr {\n        &:hover {\n          background-color: darken($background, 2%); }\n        &:nth-child(2n) {\n          background-color: $background;\n          &:hover {\n            background-color: darken($background, 2%); } } } } } }\n",".title,\n.subtitle {\n  @extend .block;\n  font-weight: $weight-title-normal;\n  word-break: break-word;\n  em,\n  span {\n    font-weight: $weight-title-normal; }\n  a {\n    &:hover {\n      border-bottom: 1px solid; } }\n  strong {\n    font-weight: $weight-title-bold; }\n  .tag {\n    vertical-align: bottom; } }\n\n.title {\n  color: $text-strong;\n  font-size: $size-large;\n  line-height: 1;\n  code {\n    display: inline-block;\n    font-size: $size-large; }\n  strong {\n    color: inherit; }\n  & + .highlight {\n    margin-top: -10px; }\n  & + .subtitle {\n    margin-top: -10px; }\n  // Colors\n  @each $size in $sizes {\n    $i: index($sizes, $size);\n    &.is-#{$i} {\n      font-size: $size;\n      code {\n        font-size: nth($sizes, min($i + 1, 6)); } } }\n  // Modifiers\n  &.is-normal {\n    font-weight: 400;\n    strong {\n      font-weight: 700; } }\n  // Responsiveness\n  @include tablet {\n    & + .subtitle {\n      margin-top: -15px; } } }\n\n.subtitle {\n  color: $text;\n  font-size: $size-medium;\n  line-height: 1.125;\n  code {\n    border-radius: $radius;\n    display: inline-block;\n    font-size: $size-normal;\n    padding: 2px 3px;\n    vertical-align: top; }\n  strong {\n    color: $text-strong; }\n  & + .title {\n    margin-top: -20px; }\n  // Colors\n  @each $size in $sizes {\n    $i: index($sizes, $size);\n    &.is-#{$i} {\n      font-size: $size;\n      code {\n        font-size: nth($sizes, min($i + 1, 6)); } } }\n  // Modifiers\n  &.is-normal {\n    font-weight: 400;\n    strong {\n      font-weight: 700; } } }\n",".delete {\n  @extend .unselectable;\n  -moz-appearance: none;\n  -webkit-appearance: none;\n  background-color: rgba($black, 0.2);\n  border: none;\n  border-radius: 290486px;\n  cursor: pointer;\n  display: inline-block;\n  height: 24px;\n  position: relative;\n  vertical-align: top;\n  width: 24px;\n  &:before,\n  &:after {\n    background-color: $white;\n    content: \"\";\n    display: block;\n    height: 2px;\n    left: 50%;\n    margin-left: -25%;\n    margin-top: -1px;\n    position: absolute;\n    top: 50%;\n    width: 50%; }\n  &:before {\n    transform: rotate(45deg); }\n  &:after {\n    transform: rotate(-45deg); }\n  &:hover {\n    background-color: rgba($black, 0.5); }\n  // Sizes\n  &.is-small {\n    height: 16px;\n    width: 16px; }\n  &.is-medium {\n    height: 32px;\n    width: 32px; }\n  &.is-large {\n    height: 40px;\n    width: 40px; } }\n\n.icon {\n  @include fa(21px, 24px);\n  .fa {\n    font-size: inherit;\n    line-height: inherit; }\n  // Sizes\n  &.is-small {\n    @include fa(14px, 16px); }\n  &.is-medium {\n    @include fa(28px, 32px); }\n  &.is-large {\n    @include fa(42px, 48px); } }\n\n.hamburger {\n  cursor: pointer;\n  display: block;\n  height: $nav-height;\n  position: relative;\n  width: $nav-height;\n  span {\n    background-color: $text;\n    display: block;\n    height: 1px;\n    left: 50%;\n    margin-left: -7px;\n    position: absolute;\n    top: 50%;\n    transition: none $speed $easing;\n    transition-property: background, left, opacity, transform;\n    width: 15px;\n    &:nth-child(1) {\n      margin-top: -6px; }\n    &:nth-child(2) {\n      margin-top: -1px; }\n    &:nth-child(3) {\n      margin-top: 4px; } }\n  &:hover {\n    background-color: $background; }\n  // Modifers\n  &.is-active {\n    span {\n      background-color: $link;\n      &:nth-child(1) {\n        margin-left: -5px;\n        transform: rotate(45deg);\n        transform-origin: left top; }\n      &:nth-child(2) {\n        opacity: 0; }\n      &:nth-child(3) {\n        margin-left: -5px;\n        transform: rotate(-45deg);\n        transform-origin: left bottom; } } } }\n\n.heading {\n  display: block;\n  font-size: 11px;\n  letter-spacing: 1px;\n  margin-bottom: 5px;\n  text-transform: uppercase; }\n\n.highlight {\n  @extend .block;\n  font-size: 12px;\n  font-weight: normal;\n  max-width: 100%;\n  overflow: hidden;\n  padding: 0;\n  pre {\n    overflow: auto;\n    max-width: 100%; } }\n\n.loader {\n  animation: spin-around 500ms infinite linear;\n  border: 2px solid $border;\n  border-radius: 290486px;\n  border-right-color: transparent;\n  border-top-color: transparent;\n  content: \"\";\n  display: block;\n  height: 16px;\n  position: relative;\n  width: 16px; }\n\n.number {\n  background-color: $background;\n  border-radius: 290486px;\n  display: inline-block;\n  font-size: $size-medium;\n  vertical-align: top; }\n\n.tag {\n  align-items: center;\n  background-color: $background;\n  border-radius: 290486px;\n  color: $text;\n  display: inline-flex;\n  font-size: 12px;\n  height: 24px;\n  justify-content: center;\n  line-height: 16px;\n  padding-left: 10px;\n  padding-right: 10px;\n  vertical-align: top;\n  white-space: nowrap;\n  .delete {\n    margin-left: 4px;\n    margin-right: -6px; }\n  &:not(.is-large) {\n    .delete {\n      @extend .delete.is-small; } }\n  // Colors\n  @each $name, $pair in $colors {\n    $color: nth($pair, 1);\n    $color-invert: nth($pair, 2);\n    &.is-#{$name} {\n      background-color: $color;\n      color: $color-invert; } }\n  // Sizes\n  &.is-small {\n    font-size: $size-small;\n    height: 20px;\n    padding-left: 8px;\n    padding-right: 8px; }\n  &.is-medium {\n    font-size: $size-normal;\n    height: 32px;\n    padding-left: 14px;\n    padding-right: 14px; }\n  &.is-large {\n    font-size: $size-5;\n    height: 40px;\n    line-height: 24px;\n    padding-left: 18px;\n    padding-right: 18px;\n    .delete {\n      margin-left: 4px;\n      margin-right: -8px; } } }\n\n.unselectable {\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none; }\n\n",".card-header {\n  align-items: stretch;\n  box-shadow: 0 1px 2px rgba($black, 0.1);\n  display: flex;\n  min-height: 40px; }\n\n.card-header-title {\n  align-items: flex-start;\n  color: $text-strong;\n  display: flex;\n  flex-grow: 1;\n  font-weight: bold;\n  padding: 10px; }\n\n.card-header-icon {\n  align-items: center;\n  cursor: pointer;\n  display: flex;\n  justify-content: center;\n  width: 40px; }\n\n.card-image {\n  display: block;\n  position: relative; }\n\n.card-content {\n  padding: 20px;\n  .title + .subtitle {\n    margin-top: -20px; } }\n\n.card-footer {\n  border-top: 1px solid $border;\n  align-items: stretch;\n  display: flex; }\n\n.card-footer-item {\n  align-items: center;\n  display: flex;\n  flex-grow: 1;\n  justify-content: center;\n  padding: 10px;\n  &:not(:last-child) {\n    border-right: 1px solid $border; } }\n\n.card {\n  background-color: $white;\n  box-shadow: 0 2px 3px rgba($black, 0.1), 0 0 0 1px rgba($black, 0.1);\n  color: $text;\n  max-width: 100%;\n  position: relative;\n  width: 300px;\n  .media:not(:last-child) {\n    margin-bottom: 10px; }\n  // Modifiers\n  &.is-fullwidth {\n    width: 100%; }\n  &.is-rounded {\n    border-radius: $radius-large; } }\n",".column {\n  flex-basis: 0;\n  flex-grow: 1;\n  flex-shrink: 1;\n  padding: 10px;\n  .columns.is-mobile > &.is-narrow {\n    flex: none; }\n  .columns.is-mobile > &.is-full {\n    flex: none;\n    width: 100%; }\n  .columns.is-mobile > &.is-three-quarters {\n    flex: none;\n    width: 75%; }\n  .columns.is-mobile > &.is-two-thirds {\n    flex: none;\n    width: 66.6666%; }\n  .columns.is-mobile > &.is-half {\n    flex: none;\n    width: 50%; }\n  .columns.is-mobile > &.is-one-third {\n    flex: none;\n    width: 33.3333%; }\n  .columns.is-mobile > &.is-one-quarter {\n    flex: none;\n    width: 25%; }\n  .columns.is-mobile > &.is-offset-three-quarters {\n    margin-left: 75%; }\n  .columns.is-mobile > &.is-offset-two-thirds {\n    margin-left: 66.6666%; }\n  .columns.is-mobile > &.is-offset-half {\n    margin-left: 50%; }\n  .columns.is-mobile > &.is-offset-one-third {\n    margin-left: 33.3333%; }\n  .columns.is-mobile > &.is-offset-one-quarter {\n    margin-left: 25%; }\n  @for $i from 1 through 12 {\n    .columns.is-mobile > &.is-#{$i} {\n      flex: none;\n      width: ($i / 12) * 100%; }\n    .columns.is-mobile > &.is-offset-#{$i} {\n      margin-left: ($i / 12) * 100%; } }\n  @include mobile {\n    &.is-narrow-mobile {\n      flex: none; }\n    &.is-full-mobile {\n      flex: none;\n      width: 100%; }\n    &.is-three-quarters-mobile {\n      flex: none;\n      width: 75%; }\n    &.is-two-thirds-mobile {\n      flex: none;\n      width: 66.6666%; }\n    &.is-half-mobile {\n      flex: none;\n      width: 50%; }\n    &.is-one-third-mobile {\n      flex: none;\n      width: 33.3333%; }\n    &.is-one-quarter-mobile {\n      flex: none;\n      width: 25%; }\n    &.is-offset-three-quarters-mobile {\n      margin-left: 75%; }\n    &.is-offset-two-thirds-mobile {\n      margin-left: 66.6666%; }\n    &.is-offset-half-mobile {\n      margin-left: 50%; }\n    &.is-offset-one-third-mobile {\n      margin-left: 33.3333%; }\n    &.is-offset-one-quarter-mobile {\n      margin-left: 25%; }\n    @for $i from 1 through 12 {\n      &.is-#{$i}-mobile {\n        flex: none;\n        width: ($i / 12) * 100%; }\n      &.is-offset-#{$i}-mobile {\n        margin-left: ($i / 12) * 100%; } } }\n  @include tablet {\n    &.is-narrow,\n    &.is-narrow-tablet {\n      flex: none; }\n    &.is-full,\n    &.is-full-tablet {\n      flex: none;\n      width: 100%; }\n    &.is-three-quarters,\n    &.is-three-quarters-tablet {\n      flex: none;\n      width: 75%; }\n    &.is-two-thirds,\n    &.is-two-thirds-tablet {\n      flex: none;\n      width: 66.6666%; }\n    &.is-half,\n    &.is-half-tablet {\n      flex: none;\n      width: 50%; }\n    &.is-one-third,\n    &.is-one-third-tablet {\n      flex: none;\n      width: 33.3333%; }\n    &.is-one-quarter,\n    &.is-one-quarter-tablet {\n      flex: none;\n      width: 25%; }\n    &.is-offset-three-quarters,\n    &.is-offset-three-quarters-tablet {\n      margin-left: 75%; }\n    &.is-offset-two-thirds,\n    &.is-offset-two-thirds-tablet {\n      margin-left: 66.6666%; }\n    &.is-offset-half,\n    &.is-offset-half-tablet {\n      margin-left: 50%; }\n    &.is-offset-one-third,\n    &.is-offset-one-third-tablet {\n      margin-left: 33.3333%; }\n    &.is-offset-one-quarter,\n    &.is-offset-one-quarter-tablet {\n      margin-left: 25%; }\n    @for $i from 1 through 12 {\n      &.is-#{$i},\n      &.is-#{$i}-tablet {\n        flex: none;\n        width: ($i / 12) * 100%; }\n      &.is-offset-#{$i},\n      &.is-offset-#{$i}-tablet {\n        margin-left: ($i / 12) * 100%; } } }\n  @include desktop {\n    &.is-narrow-desktop {\n      flex: none; }\n    &.is-full-desktop {\n      flex: none;\n      width: 100%; }\n    &.is-three-quarters-desktop {\n      flex: none;\n      width: 75%; }\n    &.is-two-thirds-desktop {\n      flex: none;\n      width: 66.6666%; }\n    &.is-half-desktop {\n      flex: none;\n      width: 50%; }\n    &.is-one-third-desktop {\n      flex: none;\n      width: 33.3333%; }\n    &.is-one-quarter-desktop {\n      flex: none;\n      width: 25%; }\n    &.is-offset-three-quarters-desktop {\n      margin-left: 75%; }\n    &.is-offset-two-thirds-desktop {\n      margin-left: 66.6666%; }\n    &.is-offset-half-desktop {\n      margin-left: 50%; }\n    &.is-offset-one-third-desktop {\n      margin-left: 33.3333%; }\n    &.is-offset-one-quarter-desktop {\n      margin-left: 25%; }\n    @for $i from 1 through 12 {\n      &.is-#{$i}-desktop {\n        flex: none;\n        width: ($i / 12) * 100%; }\n      &.is-offset-#{$i}-desktop {\n        margin-left: ($i / 12) * 100%; } } }\n  @include widescreen {\n    &.is-narrow-widescreen {\n      flex: none; }\n    &.is-full-widescreen {\n      flex: none;\n      width: 100%; }\n    &.is-three-quarters-widescreen {\n      flex: none;\n      width: 75%; }\n    &.is-two-thirds-widescreen {\n      flex: none;\n      width: 66.6666%; }\n    &.is-half-widescreen {\n      flex: none;\n      width: 50%; }\n    &.is-one-third-widescreen {\n      flex: none;\n      width: 33.3333%; }\n    &.is-one-quarter-widescreen {\n      flex: none;\n      width: 25%; }\n    &.is-offset-three-quarters-widescreen {\n      margin-left: 75%; }\n    &.is-offset-two-thirds-widescreen {\n      margin-left: 66.6666%; }\n    &.is-offset-half-widescreen {\n      margin-left: 50%; }\n    &.is-offset-one-third-widescreen {\n      margin-left: 33.3333%; }\n    &.is-offset-one-quarter-widescreen {\n      margin-left: 25%; }\n    @for $i from 1 through 12 {\n      &.is-#{$i}-widescreen {\n        flex: none;\n        width: ($i / 12) * 100%; }\n      &.is-offset-#{$i}-widescreen {\n        margin-left: ($i / 12) * 100%; } } } }\n\n.columns {\n  margin-left: -10px;\n  margin-right: -10px;\n  margin-top: -10px;\n  &:last-child {\n    margin-bottom: -10px; }\n  &:not(:last-child) {\n    margin-bottom: 10px; }\n  // Modifiers\n  &.is-centered {\n    justify-content: center; }\n  &.is-gapless {\n    margin-left: 0;\n    margin-right: 0;\n    margin-top: 0;\n    &:last-child {\n      margin-bottom: 0; }\n    &:not(:last-child) {\n      margin-bottom: 20px; }\n    & > .column {\n      margin: 0;\n      padding: 0; } }\n  &.is-grid {\n    // Responsiveness\n    @include tablet {\n      flex-wrap: wrap;\n      & > .column {\n        max-width: 33.3333%;\n        padding: 10px;\n        width: 33.3333%;\n        & + .column {\n          margin-left: 0; } } } }\n  &.is-mobile {\n    display: flex; }\n  &.is-multiline {\n    flex-wrap: wrap; }\n  &.is-vcentered {\n    align-items: center; }\n  // Responsiveness\n  @include tablet {\n    &:not(.is-desktop) {\n      display: flex; } }\n  @include desktop {\n    // Modifiers\n    &.is-desktop {\n      display: flex; } } }\n\n.tile {\n  align-items: stretch;\n  flex-basis: auto;\n  flex-grow: 1;\n  flex-shrink: 1;\n  min-height: min-content;\n  // Modifiers\n  &.is-ancestor {\n    margin-left: -10px;\n    margin-right: -10px;\n    margin-top: -10px;\n    &:last-child {\n      margin-bottom: -10px; }\n    &:not(:last-child) {\n      margin-bottom: 10px; } }\n  &.is-child {\n    margin: 0 !important; }\n  &.is-parent {\n    padding: 10px; }\n  &.is-vertical {\n    flex-direction: column;\n    & > .tile.is-child:not(:last-child) {\n      margin-bottom: 20px !important; } }\n  // Responsiveness\n  @include tablet {\n    &:not(.is-child) {\n      display: flex; }\n    @for $i from 1 through 12 {\n      &.is-#{$i} {\n        flex: none;\n        width: ($i / 12) * 100%; } } } }\n",".highlight {\n  background-color: #fdf6e3;\n  color: #586e75;\n  .c {\n    color: #93a1a1; }\n  .err,\n  .g {\n    color: #586e75; }\n  .k {\n    color: #859900; }\n  .l,\n  .n {\n    color: #586e75; }\n  .o {\n    color: #859900; }\n  .x {\n    color: #cb4b16; }\n  .p {\n    color: #586e75; }\n  .cm {\n    color: #93a1a1; }\n  .cp {\n    color: #859900; }\n  .c1 {\n    color: #93a1a1; }\n  .cs {\n    color: #859900; }\n  .gd {\n    color: #2aa198; }\n  .ge {\n    color: #586e75;\n    font-style: italic; }\n  .gr {\n    color: #dc322f; }\n  .gh {\n    color: #cb4b16; }\n  .gi {\n    color: #859900; }\n  .go,\n  .gp {\n    color: #586e75; }\n  .gs {\n    color: #586e75;\n    font-weight: bold; }\n  .gu {\n    color: #cb4b16; }\n  .gt {\n    color: #586e75; }\n  .kc {\n    color: #cb4b16; }\n  .kd {\n    color: #268bd2; }\n  .kn,\n  .kp {\n    color: #859900; }\n  .kr {\n    color: #268bd2; }\n  .kt {\n    color: #dc322f; }\n  .ld {\n    color: #586e75; }\n  .m,\n  .s {\n    color: #2aa198; }\n  .na {\n    color: #B58900; }\n  .nb {\n    color: #586e75; }\n  .nc {\n    color: #268bd2; }\n  .no {\n    color: #cb4b16; }\n  .nd {\n    color: #268bd2; }\n  .ni,\n  .ne {\n    color: #cb4b16; }\n  .nf {\n    color: #268bd2; }\n  .nl,\n  .nn,\n  .nx,\n  .py {\n    color: #586e75; }\n  .nt,\n  .nv {\n    color: #268bd2; }\n  .ow {\n    color: #859900; }\n  .w {\n    color: #586e75; }\n  .mf,\n  .mh,\n  .mi,\n  .mo {\n    color: #2aa198; }\n  .sb {\n    color: #93a1a1; }\n  .sc {\n    color: #2aa198; }\n  .sd {\n    color: #586e75; }\n  .s2 {\n    color: #2aa198; }\n  .se {\n    color: #cb4b16; }\n  .sh {\n    color: #586e75; }\n  .si,\n  .sx {\n    color: #2aa198; }\n  .sr {\n    color: #dc322f; }\n  .s1,\n  .ss {\n    color: #2aa198; }\n  .bp,\n  .vc,\n  .vg,\n  .vi {\n    color: #268bd2; }\n  .il {\n    color: #2aa198; } }\n",".level-item {\n  .title,\n  .subtitle {\n    margin-bottom: 0; }\n  // Responsiveness\n  @include mobile {\n    &:not(:last-child) {\n      margin-bottom: 10px; } } }\n\n.level-left,\n.level-right {\n  .level-item {\n    &:not(:last-child) {\n      margin-right: 10px; }\n    // Modifiers\n    &.is-flexible {\n      flex-grow: 1; } } }\n\n.level-left {\n  // Responsiveness\n  @include mobile {\n    & + .level-right {\n      margin-top: 20px; } }\n  @include tablet {\n    align-items: center;\n    display: flex; } }\n\n.level-right {\n  // Responsiveness\n  @include tablet {\n    align-items: center;\n    display: flex;\n    justify-content: flex-end; } }\n\n.level {\n  @extend .block;\n  align-items: center;\n  justify-content: space-between;\n  code {\n    border-radius: $radius; }\n  img {\n    display: inline-block;\n    vertical-align: top; }\n  // Modifiers\n  &.is-mobile {\n    display: flex;\n    & > .level-item {\n      &:not(:last-child) {\n        margin-bottom: 0; }\n      &:not(.is-narrow) {\n        flex-grow: 1; } } }\n  // Responsiveness\n  @include tablet {\n    display: flex;\n    & > .level-item {\n      &:not(.is-narrow) {\n        flex-grow: 1; } } } }\n",".media-number {\n  background-color: $background;\n  border-radius: 290486px;\n  display: inline-block;\n  font-size: $size-medium;\n  height: 32px;\n  line-height: 24px;\n  min-width: 32px;\n  padding: 4px 8px;\n  text-align: center;\n  vertical-align: top;\n  // Responsiveness\n  @include mobile {\n    margin-bottom: 10px; }\n  @include tablet {\n    margin-right: 10px; } }\n\n.media-left {\n  margin-right: 10px; }\n\n.media-right {\n  margin-left: 10px; }\n\n.media-content {\n  flex-grow: 1;\n  text-align: left; }\n\n.media {\n  align-items: flex-start;\n  display: flex;\n  text-align: left;\n  .content:not(:last-child) {\n    margin-bottom: 10px; }\n  .media {\n    border-top: 1px solid rgba($border, 0.5);\n    display: flex;\n    padding-top: 10px;\n    .content:not(:last-child),\n    .control:not(:last-child) {\n      margin-bottom: 5px; }\n    .media {\n      padding-top: 5px;\n      & + .media {\n        margin-top: 5px; } } }\n  & + .media {\n    border-top: 1px solid rgba($border, 0.5);\n    margin-top: 10px;\n    padding-top: 10px; }\n  // Sizes\n  &.is-large {\n    & + .media {\n      margin-top: 20px;\n      padding-top: 20px; } }\n  // Responsiveness\n  @include tablet {\n    &.is-large {\n      .media-number {\n        margin-right: 20px; } } } }\n",".menu-nav {\n  a {\n    display: block;\n    padding: 5px 10px; } }\n\n.menu-list {\n  a {\n    border-radius: $radius-small;\n    color: $text;\n    display: block;\n    padding: 5px 10px;\n    &:hover {\n      background-color: $background;\n      color: $link; }\n    // Modifiers\n    &.is-active {\n      background-color: $link;\n      color: $link-invert; } }\n  li {\n    ul {\n      border-left: 1px solid $border;\n      margin: 10px;\n      padding-left: 10px; } } }\n\n.menu-label {\n  color: $text-light;\n  font-size: $size-small;\n  letter-spacing: 1px;\n  margin-bottom: 5px;\n  text-transform: uppercase;\n  &:not(:first-child) {\n    margin-top: 20px; } }\n",".message-body {\n  border: 1px solid $border;\n  border-radius: $radius;\n  padding: 12px 15px;\n  strong {\n    color: inherit; } }\n\n.message-header {\n  background-color: $text;\n  border-radius: $radius $radius 0 0;\n  color: $text-invert;\n  padding: 7px 10px;\n  strong {\n    color: inherit; }\n  & + .message-body {\n    border-radius: 0 0 $radius $radius;\n    border-top: none; } }\n\n.message {\n  @extend .block;\n  background-color: $background;\n  border-radius: $radius;\n  // Colors\n  @each $name, $pair in $colors {\n    $color: nth($pair, 1);\n    $color-invert: nth($pair, 2);\n    $lightning: max((100% - lightness($color)) - 4%, 0%);\n    $darkness: max(lightness($color) - 10%, lightness($color));\n    &.is-#{$name} {\n      background-color: lighten($color, $lightning);\n      .message-header {\n        background-color: $color;\n        color: $color-invert; }\n      .message-body {\n        border-color: $color;\n        @if (colorLuminance($color) > 0.8) {\n          color: desaturate(lighten(darken($color, 100%), 40%), 40%); }\n        @else {\n          color: desaturate(lighten(darken($color, 100%), 50%), 30%); } } } } }\n",".modal-background {\n  @include overlay;\n  background-color: rgba($black, 0.86); }\n\n.modal-content {\n  margin: 0 20px;\n  max-height: calc(100vh - 160px);\n  overflow: auto;\n  position: relative;\n  width: 100%;\n  // Responsiveness\n  @include tablet {\n    margin: 0 auto;\n    max-height: calc(100vh - 40px);\n    width: 640px; } }\n\n.modal-close {\n  @extend .delete;\n  background: none;\n  height: 40px;\n  position: fixed;\n  right: 20px;\n  top: 20px;\n  width: 40px; }\n\n.modal-card {\n  @extend .modal-content;\n  background-color: $white;\n  border-radius: $radius-large;\n  display: flex;\n  flex-direction: column;\n  max-height: calc(100vh - 40px);\n  overflow: hidden; }\n\n.modal-card-head,\n.modal-card-foot {\n  align-items: center;\n  background-color: $background;\n  display: flex;\n  flex-shrink: 0;\n  justify-content: flex-start;\n  padding: 20px;\n  position: relative; }\n\n.modal-card-head {\n  border-bottom: 1px solid $border; }\n\n.modal-card-title {\n  color: $text-strong;\n  flex-grow: 1;\n  font-size: $size-4;\n  line-height: 1; }\n\n.modal-card-foot {\n  border-top: 1px solid $border;\n  .button {\n    &:not(:last-child) {\n      margin-right: 10px; } } }\n\n.modal-card-body {\n  flex-grow: 1;\n  overflow: auto;\n  padding: 20px; }\n\n.modal {\n  @include overlay;\n  align-items: center;\n  display: none;\n  justify-content: center;\n  overflow: hidden;\n  position: fixed;\n  z-index: 1986;\n  // Modifiers\n  &.is-active {\n    display: flex; } }\n","// Components\n\n.nav-toggle {\n  @extend .hamburger;\n  // Responsiveness\n  @include tablet {\n    display: none; } }\n\n.nav-item {\n  align-items: center;\n  display: flex;\n  justify-content: center;\n  padding: 10px;\n  a {\n    flex-grow: 1; }\n  img {\n    max-height: 24px; }\n  .button + .button {\n    margin-left: 10px; }\n  .tag {\n    &:first-child {\n      margin-right: 5px; }\n    &:last-child {\n      margin-left: 5px; } }\n  // Responsiveness\n  @include mobile {\n    justify-content: flex-start; } }\n\n.nav-item a,\na.nav-item {\n  color: $text;\n  &:hover {\n    color: $link-hover; }\n  // Modifiers\n  &.is-active {\n    color: $link-active; }\n  &.is-tab {\n    border-bottom: 1px solid transparent;\n    border-top: 1px solid transparent;\n    padding-left: 12px;\n    padding-right: 12px;\n    &:hover {\n      border-bottom: 1px solid $link;\n      border-top: 1px solid transparent; }\n    &.is-active {\n      border-bottom: 3px solid $link;\n      border-top: 3px solid transparent;\n      color: $link; } } }\n\n// Containers\n\n.nav-menu {\n  // Responsiveness\n  @include mobile {\n    background-color: $white;\n    box-shadow: 0 4px 7px rgba($black, 0.1);\n    left: 0;\n    display: none;\n    right: 0;\n    top: 100%;\n    position: absolute;\n    .nav-item {\n      border-top: 1px solid rgba($border, 0.5);\n      padding: 10px; }\n    &.is-active {\n      display: block; } }\n  @include tablet-only {\n    padding-right: 20px; } }\n\n.nav-left {\n  align-items: stretch;\n  display: flex;\n  flex-basis: 0;\n  flex-grow: 1;\n  justify-content: flex-start;\n  overflow: hidden;\n  overflow-x: auto;\n  white-space: nowrap; }\n\n.nav-center {\n  align-items: stretch;\n  display: flex;\n  justify-content: center;\n  margin-left: auto;\n  margin-right: auto; }\n\n.nav-right {\n  // Responsiveness\n  @include tablet {\n    align-items: stretch;\n    display: flex;\n    flex-basis: 0;\n    flex-grow: 1;\n    justify-content: flex-end; } }\n\n// Main container\n\n.nav {\n  align-items: stretch;\n  background-color: $white;\n  display: flex;\n  min-height: $nav-height;\n  position: relative;\n  text-align: center;\n  z-index: 2;\n  & > .container {\n    align-items: stretch;\n    display: flex;\n    min-height: $nav-height;\n    width: 100%;\n    & > .nav-left {\n      & > .nav-item:first-child:not(.is-tab) {\n        padding-left: 0; } }\n    & > .nav-right {\n      & > .nav-item:last-child:not(.is-tab) {\n        padding-right: 0; } } }\n  .container > & {\n    & > .nav-left {\n      & > .nav-item:first-child:not(.is-tab) {\n        padding-left: 0; } }\n    & > .nav-right {\n      & > .nav-item:last-child:not(.is-tab) {\n        padding-right: 0; } } }\n  // Modifiers\n  &.has-shadow {\n    box-shadow: 0 2px 3px rgba($black, 0.1); }\n  // Responsiveness\n  @include touch {\n    & > .container,\n    .container > & {\n      & > .nav-left {\n        & > .nav-item.is-brand:first-child {\n          padding-left: 20px; } } } } }\n",".pagination {\n  align-items: center;\n  display: flex;\n  justify-content: center;\n  text-align: center;\n  a {\n    display: block;\n    min-width: 32px;\n    padding: 3px 8px; }\n  span {\n    color: $text-light;\n    display: block;\n    margin: 0 4px; }\n  li {\n    margin: 0 2px; }\n  ul {\n    align-items: center;\n    display: flex;\n    flex-grow: 1;\n    justify-content: center; }\n  // Responsiveness\n  @include mobile {\n    flex-wrap: wrap;\n    & > a {\n      width: calc(50% - 5px);\n      &:not(:first-child) {\n        margin-left: 10px; } }\n    li {\n      flex-grow: 1; }\n    ul {\n      margin-top: 10px; } }\n  @include tablet {\n    & > a {\n      &:not(:first-child) {\n        order: 1; } } } }\n",".panel-icon {\n  @include fa(14px, 16px);\n  color: $text-light;\n  float: left;\n  margin: 0 4px 0 -2px;\n  .fa {\n    font-size: inherit;\n    line-height: inherit; } }\n\n.panel-heading {\n  background-color: $background;\n  border-bottom: 1px solid $border;\n  border-radius: 4px 4px 0 0;\n  color: $text-strong;\n  font-size: $size-medium;\n  font-weight: 300;\n  padding: 10px; }\n\n.panel-list {\n  a {\n    color: $text;\n    &:hover {\n      color: $link; } } }\n\n.panel-tabs {\n  display: flex;\n  font-size: $size-small;\n  padding: 5px 10px 0;\n  justify-content: center;\n  a {\n    border-bottom: 1px solid $border;\n    margin-bottom: -1px;\n    padding: 5px;\n    // Modifiers\n    &.is-active {\n      border-bottom-color: $link-active-border;\n      color: $link-active; } }\n  &:not(:last-child) {\n    border-bottom: 1px solid $border; } }\n\n.panel-block {\n  color: $text-strong;\n  display: block;\n  line-height: 16px;\n  padding: 10px;\n  &:not(:last-child) {\n    border-bottom: 1px solid $border; } }\n\na.panel-block {\n  &:hover {\n    background-color: $background; } }\n\n.panel {\n  border: 1px solid $border;\n  border-radius: $radius-large;\n  &:not(:last-child) {\n    margin-bottom: 20px; } }\n",".tabs {\n  @extend .block;\n  @extend .unselectable;\n  align-items: stretch;\n  display: flex;\n  justify-content: space-between;\n  line-height: 24px;\n  overflow: hidden;\n  overflow-x: auto;\n  white-space: nowrap;\n  a {\n    align-items: center;\n    border-bottom: 1px solid $border;\n    color: $text;\n    display: flex;\n    justify-content: center;\n    margin-bottom: -1px;\n    padding: 6px 12px;\n    vertical-align: top;\n    &:hover {\n      border-bottom-color: $text-strong;\n      color: $text-strong; } }\n  li {\n    display: block;\n    &.is-active {\n      a {\n        border-bottom-color: $link;\n        color: $link; } } }\n  ul {\n    align-items: center;\n    border-bottom: 1px solid $border;\n    display: flex;\n    flex-grow: 1;\n    justify-content: flex-start;\n    &.is-left {\n      padding-right: 10px; }\n    &.is-center {\n      flex: none;\n      justify-content: center;\n      padding-left: 10px;\n      padding-right: 10px; }\n    &.is-right {\n      justify-content: flex-end;\n      padding-left: 10px; } }\n  .icon {\n    &:first-child {\n      margin-right: 8px; }\n    &:last-child {\n      margin-left: 8px; } }\n  // Alignment\n  &.is-centered {\n    ul {\n      justify-content: center; } }\n  &.is-right {\n    ul {\n      justify-content: flex-end; } }\n  // Styles\n  &.is-boxed {\n    a {\n      border: 1px solid transparent;\n      border-radius: $radius $radius 0 0;\n      padding-bottom: 5px;\n      padding-top: 5px;\n      &:hover {\n        background-color: $background;\n        border-bottom-color: $border; } }\n    li {\n      &.is-active {\n        a {\n          background-color: $white;\n          border-color: $border;\n          border-bottom-color: transparent !important; } } } }\n  &.is-fullwidth {\n    li {\n      flex-grow: 1; } }\n  &.is-toggle {\n    a {\n      border: 1px solid $border;\n      margin-bottom: 0;\n      padding-bottom: 5px;\n      padding-top: 5px;\n      position: relative;\n      &:hover {\n        background-color: $background;\n        border-color: $border-hover;\n        z-index: 2; } }\n    li {\n      & + li {\n        margin-left: -1px; }\n      &:first-child a {\n        border-radius: $radius 0 0 $radius; }\n      &:last-child a {\n        border-radius: 0 $radius $radius 0; }\n      &.is-active {\n        a {\n          background-color: $primary;\n          border-color: $primary;\n          color: $primary-invert;\n          z-index: 1; } } }\n    ul {\n      border-bottom: none; } }\n  // Sizes\n  &.is-small {\n    font-size: $size-small;\n    a {\n      padding: 2px 8px; }\n    &.is-boxed,\n    &.is-toggle {\n      a {\n        padding-bottom: 1px;\n        padding-top: 1px; } } }\n  &.is-medium {\n    font-size: $size-medium;\n    a {\n      padding: 10px 16px; }\n    &.is-boxed,\n    &.is-toggle {\n      a {\n        padding-bottom: 9px;\n        padding-top: 9px; } } }\n  &.is-large {\n    font-size: $size-large;\n    a {\n      padding: 14px 20px; }\n    &.is-boxed,\n    &.is-toggle {\n      a {\n        padding-bottom: 13px;\n        padding-top: 13px; } } } }\n","// Components\n\n.hero-video {\n  @include overlay;\n  overflow: hidden;\n  video {\n    left: 50%;\n    min-height: 100%;\n    min-width: 100%;\n    position: absolute;\n    top: 50%;\n    transform: translate3d(-50%, -50%, 0); }\n  // Modifiers\n  &.is-transparent {\n    opacity: 0.3; }\n  // Responsiveness\n  @include mobile {\n    display: none; } }\n\n.hero-buttons {\n  margin-top: 20px;\n  // Responsiveness\n  @include mobile {\n    .button {\n      display: flex;\n      &:not(:last-child) {\n        margin-bottom: 10px; } } }\n  @include tablet {\n    display: flex;\n    justify-content: center;\n    .button:not(:last-child) {\n      margin-right: 20px; } } }\n\n// Containers\n\n.hero-head,\n.hero-foot {\n  flex-shrink: 0; }\n\n.hero-body {\n  flex-grow: 1;\n  padding: 40px 20px;\n  // Responsiveness\n  @include desktop {\n    padding-left: 0;\n    padding-right: 0; } }\n\n// Main container\n\n.hero {\n  align-items: stretch;\n  background-color: $white;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  .nav {\n    background: none;\n    box-shadow: 0 1px 0 rgba($border, 0.3); }\n  .tabs {\n    ul {\n      border-bottom: none; } }\n  // Colors\n  @each $name, $pair in $colors {\n    $color: nth($pair, 1);\n    $color-invert: nth($pair, 2);\n    &.is-#{$name} {\n      background-color: $color;\n      color: $color-invert;\n      .title {\n        color: $color-invert;\n        a,\n        strong {\n          color: inherit; } }\n      .subtitle {\n        color: rgba($color-invert, 0.7);\n        a,\n        strong {\n          color: $color-invert; } }\n      .nav {\n        box-shadow: 0 1px 0 rgba($color-invert, 0.2); }\n      .nav-menu {\n        @include mobile {\n          background-color: $color; } }\n      a.nav-item,\n      .nav-item a:not(.button) {\n        color: rgba($color-invert, 0.5);\n        &:hover,\n        &.is-active {\n          color: $color-invert; } }\n      .tabs {\n        a {\n          color: $color-invert;\n          opacity: 0.5;\n          &:hover {\n            opacity: 1; } }\n        li {\n          &.is-active a {\n            opacity: 1; } }\n        &.is-boxed,\n        &.is-toggle {\n          a {\n            color: $color-invert;\n            &:hover {\n              background-color: rgba($black, 0.1); } }\n          li.is-active a {\n            &,\n            &:hover {\n              background-color: $color-invert;\n              border-color: $color-invert;\n              color: $color; } } } }\n      // Modifiers\n      &.is-bold {\n        $gradient-top-left: darken(saturate(adjust-hue($color, -10deg), 10%), 10%);\n        $gradient-bottom-right: lighten(saturate(adjust-hue($color, 10deg), 5%), 5%);\n        background-image: linear-gradient(141deg, $gradient-top-left 0%, $color 71%, $gradient-bottom-right 100%); }\n      // Responsiveness\n      @include mobile {\n        .nav-toggle {\n          span {\n            background-color: $color-invert; }\n          &:hover {\n            background-color: rgba($black, 0.1); }\n          &.is-active {\n            span {\n              background-color: $color-invert; } } }\n        .nav-menu {\n          .nav-item {\n            border-top-color: rgba($color-invert, 0.2); } } } } }\n  // Sizes\n  &.is-medium {\n    @include tablet {\n      .hero-body {\n        padding-bottom: 120px;\n        padding-top: 120px; } } }\n  &.is-large {\n    @include tablet {\n      .hero-body {\n        padding-bottom: 240px;\n        padding-top: 240px; } } }\n  &.is-fullheight {\n    min-height: 100vh;\n    .hero-body {\n      align-items: center;\n      display: flex;\n      & > .container {\n        flex-grow: 1; } } } }\n",".section {\n  background-color: $white;\n  padding: 40px 20px;\n  // Responsiveness\n  @include desktop {\n    // Sizes\n    &.is-medium {\n      padding: 120px 20px; }\n    &.is-large {\n      padding: 240px 20px; } } }\n",".footer {\n  background-color: $background;\n  padding: 40px 20px 80px;\n  a {\n    &,\n    &:visited {\n      color: $text;\n      &:hover {\n        color: $text-strong; }\n      &:not(.icon) {\n        border-bottom: 1px solid $border;\n        &:hover {\n          border-bottom-color: $link; } } } } }\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 3 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _index = __webpack_require__(6);
	
	var _index2 = _interopRequireDefault(_index);
	
	var _jquery = __webpack_require__(9);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	(0, _jquery2.default)('main').append((0, _index2.default)());

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var pug = __webpack_require__(7);
	
	function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;pug_html = pug_html + "\u003Csection class=\"hero is-primary is-fullheight\"\u003E\u003Cdiv class=\"hero-body\"\u003E\u003Cdiv class=\"container has-text-centered\"\u003E\u003Ch1 class=\"title\"\u003EIt's ready and set up!\u003C\u002Fh1\u003E\u003Ch2 class=\"subtitle\"\u003EGo build something amazing ~\u003C\u002Fh2\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fsection\u003E";;return pug_html;};
	module.exports = template;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var pug_has_own_property = Object.prototype.hasOwnProperty;
	
	/**
	 * Merge two attribute objects giving precedence
	 * to values in object `b`. Classes are special-cased
	 * allowing for arrays and merging/joining appropriately
	 * resulting in a string.
	 *
	 * @param {Object} a
	 * @param {Object} b
	 * @return {Object} a
	 * @api private
	 */
	
	exports.merge = pug_merge;
	function pug_merge(a, b) {
	  if (arguments.length === 1) {
	    var attrs = a[0];
	    for (var i = 1; i < a.length; i++) {
	      attrs = pug_merge(attrs, a[i]);
	    }
	    return attrs;
	  }
	
	  for (var key in b) {
	    if (key === 'class') {
	      var valA = a[key] || [];
	      a[key] = (Array.isArray(valA) ? valA : [valA]).concat(b[key] || []);
	    } else if (key === 'style') {
	      var valA = pug_style(a[key]);
	      var valB = pug_style(b[key]);
	      a[key] = valA + (valA && valB && ';') + valB;
	    } else {
	      a[key] = b[key];
	    }
	  }
	
	  return a;
	};
	
	/**
	 * Process array, object, or string as a string of classes delimited by a space.
	 *
	 * If `val` is an array, all members of it and its subarrays are counted as
	 * classes. If `escaping` is an array, then whether or not the item in `val` is
	 * escaped depends on the corresponding item in `escaping`. If `escaping` is
	 * not an array, no escaping is done.
	 *
	 * If `val` is an object, all the keys whose value is truthy are counted as
	 * classes. No escaping is done.
	 *
	 * If `val` is a string, it is counted as a class. No escaping is done.
	 *
	 * @param {(Array.<string>|Object.<string, boolean>|string)} val
	 * @param {?Array.<string>} escaping
	 * @return {String}
	 */
	exports.classes = pug_classes;
	function pug_classes_array(val, escaping) {
	  var classString = '', className, padding = '', escapeEnabled = Array.isArray(escaping);
	  for (var i = 0; i < val.length; i++) {
	    className = pug_classes(val[i]);
	    if (!className) continue;
	    escapeEnabled && escaping[i] && (className = pug_escape(className));
	    classString = classString + padding + className;
	    padding = ' ';
	  }
	  return classString;
	}
	function pug_classes_object(val) {
	  var classString = '', padding = '';
	  for (var key in val) {
	    if (key && val[key] && pug_has_own_property.call(val, key)) {
	      classString = classString + padding + key;
	      padding = ' ';
	    }
	  }
	  return classString;
	}
	function pug_classes(val, escaping) {
	  if (Array.isArray(val)) {
	    return pug_classes_array(val, escaping);
	  } else if (val && typeof val === 'object') {
	    return pug_classes_object(val);
	  } else {
	    return val || '';
	  }
	}
	
	/**
	 * Convert object or string to a string of CSS styles delimited by a semicolon.
	 *
	 * @param {(Object.<string, string>|string)} val
	 * @return {String}
	 */
	
	exports.style = pug_style;
	function pug_style(val) {
	  if (!val) return '';
	  if (typeof val === 'object') {
	    var out = '', delim = '';
	    for (var style in val) {
	      /* istanbul ignore else */
	      if (pug_has_own_property.call(val, style)) {
	        out = out + delim + style + ':' + val[style];
	        delim = ';';
	      }
	    }
	    return out;
	  } else {
	    val = '' + val;
	    if (val[val.length - 1] === ';') return val.slice(0, -1);
	    return val;
	  }
	};
	
	/**
	 * Render the given attribute.
	 *
	 * @param {String} key
	 * @param {String} val
	 * @param {Boolean} escaped
	 * @param {Boolean} terse
	 * @return {String}
	 */
	exports.attr = pug_attr;
	function pug_attr(key, val, escaped, terse) {
	  if (val === false || val == null || !val && (key === 'class' || key === 'style')) {
	    return '';
	  }
	  if (val === true) {
	    return ' ' + (terse ? key : key + '="' + key + '"');
	  }
	  if (typeof val.toJSON === 'function') {
	    val = val.toJSON();
	  }
	  if (typeof val !== 'string') {
	    val = JSON.stringify(val);
	    if (!escaped && val.indexOf('"') !== -1) {
	      return ' ' + key + '=\'' + val.replace(/'/g, '&#39;') + '\'';
	    }
	  }
	  if (escaped) val = pug_escape(val);
	  return ' ' + key + '="' + val + '"';
	};
	
	/**
	 * Render the given attributes object.
	 *
	 * @param {Object} obj
	 * @param {Object} terse whether to use HTML5 terse boolean attributes
	 * @return {String}
	 */
	exports.attrs = pug_attrs;
	function pug_attrs(obj, terse){
	  var attrs = '';
	
	  for (var key in obj) {
	    if (pug_has_own_property.call(obj, key)) {
	      var val = obj[key];
	
	      if ('class' === key) {
	        val = pug_classes(val);
	        attrs = pug_attr(key, val, false, terse) + attrs;
	        continue;
	      }
	      if ('style' === key) {
	        val = pug_style(val);
	      }
	      attrs += pug_attr(key, val, false, terse);
	    }
	  }
	
	  return attrs;
	};
	
	/**
	 * Escape the given string of `html`.
	 *
	 * @param {String} html
	 * @return {String}
	 * @api private
	 */
	
	var pug_match_html = /["&<>]/;
	exports.escape = pug_escape;
	function pug_escape(_html){
	  var html = '' + _html;
	  var regexResult = pug_match_html.exec(html);
	  if (!regexResult) return _html;
	
	  var result = '';
	  var i, lastIndex, escape;
	  for (i = regexResult.index, lastIndex = 0; i < html.length; i++) {
	    switch (html.charCodeAt(i)) {
	      case 34: escape = '&quot;'; break;
	      case 38: escape = '&amp;'; break;
	      case 60: escape = '&lt;'; break;
	      case 62: escape = '&gt;'; break;
	      default: continue;
	    }
	    if (lastIndex !== i) result += html.substring(lastIndex, i);
	    lastIndex = i + 1;
	    result += escape;
	  }
	  if (lastIndex !== i) return result + html.substring(lastIndex, i);
	  else return result;
	};
	
	/**
	 * Re-throw the given `err` in context to the
	 * the pug in `filename` at the given `lineno`.
	 *
	 * @param {Error} err
	 * @param {String} filename
	 * @param {String} lineno
	 * @param {String} str original source
	 * @api private
	 */
	
	exports.rethrow = pug_rethrow;
	function pug_rethrow(err, filename, lineno, str){
	  if (!(err instanceof Error)) throw err;
	  if ((typeof window != 'undefined' || !filename) && !str) {
	    err.message += ' on line ' + lineno;
	    throw err;
	  }
	  try {
	    str = str || __webpack_require__(8).readFileSync(filename, 'utf8')
	  } catch (ex) {
	    pug_rethrow(err, null, lineno)
	  }
	  var context = 3
	    , lines = str.split('\n')
	    , start = Math.max(lineno - context, 0)
	    , end = Math.min(lines.length, lineno + context);
	
	  // Error context
	  var context = lines.slice(start, end).map(function(line, i){
	    var curr = i + start + 1;
	    return (curr == lineno ? '  > ' : '    ')
	      + curr
	      + '| '
	      + line;
	  }).join('\n');
	
	  // Alter exception message
	  err.path = filename;
	  err.message = (filename || 'Pug') + ':' + lineno
	    + '\n' + context + '\n\n' + err.message;
	  throw err;
	};


/***/ },
/* 8 */
/***/ function(module, exports) {

	/* (ignored) */

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*eslint-disable no-unused-vars*/
	/*!
	 * jQuery JavaScript Library v3.1.0
	 * https://jquery.com/
	 *
	 * Includes Sizzle.js
	 * https://sizzlejs.com/
	 *
	 * Copyright jQuery Foundation and other contributors
	 * Released under the MIT license
	 * https://jquery.org/license
	 *
	 * Date: 2016-07-07T21:44Z
	 */
	( function( global, factory ) {
	
		"use strict";
	
		if ( typeof module === "object" && typeof module.exports === "object" ) {
	
			// For CommonJS and CommonJS-like environments where a proper `window`
			// is present, execute the factory and get jQuery.
			// For environments that do not have a `window` with a `document`
			// (such as Node.js), expose a factory as module.exports.
			// This accentuates the need for the creation of a real `window`.
			// e.g. var jQuery = require("jquery")(window);
			// See ticket #14549 for more info.
			module.exports = global.document ?
				factory( global, true ) :
				function( w ) {
					if ( !w.document ) {
						throw new Error( "jQuery requires a window with a document" );
					}
					return factory( w );
				};
		} else {
			factory( global );
		}
	
	// Pass this if window is not defined yet
	} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {
	
	// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
	// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
	// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
	// enough that all such attempts are guarded in a try block.
	"use strict";
	
	var arr = [];
	
	var document = window.document;
	
	var getProto = Object.getPrototypeOf;
	
	var slice = arr.slice;
	
	var concat = arr.concat;
	
	var push = arr.push;
	
	var indexOf = arr.indexOf;
	
	var class2type = {};
	
	var toString = class2type.toString;
	
	var hasOwn = class2type.hasOwnProperty;
	
	var fnToString = hasOwn.toString;
	
	var ObjectFunctionString = fnToString.call( Object );
	
	var support = {};
	
	
	
		function DOMEval( code, doc ) {
			doc = doc || document;
	
			var script = doc.createElement( "script" );
	
			script.text = code;
			doc.head.appendChild( script ).parentNode.removeChild( script );
		}
	/* global Symbol */
	// Defining this global in .eslintrc would create a danger of using the global
	// unguarded in another place, it seems safer to define global only for this module
	
	
	
	var
		version = "3.1.0",
	
		// Define a local copy of jQuery
		jQuery = function( selector, context ) {
	
			// The jQuery object is actually just the init constructor 'enhanced'
			// Need init if jQuery is called (just allow error to be thrown if not included)
			return new jQuery.fn.init( selector, context );
		},
	
		// Support: Android <=4.0 only
		// Make sure we trim BOM and NBSP
		rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
	
		// Matches dashed string for camelizing
		rmsPrefix = /^-ms-/,
		rdashAlpha = /-([a-z])/g,
	
		// Used by jQuery.camelCase as callback to replace()
		fcamelCase = function( all, letter ) {
			return letter.toUpperCase();
		};
	
	jQuery.fn = jQuery.prototype = {
	
		// The current version of jQuery being used
		jquery: version,
	
		constructor: jQuery,
	
		// The default length of a jQuery object is 0
		length: 0,
	
		toArray: function() {
			return slice.call( this );
		},
	
		// Get the Nth element in the matched element set OR
		// Get the whole matched element set as a clean array
		get: function( num ) {
			return num != null ?
	
				// Return just the one element from the set
				( num < 0 ? this[ num + this.length ] : this[ num ] ) :
	
				// Return all the elements in a clean array
				slice.call( this );
		},
	
		// Take an array of elements and push it onto the stack
		// (returning the new matched element set)
		pushStack: function( elems ) {
	
			// Build a new jQuery matched element set
			var ret = jQuery.merge( this.constructor(), elems );
	
			// Add the old object onto the stack (as a reference)
			ret.prevObject = this;
	
			// Return the newly-formed element set
			return ret;
		},
	
		// Execute a callback for every element in the matched set.
		each: function( callback ) {
			return jQuery.each( this, callback );
		},
	
		map: function( callback ) {
			return this.pushStack( jQuery.map( this, function( elem, i ) {
				return callback.call( elem, i, elem );
			} ) );
		},
	
		slice: function() {
			return this.pushStack( slice.apply( this, arguments ) );
		},
	
		first: function() {
			return this.eq( 0 );
		},
	
		last: function() {
			return this.eq( -1 );
		},
	
		eq: function( i ) {
			var len = this.length,
				j = +i + ( i < 0 ? len : 0 );
			return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
		},
	
		end: function() {
			return this.prevObject || this.constructor();
		},
	
		// For internal use only.
		// Behaves like an Array's method, not like a jQuery method.
		push: push,
		sort: arr.sort,
		splice: arr.splice
	};
	
	jQuery.extend = jQuery.fn.extend = function() {
		var options, name, src, copy, copyIsArray, clone,
			target = arguments[ 0 ] || {},
			i = 1,
			length = arguments.length,
			deep = false;
	
		// Handle a deep copy situation
		if ( typeof target === "boolean" ) {
			deep = target;
	
			// Skip the boolean and the target
			target = arguments[ i ] || {};
			i++;
		}
	
		// Handle case when target is a string or something (possible in deep copy)
		if ( typeof target !== "object" && !jQuery.isFunction( target ) ) {
			target = {};
		}
	
		// Extend jQuery itself if only one argument is passed
		if ( i === length ) {
			target = this;
			i--;
		}
	
		for ( ; i < length; i++ ) {
	
			// Only deal with non-null/undefined values
			if ( ( options = arguments[ i ] ) != null ) {
	
				// Extend the base object
				for ( name in options ) {
					src = target[ name ];
					copy = options[ name ];
	
					// Prevent never-ending loop
					if ( target === copy ) {
						continue;
					}
	
					// Recurse if we're merging plain objects or arrays
					if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
						( copyIsArray = jQuery.isArray( copy ) ) ) ) {
	
						if ( copyIsArray ) {
							copyIsArray = false;
							clone = src && jQuery.isArray( src ) ? src : [];
	
						} else {
							clone = src && jQuery.isPlainObject( src ) ? src : {};
						}
	
						// Never move original objects, clone them
						target[ name ] = jQuery.extend( deep, clone, copy );
	
					// Don't bring in undefined values
					} else if ( copy !== undefined ) {
						target[ name ] = copy;
					}
				}
			}
		}
	
		// Return the modified object
		return target;
	};
	
	jQuery.extend( {
	
		// Unique for each copy of jQuery on the page
		expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),
	
		// Assume jQuery is ready without the ready module
		isReady: true,
	
		error: function( msg ) {
			throw new Error( msg );
		},
	
		noop: function() {},
	
		isFunction: function( obj ) {
			return jQuery.type( obj ) === "function";
		},
	
		isArray: Array.isArray,
	
		isWindow: function( obj ) {
			return obj != null && obj === obj.window;
		},
	
		isNumeric: function( obj ) {
	
			// As of jQuery 3.0, isNumeric is limited to
			// strings and numbers (primitives or objects)
			// that can be coerced to finite numbers (gh-2662)
			var type = jQuery.type( obj );
			return ( type === "number" || type === "string" ) &&
	
				// parseFloat NaNs numeric-cast false positives ("")
				// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
				// subtraction forces infinities to NaN
				!isNaN( obj - parseFloat( obj ) );
		},
	
		isPlainObject: function( obj ) {
			var proto, Ctor;
	
			// Detect obvious negatives
			// Use toString instead of jQuery.type to catch host objects
			if ( !obj || toString.call( obj ) !== "[object Object]" ) {
				return false;
			}
	
			proto = getProto( obj );
	
			// Objects with no prototype (e.g., `Object.create( null )`) are plain
			if ( !proto ) {
				return true;
			}
	
			// Objects with prototype are plain iff they were constructed by a global Object function
			Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
			return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
		},
	
		isEmptyObject: function( obj ) {
	
			/* eslint-disable no-unused-vars */
			// See https://github.com/eslint/eslint/issues/6125
			var name;
	
			for ( name in obj ) {
				return false;
			}
			return true;
		},
	
		type: function( obj ) {
			if ( obj == null ) {
				return obj + "";
			}
	
			// Support: Android <=2.3 only (functionish RegExp)
			return typeof obj === "object" || typeof obj === "function" ?
				class2type[ toString.call( obj ) ] || "object" :
				typeof obj;
		},
	
		// Evaluates a script in a global context
		globalEval: function( code ) {
			DOMEval( code );
		},
	
		// Convert dashed to camelCase; used by the css and data modules
		// Support: IE <=9 - 11, Edge 12 - 13
		// Microsoft forgot to hump their vendor prefix (#9572)
		camelCase: function( string ) {
			return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
		},
	
		nodeName: function( elem, name ) {
			return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
		},
	
		each: function( obj, callback ) {
			var length, i = 0;
	
			if ( isArrayLike( obj ) ) {
				length = obj.length;
				for ( ; i < length; i++ ) {
					if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
						break;
					}
				}
			} else {
				for ( i in obj ) {
					if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
						break;
					}
				}
			}
	
			return obj;
		},
	
		// Support: Android <=4.0 only
		trim: function( text ) {
			return text == null ?
				"" :
				( text + "" ).replace( rtrim, "" );
		},
	
		// results is for internal usage only
		makeArray: function( arr, results ) {
			var ret = results || [];
	
			if ( arr != null ) {
				if ( isArrayLike( Object( arr ) ) ) {
					jQuery.merge( ret,
						typeof arr === "string" ?
						[ arr ] : arr
					);
				} else {
					push.call( ret, arr );
				}
			}
	
			return ret;
		},
	
		inArray: function( elem, arr, i ) {
			return arr == null ? -1 : indexOf.call( arr, elem, i );
		},
	
		// Support: Android <=4.0 only, PhantomJS 1 only
		// push.apply(_, arraylike) throws on ancient WebKit
		merge: function( first, second ) {
			var len = +second.length,
				j = 0,
				i = first.length;
	
			for ( ; j < len; j++ ) {
				first[ i++ ] = second[ j ];
			}
	
			first.length = i;
	
			return first;
		},
	
		grep: function( elems, callback, invert ) {
			var callbackInverse,
				matches = [],
				i = 0,
				length = elems.length,
				callbackExpect = !invert;
	
			// Go through the array, only saving the items
			// that pass the validator function
			for ( ; i < length; i++ ) {
				callbackInverse = !callback( elems[ i ], i );
				if ( callbackInverse !== callbackExpect ) {
					matches.push( elems[ i ] );
				}
			}
	
			return matches;
		},
	
		// arg is for internal usage only
		map: function( elems, callback, arg ) {
			var length, value,
				i = 0,
				ret = [];
	
			// Go through the array, translating each of the items to their new values
			if ( isArrayLike( elems ) ) {
				length = elems.length;
				for ( ; i < length; i++ ) {
					value = callback( elems[ i ], i, arg );
	
					if ( value != null ) {
						ret.push( value );
					}
				}
	
			// Go through every key on the object,
			} else {
				for ( i in elems ) {
					value = callback( elems[ i ], i, arg );
	
					if ( value != null ) {
						ret.push( value );
					}
				}
			}
	
			// Flatten any nested arrays
			return concat.apply( [], ret );
		},
	
		// A global GUID counter for objects
		guid: 1,
	
		// Bind a function to a context, optionally partially applying any
		// arguments.
		proxy: function( fn, context ) {
			var tmp, args, proxy;
	
			if ( typeof context === "string" ) {
				tmp = fn[ context ];
				context = fn;
				fn = tmp;
			}
	
			// Quick check to determine if target is callable, in the spec
			// this throws a TypeError, but we will just return undefined.
			if ( !jQuery.isFunction( fn ) ) {
				return undefined;
			}
	
			// Simulated bind
			args = slice.call( arguments, 2 );
			proxy = function() {
				return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
			};
	
			// Set the guid of unique handler to the same of original handler, so it can be removed
			proxy.guid = fn.guid = fn.guid || jQuery.guid++;
	
			return proxy;
		},
	
		now: Date.now,
	
		// jQuery.support is not used in Core but other projects attach their
		// properties to it so it needs to exist.
		support: support
	} );
	
	if ( typeof Symbol === "function" ) {
		jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
	}
	
	// Populate the class2type map
	jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
	function( i, name ) {
		class2type[ "[object " + name + "]" ] = name.toLowerCase();
	} );
	
	function isArrayLike( obj ) {
	
		// Support: real iOS 8.2 only (not reproducible in simulator)
		// `in` check used to prevent JIT error (gh-2145)
		// hasOwn isn't used here due to false negatives
		// regarding Nodelist length in IE
		var length = !!obj && "length" in obj && obj.length,
			type = jQuery.type( obj );
	
		if ( type === "function" || jQuery.isWindow( obj ) ) {
			return false;
		}
	
		return type === "array" || length === 0 ||
			typeof length === "number" && length > 0 && ( length - 1 ) in obj;
	}
	var Sizzle =
	/*!
	 * Sizzle CSS Selector Engine v2.3.0
	 * https://sizzlejs.com/
	 *
	 * Copyright jQuery Foundation and other contributors
	 * Released under the MIT license
	 * http://jquery.org/license
	 *
	 * Date: 2016-01-04
	 */
	(function( window ) {
	
	var i,
		support,
		Expr,
		getText,
		isXML,
		tokenize,
		compile,
		select,
		outermostContext,
		sortInput,
		hasDuplicate,
	
		// Local document vars
		setDocument,
		document,
		docElem,
		documentIsHTML,
		rbuggyQSA,
		rbuggyMatches,
		matches,
		contains,
	
		// Instance-specific data
		expando = "sizzle" + 1 * new Date(),
		preferredDoc = window.document,
		dirruns = 0,
		done = 0,
		classCache = createCache(),
		tokenCache = createCache(),
		compilerCache = createCache(),
		sortOrder = function( a, b ) {
			if ( a === b ) {
				hasDuplicate = true;
			}
			return 0;
		},
	
		// Instance methods
		hasOwn = ({}).hasOwnProperty,
		arr = [],
		pop = arr.pop,
		push_native = arr.push,
		push = arr.push,
		slice = arr.slice,
		// Use a stripped-down indexOf as it's faster than native
		// https://jsperf.com/thor-indexof-vs-for/5
		indexOf = function( list, elem ) {
			var i = 0,
				len = list.length;
			for ( ; i < len; i++ ) {
				if ( list[i] === elem ) {
					return i;
				}
			}
			return -1;
		},
	
		booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
	
		// Regular expressions
	
		// http://www.w3.org/TR/css3-selectors/#whitespace
		whitespace = "[\\x20\\t\\r\\n\\f]",
	
		// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
		identifier = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
	
		// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
		attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
			// Operator (capture 2)
			"*([*^$|!~]?=)" + whitespace +
			// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
			"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
			"*\\]",
	
		pseudos = ":(" + identifier + ")(?:\\((" +
			// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
			// 1. quoted (capture 3; capture 4 or capture 5)
			"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
			// 2. simple (capture 6)
			"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
			// 3. anything else (capture 2)
			".*" +
			")\\)|)",
	
		// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
		rwhitespace = new RegExp( whitespace + "+", "g" ),
		rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),
	
		rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
		rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),
	
		rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),
	
		rpseudo = new RegExp( pseudos ),
		ridentifier = new RegExp( "^" + identifier + "$" ),
	
		matchExpr = {
			"ID": new RegExp( "^#(" + identifier + ")" ),
			"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
			"TAG": new RegExp( "^(" + identifier + "|[*])" ),
			"ATTR": new RegExp( "^" + attributes ),
			"PSEUDO": new RegExp( "^" + pseudos ),
			"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
				"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
				"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
			"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
			// For use in libraries implementing .is()
			// We use this for POS matching in `select`
			"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
				whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
		},
	
		rinputs = /^(?:input|select|textarea|button)$/i,
		rheader = /^h\d$/i,
	
		rnative = /^[^{]+\{\s*\[native \w/,
	
		// Easily-parseable/retrievable ID or TAG or CLASS selectors
		rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
	
		rsibling = /[+~]/,
	
		// CSS escapes
		// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
		runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
		funescape = function( _, escaped, escapedWhitespace ) {
			var high = "0x" + escaped - 0x10000;
			// NaN means non-codepoint
			// Support: Firefox<24
			// Workaround erroneous numeric interpretation of +"0x"
			return high !== high || escapedWhitespace ?
				escaped :
				high < 0 ?
					// BMP codepoint
					String.fromCharCode( high + 0x10000 ) :
					// Supplemental Plane codepoint (surrogate pair)
					String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
		},
	
		// CSS string/identifier serialization
		// https://drafts.csswg.org/cssom/#common-serializing-idioms
		rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g,
		fcssescape = function( ch, asCodePoint ) {
			if ( asCodePoint ) {
	
				// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
				if ( ch === "\0" ) {
					return "\uFFFD";
				}
	
				// Control characters and (dependent upon position) numbers get escaped as code points
				return ch.slice( 0, -1 ) + "\\" + ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
			}
	
			// Other potentially-special ASCII characters get backslash-escaped
			return "\\" + ch;
		},
	
		// Used for iframes
		// See setDocument()
		// Removing the function wrapper causes a "Permission Denied"
		// error in IE
		unloadHandler = function() {
			setDocument();
		},
	
		disabledAncestor = addCombinator(
			function( elem ) {
				return elem.disabled === true;
			},
			{ dir: "parentNode", next: "legend" }
		);
	
	// Optimize for push.apply( _, NodeList )
	try {
		push.apply(
			(arr = slice.call( preferredDoc.childNodes )),
			preferredDoc.childNodes
		);
		// Support: Android<4.0
		// Detect silently failing push.apply
		arr[ preferredDoc.childNodes.length ].nodeType;
	} catch ( e ) {
		push = { apply: arr.length ?
	
			// Leverage slice if possible
			function( target, els ) {
				push_native.apply( target, slice.call(els) );
			} :
	
			// Support: IE<9
			// Otherwise append directly
			function( target, els ) {
				var j = target.length,
					i = 0;
				// Can't trust NodeList.length
				while ( (target[j++] = els[i++]) ) {}
				target.length = j - 1;
			}
		};
	}
	
	function Sizzle( selector, context, results, seed ) {
		var m, i, elem, nid, match, groups, newSelector,
			newContext = context && context.ownerDocument,
	
			// nodeType defaults to 9, since context defaults to document
			nodeType = context ? context.nodeType : 9;
	
		results = results || [];
	
		// Return early from calls with invalid selector or context
		if ( typeof selector !== "string" || !selector ||
			nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {
	
			return results;
		}
	
		// Try to shortcut find operations (as opposed to filters) in HTML documents
		if ( !seed ) {
	
			if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
				setDocument( context );
			}
			context = context || document;
	
			if ( documentIsHTML ) {
	
				// If the selector is sufficiently simple, try using a "get*By*" DOM method
				// (excepting DocumentFragment context, where the methods don't exist)
				if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {
	
					// ID selector
					if ( (m = match[1]) ) {
	
						// Document context
						if ( nodeType === 9 ) {
							if ( (elem = context.getElementById( m )) ) {
	
								// Support: IE, Opera, Webkit
								// TODO: identify versions
								// getElementById can match elements by name instead of ID
								if ( elem.id === m ) {
									results.push( elem );
									return results;
								}
							} else {
								return results;
							}
	
						// Element context
						} else {
	
							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( newContext && (elem = newContext.getElementById( m )) &&
								contains( context, elem ) &&
								elem.id === m ) {
	
								results.push( elem );
								return results;
							}
						}
	
					// Type selector
					} else if ( match[2] ) {
						push.apply( results, context.getElementsByTagName( selector ) );
						return results;
	
					// Class selector
					} else if ( (m = match[3]) && support.getElementsByClassName &&
						context.getElementsByClassName ) {
	
						push.apply( results, context.getElementsByClassName( m ) );
						return results;
					}
				}
	
				// Take advantage of querySelectorAll
				if ( support.qsa &&
					!compilerCache[ selector + " " ] &&
					(!rbuggyQSA || !rbuggyQSA.test( selector )) ) {
	
					if ( nodeType !== 1 ) {
						newContext = context;
						newSelector = selector;
	
					// qSA looks outside Element context, which is not what we want
					// Thanks to Andrew Dupont for this workaround technique
					// Support: IE <=8
					// Exclude object elements
					} else if ( context.nodeName.toLowerCase() !== "object" ) {
	
						// Capture the context ID, setting it first if necessary
						if ( (nid = context.getAttribute( "id" )) ) {
							nid = nid.replace( rcssescape, fcssescape );
						} else {
							context.setAttribute( "id", (nid = expando) );
						}
	
						// Prefix every selector in the list
						groups = tokenize( selector );
						i = groups.length;
						while ( i-- ) {
							groups[i] = "#" + nid + " " + toSelector( groups[i] );
						}
						newSelector = groups.join( "," );
	
						// Expand context for sibling selectors
						newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
							context;
					}
	
					if ( newSelector ) {
						try {
							push.apply( results,
								newContext.querySelectorAll( newSelector )
							);
							return results;
						} catch ( qsaError ) {
						} finally {
							if ( nid === expando ) {
								context.removeAttribute( "id" );
							}
						}
					}
				}
			}
		}
	
		// All others
		return select( selector.replace( rtrim, "$1" ), context, results, seed );
	}
	
	/**
	 * Create key-value caches of limited size
	 * @returns {function(string, object)} Returns the Object data after storing it on itself with
	 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
	 *	deleting the oldest entry
	 */
	function createCache() {
		var keys = [];
	
		function cache( key, value ) {
			// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
			if ( keys.push( key + " " ) > Expr.cacheLength ) {
				// Only keep the most recent entries
				delete cache[ keys.shift() ];
			}
			return (cache[ key + " " ] = value);
		}
		return cache;
	}
	
	/**
	 * Mark a function for special use by Sizzle
	 * @param {Function} fn The function to mark
	 */
	function markFunction( fn ) {
		fn[ expando ] = true;
		return fn;
	}
	
	/**
	 * Support testing using an element
	 * @param {Function} fn Passed the created element and returns a boolean result
	 */
	function assert( fn ) {
		var el = document.createElement("fieldset");
	
		try {
			return !!fn( el );
		} catch (e) {
			return false;
		} finally {
			// Remove from its parent by default
			if ( el.parentNode ) {
				el.parentNode.removeChild( el );
			}
			// release memory in IE
			el = null;
		}
	}
	
	/**
	 * Adds the same handler for all of the specified attrs
	 * @param {String} attrs Pipe-separated list of attributes
	 * @param {Function} handler The method that will be applied
	 */
	function addHandle( attrs, handler ) {
		var arr = attrs.split("|"),
			i = arr.length;
	
		while ( i-- ) {
			Expr.attrHandle[ arr[i] ] = handler;
		}
	}
	
	/**
	 * Checks document order of two siblings
	 * @param {Element} a
	 * @param {Element} b
	 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
	 */
	function siblingCheck( a, b ) {
		var cur = b && a,
			diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
				a.sourceIndex - b.sourceIndex;
	
		// Use IE sourceIndex if available on both nodes
		if ( diff ) {
			return diff;
		}
	
		// Check if b follows a
		if ( cur ) {
			while ( (cur = cur.nextSibling) ) {
				if ( cur === b ) {
					return -1;
				}
			}
		}
	
		return a ? 1 : -1;
	}
	
	/**
	 * Returns a function to use in pseudos for input types
	 * @param {String} type
	 */
	function createInputPseudo( type ) {
		return function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === type;
		};
	}
	
	/**
	 * Returns a function to use in pseudos for buttons
	 * @param {String} type
	 */
	function createButtonPseudo( type ) {
		return function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return (name === "input" || name === "button") && elem.type === type;
		};
	}
	
	/**
	 * Returns a function to use in pseudos for :enabled/:disabled
	 * @param {Boolean} disabled true for :disabled; false for :enabled
	 */
	function createDisabledPseudo( disabled ) {
		// Known :disabled false positives:
		// IE: *[disabled]:not(button, input, select, textarea, optgroup, option, menuitem, fieldset)
		// not IE: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
		return function( elem ) {
	
			// Check form elements and option elements for explicit disabling
			return "label" in elem && elem.disabled === disabled ||
				"form" in elem && elem.disabled === disabled ||
	
				// Check non-disabled form elements for fieldset[disabled] ancestors
				"form" in elem && elem.disabled === false && (
					// Support: IE6-11+
					// Ancestry is covered for us
					elem.isDisabled === disabled ||
	
					// Otherwise, assume any non-<option> under fieldset[disabled] is disabled
					/* jshint -W018 */
					elem.isDisabled !== !disabled &&
						("label" in elem || !disabledAncestor( elem )) !== disabled
				);
		};
	}
	
	/**
	 * Returns a function to use in pseudos for positionals
	 * @param {Function} fn
	 */
	function createPositionalPseudo( fn ) {
		return markFunction(function( argument ) {
			argument = +argument;
			return markFunction(function( seed, matches ) {
				var j,
					matchIndexes = fn( [], seed.length, argument ),
					i = matchIndexes.length;
	
				// Match elements found at the specified indexes
				while ( i-- ) {
					if ( seed[ (j = matchIndexes[i]) ] ) {
						seed[j] = !(matches[j] = seed[j]);
					}
				}
			});
		});
	}
	
	/**
	 * Checks a node for validity as a Sizzle context
	 * @param {Element|Object=} context
	 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
	 */
	function testContext( context ) {
		return context && typeof context.getElementsByTagName !== "undefined" && context;
	}
	
	// Expose support vars for convenience
	support = Sizzle.support = {};
	
	/**
	 * Detects XML nodes
	 * @param {Element|Object} elem An element or a document
	 * @returns {Boolean} True iff elem is a non-HTML XML node
	 */
	isXML = Sizzle.isXML = function( elem ) {
		// documentElement is verified for cases where it doesn't yet exist
		// (such as loading iframes in IE - #4833)
		var documentElement = elem && (elem.ownerDocument || elem).documentElement;
		return documentElement ? documentElement.nodeName !== "HTML" : false;
	};
	
	/**
	 * Sets document-related variables once based on the current document
	 * @param {Element|Object} [doc] An element or document object to use to set the document
	 * @returns {Object} Returns the current document
	 */
	setDocument = Sizzle.setDocument = function( node ) {
		var hasCompare, subWindow,
			doc = node ? node.ownerDocument || node : preferredDoc;
	
		// Return early if doc is invalid or already selected
		if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
			return document;
		}
	
		// Update global variables
		document = doc;
		docElem = document.documentElement;
		documentIsHTML = !isXML( document );
	
		// Support: IE 9-11, Edge
		// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
		if ( preferredDoc !== document &&
			(subWindow = document.defaultView) && subWindow.top !== subWindow ) {
	
			// Support: IE 11, Edge
			if ( subWindow.addEventListener ) {
				subWindow.addEventListener( "unload", unloadHandler, false );
	
			// Support: IE 9 - 10 only
			} else if ( subWindow.attachEvent ) {
				subWindow.attachEvent( "onunload", unloadHandler );
			}
		}
	
		/* Attributes
		---------------------------------------------------------------------- */
	
		// Support: IE<8
		// Verify that getAttribute really returns attributes and not properties
		// (excepting IE8 booleans)
		support.attributes = assert(function( el ) {
			el.className = "i";
			return !el.getAttribute("className");
		});
	
		/* getElement(s)By*
		---------------------------------------------------------------------- */
	
		// Check if getElementsByTagName("*") returns only elements
		support.getElementsByTagName = assert(function( el ) {
			el.appendChild( document.createComment("") );
			return !el.getElementsByTagName("*").length;
		});
	
		// Support: IE<9
		support.getElementsByClassName = rnative.test( document.getElementsByClassName );
	
		// Support: IE<10
		// Check if getElementById returns elements by name
		// The broken getElementById methods don't pick up programmatically-set names,
		// so use a roundabout getElementsByName test
		support.getById = assert(function( el ) {
			docElem.appendChild( el ).id = expando;
			return !document.getElementsByName || !document.getElementsByName( expando ).length;
		});
	
		// ID find and filter
		if ( support.getById ) {
			Expr.find["ID"] = function( id, context ) {
				if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
					var m = context.getElementById( id );
					return m ? [ m ] : [];
				}
			};
			Expr.filter["ID"] = function( id ) {
				var attrId = id.replace( runescape, funescape );
				return function( elem ) {
					return elem.getAttribute("id") === attrId;
				};
			};
		} else {
			// Support: IE6/7
			// getElementById is not reliable as a find shortcut
			delete Expr.find["ID"];
	
			Expr.filter["ID"] =  function( id ) {
				var attrId = id.replace( runescape, funescape );
				return function( elem ) {
					var node = typeof elem.getAttributeNode !== "undefined" &&
						elem.getAttributeNode("id");
					return node && node.value === attrId;
				};
			};
		}
	
		// Tag
		Expr.find["TAG"] = support.getElementsByTagName ?
			function( tag, context ) {
				if ( typeof context.getElementsByTagName !== "undefined" ) {
					return context.getElementsByTagName( tag );
	
				// DocumentFragment nodes don't have gEBTN
				} else if ( support.qsa ) {
					return context.querySelectorAll( tag );
				}
			} :
	
			function( tag, context ) {
				var elem,
					tmp = [],
					i = 0,
					// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
					results = context.getElementsByTagName( tag );
	
				// Filter out possible comments
				if ( tag === "*" ) {
					while ( (elem = results[i++]) ) {
						if ( elem.nodeType === 1 ) {
							tmp.push( elem );
						}
					}
	
					return tmp;
				}
				return results;
			};
	
		// Class
		Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
			if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
				return context.getElementsByClassName( className );
			}
		};
	
		/* QSA/matchesSelector
		---------------------------------------------------------------------- */
	
		// QSA and matchesSelector support
	
		// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
		rbuggyMatches = [];
	
		// qSa(:focus) reports false when true (Chrome 21)
		// We allow this because of a bug in IE8/9 that throws an error
		// whenever `document.activeElement` is accessed on an iframe
		// So, we allow :focus to pass through QSA all the time to avoid the IE error
		// See https://bugs.jquery.com/ticket/13378
		rbuggyQSA = [];
	
		if ( (support.qsa = rnative.test( document.querySelectorAll )) ) {
			// Build QSA regex
			// Regex strategy adopted from Diego Perini
			assert(function( el ) {
				// Select is set to empty string on purpose
				// This is to test IE's treatment of not explicitly
				// setting a boolean content attribute,
				// since its presence should be enough
				// https://bugs.jquery.com/ticket/12359
				docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +
					"<select id='" + expando + "-\r\\' msallowcapture=''>" +
					"<option selected=''></option></select>";
	
				// Support: IE8, Opera 11-12.16
				// Nothing should be selected when empty strings follow ^= or $= or *=
				// The test attribute must be unknown in Opera but "safe" for WinRT
				// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
				if ( el.querySelectorAll("[msallowcapture^='']").length ) {
					rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
				}
	
				// Support: IE8
				// Boolean attributes and "value" are not treated correctly
				if ( !el.querySelectorAll("[selected]").length ) {
					rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
				}
	
				// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
				if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
					rbuggyQSA.push("~=");
				}
	
				// Webkit/Opera - :checked should return selected option elements
				// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
				// IE8 throws error here and will not see later tests
				if ( !el.querySelectorAll(":checked").length ) {
					rbuggyQSA.push(":checked");
				}
	
				// Support: Safari 8+, iOS 8+
				// https://bugs.webkit.org/show_bug.cgi?id=136851
				// In-page `selector#id sibling-combinator selector` fails
				if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
					rbuggyQSA.push(".#.+[+~]");
				}
			});
	
			assert(function( el ) {
				el.innerHTML = "<a href='' disabled='disabled'></a>" +
					"<select disabled='disabled'><option/></select>";
	
				// Support: Windows 8 Native Apps
				// The type and name attributes are restricted during .innerHTML assignment
				var input = document.createElement("input");
				input.setAttribute( "type", "hidden" );
				el.appendChild( input ).setAttribute( "name", "D" );
	
				// Support: IE8
				// Enforce case-sensitivity of name attribute
				if ( el.querySelectorAll("[name=d]").length ) {
					rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
				}
	
				// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
				// IE8 throws error here and will not see later tests
				if ( el.querySelectorAll(":enabled").length !== 2 ) {
					rbuggyQSA.push( ":enabled", ":disabled" );
				}
	
				// Support: IE9-11+
				// IE's :disabled selector does not pick up the children of disabled fieldsets
				docElem.appendChild( el ).disabled = true;
				if ( el.querySelectorAll(":disabled").length !== 2 ) {
					rbuggyQSA.push( ":enabled", ":disabled" );
				}
	
				// Opera 10-11 does not throw on post-comma invalid pseudos
				el.querySelectorAll("*,:x");
				rbuggyQSA.push(",.*:");
			});
		}
	
		if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
			docElem.webkitMatchesSelector ||
			docElem.mozMatchesSelector ||
			docElem.oMatchesSelector ||
			docElem.msMatchesSelector) )) ) {
	
			assert(function( el ) {
				// Check to see if it's possible to do matchesSelector
				// on a disconnected node (IE 9)
				support.disconnectedMatch = matches.call( el, "*" );
	
				// This should fail with an exception
				// Gecko does not error, returns false instead
				matches.call( el, "[s!='']:x" );
				rbuggyMatches.push( "!=", pseudos );
			});
		}
	
		rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
		rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );
	
		/* Contains
		---------------------------------------------------------------------- */
		hasCompare = rnative.test( docElem.compareDocumentPosition );
	
		// Element contains another
		// Purposefully self-exclusive
		// As in, an element does not contain itself
		contains = hasCompare || rnative.test( docElem.contains ) ?
			function( a, b ) {
				var adown = a.nodeType === 9 ? a.documentElement : a,
					bup = b && b.parentNode;
				return a === bup || !!( bup && bup.nodeType === 1 && (
					adown.contains ?
						adown.contains( bup ) :
						a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
				));
			} :
			function( a, b ) {
				if ( b ) {
					while ( (b = b.parentNode) ) {
						if ( b === a ) {
							return true;
						}
					}
				}
				return false;
			};
	
		/* Sorting
		---------------------------------------------------------------------- */
	
		// Document order sorting
		sortOrder = hasCompare ?
		function( a, b ) {
	
			// Flag for duplicate removal
			if ( a === b ) {
				hasDuplicate = true;
				return 0;
			}
	
			// Sort on method existence if only one input has compareDocumentPosition
			var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
			if ( compare ) {
				return compare;
			}
	
			// Calculate position if both inputs belong to the same document
			compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
				a.compareDocumentPosition( b ) :
	
				// Otherwise we know they are disconnected
				1;
	
			// Disconnected nodes
			if ( compare & 1 ||
				(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {
	
				// Choose the first element that is related to our preferred document
				if ( a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
					return -1;
				}
				if ( b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
					return 1;
				}
	
				// Maintain original order
				return sortInput ?
					( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
					0;
			}
	
			return compare & 4 ? -1 : 1;
		} :
		function( a, b ) {
			// Exit early if the nodes are identical
			if ( a === b ) {
				hasDuplicate = true;
				return 0;
			}
	
			var cur,
				i = 0,
				aup = a.parentNode,
				bup = b.parentNode,
				ap = [ a ],
				bp = [ b ];
	
			// Parentless nodes are either documents or disconnected
			if ( !aup || !bup ) {
				return a === document ? -1 :
					b === document ? 1 :
					aup ? -1 :
					bup ? 1 :
					sortInput ?
					( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
					0;
	
			// If the nodes are siblings, we can do a quick check
			} else if ( aup === bup ) {
				return siblingCheck( a, b );
			}
	
			// Otherwise we need full lists of their ancestors for comparison
			cur = a;
			while ( (cur = cur.parentNode) ) {
				ap.unshift( cur );
			}
			cur = b;
			while ( (cur = cur.parentNode) ) {
				bp.unshift( cur );
			}
	
			// Walk down the tree looking for a discrepancy
			while ( ap[i] === bp[i] ) {
				i++;
			}
	
			return i ?
				// Do a sibling check if the nodes have a common ancestor
				siblingCheck( ap[i], bp[i] ) :
	
				// Otherwise nodes in our document sort first
				ap[i] === preferredDoc ? -1 :
				bp[i] === preferredDoc ? 1 :
				0;
		};
	
		return document;
	};
	
	Sizzle.matches = function( expr, elements ) {
		return Sizzle( expr, null, null, elements );
	};
	
	Sizzle.matchesSelector = function( elem, expr ) {
		// Set document vars if needed
		if ( ( elem.ownerDocument || elem ) !== document ) {
			setDocument( elem );
		}
	
		// Make sure that attribute selectors are quoted
		expr = expr.replace( rattributeQuotes, "='$1']" );
	
		if ( support.matchesSelector && documentIsHTML &&
			!compilerCache[ expr + " " ] &&
			( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
			( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {
	
			try {
				var ret = matches.call( elem, expr );
	
				// IE 9's matchesSelector returns false on disconnected nodes
				if ( ret || support.disconnectedMatch ||
						// As well, disconnected nodes are said to be in a document
						// fragment in IE 9
						elem.document && elem.document.nodeType !== 11 ) {
					return ret;
				}
			} catch (e) {}
		}
	
		return Sizzle( expr, document, null, [ elem ] ).length > 0;
	};
	
	Sizzle.contains = function( context, elem ) {
		// Set document vars if needed
		if ( ( context.ownerDocument || context ) !== document ) {
			setDocument( context );
		}
		return contains( context, elem );
	};
	
	Sizzle.attr = function( elem, name ) {
		// Set document vars if needed
		if ( ( elem.ownerDocument || elem ) !== document ) {
			setDocument( elem );
		}
	
		var fn = Expr.attrHandle[ name.toLowerCase() ],
			// Don't get fooled by Object.prototype properties (jQuery #13807)
			val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
				fn( elem, name, !documentIsHTML ) :
				undefined;
	
		return val !== undefined ?
			val :
			support.attributes || !documentIsHTML ?
				elem.getAttribute( name ) :
				(val = elem.getAttributeNode(name)) && val.specified ?
					val.value :
					null;
	};
	
	Sizzle.escape = function( sel ) {
		return (sel + "").replace( rcssescape, fcssescape );
	};
	
	Sizzle.error = function( msg ) {
		throw new Error( "Syntax error, unrecognized expression: " + msg );
	};
	
	/**
	 * Document sorting and removing duplicates
	 * @param {ArrayLike} results
	 */
	Sizzle.uniqueSort = function( results ) {
		var elem,
			duplicates = [],
			j = 0,
			i = 0;
	
		// Unless we *know* we can detect duplicates, assume their presence
		hasDuplicate = !support.detectDuplicates;
		sortInput = !support.sortStable && results.slice( 0 );
		results.sort( sortOrder );
	
		if ( hasDuplicate ) {
			while ( (elem = results[i++]) ) {
				if ( elem === results[ i ] ) {
					j = duplicates.push( i );
				}
			}
			while ( j-- ) {
				results.splice( duplicates[ j ], 1 );
			}
		}
	
		// Clear input after sorting to release objects
		// See https://github.com/jquery/sizzle/pull/225
		sortInput = null;
	
		return results;
	};
	
	/**
	 * Utility function for retrieving the text value of an array of DOM nodes
	 * @param {Array|Element} elem
	 */
	getText = Sizzle.getText = function( elem ) {
		var node,
			ret = "",
			i = 0,
			nodeType = elem.nodeType;
	
		if ( !nodeType ) {
			// If no nodeType, this is expected to be an array
			while ( (node = elem[i++]) ) {
				// Do not traverse comment nodes
				ret += getText( node );
			}
		} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
			// Use textContent for elements
			// innerText usage removed for consistency of new lines (jQuery #11153)
			if ( typeof elem.textContent === "string" ) {
				return elem.textContent;
			} else {
				// Traverse its children
				for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
					ret += getText( elem );
				}
			}
		} else if ( nodeType === 3 || nodeType === 4 ) {
			return elem.nodeValue;
		}
		// Do not include comment or processing instruction nodes
	
		return ret;
	};
	
	Expr = Sizzle.selectors = {
	
		// Can be adjusted by the user
		cacheLength: 50,
	
		createPseudo: markFunction,
	
		match: matchExpr,
	
		attrHandle: {},
	
		find: {},
	
		relative: {
			">": { dir: "parentNode", first: true },
			" ": { dir: "parentNode" },
			"+": { dir: "previousSibling", first: true },
			"~": { dir: "previousSibling" }
		},
	
		preFilter: {
			"ATTR": function( match ) {
				match[1] = match[1].replace( runescape, funescape );
	
				// Move the given value to match[3] whether quoted or unquoted
				match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );
	
				if ( match[2] === "~=" ) {
					match[3] = " " + match[3] + " ";
				}
	
				return match.slice( 0, 4 );
			},
	
			"CHILD": function( match ) {
				/* matches from matchExpr["CHILD"]
					1 type (only|nth|...)
					2 what (child|of-type)
					3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
					4 xn-component of xn+y argument ([+-]?\d*n|)
					5 sign of xn-component
					6 x of xn-component
					7 sign of y-component
					8 y of y-component
				*/
				match[1] = match[1].toLowerCase();
	
				if ( match[1].slice( 0, 3 ) === "nth" ) {
					// nth-* requires argument
					if ( !match[3] ) {
						Sizzle.error( match[0] );
					}
	
					// numeric x and y parameters for Expr.filter.CHILD
					// remember that false/true cast respectively to 0/1
					match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
					match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );
	
				// other types prohibit arguments
				} else if ( match[3] ) {
					Sizzle.error( match[0] );
				}
	
				return match;
			},
	
			"PSEUDO": function( match ) {
				var excess,
					unquoted = !match[6] && match[2];
	
				if ( matchExpr["CHILD"].test( match[0] ) ) {
					return null;
				}
	
				// Accept quoted arguments as-is
				if ( match[3] ) {
					match[2] = match[4] || match[5] || "";
	
				// Strip excess characters from unquoted arguments
				} else if ( unquoted && rpseudo.test( unquoted ) &&
					// Get excess from tokenize (recursively)
					(excess = tokenize( unquoted, true )) &&
					// advance to the next closing parenthesis
					(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {
	
					// excess is a negative index
					match[0] = match[0].slice( 0, excess );
					match[2] = unquoted.slice( 0, excess );
				}
	
				// Return only captures needed by the pseudo filter method (type and argument)
				return match.slice( 0, 3 );
			}
		},
	
		filter: {
	
			"TAG": function( nodeNameSelector ) {
				var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
				return nodeNameSelector === "*" ?
					function() { return true; } :
					function( elem ) {
						return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
					};
			},
	
			"CLASS": function( className ) {
				var pattern = classCache[ className + " " ];
	
				return pattern ||
					(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
					classCache( className, function( elem ) {
						return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
					});
			},
	
			"ATTR": function( name, operator, check ) {
				return function( elem ) {
					var result = Sizzle.attr( elem, name );
	
					if ( result == null ) {
						return operator === "!=";
					}
					if ( !operator ) {
						return true;
					}
	
					result += "";
	
					return operator === "=" ? result === check :
						operator === "!=" ? result !== check :
						operator === "^=" ? check && result.indexOf( check ) === 0 :
						operator === "*=" ? check && result.indexOf( check ) > -1 :
						operator === "$=" ? check && result.slice( -check.length ) === check :
						operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
						operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
						false;
				};
			},
	
			"CHILD": function( type, what, argument, first, last ) {
				var simple = type.slice( 0, 3 ) !== "nth",
					forward = type.slice( -4 ) !== "last",
					ofType = what === "of-type";
	
				return first === 1 && last === 0 ?
	
					// Shortcut for :nth-*(n)
					function( elem ) {
						return !!elem.parentNode;
					} :
	
					function( elem, context, xml ) {
						var cache, uniqueCache, outerCache, node, nodeIndex, start,
							dir = simple !== forward ? "nextSibling" : "previousSibling",
							parent = elem.parentNode,
							name = ofType && elem.nodeName.toLowerCase(),
							useCache = !xml && !ofType,
							diff = false;
	
						if ( parent ) {
	
							// :(first|last|only)-(child|of-type)
							if ( simple ) {
								while ( dir ) {
									node = elem;
									while ( (node = node[ dir ]) ) {
										if ( ofType ?
											node.nodeName.toLowerCase() === name :
											node.nodeType === 1 ) {
	
											return false;
										}
									}
									// Reverse direction for :only-* (if we haven't yet done so)
									start = dir = type === "only" && !start && "nextSibling";
								}
								return true;
							}
	
							start = [ forward ? parent.firstChild : parent.lastChild ];
	
							// non-xml :nth-child(...) stores cache data on `parent`
							if ( forward && useCache ) {
	
								// Seek `elem` from a previously-cached index
	
								// ...in a gzip-friendly way
								node = parent;
								outerCache = node[ expando ] || (node[ expando ] = {});
	
								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									(outerCache[ node.uniqueID ] = {});
	
								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex && cache[ 2 ];
								node = nodeIndex && parent.childNodes[ nodeIndex ];
	
								while ( (node = ++nodeIndex && node && node[ dir ] ||
	
									// Fallback to seeking `elem` from the start
									(diff = nodeIndex = 0) || start.pop()) ) {
	
									// When found, cache indexes on `parent` and break
									if ( node.nodeType === 1 && ++diff && node === elem ) {
										uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
										break;
									}
								}
	
							} else {
								// Use previously-cached element index if available
								if ( useCache ) {
									// ...in a gzip-friendly way
									node = elem;
									outerCache = node[ expando ] || (node[ expando ] = {});
	
									// Support: IE <9 only
									// Defend against cloned attroperties (jQuery gh-1709)
									uniqueCache = outerCache[ node.uniqueID ] ||
										(outerCache[ node.uniqueID ] = {});
	
									cache = uniqueCache[ type ] || [];
									nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
									diff = nodeIndex;
								}
	
								// xml :nth-child(...)
								// or :nth-last-child(...) or :nth(-last)?-of-type(...)
								if ( diff === false ) {
									// Use the same loop as above to seek `elem` from the start
									while ( (node = ++nodeIndex && node && node[ dir ] ||
										(diff = nodeIndex = 0) || start.pop()) ) {
	
										if ( ( ofType ?
											node.nodeName.toLowerCase() === name :
											node.nodeType === 1 ) &&
											++diff ) {
	
											// Cache the index of each encountered element
											if ( useCache ) {
												outerCache = node[ expando ] || (node[ expando ] = {});
	
												// Support: IE <9 only
												// Defend against cloned attroperties (jQuery gh-1709)
												uniqueCache = outerCache[ node.uniqueID ] ||
													(outerCache[ node.uniqueID ] = {});
	
												uniqueCache[ type ] = [ dirruns, diff ];
											}
	
											if ( node === elem ) {
												break;
											}
										}
									}
								}
							}
	
							// Incorporate the offset, then check against cycle size
							diff -= last;
							return diff === first || ( diff % first === 0 && diff / first >= 0 );
						}
					};
			},
	
			"PSEUDO": function( pseudo, argument ) {
				// pseudo-class names are case-insensitive
				// http://www.w3.org/TR/selectors/#pseudo-classes
				// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
				// Remember that setFilters inherits from pseudos
				var args,
					fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
						Sizzle.error( "unsupported pseudo: " + pseudo );
	
				// The user may use createPseudo to indicate that
				// arguments are needed to create the filter function
				// just as Sizzle does
				if ( fn[ expando ] ) {
					return fn( argument );
				}
	
				// But maintain support for old signatures
				if ( fn.length > 1 ) {
					args = [ pseudo, pseudo, "", argument ];
					return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
						markFunction(function( seed, matches ) {
							var idx,
								matched = fn( seed, argument ),
								i = matched.length;
							while ( i-- ) {
								idx = indexOf( seed, matched[i] );
								seed[ idx ] = !( matches[ idx ] = matched[i] );
							}
						}) :
						function( elem ) {
							return fn( elem, 0, args );
						};
				}
	
				return fn;
			}
		},
	
		pseudos: {
			// Potentially complex pseudos
			"not": markFunction(function( selector ) {
				// Trim the selector passed to compile
				// to avoid treating leading and trailing
				// spaces as combinators
				var input = [],
					results = [],
					matcher = compile( selector.replace( rtrim, "$1" ) );
	
				return matcher[ expando ] ?
					markFunction(function( seed, matches, context, xml ) {
						var elem,
							unmatched = matcher( seed, null, xml, [] ),
							i = seed.length;
	
						// Match elements unmatched by `matcher`
						while ( i-- ) {
							if ( (elem = unmatched[i]) ) {
								seed[i] = !(matches[i] = elem);
							}
						}
					}) :
					function( elem, context, xml ) {
						input[0] = elem;
						matcher( input, null, xml, results );
						// Don't keep the element (issue #299)
						input[0] = null;
						return !results.pop();
					};
			}),
	
			"has": markFunction(function( selector ) {
				return function( elem ) {
					return Sizzle( selector, elem ).length > 0;
				};
			}),
	
			"contains": markFunction(function( text ) {
				text = text.replace( runescape, funescape );
				return function( elem ) {
					return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
				};
			}),
	
			// "Whether an element is represented by a :lang() selector
			// is based solely on the element's language value
			// being equal to the identifier C,
			// or beginning with the identifier C immediately followed by "-".
			// The matching of C against the element's language value is performed case-insensitively.
			// The identifier C does not have to be a valid language name."
			// http://www.w3.org/TR/selectors/#lang-pseudo
			"lang": markFunction( function( lang ) {
				// lang value must be a valid identifier
				if ( !ridentifier.test(lang || "") ) {
					Sizzle.error( "unsupported lang: " + lang );
				}
				lang = lang.replace( runescape, funescape ).toLowerCase();
				return function( elem ) {
					var elemLang;
					do {
						if ( (elemLang = documentIsHTML ?
							elem.lang :
							elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {
	
							elemLang = elemLang.toLowerCase();
							return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
						}
					} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
					return false;
				};
			}),
	
			// Miscellaneous
			"target": function( elem ) {
				var hash = window.location && window.location.hash;
				return hash && hash.slice( 1 ) === elem.id;
			},
	
			"root": function( elem ) {
				return elem === docElem;
			},
	
			"focus": function( elem ) {
				return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
			},
	
			// Boolean properties
			"enabled": createDisabledPseudo( false ),
			"disabled": createDisabledPseudo( true ),
	
			"checked": function( elem ) {
				// In CSS3, :checked should return both checked and selected elements
				// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
				var nodeName = elem.nodeName.toLowerCase();
				return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
			},
	
			"selected": function( elem ) {
				// Accessing this property makes selected-by-default
				// options in Safari work properly
				if ( elem.parentNode ) {
					elem.parentNode.selectedIndex;
				}
	
				return elem.selected === true;
			},
	
			// Contents
			"empty": function( elem ) {
				// http://www.w3.org/TR/selectors/#empty-pseudo
				// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
				//   but not by others (comment: 8; processing instruction: 7; etc.)
				// nodeType < 6 works because attributes (2) do not appear as children
				for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
					if ( elem.nodeType < 6 ) {
						return false;
					}
				}
				return true;
			},
	
			"parent": function( elem ) {
				return !Expr.pseudos["empty"]( elem );
			},
	
			// Element/input types
			"header": function( elem ) {
				return rheader.test( elem.nodeName );
			},
	
			"input": function( elem ) {
				return rinputs.test( elem.nodeName );
			},
	
			"button": function( elem ) {
				var name = elem.nodeName.toLowerCase();
				return name === "input" && elem.type === "button" || name === "button";
			},
	
			"text": function( elem ) {
				var attr;
				return elem.nodeName.toLowerCase() === "input" &&
					elem.type === "text" &&
	
					// Support: IE<8
					// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
					( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
			},
	
			// Position-in-collection
			"first": createPositionalPseudo(function() {
				return [ 0 ];
			}),
	
			"last": createPositionalPseudo(function( matchIndexes, length ) {
				return [ length - 1 ];
			}),
	
			"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
				return [ argument < 0 ? argument + length : argument ];
			}),
	
			"even": createPositionalPseudo(function( matchIndexes, length ) {
				var i = 0;
				for ( ; i < length; i += 2 ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),
	
			"odd": createPositionalPseudo(function( matchIndexes, length ) {
				var i = 1;
				for ( ; i < length; i += 2 ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),
	
			"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
				var i = argument < 0 ? argument + length : argument;
				for ( ; --i >= 0; ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),
	
			"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
				var i = argument < 0 ? argument + length : argument;
				for ( ; ++i < length; ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			})
		}
	};
	
	Expr.pseudos["nth"] = Expr.pseudos["eq"];
	
	// Add button/input type pseudos
	for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
		Expr.pseudos[ i ] = createInputPseudo( i );
	}
	for ( i in { submit: true, reset: true } ) {
		Expr.pseudos[ i ] = createButtonPseudo( i );
	}
	
	// Easy API for creating new setFilters
	function setFilters() {}
	setFilters.prototype = Expr.filters = Expr.pseudos;
	Expr.setFilters = new setFilters();
	
	tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
		var matched, match, tokens, type,
			soFar, groups, preFilters,
			cached = tokenCache[ selector + " " ];
	
		if ( cached ) {
			return parseOnly ? 0 : cached.slice( 0 );
		}
	
		soFar = selector;
		groups = [];
		preFilters = Expr.preFilter;
	
		while ( soFar ) {
	
			// Comma and first run
			if ( !matched || (match = rcomma.exec( soFar )) ) {
				if ( match ) {
					// Don't consume trailing commas as valid
					soFar = soFar.slice( match[0].length ) || soFar;
				}
				groups.push( (tokens = []) );
			}
	
			matched = false;
	
			// Combinators
			if ( (match = rcombinators.exec( soFar )) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					// Cast descendant combinators to space
					type: match[0].replace( rtrim, " " )
				});
				soFar = soFar.slice( matched.length );
			}
	
			// Filters
			for ( type in Expr.filter ) {
				if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
					(match = preFilters[ type ]( match ))) ) {
					matched = match.shift();
					tokens.push({
						value: matched,
						type: type,
						matches: match
					});
					soFar = soFar.slice( matched.length );
				}
			}
	
			if ( !matched ) {
				break;
			}
		}
	
		// Return the length of the invalid excess
		// if we're just parsing
		// Otherwise, throw an error or return tokens
		return parseOnly ?
			soFar.length :
			soFar ?
				Sizzle.error( selector ) :
				// Cache the tokens
				tokenCache( selector, groups ).slice( 0 );
	};
	
	function toSelector( tokens ) {
		var i = 0,
			len = tokens.length,
			selector = "";
		for ( ; i < len; i++ ) {
			selector += tokens[i].value;
		}
		return selector;
	}
	
	function addCombinator( matcher, combinator, base ) {
		var dir = combinator.dir,
			skip = combinator.next,
			key = skip || dir,
			checkNonElements = base && key === "parentNode",
			doneName = done++;
	
		return combinator.first ?
			// Check against closest ancestor/preceding element
			function( elem, context, xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						return matcher( elem, context, xml );
					}
				}
			} :
	
			// Check against all ancestor/preceding elements
			function( elem, context, xml ) {
				var oldCache, uniqueCache, outerCache,
					newCache = [ dirruns, doneName ];
	
				// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
				if ( xml ) {
					while ( (elem = elem[ dir ]) ) {
						if ( elem.nodeType === 1 || checkNonElements ) {
							if ( matcher( elem, context, xml ) ) {
								return true;
							}
						}
					}
				} else {
					while ( (elem = elem[ dir ]) ) {
						if ( elem.nodeType === 1 || checkNonElements ) {
							outerCache = elem[ expando ] || (elem[ expando ] = {});
	
							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ elem.uniqueID ] || (outerCache[ elem.uniqueID ] = {});
	
							if ( skip && skip === elem.nodeName.toLowerCase() ) {
								elem = elem[ dir ] || elem;
							} else if ( (oldCache = uniqueCache[ key ]) &&
								oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {
	
								// Assign to newCache so results back-propagate to previous elements
								return (newCache[ 2 ] = oldCache[ 2 ]);
							} else {
								// Reuse newcache so results back-propagate to previous elements
								uniqueCache[ key ] = newCache;
	
								// A match means we're done; a fail means we have to keep checking
								if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
									return true;
								}
							}
						}
					}
				}
			};
	}
	
	function elementMatcher( matchers ) {
		return matchers.length > 1 ?
			function( elem, context, xml ) {
				var i = matchers.length;
				while ( i-- ) {
					if ( !matchers[i]( elem, context, xml ) ) {
						return false;
					}
				}
				return true;
			} :
			matchers[0];
	}
	
	function multipleContexts( selector, contexts, results ) {
		var i = 0,
			len = contexts.length;
		for ( ; i < len; i++ ) {
			Sizzle( selector, contexts[i], results );
		}
		return results;
	}
	
	function condense( unmatched, map, filter, context, xml ) {
		var elem,
			newUnmatched = [],
			i = 0,
			len = unmatched.length,
			mapped = map != null;
	
		for ( ; i < len; i++ ) {
			if ( (elem = unmatched[i]) ) {
				if ( !filter || filter( elem, context, xml ) ) {
					newUnmatched.push( elem );
					if ( mapped ) {
						map.push( i );
					}
				}
			}
		}
	
		return newUnmatched;
	}
	
	function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
		if ( postFilter && !postFilter[ expando ] ) {
			postFilter = setMatcher( postFilter );
		}
		if ( postFinder && !postFinder[ expando ] ) {
			postFinder = setMatcher( postFinder, postSelector );
		}
		return markFunction(function( seed, results, context, xml ) {
			var temp, i, elem,
				preMap = [],
				postMap = [],
				preexisting = results.length,
	
				// Get initial elements from seed or context
				elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),
	
				// Prefilter to get matcher input, preserving a map for seed-results synchronization
				matcherIn = preFilter && ( seed || !selector ) ?
					condense( elems, preMap, preFilter, context, xml ) :
					elems,
	
				matcherOut = matcher ?
					// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
					postFinder || ( seed ? preFilter : preexisting || postFilter ) ?
	
						// ...intermediate processing is necessary
						[] :
	
						// ...otherwise use results directly
						results :
					matcherIn;
	
			// Find primary matches
			if ( matcher ) {
				matcher( matcherIn, matcherOut, context, xml );
			}
	
			// Apply postFilter
			if ( postFilter ) {
				temp = condense( matcherOut, postMap );
				postFilter( temp, [], context, xml );
	
				// Un-match failing elements by moving them back to matcherIn
				i = temp.length;
				while ( i-- ) {
					if ( (elem = temp[i]) ) {
						matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
					}
				}
			}
	
			if ( seed ) {
				if ( postFinder || preFilter ) {
					if ( postFinder ) {
						// Get the final matcherOut by condensing this intermediate into postFinder contexts
						temp = [];
						i = matcherOut.length;
						while ( i-- ) {
							if ( (elem = matcherOut[i]) ) {
								// Restore matcherIn since elem is not yet a final match
								temp.push( (matcherIn[i] = elem) );
							}
						}
						postFinder( null, (matcherOut = []), temp, xml );
					}
	
					// Move matched elements from seed to results to keep them synchronized
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) &&
							(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {
	
							seed[temp] = !(results[temp] = elem);
						}
					}
				}
	
			// Add elements to results, through postFinder if defined
			} else {
				matcherOut = condense(
					matcherOut === results ?
						matcherOut.splice( preexisting, matcherOut.length ) :
						matcherOut
				);
				if ( postFinder ) {
					postFinder( null, results, matcherOut, xml );
				} else {
					push.apply( results, matcherOut );
				}
			}
		});
	}
	
	function matcherFromTokens( tokens ) {
		var checkContext, matcher, j,
			len = tokens.length,
			leadingRelative = Expr.relative[ tokens[0].type ],
			implicitRelative = leadingRelative || Expr.relative[" "],
			i = leadingRelative ? 1 : 0,
	
			// The foundational matcher ensures that elements are reachable from top-level context(s)
			matchContext = addCombinator( function( elem ) {
				return elem === checkContext;
			}, implicitRelative, true ),
			matchAnyContext = addCombinator( function( elem ) {
				return indexOf( checkContext, elem ) > -1;
			}, implicitRelative, true ),
			matchers = [ function( elem, context, xml ) {
				var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
					(checkContext = context).nodeType ?
						matchContext( elem, context, xml ) :
						matchAnyContext( elem, context, xml ) );
				// Avoid hanging onto element (issue #299)
				checkContext = null;
				return ret;
			} ];
	
		for ( ; i < len; i++ ) {
			if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
				matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
			} else {
				matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );
	
				// Return special upon seeing a positional matcher
				if ( matcher[ expando ] ) {
					// Find the next relative operator (if any) for proper handling
					j = ++i;
					for ( ; j < len; j++ ) {
						if ( Expr.relative[ tokens[j].type ] ) {
							break;
						}
					}
					return setMatcher(
						i > 1 && elementMatcher( matchers ),
						i > 1 && toSelector(
							// If the preceding token was a descendant combinator, insert an implicit any-element `*`
							tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
						).replace( rtrim, "$1" ),
						matcher,
						i < j && matcherFromTokens( tokens.slice( i, j ) ),
						j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
						j < len && toSelector( tokens )
					);
				}
				matchers.push( matcher );
			}
		}
	
		return elementMatcher( matchers );
	}
	
	function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
		var bySet = setMatchers.length > 0,
			byElement = elementMatchers.length > 0,
			superMatcher = function( seed, context, xml, results, outermost ) {
				var elem, j, matcher,
					matchedCount = 0,
					i = "0",
					unmatched = seed && [],
					setMatched = [],
					contextBackup = outermostContext,
					// We must always have either seed elements or outermost context
					elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
					// Use integer dirruns iff this is the outermost matcher
					dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
					len = elems.length;
	
				if ( outermost ) {
					outermostContext = context === document || context || outermost;
				}
	
				// Add elements passing elementMatchers directly to results
				// Support: IE<9, Safari
				// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
				for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
					if ( byElement && elem ) {
						j = 0;
						if ( !context && elem.ownerDocument !== document ) {
							setDocument( elem );
							xml = !documentIsHTML;
						}
						while ( (matcher = elementMatchers[j++]) ) {
							if ( matcher( elem, context || document, xml) ) {
								results.push( elem );
								break;
							}
						}
						if ( outermost ) {
							dirruns = dirrunsUnique;
						}
					}
	
					// Track unmatched elements for set filters
					if ( bySet ) {
						// They will have gone through all possible matchers
						if ( (elem = !matcher && elem) ) {
							matchedCount--;
						}
	
						// Lengthen the array for every element, matched or not
						if ( seed ) {
							unmatched.push( elem );
						}
					}
				}
	
				// `i` is now the count of elements visited above, and adding it to `matchedCount`
				// makes the latter nonnegative.
				matchedCount += i;
	
				// Apply set filters to unmatched elements
				// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
				// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
				// no element matchers and no seed.
				// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
				// case, which will result in a "00" `matchedCount` that differs from `i` but is also
				// numerically zero.
				if ( bySet && i !== matchedCount ) {
					j = 0;
					while ( (matcher = setMatchers[j++]) ) {
						matcher( unmatched, setMatched, context, xml );
					}
	
					if ( seed ) {
						// Reintegrate element matches to eliminate the need for sorting
						if ( matchedCount > 0 ) {
							while ( i-- ) {
								if ( !(unmatched[i] || setMatched[i]) ) {
									setMatched[i] = pop.call( results );
								}
							}
						}
	
						// Discard index placeholder values to get only actual matches
						setMatched = condense( setMatched );
					}
	
					// Add matches to results
					push.apply( results, setMatched );
	
					// Seedless set matches succeeding multiple successful matchers stipulate sorting
					if ( outermost && !seed && setMatched.length > 0 &&
						( matchedCount + setMatchers.length ) > 1 ) {
	
						Sizzle.uniqueSort( results );
					}
				}
	
				// Override manipulation of globals by nested matchers
				if ( outermost ) {
					dirruns = dirrunsUnique;
					outermostContext = contextBackup;
				}
	
				return unmatched;
			};
	
		return bySet ?
			markFunction( superMatcher ) :
			superMatcher;
	}
	
	compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
		var i,
			setMatchers = [],
			elementMatchers = [],
			cached = compilerCache[ selector + " " ];
	
		if ( !cached ) {
			// Generate a function of recursive functions that can be used to check each element
			if ( !match ) {
				match = tokenize( selector );
			}
			i = match.length;
			while ( i-- ) {
				cached = matcherFromTokens( match[i] );
				if ( cached[ expando ] ) {
					setMatchers.push( cached );
				} else {
					elementMatchers.push( cached );
				}
			}
	
			// Cache the compiled function
			cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );
	
			// Save selector and tokenization
			cached.selector = selector;
		}
		return cached;
	};
	
	/**
	 * A low-level selection function that works with Sizzle's compiled
	 *  selector functions
	 * @param {String|Function} selector A selector or a pre-compiled
	 *  selector function built with Sizzle.compile
	 * @param {Element} context
	 * @param {Array} [results]
	 * @param {Array} [seed] A set of elements to match against
	 */
	select = Sizzle.select = function( selector, context, results, seed ) {
		var i, tokens, token, type, find,
			compiled = typeof selector === "function" && selector,
			match = !seed && tokenize( (selector = compiled.selector || selector) );
	
		results = results || [];
	
		// Try to minimize operations if there is only one selector in the list and no seed
		// (the latter of which guarantees us context)
		if ( match.length === 1 ) {
	
			// Reduce context if the leading compound selector is an ID
			tokens = match[0] = match[0].slice( 0 );
			if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
					support.getById && context.nodeType === 9 && documentIsHTML &&
					Expr.relative[ tokens[1].type ] ) {
	
				context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
				if ( !context ) {
					return results;
	
				// Precompiled matchers will still verify ancestry, so step up a level
				} else if ( compiled ) {
					context = context.parentNode;
				}
	
				selector = selector.slice( tokens.shift().value.length );
			}
	
			// Fetch a seed set for right-to-left matching
			i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
			while ( i-- ) {
				token = tokens[i];
	
				// Abort if we hit a combinator
				if ( Expr.relative[ (type = token.type) ] ) {
					break;
				}
				if ( (find = Expr.find[ type ]) ) {
					// Search, expanding context for leading sibling combinators
					if ( (seed = find(
						token.matches[0].replace( runescape, funescape ),
						rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
					)) ) {
	
						// If seed is empty or no tokens remain, we can return early
						tokens.splice( i, 1 );
						selector = seed.length && toSelector( tokens );
						if ( !selector ) {
							push.apply( results, seed );
							return results;
						}
	
						break;
					}
				}
			}
		}
	
		// Compile and execute a filtering function if one is not provided
		// Provide `match` to avoid retokenization if we modified the selector above
		( compiled || compile( selector, match ) )(
			seed,
			context,
			!documentIsHTML,
			results,
			!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
		);
		return results;
	};
	
	// One-time assignments
	
	// Sort stability
	support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;
	
	// Support: Chrome 14-35+
	// Always assume duplicates if they aren't passed to the comparison function
	support.detectDuplicates = !!hasDuplicate;
	
	// Initialize against the default document
	setDocument();
	
	// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
	// Detached nodes confoundingly follow *each other*
	support.sortDetached = assert(function( el ) {
		// Should return 1, but returns 4 (following)
		return el.compareDocumentPosition( document.createElement("fieldset") ) & 1;
	});
	
	// Support: IE<8
	// Prevent attribute/property "interpolation"
	// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
	if ( !assert(function( el ) {
		el.innerHTML = "<a href='#'></a>";
		return el.firstChild.getAttribute("href") === "#" ;
	}) ) {
		addHandle( "type|href|height|width", function( elem, name, isXML ) {
			if ( !isXML ) {
				return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
			}
		});
	}
	
	// Support: IE<9
	// Use defaultValue in place of getAttribute("value")
	if ( !support.attributes || !assert(function( el ) {
		el.innerHTML = "<input/>";
		el.firstChild.setAttribute( "value", "" );
		return el.firstChild.getAttribute( "value" ) === "";
	}) ) {
		addHandle( "value", function( elem, name, isXML ) {
			if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
				return elem.defaultValue;
			}
		});
	}
	
	// Support: IE<9
	// Use getAttributeNode to fetch booleans when getAttribute lies
	if ( !assert(function( el ) {
		return el.getAttribute("disabled") == null;
	}) ) {
		addHandle( booleans, function( elem, name, isXML ) {
			var val;
			if ( !isXML ) {
				return elem[ name ] === true ? name.toLowerCase() :
						(val = elem.getAttributeNode( name )) && val.specified ?
						val.value :
					null;
			}
		});
	}
	
	return Sizzle;
	
	})( window );
	
	
	
	jQuery.find = Sizzle;
	jQuery.expr = Sizzle.selectors;
	
	// Deprecated
	jQuery.expr[ ":" ] = jQuery.expr.pseudos;
	jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
	jQuery.text = Sizzle.getText;
	jQuery.isXMLDoc = Sizzle.isXML;
	jQuery.contains = Sizzle.contains;
	jQuery.escapeSelector = Sizzle.escape;
	
	
	
	
	var dir = function( elem, dir, until ) {
		var matched = [],
			truncate = until !== undefined;
	
		while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
			if ( elem.nodeType === 1 ) {
				if ( truncate && jQuery( elem ).is( until ) ) {
					break;
				}
				matched.push( elem );
			}
		}
		return matched;
	};
	
	
	var siblings = function( n, elem ) {
		var matched = [];
	
		for ( ; n; n = n.nextSibling ) {
			if ( n.nodeType === 1 && n !== elem ) {
				matched.push( n );
			}
		}
	
		return matched;
	};
	
	
	var rneedsContext = jQuery.expr.match.needsContext;
	
	var rsingleTag = ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );
	
	
	
	var risSimple = /^.[^:#\[\.,]*$/;
	
	// Implement the identical functionality for filter and not
	function winnow( elements, qualifier, not ) {
		if ( jQuery.isFunction( qualifier ) ) {
			return jQuery.grep( elements, function( elem, i ) {
				return !!qualifier.call( elem, i, elem ) !== not;
			} );
	
		}
	
		if ( qualifier.nodeType ) {
			return jQuery.grep( elements, function( elem ) {
				return ( elem === qualifier ) !== not;
			} );
	
		}
	
		if ( typeof qualifier === "string" ) {
			if ( risSimple.test( qualifier ) ) {
				return jQuery.filter( qualifier, elements, not );
			}
	
			qualifier = jQuery.filter( qualifier, elements );
		}
	
		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not && elem.nodeType === 1;
		} );
	}
	
	jQuery.filter = function( expr, elems, not ) {
		var elem = elems[ 0 ];
	
		if ( not ) {
			expr = ":not(" + expr + ")";
		}
	
		return elems.length === 1 && elem.nodeType === 1 ?
			jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [] :
			jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
				return elem.nodeType === 1;
			} ) );
	};
	
	jQuery.fn.extend( {
		find: function( selector ) {
			var i, ret,
				len = this.length,
				self = this;
	
			if ( typeof selector !== "string" ) {
				return this.pushStack( jQuery( selector ).filter( function() {
					for ( i = 0; i < len; i++ ) {
						if ( jQuery.contains( self[ i ], this ) ) {
							return true;
						}
					}
				} ) );
			}
	
			ret = this.pushStack( [] );
	
			for ( i = 0; i < len; i++ ) {
				jQuery.find( selector, self[ i ], ret );
			}
	
			return len > 1 ? jQuery.uniqueSort( ret ) : ret;
		},
		filter: function( selector ) {
			return this.pushStack( winnow( this, selector || [], false ) );
		},
		not: function( selector ) {
			return this.pushStack( winnow( this, selector || [], true ) );
		},
		is: function( selector ) {
			return !!winnow(
				this,
	
				// If this is a positional/relative selector, check membership in the returned set
				// so $("p:first").is("p:last") won't return true for a doc with two "p".
				typeof selector === "string" && rneedsContext.test( selector ) ?
					jQuery( selector ) :
					selector || [],
				false
			).length;
		}
	} );
	
	
	// Initialize a jQuery object
	
	
	// A central reference to the root jQuery(document)
	var rootjQuery,
	
		// A simple way to check for HTML strings
		// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
		// Strict HTML recognition (#11290: must start with <)
		// Shortcut simple #id case for speed
		rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
	
		init = jQuery.fn.init = function( selector, context, root ) {
			var match, elem;
	
			// HANDLE: $(""), $(null), $(undefined), $(false)
			if ( !selector ) {
				return this;
			}
	
			// Method init() accepts an alternate rootjQuery
			// so migrate can support jQuery.sub (gh-2101)
			root = root || rootjQuery;
	
			// Handle HTML strings
			if ( typeof selector === "string" ) {
				if ( selector[ 0 ] === "<" &&
					selector[ selector.length - 1 ] === ">" &&
					selector.length >= 3 ) {
	
					// Assume that strings that start and end with <> are HTML and skip the regex check
					match = [ null, selector, null ];
	
				} else {
					match = rquickExpr.exec( selector );
				}
	
				// Match html or make sure no context is specified for #id
				if ( match && ( match[ 1 ] || !context ) ) {
	
					// HANDLE: $(html) -> $(array)
					if ( match[ 1 ] ) {
						context = context instanceof jQuery ? context[ 0 ] : context;
	
						// Option to run scripts is true for back-compat
						// Intentionally let the error be thrown if parseHTML is not present
						jQuery.merge( this, jQuery.parseHTML(
							match[ 1 ],
							context && context.nodeType ? context.ownerDocument || context : document,
							true
						) );
	
						// HANDLE: $(html, props)
						if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
							for ( match in context ) {
	
								// Properties of context are called as methods if possible
								if ( jQuery.isFunction( this[ match ] ) ) {
									this[ match ]( context[ match ] );
	
								// ...and otherwise set as attributes
								} else {
									this.attr( match, context[ match ] );
								}
							}
						}
	
						return this;
	
					// HANDLE: $(#id)
					} else {
						elem = document.getElementById( match[ 2 ] );
	
						if ( elem ) {
	
							// Inject the element directly into the jQuery object
							this[ 0 ] = elem;
							this.length = 1;
						}
						return this;
					}
	
				// HANDLE: $(expr, $(...))
				} else if ( !context || context.jquery ) {
					return ( context || root ).find( selector );
	
				// HANDLE: $(expr, context)
				// (which is just equivalent to: $(context).find(expr)
				} else {
					return this.constructor( context ).find( selector );
				}
	
			// HANDLE: $(DOMElement)
			} else if ( selector.nodeType ) {
				this[ 0 ] = selector;
				this.length = 1;
				return this;
	
			// HANDLE: $(function)
			// Shortcut for document ready
			} else if ( jQuery.isFunction( selector ) ) {
				return root.ready !== undefined ?
					root.ready( selector ) :
	
					// Execute immediately if ready is not present
					selector( jQuery );
			}
	
			return jQuery.makeArray( selector, this );
		};
	
	// Give the init function the jQuery prototype for later instantiation
	init.prototype = jQuery.fn;
	
	// Initialize central reference
	rootjQuery = jQuery( document );
	
	
	var rparentsprev = /^(?:parents|prev(?:Until|All))/,
	
		// Methods guaranteed to produce a unique set when starting from a unique set
		guaranteedUnique = {
			children: true,
			contents: true,
			next: true,
			prev: true
		};
	
	jQuery.fn.extend( {
		has: function( target ) {
			var targets = jQuery( target, this ),
				l = targets.length;
	
			return this.filter( function() {
				var i = 0;
				for ( ; i < l; i++ ) {
					if ( jQuery.contains( this, targets[ i ] ) ) {
						return true;
					}
				}
			} );
		},
	
		closest: function( selectors, context ) {
			var cur,
				i = 0,
				l = this.length,
				matched = [],
				targets = typeof selectors !== "string" && jQuery( selectors );
	
			// Positional selectors never match, since there's no _selection_ context
			if ( !rneedsContext.test( selectors ) ) {
				for ( ; i < l; i++ ) {
					for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {
	
						// Always skip document fragments
						if ( cur.nodeType < 11 && ( targets ?
							targets.index( cur ) > -1 :
	
							// Don't pass non-elements to Sizzle
							cur.nodeType === 1 &&
								jQuery.find.matchesSelector( cur, selectors ) ) ) {
	
							matched.push( cur );
							break;
						}
					}
				}
			}
	
			return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
		},
	
		// Determine the position of an element within the set
		index: function( elem ) {
	
			// No argument, return index in parent
			if ( !elem ) {
				return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
			}
	
			// Index in selector
			if ( typeof elem === "string" ) {
				return indexOf.call( jQuery( elem ), this[ 0 ] );
			}
	
			// Locate the position of the desired element
			return indexOf.call( this,
	
				// If it receives a jQuery object, the first element is used
				elem.jquery ? elem[ 0 ] : elem
			);
		},
	
		add: function( selector, context ) {
			return this.pushStack(
				jQuery.uniqueSort(
					jQuery.merge( this.get(), jQuery( selector, context ) )
				)
			);
		},
	
		addBack: function( selector ) {
			return this.add( selector == null ?
				this.prevObject : this.prevObject.filter( selector )
			);
		}
	} );
	
	function sibling( cur, dir ) {
		while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
		return cur;
	}
	
	jQuery.each( {
		parent: function( elem ) {
			var parent = elem.parentNode;
			return parent && parent.nodeType !== 11 ? parent : null;
		},
		parents: function( elem ) {
			return dir( elem, "parentNode" );
		},
		parentsUntil: function( elem, i, until ) {
			return dir( elem, "parentNode", until );
		},
		next: function( elem ) {
			return sibling( elem, "nextSibling" );
		},
		prev: function( elem ) {
			return sibling( elem, "previousSibling" );
		},
		nextAll: function( elem ) {
			return dir( elem, "nextSibling" );
		},
		prevAll: function( elem ) {
			return dir( elem, "previousSibling" );
		},
		nextUntil: function( elem, i, until ) {
			return dir( elem, "nextSibling", until );
		},
		prevUntil: function( elem, i, until ) {
			return dir( elem, "previousSibling", until );
		},
		siblings: function( elem ) {
			return siblings( ( elem.parentNode || {} ).firstChild, elem );
		},
		children: function( elem ) {
			return siblings( elem.firstChild );
		},
		contents: function( elem ) {
			return elem.contentDocument || jQuery.merge( [], elem.childNodes );
		}
	}, function( name, fn ) {
		jQuery.fn[ name ] = function( until, selector ) {
			var matched = jQuery.map( this, fn, until );
	
			if ( name.slice( -5 ) !== "Until" ) {
				selector = until;
			}
	
			if ( selector && typeof selector === "string" ) {
				matched = jQuery.filter( selector, matched );
			}
	
			if ( this.length > 1 ) {
	
				// Remove duplicates
				if ( !guaranteedUnique[ name ] ) {
					jQuery.uniqueSort( matched );
				}
	
				// Reverse order for parents* and prev-derivatives
				if ( rparentsprev.test( name ) ) {
					matched.reverse();
				}
			}
	
			return this.pushStack( matched );
		};
	} );
	var rnotwhite = ( /\S+/g );
	
	
	
	// Convert String-formatted options into Object-formatted ones
	function createOptions( options ) {
		var object = {};
		jQuery.each( options.match( rnotwhite ) || [], function( _, flag ) {
			object[ flag ] = true;
		} );
		return object;
	}
	
	/*
	 * Create a callback list using the following parameters:
	 *
	 *	options: an optional list of space-separated options that will change how
	 *			the callback list behaves or a more traditional option object
	 *
	 * By default a callback list will act like an event callback list and can be
	 * "fired" multiple times.
	 *
	 * Possible options:
	 *
	 *	once:			will ensure the callback list can only be fired once (like a Deferred)
	 *
	 *	memory:			will keep track of previous values and will call any callback added
	 *					after the list has been fired right away with the latest "memorized"
	 *					values (like a Deferred)
	 *
	 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
	 *
	 *	stopOnFalse:	interrupt callings when a callback returns false
	 *
	 */
	jQuery.Callbacks = function( options ) {
	
		// Convert options from String-formatted to Object-formatted if needed
		// (we check in cache first)
		options = typeof options === "string" ?
			createOptions( options ) :
			jQuery.extend( {}, options );
	
		var // Flag to know if list is currently firing
			firing,
	
			// Last fire value for non-forgettable lists
			memory,
	
			// Flag to know if list was already fired
			fired,
	
			// Flag to prevent firing
			locked,
	
			// Actual callback list
			list = [],
	
			// Queue of execution data for repeatable lists
			queue = [],
	
			// Index of currently firing callback (modified by add/remove as needed)
			firingIndex = -1,
	
			// Fire callbacks
			fire = function() {
	
				// Enforce single-firing
				locked = options.once;
	
				// Execute callbacks for all pending executions,
				// respecting firingIndex overrides and runtime changes
				fired = firing = true;
				for ( ; queue.length; firingIndex = -1 ) {
					memory = queue.shift();
					while ( ++firingIndex < list.length ) {
	
						// Run callback and check for early termination
						if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
							options.stopOnFalse ) {
	
							// Jump to end and forget the data so .add doesn't re-fire
							firingIndex = list.length;
							memory = false;
						}
					}
				}
	
				// Forget the data if we're done with it
				if ( !options.memory ) {
					memory = false;
				}
	
				firing = false;
	
				// Clean up if we're done firing for good
				if ( locked ) {
	
					// Keep an empty list if we have data for future add calls
					if ( memory ) {
						list = [];
	
					// Otherwise, this object is spent
					} else {
						list = "";
					}
				}
			},
	
			// Actual Callbacks object
			self = {
	
				// Add a callback or a collection of callbacks to the list
				add: function() {
					if ( list ) {
	
						// If we have memory from a past run, we should fire after adding
						if ( memory && !firing ) {
							firingIndex = list.length - 1;
							queue.push( memory );
						}
	
						( function add( args ) {
							jQuery.each( args, function( _, arg ) {
								if ( jQuery.isFunction( arg ) ) {
									if ( !options.unique || !self.has( arg ) ) {
										list.push( arg );
									}
								} else if ( arg && arg.length && jQuery.type( arg ) !== "string" ) {
	
									// Inspect recursively
									add( arg );
								}
							} );
						} )( arguments );
	
						if ( memory && !firing ) {
							fire();
						}
					}
					return this;
				},
	
				// Remove a callback from the list
				remove: function() {
					jQuery.each( arguments, function( _, arg ) {
						var index;
						while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
							list.splice( index, 1 );
	
							// Handle firing indexes
							if ( index <= firingIndex ) {
								firingIndex--;
							}
						}
					} );
					return this;
				},
	
				// Check if a given callback is in the list.
				// If no argument is given, return whether or not list has callbacks attached.
				has: function( fn ) {
					return fn ?
						jQuery.inArray( fn, list ) > -1 :
						list.length > 0;
				},
	
				// Remove all callbacks from the list
				empty: function() {
					if ( list ) {
						list = [];
					}
					return this;
				},
	
				// Disable .fire and .add
				// Abort any current/pending executions
				// Clear all callbacks and values
				disable: function() {
					locked = queue = [];
					list = memory = "";
					return this;
				},
				disabled: function() {
					return !list;
				},
	
				// Disable .fire
				// Also disable .add unless we have memory (since it would have no effect)
				// Abort any pending executions
				lock: function() {
					locked = queue = [];
					if ( !memory && !firing ) {
						list = memory = "";
					}
					return this;
				},
				locked: function() {
					return !!locked;
				},
	
				// Call all callbacks with the given context and arguments
				fireWith: function( context, args ) {
					if ( !locked ) {
						args = args || [];
						args = [ context, args.slice ? args.slice() : args ];
						queue.push( args );
						if ( !firing ) {
							fire();
						}
					}
					return this;
				},
	
				// Call all the callbacks with the given arguments
				fire: function() {
					self.fireWith( this, arguments );
					return this;
				},
	
				// To know if the callbacks have already been called at least once
				fired: function() {
					return !!fired;
				}
			};
	
		return self;
	};
	
	
	function Identity( v ) {
		return v;
	}
	function Thrower( ex ) {
		throw ex;
	}
	
	function adoptValue( value, resolve, reject ) {
		var method;
	
		try {
	
			// Check for promise aspect first to privilege synchronous behavior
			if ( value && jQuery.isFunction( ( method = value.promise ) ) ) {
				method.call( value ).done( resolve ).fail( reject );
	
			// Other thenables
			} else if ( value && jQuery.isFunction( ( method = value.then ) ) ) {
				method.call( value, resolve, reject );
	
			// Other non-thenables
			} else {
	
				// Support: Android 4.0 only
				// Strict mode functions invoked without .call/.apply get global-object context
				resolve.call( undefined, value );
			}
	
		// For Promises/A+, convert exceptions into rejections
		// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
		// Deferred#then to conditionally suppress rejection.
		} catch ( value ) {
	
			// Support: Android 4.0 only
			// Strict mode functions invoked without .call/.apply get global-object context
			reject.call( undefined, value );
		}
	}
	
	jQuery.extend( {
	
		Deferred: function( func ) {
			var tuples = [
	
					// action, add listener, callbacks,
					// ... .then handlers, argument index, [final state]
					[ "notify", "progress", jQuery.Callbacks( "memory" ),
						jQuery.Callbacks( "memory" ), 2 ],
					[ "resolve", "done", jQuery.Callbacks( "once memory" ),
						jQuery.Callbacks( "once memory" ), 0, "resolved" ],
					[ "reject", "fail", jQuery.Callbacks( "once memory" ),
						jQuery.Callbacks( "once memory" ), 1, "rejected" ]
				],
				state = "pending",
				promise = {
					state: function() {
						return state;
					},
					always: function() {
						deferred.done( arguments ).fail( arguments );
						return this;
					},
					"catch": function( fn ) {
						return promise.then( null, fn );
					},
	
					// Keep pipe for back-compat
					pipe: function( /* fnDone, fnFail, fnProgress */ ) {
						var fns = arguments;
	
						return jQuery.Deferred( function( newDefer ) {
							jQuery.each( tuples, function( i, tuple ) {
	
								// Map tuples (progress, done, fail) to arguments (done, fail, progress)
								var fn = jQuery.isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];
	
								// deferred.progress(function() { bind to newDefer or newDefer.notify })
								// deferred.done(function() { bind to newDefer or newDefer.resolve })
								// deferred.fail(function() { bind to newDefer or newDefer.reject })
								deferred[ tuple[ 1 ] ]( function() {
									var returned = fn && fn.apply( this, arguments );
									if ( returned && jQuery.isFunction( returned.promise ) ) {
										returned.promise()
											.progress( newDefer.notify )
											.done( newDefer.resolve )
											.fail( newDefer.reject );
									} else {
										newDefer[ tuple[ 0 ] + "With" ](
											this,
											fn ? [ returned ] : arguments
										);
									}
								} );
							} );
							fns = null;
						} ).promise();
					},
					then: function( onFulfilled, onRejected, onProgress ) {
						var maxDepth = 0;
						function resolve( depth, deferred, handler, special ) {
							return function() {
								var that = this,
									args = arguments,
									mightThrow = function() {
										var returned, then;
	
										// Support: Promises/A+ section 2.3.3.3.3
										// https://promisesaplus.com/#point-59
										// Ignore double-resolution attempts
										if ( depth < maxDepth ) {
											return;
										}
	
										returned = handler.apply( that, args );
	
										// Support: Promises/A+ section 2.3.1
										// https://promisesaplus.com/#point-48
										if ( returned === deferred.promise() ) {
											throw new TypeError( "Thenable self-resolution" );
										}
	
										// Support: Promises/A+ sections 2.3.3.1, 3.5
										// https://promisesaplus.com/#point-54
										// https://promisesaplus.com/#point-75
										// Retrieve `then` only once
										then = returned &&
	
											// Support: Promises/A+ section 2.3.4
											// https://promisesaplus.com/#point-64
											// Only check objects and functions for thenability
											( typeof returned === "object" ||
												typeof returned === "function" ) &&
											returned.then;
	
										// Handle a returned thenable
										if ( jQuery.isFunction( then ) ) {
	
											// Special processors (notify) just wait for resolution
											if ( special ) {
												then.call(
													returned,
													resolve( maxDepth, deferred, Identity, special ),
													resolve( maxDepth, deferred, Thrower, special )
												);
	
											// Normal processors (resolve) also hook into progress
											} else {
	
												// ...and disregard older resolution values
												maxDepth++;
	
												then.call(
													returned,
													resolve( maxDepth, deferred, Identity, special ),
													resolve( maxDepth, deferred, Thrower, special ),
													resolve( maxDepth, deferred, Identity,
														deferred.notifyWith )
												);
											}
	
										// Handle all other returned values
										} else {
	
											// Only substitute handlers pass on context
											// and multiple values (non-spec behavior)
											if ( handler !== Identity ) {
												that = undefined;
												args = [ returned ];
											}
	
											// Process the value(s)
											// Default process is resolve
											( special || deferred.resolveWith )( that, args );
										}
									},
	
									// Only normal processors (resolve) catch and reject exceptions
									process = special ?
										mightThrow :
										function() {
											try {
												mightThrow();
											} catch ( e ) {
	
												if ( jQuery.Deferred.exceptionHook ) {
													jQuery.Deferred.exceptionHook( e,
														process.stackTrace );
												}
	
												// Support: Promises/A+ section 2.3.3.3.4.1
												// https://promisesaplus.com/#point-61
												// Ignore post-resolution exceptions
												if ( depth + 1 >= maxDepth ) {
	
													// Only substitute handlers pass on context
													// and multiple values (non-spec behavior)
													if ( handler !== Thrower ) {
														that = undefined;
														args = [ e ];
													}
	
													deferred.rejectWith( that, args );
												}
											}
										};
	
								// Support: Promises/A+ section 2.3.3.3.1
								// https://promisesaplus.com/#point-57
								// Re-resolve promises immediately to dodge false rejection from
								// subsequent errors
								if ( depth ) {
									process();
								} else {
	
									// Call an optional hook to record the stack, in case of exception
									// since it's otherwise lost when execution goes async
									if ( jQuery.Deferred.getStackHook ) {
										process.stackTrace = jQuery.Deferred.getStackHook();
									}
									window.setTimeout( process );
								}
							};
						}
	
						return jQuery.Deferred( function( newDefer ) {
	
							// progress_handlers.add( ... )
							tuples[ 0 ][ 3 ].add(
								resolve(
									0,
									newDefer,
									jQuery.isFunction( onProgress ) ?
										onProgress :
										Identity,
									newDefer.notifyWith
								)
							);
	
							// fulfilled_handlers.add( ... )
							tuples[ 1 ][ 3 ].add(
								resolve(
									0,
									newDefer,
									jQuery.isFunction( onFulfilled ) ?
										onFulfilled :
										Identity
								)
							);
	
							// rejected_handlers.add( ... )
							tuples[ 2 ][ 3 ].add(
								resolve(
									0,
									newDefer,
									jQuery.isFunction( onRejected ) ?
										onRejected :
										Thrower
								)
							);
						} ).promise();
					},
	
					// Get a promise for this deferred
					// If obj is provided, the promise aspect is added to the object
					promise: function( obj ) {
						return obj != null ? jQuery.extend( obj, promise ) : promise;
					}
				},
				deferred = {};
	
			// Add list-specific methods
			jQuery.each( tuples, function( i, tuple ) {
				var list = tuple[ 2 ],
					stateString = tuple[ 5 ];
	
				// promise.progress = list.add
				// promise.done = list.add
				// promise.fail = list.add
				promise[ tuple[ 1 ] ] = list.add;
	
				// Handle state
				if ( stateString ) {
					list.add(
						function() {
	
							// state = "resolved" (i.e., fulfilled)
							// state = "rejected"
							state = stateString;
						},
	
						// rejected_callbacks.disable
						// fulfilled_callbacks.disable
						tuples[ 3 - i ][ 2 ].disable,
	
						// progress_callbacks.lock
						tuples[ 0 ][ 2 ].lock
					);
				}
	
				// progress_handlers.fire
				// fulfilled_handlers.fire
				// rejected_handlers.fire
				list.add( tuple[ 3 ].fire );
	
				// deferred.notify = function() { deferred.notifyWith(...) }
				// deferred.resolve = function() { deferred.resolveWith(...) }
				// deferred.reject = function() { deferred.rejectWith(...) }
				deferred[ tuple[ 0 ] ] = function() {
					deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
					return this;
				};
	
				// deferred.notifyWith = list.fireWith
				// deferred.resolveWith = list.fireWith
				// deferred.rejectWith = list.fireWith
				deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
			} );
	
			// Make the deferred a promise
			promise.promise( deferred );
	
			// Call given func if any
			if ( func ) {
				func.call( deferred, deferred );
			}
	
			// All done!
			return deferred;
		},
	
		// Deferred helper
		when: function( singleValue ) {
			var
	
				// count of uncompleted subordinates
				remaining = arguments.length,
	
				// count of unprocessed arguments
				i = remaining,
	
				// subordinate fulfillment data
				resolveContexts = Array( i ),
				resolveValues = slice.call( arguments ),
	
				// the master Deferred
				master = jQuery.Deferred(),
	
				// subordinate callback factory
				updateFunc = function( i ) {
					return function( value ) {
						resolveContexts[ i ] = this;
						resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
						if ( !( --remaining ) ) {
							master.resolveWith( resolveContexts, resolveValues );
						}
					};
				};
	
			// Single- and empty arguments are adopted like Promise.resolve
			if ( remaining <= 1 ) {
				adoptValue( singleValue, master.done( updateFunc( i ) ).resolve, master.reject );
	
				// Use .then() to unwrap secondary thenables (cf. gh-3000)
				if ( master.state() === "pending" ||
					jQuery.isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {
	
					return master.then();
				}
			}
	
			// Multiple arguments are aggregated like Promise.all array elements
			while ( i-- ) {
				adoptValue( resolveValues[ i ], updateFunc( i ), master.reject );
			}
	
			return master.promise();
		}
	} );
	
	
	// These usually indicate a programmer mistake during development,
	// warn about them ASAP rather than swallowing them by default.
	var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
	
	jQuery.Deferred.exceptionHook = function( error, stack ) {
	
		// Support: IE 8 - 9 only
		// Console exists when dev tools are open, which can happen at any time
		if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
			window.console.warn( "jQuery.Deferred exception: " + error.message, error.stack, stack );
		}
	};
	
	
	
	
	jQuery.readyException = function( error ) {
		window.setTimeout( function() {
			throw error;
		} );
	};
	
	
	
	
	// The deferred used on DOM ready
	var readyList = jQuery.Deferred();
	
	jQuery.fn.ready = function( fn ) {
	
		readyList
			.then( fn )
	
			// Wrap jQuery.readyException in a function so that the lookup
			// happens at the time of error handling instead of callback
			// registration.
			.catch( function( error ) {
				jQuery.readyException( error );
			} );
	
		return this;
	};
	
	jQuery.extend( {
	
		// Is the DOM ready to be used? Set to true once it occurs.
		isReady: false,
	
		// A counter to track how many items to wait for before
		// the ready event fires. See #6781
		readyWait: 1,
	
		// Hold (or release) the ready event
		holdReady: function( hold ) {
			if ( hold ) {
				jQuery.readyWait++;
			} else {
				jQuery.ready( true );
			}
		},
	
		// Handle when the DOM is ready
		ready: function( wait ) {
	
			// Abort if there are pending holds or we're already ready
			if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
				return;
			}
	
			// Remember that the DOM is ready
			jQuery.isReady = true;
	
			// If a normal DOM Ready event fired, decrement, and wait if need be
			if ( wait !== true && --jQuery.readyWait > 0 ) {
				return;
			}
	
			// If there are functions bound, to execute
			readyList.resolveWith( document, [ jQuery ] );
		}
	} );
	
	jQuery.ready.then = readyList.then;
	
	// The ready event handler and self cleanup method
	function completed() {
		document.removeEventListener( "DOMContentLoaded", completed );
		window.removeEventListener( "load", completed );
		jQuery.ready();
	}
	
	// Catch cases where $(document).ready() is called
	// after the browser event has already occurred.
	// Support: IE <=9 - 10 only
	// Older IE sometimes signals "interactive" too soon
	if ( document.readyState === "complete" ||
		( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {
	
		// Handle it asynchronously to allow scripts the opportunity to delay ready
		window.setTimeout( jQuery.ready );
	
	} else {
	
		// Use the handy event callback
		document.addEventListener( "DOMContentLoaded", completed );
	
		// A fallback to window.onload, that will always work
		window.addEventListener( "load", completed );
	}
	
	
	
	
	// Multifunctional method to get and set values of a collection
	// The value/s can optionally be executed if it's a function
	var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
		var i = 0,
			len = elems.length,
			bulk = key == null;
	
		// Sets many values
		if ( jQuery.type( key ) === "object" ) {
			chainable = true;
			for ( i in key ) {
				access( elems, fn, i, key[ i ], true, emptyGet, raw );
			}
	
		// Sets one value
		} else if ( value !== undefined ) {
			chainable = true;
	
			if ( !jQuery.isFunction( value ) ) {
				raw = true;
			}
	
			if ( bulk ) {
	
				// Bulk operations run against the entire set
				if ( raw ) {
					fn.call( elems, value );
					fn = null;
	
				// ...except when executing function values
				} else {
					bulk = fn;
					fn = function( elem, key, value ) {
						return bulk.call( jQuery( elem ), value );
					};
				}
			}
	
			if ( fn ) {
				for ( ; i < len; i++ ) {
					fn(
						elems[ i ], key, raw ?
						value :
						value.call( elems[ i ], i, fn( elems[ i ], key ) )
					);
				}
			}
		}
	
		return chainable ?
			elems :
	
			// Gets
			bulk ?
				fn.call( elems ) :
				len ? fn( elems[ 0 ], key ) : emptyGet;
	};
	var acceptData = function( owner ) {
	
		// Accepts only:
		//  - Node
		//    - Node.ELEMENT_NODE
		//    - Node.DOCUMENT_NODE
		//  - Object
		//    - Any
		return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
	};
	
	
	
	
	function Data() {
		this.expando = jQuery.expando + Data.uid++;
	}
	
	Data.uid = 1;
	
	Data.prototype = {
	
		cache: function( owner ) {
	
			// Check if the owner object already has a cache
			var value = owner[ this.expando ];
	
			// If not, create one
			if ( !value ) {
				value = {};
	
				// We can accept data for non-element nodes in modern browsers,
				// but we should not, see #8335.
				// Always return an empty object.
				if ( acceptData( owner ) ) {
	
					// If it is a node unlikely to be stringify-ed or looped over
					// use plain assignment
					if ( owner.nodeType ) {
						owner[ this.expando ] = value;
	
					// Otherwise secure it in a non-enumerable property
					// configurable must be true to allow the property to be
					// deleted when data is removed
					} else {
						Object.defineProperty( owner, this.expando, {
							value: value,
							configurable: true
						} );
					}
				}
			}
	
			return value;
		},
		set: function( owner, data, value ) {
			var prop,
				cache = this.cache( owner );
	
			// Handle: [ owner, key, value ] args
			// Always use camelCase key (gh-2257)
			if ( typeof data === "string" ) {
				cache[ jQuery.camelCase( data ) ] = value;
	
			// Handle: [ owner, { properties } ] args
			} else {
	
				// Copy the properties one-by-one to the cache object
				for ( prop in data ) {
					cache[ jQuery.camelCase( prop ) ] = data[ prop ];
				}
			}
			return cache;
		},
		get: function( owner, key ) {
			return key === undefined ?
				this.cache( owner ) :
	
				// Always use camelCase key (gh-2257)
				owner[ this.expando ] && owner[ this.expando ][ jQuery.camelCase( key ) ];
		},
		access: function( owner, key, value ) {
	
			// In cases where either:
			//
			//   1. No key was specified
			//   2. A string key was specified, but no value provided
			//
			// Take the "read" path and allow the get method to determine
			// which value to return, respectively either:
			//
			//   1. The entire cache object
			//   2. The data stored at the key
			//
			if ( key === undefined ||
					( ( key && typeof key === "string" ) && value === undefined ) ) {
	
				return this.get( owner, key );
			}
	
			// When the key is not a string, or both a key and value
			// are specified, set or extend (existing objects) with either:
			//
			//   1. An object of properties
			//   2. A key and value
			//
			this.set( owner, key, value );
	
			// Since the "set" path can have two possible entry points
			// return the expected data based on which path was taken[*]
			return value !== undefined ? value : key;
		},
		remove: function( owner, key ) {
			var i,
				cache = owner[ this.expando ];
	
			if ( cache === undefined ) {
				return;
			}
	
			if ( key !== undefined ) {
	
				// Support array or space separated string of keys
				if ( jQuery.isArray( key ) ) {
	
					// If key is an array of keys...
					// We always set camelCase keys, so remove that.
					key = key.map( jQuery.camelCase );
				} else {
					key = jQuery.camelCase( key );
	
					// If a key with the spaces exists, use it.
					// Otherwise, create an array by matching non-whitespace
					key = key in cache ?
						[ key ] :
						( key.match( rnotwhite ) || [] );
				}
	
				i = key.length;
	
				while ( i-- ) {
					delete cache[ key[ i ] ];
				}
			}
	
			// Remove the expando if there's no more data
			if ( key === undefined || jQuery.isEmptyObject( cache ) ) {
	
				// Support: Chrome <=35 - 45
				// Webkit & Blink performance suffers when deleting properties
				// from DOM nodes, so set to undefined instead
				// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
				if ( owner.nodeType ) {
					owner[ this.expando ] = undefined;
				} else {
					delete owner[ this.expando ];
				}
			}
		},
		hasData: function( owner ) {
			var cache = owner[ this.expando ];
			return cache !== undefined && !jQuery.isEmptyObject( cache );
		}
	};
	var dataPriv = new Data();
	
	var dataUser = new Data();
	
	
	
	//	Implementation Summary
	//
	//	1. Enforce API surface and semantic compatibility with 1.9.x branch
	//	2. Improve the module's maintainability by reducing the storage
	//		paths to a single mechanism.
	//	3. Use the same single mechanism to support "private" and "user" data.
	//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
	//	5. Avoid exposing implementation details on user objects (eg. expando properties)
	//	6. Provide a clear path for implementation upgrade to WeakMap in 2014
	
	var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
		rmultiDash = /[A-Z]/g;
	
	function dataAttr( elem, key, data ) {
		var name;
	
		// If nothing was found internally, try to fetch any
		// data from the HTML5 data-* attribute
		if ( data === undefined && elem.nodeType === 1 ) {
			name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
			data = elem.getAttribute( name );
	
			if ( typeof data === "string" ) {
				try {
					data = data === "true" ? true :
						data === "false" ? false :
						data === "null" ? null :
	
						// Only convert to a number if it doesn't change the string
						+data + "" === data ? +data :
						rbrace.test( data ) ? JSON.parse( data ) :
						data;
				} catch ( e ) {}
	
				// Make sure we set the data so it isn't changed later
				dataUser.set( elem, key, data );
			} else {
				data = undefined;
			}
		}
		return data;
	}
	
	jQuery.extend( {
		hasData: function( elem ) {
			return dataUser.hasData( elem ) || dataPriv.hasData( elem );
		},
	
		data: function( elem, name, data ) {
			return dataUser.access( elem, name, data );
		},
	
		removeData: function( elem, name ) {
			dataUser.remove( elem, name );
		},
	
		// TODO: Now that all calls to _data and _removeData have been replaced
		// with direct calls to dataPriv methods, these can be deprecated.
		_data: function( elem, name, data ) {
			return dataPriv.access( elem, name, data );
		},
	
		_removeData: function( elem, name ) {
			dataPriv.remove( elem, name );
		}
	} );
	
	jQuery.fn.extend( {
		data: function( key, value ) {
			var i, name, data,
				elem = this[ 0 ],
				attrs = elem && elem.attributes;
	
			// Gets all values
			if ( key === undefined ) {
				if ( this.length ) {
					data = dataUser.get( elem );
	
					if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
						i = attrs.length;
						while ( i-- ) {
	
							// Support: IE 11 only
							// The attrs elements can be null (#14894)
							if ( attrs[ i ] ) {
								name = attrs[ i ].name;
								if ( name.indexOf( "data-" ) === 0 ) {
									name = jQuery.camelCase( name.slice( 5 ) );
									dataAttr( elem, name, data[ name ] );
								}
							}
						}
						dataPriv.set( elem, "hasDataAttrs", true );
					}
				}
	
				return data;
			}
	
			// Sets multiple values
			if ( typeof key === "object" ) {
				return this.each( function() {
					dataUser.set( this, key );
				} );
			}
	
			return access( this, function( value ) {
				var data;
	
				// The calling jQuery object (element matches) is not empty
				// (and therefore has an element appears at this[ 0 ]) and the
				// `value` parameter was not undefined. An empty jQuery object
				// will result in `undefined` for elem = this[ 0 ] which will
				// throw an exception if an attempt to read a data cache is made.
				if ( elem && value === undefined ) {
	
					// Attempt to get data from the cache
					// The key will always be camelCased in Data
					data = dataUser.get( elem, key );
					if ( data !== undefined ) {
						return data;
					}
	
					// Attempt to "discover" the data in
					// HTML5 custom data-* attrs
					data = dataAttr( elem, key );
					if ( data !== undefined ) {
						return data;
					}
	
					// We tried really hard, but the data doesn't exist.
					return;
				}
	
				// Set the data...
				this.each( function() {
	
					// We always store the camelCased key
					dataUser.set( this, key, value );
				} );
			}, null, value, arguments.length > 1, null, true );
		},
	
		removeData: function( key ) {
			return this.each( function() {
				dataUser.remove( this, key );
			} );
		}
	} );
	
	
	jQuery.extend( {
		queue: function( elem, type, data ) {
			var queue;
	
			if ( elem ) {
				type = ( type || "fx" ) + "queue";
				queue = dataPriv.get( elem, type );
	
				// Speed up dequeue by getting out quickly if this is just a lookup
				if ( data ) {
					if ( !queue || jQuery.isArray( data ) ) {
						queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
					} else {
						queue.push( data );
					}
				}
				return queue || [];
			}
		},
	
		dequeue: function( elem, type ) {
			type = type || "fx";
	
			var queue = jQuery.queue( elem, type ),
				startLength = queue.length,
				fn = queue.shift(),
				hooks = jQuery._queueHooks( elem, type ),
				next = function() {
					jQuery.dequeue( elem, type );
				};
	
			// If the fx queue is dequeued, always remove the progress sentinel
			if ( fn === "inprogress" ) {
				fn = queue.shift();
				startLength--;
			}
	
			if ( fn ) {
	
				// Add a progress sentinel to prevent the fx queue from being
				// automatically dequeued
				if ( type === "fx" ) {
					queue.unshift( "inprogress" );
				}
	
				// Clear up the last queue stop function
				delete hooks.stop;
				fn.call( elem, next, hooks );
			}
	
			if ( !startLength && hooks ) {
				hooks.empty.fire();
			}
		},
	
		// Not public - generate a queueHooks object, or return the current one
		_queueHooks: function( elem, type ) {
			var key = type + "queueHooks";
			return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
				empty: jQuery.Callbacks( "once memory" ).add( function() {
					dataPriv.remove( elem, [ type + "queue", key ] );
				} )
			} );
		}
	} );
	
	jQuery.fn.extend( {
		queue: function( type, data ) {
			var setter = 2;
	
			if ( typeof type !== "string" ) {
				data = type;
				type = "fx";
				setter--;
			}
	
			if ( arguments.length < setter ) {
				return jQuery.queue( this[ 0 ], type );
			}
	
			return data === undefined ?
				this :
				this.each( function() {
					var queue = jQuery.queue( this, type, data );
	
					// Ensure a hooks for this queue
					jQuery._queueHooks( this, type );
	
					if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
						jQuery.dequeue( this, type );
					}
				} );
		},
		dequeue: function( type ) {
			return this.each( function() {
				jQuery.dequeue( this, type );
			} );
		},
		clearQueue: function( type ) {
			return this.queue( type || "fx", [] );
		},
	
		// Get a promise resolved when queues of a certain type
		// are emptied (fx is the type by default)
		promise: function( type, obj ) {
			var tmp,
				count = 1,
				defer = jQuery.Deferred(),
				elements = this,
				i = this.length,
				resolve = function() {
					if ( !( --count ) ) {
						defer.resolveWith( elements, [ elements ] );
					}
				};
	
			if ( typeof type !== "string" ) {
				obj = type;
				type = undefined;
			}
			type = type || "fx";
	
			while ( i-- ) {
				tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
				if ( tmp && tmp.empty ) {
					count++;
					tmp.empty.add( resolve );
				}
			}
			resolve();
			return defer.promise( obj );
		}
	} );
	var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;
	
	var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );
	
	
	var cssExpand = [ "Top", "Right", "Bottom", "Left" ];
	
	var isHiddenWithinTree = function( elem, el ) {
	
			// isHiddenWithinTree might be called from jQuery#filter function;
			// in that case, element will be second argument
			elem = el || elem;
	
			// Inline style trumps all
			return elem.style.display === "none" ||
				elem.style.display === "" &&
	
				// Otherwise, check computed style
				// Support: Firefox <=43 - 45
				// Disconnected elements can have computed display: none, so first confirm that elem is
				// in the document.
				jQuery.contains( elem.ownerDocument, elem ) &&
	
				jQuery.css( elem, "display" ) === "none";
		};
	
	var swap = function( elem, options, callback, args ) {
		var ret, name,
			old = {};
	
		// Remember the old values, and insert the new ones
		for ( name in options ) {
			old[ name ] = elem.style[ name ];
			elem.style[ name ] = options[ name ];
		}
	
		ret = callback.apply( elem, args || [] );
	
		// Revert the old values
		for ( name in options ) {
			elem.style[ name ] = old[ name ];
		}
	
		return ret;
	};
	
	
	
	
	function adjustCSS( elem, prop, valueParts, tween ) {
		var adjusted,
			scale = 1,
			maxIterations = 20,
			currentValue = tween ?
				function() {
					return tween.cur();
				} :
				function() {
					return jQuery.css( elem, prop, "" );
				},
			initial = currentValue(),
			unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),
	
			// Starting value computation is required for potential unit mismatches
			initialInUnit = ( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
				rcssNum.exec( jQuery.css( elem, prop ) );
	
		if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {
	
			// Trust units reported by jQuery.css
			unit = unit || initialInUnit[ 3 ];
	
			// Make sure we update the tween properties later on
			valueParts = valueParts || [];
	
			// Iteratively approximate from a nonzero starting point
			initialInUnit = +initial || 1;
	
			do {
	
				// If previous iteration zeroed out, double until we get *something*.
				// Use string for doubling so we don't accidentally see scale as unchanged below
				scale = scale || ".5";
	
				// Adjust and apply
				initialInUnit = initialInUnit / scale;
				jQuery.style( elem, prop, initialInUnit + unit );
	
			// Update scale, tolerating zero or NaN from tween.cur()
			// Break the loop if scale is unchanged or perfect, or if we've just had enough.
			} while (
				scale !== ( scale = currentValue() / initial ) && scale !== 1 && --maxIterations
			);
		}
	
		if ( valueParts ) {
			initialInUnit = +initialInUnit || +initial || 0;
	
			// Apply relative offset (+=/-=) if specified
			adjusted = valueParts[ 1 ] ?
				initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
				+valueParts[ 2 ];
			if ( tween ) {
				tween.unit = unit;
				tween.start = initialInUnit;
				tween.end = adjusted;
			}
		}
		return adjusted;
	}
	
	
	var defaultDisplayMap = {};
	
	function getDefaultDisplay( elem ) {
		var temp,
			doc = elem.ownerDocument,
			nodeName = elem.nodeName,
			display = defaultDisplayMap[ nodeName ];
	
		if ( display ) {
			return display;
		}
	
		temp = doc.body.appendChild( doc.createElement( nodeName ) ),
		display = jQuery.css( temp, "display" );
	
		temp.parentNode.removeChild( temp );
	
		if ( display === "none" ) {
			display = "block";
		}
		defaultDisplayMap[ nodeName ] = display;
	
		return display;
	}
	
	function showHide( elements, show ) {
		var display, elem,
			values = [],
			index = 0,
			length = elements.length;
	
		// Determine new display value for elements that need to change
		for ( ; index < length; index++ ) {
			elem = elements[ index ];
			if ( !elem.style ) {
				continue;
			}
	
			display = elem.style.display;
			if ( show ) {
	
				// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
				// check is required in this first loop unless we have a nonempty display value (either
				// inline or about-to-be-restored)
				if ( display === "none" ) {
					values[ index ] = dataPriv.get( elem, "display" ) || null;
					if ( !values[ index ] ) {
						elem.style.display = "";
					}
				}
				if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
					values[ index ] = getDefaultDisplay( elem );
				}
			} else {
				if ( display !== "none" ) {
					values[ index ] = "none";
	
					// Remember what we're overwriting
					dataPriv.set( elem, "display", display );
				}
			}
		}
	
		// Set the display of the elements in a second loop to avoid constant reflow
		for ( index = 0; index < length; index++ ) {
			if ( values[ index ] != null ) {
				elements[ index ].style.display = values[ index ];
			}
		}
	
		return elements;
	}
	
	jQuery.fn.extend( {
		show: function() {
			return showHide( this, true );
		},
		hide: function() {
			return showHide( this );
		},
		toggle: function( state ) {
			if ( typeof state === "boolean" ) {
				return state ? this.show() : this.hide();
			}
	
			return this.each( function() {
				if ( isHiddenWithinTree( this ) ) {
					jQuery( this ).show();
				} else {
					jQuery( this ).hide();
				}
			} );
		}
	} );
	var rcheckableType = ( /^(?:checkbox|radio)$/i );
	
	var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]+)/i );
	
	var rscriptType = ( /^$|\/(?:java|ecma)script/i );
	
	
	
	// We have to close these tags to support XHTML (#13200)
	var wrapMap = {
	
		// Support: IE <=9 only
		option: [ 1, "<select multiple='multiple'>", "</select>" ],
	
		// XHTML parsers do not magically insert elements in the
		// same way that tag soup parsers do. So we cannot shorten
		// this by omitting <tbody> or other required elements.
		thead: [ 1, "<table>", "</table>" ],
		col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
		tr: [ 2, "<table><tbody>", "</tbody></table>" ],
		td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],
	
		_default: [ 0, "", "" ]
	};
	
	// Support: IE <=9 only
	wrapMap.optgroup = wrapMap.option;
	
	wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
	wrapMap.th = wrapMap.td;
	
	
	function getAll( context, tag ) {
	
		// Support: IE <=9 - 11 only
		// Use typeof to avoid zero-argument method invocation on host objects (#15151)
		var ret = typeof context.getElementsByTagName !== "undefined" ?
				context.getElementsByTagName( tag || "*" ) :
				typeof context.querySelectorAll !== "undefined" ?
					context.querySelectorAll( tag || "*" ) :
				[];
	
		return tag === undefined || tag && jQuery.nodeName( context, tag ) ?
			jQuery.merge( [ context ], ret ) :
			ret;
	}
	
	
	// Mark scripts as having already been evaluated
	function setGlobalEval( elems, refElements ) {
		var i = 0,
			l = elems.length;
	
		for ( ; i < l; i++ ) {
			dataPriv.set(
				elems[ i ],
				"globalEval",
				!refElements || dataPriv.get( refElements[ i ], "globalEval" )
			);
		}
	}
	
	
	var rhtml = /<|&#?\w+;/;
	
	function buildFragment( elems, context, scripts, selection, ignored ) {
		var elem, tmp, tag, wrap, contains, j,
			fragment = context.createDocumentFragment(),
			nodes = [],
			i = 0,
			l = elems.length;
	
		for ( ; i < l; i++ ) {
			elem = elems[ i ];
	
			if ( elem || elem === 0 ) {
	
				// Add nodes directly
				if ( jQuery.type( elem ) === "object" ) {
	
					// Support: Android <=4.0 only, PhantomJS 1 only
					// push.apply(_, arraylike) throws on ancient WebKit
					jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );
	
				// Convert non-html into a text node
				} else if ( !rhtml.test( elem ) ) {
					nodes.push( context.createTextNode( elem ) );
	
				// Convert html into DOM nodes
				} else {
					tmp = tmp || fragment.appendChild( context.createElement( "div" ) );
	
					// Deserialize a standard representation
					tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
					wrap = wrapMap[ tag ] || wrapMap._default;
					tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];
	
					// Descend through wrappers to the right content
					j = wrap[ 0 ];
					while ( j-- ) {
						tmp = tmp.lastChild;
					}
	
					// Support: Android <=4.0 only, PhantomJS 1 only
					// push.apply(_, arraylike) throws on ancient WebKit
					jQuery.merge( nodes, tmp.childNodes );
	
					// Remember the top-level container
					tmp = fragment.firstChild;
	
					// Ensure the created nodes are orphaned (#12392)
					tmp.textContent = "";
				}
			}
		}
	
		// Remove wrapper from fragment
		fragment.textContent = "";
	
		i = 0;
		while ( ( elem = nodes[ i++ ] ) ) {
	
			// Skip elements already in the context collection (trac-4087)
			if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
				if ( ignored ) {
					ignored.push( elem );
				}
				continue;
			}
	
			contains = jQuery.contains( elem.ownerDocument, elem );
	
			// Append to fragment
			tmp = getAll( fragment.appendChild( elem ), "script" );
	
			// Preserve script evaluation history
			if ( contains ) {
				setGlobalEval( tmp );
			}
	
			// Capture executables
			if ( scripts ) {
				j = 0;
				while ( ( elem = tmp[ j++ ] ) ) {
					if ( rscriptType.test( elem.type || "" ) ) {
						scripts.push( elem );
					}
				}
			}
		}
	
		return fragment;
	}
	
	
	( function() {
		var fragment = document.createDocumentFragment(),
			div = fragment.appendChild( document.createElement( "div" ) ),
			input = document.createElement( "input" );
	
		// Support: Android 4.0 - 4.3 only
		// Check state lost if the name is set (#11217)
		// Support: Windows Web Apps (WWA)
		// `name` and `type` must use .setAttribute for WWA (#14901)
		input.setAttribute( "type", "radio" );
		input.setAttribute( "checked", "checked" );
		input.setAttribute( "name", "t" );
	
		div.appendChild( input );
	
		// Support: Android <=4.1 only
		// Older WebKit doesn't clone checked state correctly in fragments
		support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;
	
		// Support: IE <=11 only
		// Make sure textarea (and checkbox) defaultValue is properly cloned
		div.innerHTML = "<textarea>x</textarea>";
		support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
	} )();
	var documentElement = document.documentElement;
	
	
	
	var
		rkeyEvent = /^key/,
		rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
		rtypenamespace = /^([^.]*)(?:\.(.+)|)/;
	
	function returnTrue() {
		return true;
	}
	
	function returnFalse() {
		return false;
	}
	
	// Support: IE <=9 only
	// See #13393 for more info
	function safeActiveElement() {
		try {
			return document.activeElement;
		} catch ( err ) { }
	}
	
	function on( elem, types, selector, data, fn, one ) {
		var origFn, type;
	
		// Types can be a map of types/handlers
		if ( typeof types === "object" ) {
	
			// ( types-Object, selector, data )
			if ( typeof selector !== "string" ) {
	
				// ( types-Object, data )
				data = data || selector;
				selector = undefined;
			}
			for ( type in types ) {
				on( elem, type, selector, data, types[ type ], one );
			}
			return elem;
		}
	
		if ( data == null && fn == null ) {
	
			// ( types, fn )
			fn = selector;
			data = selector = undefined;
		} else if ( fn == null ) {
			if ( typeof selector === "string" ) {
	
				// ( types, selector, fn )
				fn = data;
				data = undefined;
			} else {
	
				// ( types, data, fn )
				fn = data;
				data = selector;
				selector = undefined;
			}
		}
		if ( fn === false ) {
			fn = returnFalse;
		} else if ( !fn ) {
			return elem;
		}
	
		if ( one === 1 ) {
			origFn = fn;
			fn = function( event ) {
	
				// Can use an empty set, since event contains the info
				jQuery().off( event );
				return origFn.apply( this, arguments );
			};
	
			// Use same guid so caller can remove using origFn
			fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
		}
		return elem.each( function() {
			jQuery.event.add( this, types, fn, data, selector );
		} );
	}
	
	/*
	 * Helper functions for managing events -- not part of the public interface.
	 * Props to Dean Edwards' addEvent library for many of the ideas.
	 */
	jQuery.event = {
	
		global: {},
	
		add: function( elem, types, handler, data, selector ) {
	
			var handleObjIn, eventHandle, tmp,
				events, t, handleObj,
				special, handlers, type, namespaces, origType,
				elemData = dataPriv.get( elem );
	
			// Don't attach events to noData or text/comment nodes (but allow plain objects)
			if ( !elemData ) {
				return;
			}
	
			// Caller can pass in an object of custom data in lieu of the handler
			if ( handler.handler ) {
				handleObjIn = handler;
				handler = handleObjIn.handler;
				selector = handleObjIn.selector;
			}
	
			// Ensure that invalid selectors throw exceptions at attach time
			// Evaluate against documentElement in case elem is a non-element node (e.g., document)
			if ( selector ) {
				jQuery.find.matchesSelector( documentElement, selector );
			}
	
			// Make sure that the handler has a unique ID, used to find/remove it later
			if ( !handler.guid ) {
				handler.guid = jQuery.guid++;
			}
	
			// Init the element's event structure and main handler, if this is the first
			if ( !( events = elemData.events ) ) {
				events = elemData.events = {};
			}
			if ( !( eventHandle = elemData.handle ) ) {
				eventHandle = elemData.handle = function( e ) {
	
					// Discard the second event of a jQuery.event.trigger() and
					// when an event is called after a page has unloaded
					return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
						jQuery.event.dispatch.apply( elem, arguments ) : undefined;
				};
			}
	
			// Handle multiple events separated by a space
			types = ( types || "" ).match( rnotwhite ) || [ "" ];
			t = types.length;
			while ( t-- ) {
				tmp = rtypenamespace.exec( types[ t ] ) || [];
				type = origType = tmp[ 1 ];
				namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();
	
				// There *must* be a type, no attaching namespace-only handlers
				if ( !type ) {
					continue;
				}
	
				// If event changes its type, use the special event handlers for the changed type
				special = jQuery.event.special[ type ] || {};
	
				// If selector defined, determine special event api type, otherwise given type
				type = ( selector ? special.delegateType : special.bindType ) || type;
	
				// Update special based on newly reset type
				special = jQuery.event.special[ type ] || {};
	
				// handleObj is passed to all event handlers
				handleObj = jQuery.extend( {
					type: type,
					origType: origType,
					data: data,
					handler: handler,
					guid: handler.guid,
					selector: selector,
					needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
					namespace: namespaces.join( "." )
				}, handleObjIn );
	
				// Init the event handler queue if we're the first
				if ( !( handlers = events[ type ] ) ) {
					handlers = events[ type ] = [];
					handlers.delegateCount = 0;
	
					// Only use addEventListener if the special events handler returns false
					if ( !special.setup ||
						special.setup.call( elem, data, namespaces, eventHandle ) === false ) {
	
						if ( elem.addEventListener ) {
							elem.addEventListener( type, eventHandle );
						}
					}
				}
	
				if ( special.add ) {
					special.add.call( elem, handleObj );
	
					if ( !handleObj.handler.guid ) {
						handleObj.handler.guid = handler.guid;
					}
				}
	
				// Add to the element's handler list, delegates in front
				if ( selector ) {
					handlers.splice( handlers.delegateCount++, 0, handleObj );
				} else {
					handlers.push( handleObj );
				}
	
				// Keep track of which events have ever been used, for event optimization
				jQuery.event.global[ type ] = true;
			}
	
		},
	
		// Detach an event or set of events from an element
		remove: function( elem, types, handler, selector, mappedTypes ) {
	
			var j, origCount, tmp,
				events, t, handleObj,
				special, handlers, type, namespaces, origType,
				elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );
	
			if ( !elemData || !( events = elemData.events ) ) {
				return;
			}
	
			// Once for each type.namespace in types; type may be omitted
			types = ( types || "" ).match( rnotwhite ) || [ "" ];
			t = types.length;
			while ( t-- ) {
				tmp = rtypenamespace.exec( types[ t ] ) || [];
				type = origType = tmp[ 1 ];
				namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();
	
				// Unbind all events (on this namespace, if provided) for the element
				if ( !type ) {
					for ( type in events ) {
						jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
					}
					continue;
				}
	
				special = jQuery.event.special[ type ] || {};
				type = ( selector ? special.delegateType : special.bindType ) || type;
				handlers = events[ type ] || [];
				tmp = tmp[ 2 ] &&
					new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );
	
				// Remove matching events
				origCount = j = handlers.length;
				while ( j-- ) {
					handleObj = handlers[ j ];
	
					if ( ( mappedTypes || origType === handleObj.origType ) &&
						( !handler || handler.guid === handleObj.guid ) &&
						( !tmp || tmp.test( handleObj.namespace ) ) &&
						( !selector || selector === handleObj.selector ||
							selector === "**" && handleObj.selector ) ) {
						handlers.splice( j, 1 );
	
						if ( handleObj.selector ) {
							handlers.delegateCount--;
						}
						if ( special.remove ) {
							special.remove.call( elem, handleObj );
						}
					}
				}
	
				// Remove generic event handler if we removed something and no more handlers exist
				// (avoids potential for endless recursion during removal of special event handlers)
				if ( origCount && !handlers.length ) {
					if ( !special.teardown ||
						special.teardown.call( elem, namespaces, elemData.handle ) === false ) {
	
						jQuery.removeEvent( elem, type, elemData.handle );
					}
	
					delete events[ type ];
				}
			}
	
			// Remove data and the expando if it's no longer used
			if ( jQuery.isEmptyObject( events ) ) {
				dataPriv.remove( elem, "handle events" );
			}
		},
	
		dispatch: function( nativeEvent ) {
	
			// Make a writable jQuery.Event from the native event object
			var event = jQuery.event.fix( nativeEvent );
	
			var i, j, ret, matched, handleObj, handlerQueue,
				args = new Array( arguments.length ),
				handlers = ( dataPriv.get( this, "events" ) || {} )[ event.type ] || [],
				special = jQuery.event.special[ event.type ] || {};
	
			// Use the fix-ed jQuery.Event rather than the (read-only) native event
			args[ 0 ] = event;
	
			for ( i = 1; i < arguments.length; i++ ) {
				args[ i ] = arguments[ i ];
			}
	
			event.delegateTarget = this;
	
			// Call the preDispatch hook for the mapped type, and let it bail if desired
			if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
				return;
			}
	
			// Determine handlers
			handlerQueue = jQuery.event.handlers.call( this, event, handlers );
	
			// Run delegates first; they may want to stop propagation beneath us
			i = 0;
			while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
				event.currentTarget = matched.elem;
	
				j = 0;
				while ( ( handleObj = matched.handlers[ j++ ] ) &&
					!event.isImmediatePropagationStopped() ) {
	
					// Triggered event must either 1) have no namespace, or 2) have namespace(s)
					// a subset or equal to those in the bound event (both can have no namespace).
					if ( !event.rnamespace || event.rnamespace.test( handleObj.namespace ) ) {
	
						event.handleObj = handleObj;
						event.data = handleObj.data;
	
						ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
							handleObj.handler ).apply( matched.elem, args );
	
						if ( ret !== undefined ) {
							if ( ( event.result = ret ) === false ) {
								event.preventDefault();
								event.stopPropagation();
							}
						}
					}
				}
			}
	
			// Call the postDispatch hook for the mapped type
			if ( special.postDispatch ) {
				special.postDispatch.call( this, event );
			}
	
			return event.result;
		},
	
		handlers: function( event, handlers ) {
			var i, matches, sel, handleObj,
				handlerQueue = [],
				delegateCount = handlers.delegateCount,
				cur = event.target;
	
			// Support: IE <=9
			// Find delegate handlers
			// Black-hole SVG <use> instance trees (#13180)
			//
			// Support: Firefox <=42
			// Avoid non-left-click in FF but don't block IE radio events (#3861, gh-2343)
			if ( delegateCount && cur.nodeType &&
				( event.type !== "click" || isNaN( event.button ) || event.button < 1 ) ) {
	
				for ( ; cur !== this; cur = cur.parentNode || this ) {
	
					// Don't check non-elements (#13208)
					// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
					if ( cur.nodeType === 1 && ( cur.disabled !== true || event.type !== "click" ) ) {
						matches = [];
						for ( i = 0; i < delegateCount; i++ ) {
							handleObj = handlers[ i ];
	
							// Don't conflict with Object.prototype properties (#13203)
							sel = handleObj.selector + " ";
	
							if ( matches[ sel ] === undefined ) {
								matches[ sel ] = handleObj.needsContext ?
									jQuery( sel, this ).index( cur ) > -1 :
									jQuery.find( sel, this, null, [ cur ] ).length;
							}
							if ( matches[ sel ] ) {
								matches.push( handleObj );
							}
						}
						if ( matches.length ) {
							handlerQueue.push( { elem: cur, handlers: matches } );
						}
					}
				}
			}
	
			// Add the remaining (directly-bound) handlers
			if ( delegateCount < handlers.length ) {
				handlerQueue.push( { elem: this, handlers: handlers.slice( delegateCount ) } );
			}
	
			return handlerQueue;
		},
	
		addProp: function( name, hook ) {
			Object.defineProperty( jQuery.Event.prototype, name, {
				enumerable: true,
				configurable: true,
	
				get: jQuery.isFunction( hook ) ?
					function() {
						if ( this.originalEvent ) {
								return hook( this.originalEvent );
						}
					} :
					function() {
						if ( this.originalEvent ) {
								return this.originalEvent[ name ];
						}
					},
	
				set: function( value ) {
					Object.defineProperty( this, name, {
						enumerable: true,
						configurable: true,
						writable: true,
						value: value
					} );
				}
			} );
		},
	
		fix: function( originalEvent ) {
			return originalEvent[ jQuery.expando ] ?
				originalEvent :
				new jQuery.Event( originalEvent );
		},
	
		special: {
			load: {
	
				// Prevent triggered image.load events from bubbling to window.load
				noBubble: true
			},
			focus: {
	
				// Fire native event if possible so blur/focus sequence is correct
				trigger: function() {
					if ( this !== safeActiveElement() && this.focus ) {
						this.focus();
						return false;
					}
				},
				delegateType: "focusin"
			},
			blur: {
				trigger: function() {
					if ( this === safeActiveElement() && this.blur ) {
						this.blur();
						return false;
					}
				},
				delegateType: "focusout"
			},
			click: {
	
				// For checkbox, fire native event so checked state will be right
				trigger: function() {
					if ( this.type === "checkbox" && this.click && jQuery.nodeName( this, "input" ) ) {
						this.click();
						return false;
					}
				},
	
				// For cross-browser consistency, don't fire native .click() on links
				_default: function( event ) {
					return jQuery.nodeName( event.target, "a" );
				}
			},
	
			beforeunload: {
				postDispatch: function( event ) {
	
					// Support: Firefox 20+
					// Firefox doesn't alert if the returnValue field is not set.
					if ( event.result !== undefined && event.originalEvent ) {
						event.originalEvent.returnValue = event.result;
					}
				}
			}
		}
	};
	
	jQuery.removeEvent = function( elem, type, handle ) {
	
		// This "if" is needed for plain objects
		if ( elem.removeEventListener ) {
			elem.removeEventListener( type, handle );
		}
	};
	
	jQuery.Event = function( src, props ) {
	
		// Allow instantiation without the 'new' keyword
		if ( !( this instanceof jQuery.Event ) ) {
			return new jQuery.Event( src, props );
		}
	
		// Event object
		if ( src && src.type ) {
			this.originalEvent = src;
			this.type = src.type;
	
			// Events bubbling up the document may have been marked as prevented
			// by a handler lower down the tree; reflect the correct value.
			this.isDefaultPrevented = src.defaultPrevented ||
					src.defaultPrevented === undefined &&
	
					// Support: Android <=2.3 only
					src.returnValue === false ?
				returnTrue :
				returnFalse;
	
			// Create target properties
			// Support: Safari <=6 - 7 only
			// Target should not be a text node (#504, #13143)
			this.target = ( src.target && src.target.nodeType === 3 ) ?
				src.target.parentNode :
				src.target;
	
			this.currentTarget = src.currentTarget;
			this.relatedTarget = src.relatedTarget;
	
		// Event type
		} else {
			this.type = src;
		}
	
		// Put explicitly provided properties onto the event object
		if ( props ) {
			jQuery.extend( this, props );
		}
	
		// Create a timestamp if incoming event doesn't have one
		this.timeStamp = src && src.timeStamp || jQuery.now();
	
		// Mark it as fixed
		this[ jQuery.expando ] = true;
	};
	
	// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
	// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
	jQuery.Event.prototype = {
		constructor: jQuery.Event,
		isDefaultPrevented: returnFalse,
		isPropagationStopped: returnFalse,
		isImmediatePropagationStopped: returnFalse,
		isSimulated: false,
	
		preventDefault: function() {
			var e = this.originalEvent;
	
			this.isDefaultPrevented = returnTrue;
	
			if ( e && !this.isSimulated ) {
				e.preventDefault();
			}
		},
		stopPropagation: function() {
			var e = this.originalEvent;
	
			this.isPropagationStopped = returnTrue;
	
			if ( e && !this.isSimulated ) {
				e.stopPropagation();
			}
		},
		stopImmediatePropagation: function() {
			var e = this.originalEvent;
	
			this.isImmediatePropagationStopped = returnTrue;
	
			if ( e && !this.isSimulated ) {
				e.stopImmediatePropagation();
			}
	
			this.stopPropagation();
		}
	};
	
	// Includes all common event props including KeyEvent and MouseEvent specific props
	jQuery.each( {
		altKey: true,
		bubbles: true,
		cancelable: true,
		changedTouches: true,
		ctrlKey: true,
		detail: true,
		eventPhase: true,
		metaKey: true,
		pageX: true,
		pageY: true,
		shiftKey: true,
		view: true,
		"char": true,
		charCode: true,
		key: true,
		keyCode: true,
		button: true,
		buttons: true,
		clientX: true,
		clientY: true,
		offsetX: true,
		offsetY: true,
		pointerId: true,
		pointerType: true,
		screenX: true,
		screenY: true,
		targetTouches: true,
		toElement: true,
		touches: true,
	
		which: function( event ) {
			var button = event.button;
	
			// Add which for key events
			if ( event.which == null && rkeyEvent.test( event.type ) ) {
				return event.charCode != null ? event.charCode : event.keyCode;
			}
	
			// Add which for click: 1 === left; 2 === middle; 3 === right
			if ( !event.which && button !== undefined && rmouseEvent.test( event.type ) ) {
				return ( button & 1 ? 1 : ( button & 2 ? 3 : ( button & 4 ? 2 : 0 ) ) );
			}
	
			return event.which;
		}
	}, jQuery.event.addProp );
	
	// Create mouseenter/leave events using mouseover/out and event-time checks
	// so that event delegation works in jQuery.
	// Do the same for pointerenter/pointerleave and pointerover/pointerout
	//
	// Support: Safari 7 only
	// Safari sends mouseenter too often; see:
	// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
	// for the description of the bug (it existed in older Chrome versions as well).
	jQuery.each( {
		mouseenter: "mouseover",
		mouseleave: "mouseout",
		pointerenter: "pointerover",
		pointerleave: "pointerout"
	}, function( orig, fix ) {
		jQuery.event.special[ orig ] = {
			delegateType: fix,
			bindType: fix,
	
			handle: function( event ) {
				var ret,
					target = this,
					related = event.relatedTarget,
					handleObj = event.handleObj;
	
				// For mouseenter/leave call the handler if related is outside the target.
				// NB: No relatedTarget if the mouse left/entered the browser window
				if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
					event.type = handleObj.origType;
					ret = handleObj.handler.apply( this, arguments );
					event.type = fix;
				}
				return ret;
			}
		};
	} );
	
	jQuery.fn.extend( {
	
		on: function( types, selector, data, fn ) {
			return on( this, types, selector, data, fn );
		},
		one: function( types, selector, data, fn ) {
			return on( this, types, selector, data, fn, 1 );
		},
		off: function( types, selector, fn ) {
			var handleObj, type;
			if ( types && types.preventDefault && types.handleObj ) {
	
				// ( event )  dispatched jQuery.Event
				handleObj = types.handleObj;
				jQuery( types.delegateTarget ).off(
					handleObj.namespace ?
						handleObj.origType + "." + handleObj.namespace :
						handleObj.origType,
					handleObj.selector,
					handleObj.handler
				);
				return this;
			}
			if ( typeof types === "object" ) {
	
				// ( types-object [, selector] )
				for ( type in types ) {
					this.off( type, selector, types[ type ] );
				}
				return this;
			}
			if ( selector === false || typeof selector === "function" ) {
	
				// ( types [, fn] )
				fn = selector;
				selector = undefined;
			}
			if ( fn === false ) {
				fn = returnFalse;
			}
			return this.each( function() {
				jQuery.event.remove( this, types, fn, selector );
			} );
		}
	} );
	
	
	var
	
		/* eslint-disable max-len */
	
		// See https://github.com/eslint/eslint/issues/3229
		rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
	
		/* eslint-enable */
	
		// Support: IE <=10 - 11, Edge 12 - 13
		// In IE/Edge using regex groups here causes severe slowdowns.
		// See https://connect.microsoft.com/IE/feedback/details/1736512/
		rnoInnerhtml = /<script|<style|<link/i,
	
		// checked="checked" or checked
		rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
		rscriptTypeMasked = /^true\/(.*)/,
		rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
	
	function manipulationTarget( elem, content ) {
		if ( jQuery.nodeName( elem, "table" ) &&
			jQuery.nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {
	
			return elem.getElementsByTagName( "tbody" )[ 0 ] || elem;
		}
	
		return elem;
	}
	
	// Replace/restore the type attribute of script elements for safe DOM manipulation
	function disableScript( elem ) {
		elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
		return elem;
	}
	function restoreScript( elem ) {
		var match = rscriptTypeMasked.exec( elem.type );
	
		if ( match ) {
			elem.type = match[ 1 ];
		} else {
			elem.removeAttribute( "type" );
		}
	
		return elem;
	}
	
	function cloneCopyEvent( src, dest ) {
		var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;
	
		if ( dest.nodeType !== 1 ) {
			return;
		}
	
		// 1. Copy private data: events, handlers, etc.
		if ( dataPriv.hasData( src ) ) {
			pdataOld = dataPriv.access( src );
			pdataCur = dataPriv.set( dest, pdataOld );
			events = pdataOld.events;
	
			if ( events ) {
				delete pdataCur.handle;
				pdataCur.events = {};
	
				for ( type in events ) {
					for ( i = 0, l = events[ type ].length; i < l; i++ ) {
						jQuery.event.add( dest, type, events[ type ][ i ] );
					}
				}
			}
		}
	
		// 2. Copy user data
		if ( dataUser.hasData( src ) ) {
			udataOld = dataUser.access( src );
			udataCur = jQuery.extend( {}, udataOld );
	
			dataUser.set( dest, udataCur );
		}
	}
	
	// Fix IE bugs, see support tests
	function fixInput( src, dest ) {
		var nodeName = dest.nodeName.toLowerCase();
	
		// Fails to persist the checked state of a cloned checkbox or radio button.
		if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
			dest.checked = src.checked;
	
		// Fails to return the selected option to the default selected state when cloning options
		} else if ( nodeName === "input" || nodeName === "textarea" ) {
			dest.defaultValue = src.defaultValue;
		}
	}
	
	function domManip( collection, args, callback, ignored ) {
	
		// Flatten any nested arrays
		args = concat.apply( [], args );
	
		var fragment, first, scripts, hasScripts, node, doc,
			i = 0,
			l = collection.length,
			iNoClone = l - 1,
			value = args[ 0 ],
			isFunction = jQuery.isFunction( value );
	
		// We can't cloneNode fragments that contain checked, in WebKit
		if ( isFunction ||
				( l > 1 && typeof value === "string" &&
					!support.checkClone && rchecked.test( value ) ) ) {
			return collection.each( function( index ) {
				var self = collection.eq( index );
				if ( isFunction ) {
					args[ 0 ] = value.call( this, index, self.html() );
				}
				domManip( self, args, callback, ignored );
			} );
		}
	
		if ( l ) {
			fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
			first = fragment.firstChild;
	
			if ( fragment.childNodes.length === 1 ) {
				fragment = first;
			}
	
			// Require either new content or an interest in ignored elements to invoke the callback
			if ( first || ignored ) {
				scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
				hasScripts = scripts.length;
	
				// Use the original fragment for the last item
				// instead of the first because it can end up
				// being emptied incorrectly in certain situations (#8070).
				for ( ; i < l; i++ ) {
					node = fragment;
	
					if ( i !== iNoClone ) {
						node = jQuery.clone( node, true, true );
	
						// Keep references to cloned scripts for later restoration
						if ( hasScripts ) {
	
							// Support: Android <=4.0 only, PhantomJS 1 only
							// push.apply(_, arraylike) throws on ancient WebKit
							jQuery.merge( scripts, getAll( node, "script" ) );
						}
					}
	
					callback.call( collection[ i ], node, i );
				}
	
				if ( hasScripts ) {
					doc = scripts[ scripts.length - 1 ].ownerDocument;
	
					// Reenable scripts
					jQuery.map( scripts, restoreScript );
	
					// Evaluate executable scripts on first document insertion
					for ( i = 0; i < hasScripts; i++ ) {
						node = scripts[ i ];
						if ( rscriptType.test( node.type || "" ) &&
							!dataPriv.access( node, "globalEval" ) &&
							jQuery.contains( doc, node ) ) {
	
							if ( node.src ) {
	
								// Optional AJAX dependency, but won't run scripts if not present
								if ( jQuery._evalUrl ) {
									jQuery._evalUrl( node.src );
								}
							} else {
								DOMEval( node.textContent.replace( rcleanScript, "" ), doc );
							}
						}
					}
				}
			}
		}
	
		return collection;
	}
	
	function remove( elem, selector, keepData ) {
		var node,
			nodes = selector ? jQuery.filter( selector, elem ) : elem,
			i = 0;
	
		for ( ; ( node = nodes[ i ] ) != null; i++ ) {
			if ( !keepData && node.nodeType === 1 ) {
				jQuery.cleanData( getAll( node ) );
			}
	
			if ( node.parentNode ) {
				if ( keepData && jQuery.contains( node.ownerDocument, node ) ) {
					setGlobalEval( getAll( node, "script" ) );
				}
				node.parentNode.removeChild( node );
			}
		}
	
		return elem;
	}
	
	jQuery.extend( {
		htmlPrefilter: function( html ) {
			return html.replace( rxhtmlTag, "<$1></$2>" );
		},
	
		clone: function( elem, dataAndEvents, deepDataAndEvents ) {
			var i, l, srcElements, destElements,
				clone = elem.cloneNode( true ),
				inPage = jQuery.contains( elem.ownerDocument, elem );
	
			// Fix IE cloning issues
			if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
					!jQuery.isXMLDoc( elem ) ) {
	
				// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
				destElements = getAll( clone );
				srcElements = getAll( elem );
	
				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					fixInput( srcElements[ i ], destElements[ i ] );
				}
			}
	
			// Copy the events from the original to the clone
			if ( dataAndEvents ) {
				if ( deepDataAndEvents ) {
					srcElements = srcElements || getAll( elem );
					destElements = destElements || getAll( clone );
	
					for ( i = 0, l = srcElements.length; i < l; i++ ) {
						cloneCopyEvent( srcElements[ i ], destElements[ i ] );
					}
				} else {
					cloneCopyEvent( elem, clone );
				}
			}
	
			// Preserve script evaluation history
			destElements = getAll( clone, "script" );
			if ( destElements.length > 0 ) {
				setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
			}
	
			// Return the cloned set
			return clone;
		},
	
		cleanData: function( elems ) {
			var data, elem, type,
				special = jQuery.event.special,
				i = 0;
	
			for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
				if ( acceptData( elem ) ) {
					if ( ( data = elem[ dataPriv.expando ] ) ) {
						if ( data.events ) {
							for ( type in data.events ) {
								if ( special[ type ] ) {
									jQuery.event.remove( elem, type );
	
								// This is a shortcut to avoid jQuery.event.remove's overhead
								} else {
									jQuery.removeEvent( elem, type, data.handle );
								}
							}
						}
	
						// Support: Chrome <=35 - 45+
						// Assign undefined instead of using delete, see Data#remove
						elem[ dataPriv.expando ] = undefined;
					}
					if ( elem[ dataUser.expando ] ) {
	
						// Support: Chrome <=35 - 45+
						// Assign undefined instead of using delete, see Data#remove
						elem[ dataUser.expando ] = undefined;
					}
				}
			}
		}
	} );
	
	jQuery.fn.extend( {
		detach: function( selector ) {
			return remove( this, selector, true );
		},
	
		remove: function( selector ) {
			return remove( this, selector );
		},
	
		text: function( value ) {
			return access( this, function( value ) {
				return value === undefined ?
					jQuery.text( this ) :
					this.empty().each( function() {
						if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
							this.textContent = value;
						}
					} );
			}, null, value, arguments.length );
		},
	
		append: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
					var target = manipulationTarget( this, elem );
					target.appendChild( elem );
				}
			} );
		},
	
		prepend: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
					var target = manipulationTarget( this, elem );
					target.insertBefore( elem, target.firstChild );
				}
			} );
		},
	
		before: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.parentNode ) {
					this.parentNode.insertBefore( elem, this );
				}
			} );
		},
	
		after: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.parentNode ) {
					this.parentNode.insertBefore( elem, this.nextSibling );
				}
			} );
		},
	
		empty: function() {
			var elem,
				i = 0;
	
			for ( ; ( elem = this[ i ] ) != null; i++ ) {
				if ( elem.nodeType === 1 ) {
	
					// Prevent memory leaks
					jQuery.cleanData( getAll( elem, false ) );
	
					// Remove any remaining nodes
					elem.textContent = "";
				}
			}
	
			return this;
		},
	
		clone: function( dataAndEvents, deepDataAndEvents ) {
			dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
			deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;
	
			return this.map( function() {
				return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
			} );
		},
	
		html: function( value ) {
			return access( this, function( value ) {
				var elem = this[ 0 ] || {},
					i = 0,
					l = this.length;
	
				if ( value === undefined && elem.nodeType === 1 ) {
					return elem.innerHTML;
				}
	
				// See if we can take a shortcut and just use innerHTML
				if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
					!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {
	
					value = jQuery.htmlPrefilter( value );
	
					try {
						for ( ; i < l; i++ ) {
							elem = this[ i ] || {};
	
							// Remove element nodes and prevent memory leaks
							if ( elem.nodeType === 1 ) {
								jQuery.cleanData( getAll( elem, false ) );
								elem.innerHTML = value;
							}
						}
	
						elem = 0;
	
					// If using innerHTML throws an exception, use the fallback method
					} catch ( e ) {}
				}
	
				if ( elem ) {
					this.empty().append( value );
				}
			}, null, value, arguments.length );
		},
	
		replaceWith: function() {
			var ignored = [];
	
			// Make the changes, replacing each non-ignored context element with the new content
			return domManip( this, arguments, function( elem ) {
				var parent = this.parentNode;
	
				if ( jQuery.inArray( this, ignored ) < 0 ) {
					jQuery.cleanData( getAll( this ) );
					if ( parent ) {
						parent.replaceChild( elem, this );
					}
				}
	
			// Force callback invocation
			}, ignored );
		}
	} );
	
	jQuery.each( {
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function( name, original ) {
		jQuery.fn[ name ] = function( selector ) {
			var elems,
				ret = [],
				insert = jQuery( selector ),
				last = insert.length - 1,
				i = 0;
	
			for ( ; i <= last; i++ ) {
				elems = i === last ? this : this.clone( true );
				jQuery( insert[ i ] )[ original ]( elems );
	
				// Support: Android <=4.0 only, PhantomJS 1 only
				// .get() because push.apply(_, arraylike) throws on ancient WebKit
				push.apply( ret, elems.get() );
			}
	
			return this.pushStack( ret );
		};
	} );
	var rmargin = ( /^margin/ );
	
	var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );
	
	var getStyles = function( elem ) {
	
			// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
			// IE throws on elements created in popups
			// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
			var view = elem.ownerDocument.defaultView;
	
			if ( !view || !view.opener ) {
				view = window;
			}
	
			return view.getComputedStyle( elem );
		};
	
	
	
	( function() {
	
		// Executing both pixelPosition & boxSizingReliable tests require only one layout
		// so they're executed at the same time to save the second computation.
		function computeStyleTests() {
	
			// This is a singleton, we need to execute it only once
			if ( !div ) {
				return;
			}
	
			div.style.cssText =
				"box-sizing:border-box;" +
				"position:relative;display:block;" +
				"margin:auto;border:1px;padding:1px;" +
				"top:1%;width:50%";
			div.innerHTML = "";
			documentElement.appendChild( container );
	
			var divStyle = window.getComputedStyle( div );
			pixelPositionVal = divStyle.top !== "1%";
	
			// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
			reliableMarginLeftVal = divStyle.marginLeft === "2px";
			boxSizingReliableVal = divStyle.width === "4px";
	
			// Support: Android 4.0 - 4.3 only
			// Some styles come back with percentage values, even though they shouldn't
			div.style.marginRight = "50%";
			pixelMarginRightVal = divStyle.marginRight === "4px";
	
			documentElement.removeChild( container );
	
			// Nullify the div so it wouldn't be stored in the memory and
			// it will also be a sign that checks already performed
			div = null;
		}
	
		var pixelPositionVal, boxSizingReliableVal, pixelMarginRightVal, reliableMarginLeftVal,
			container = document.createElement( "div" ),
			div = document.createElement( "div" );
	
		// Finish early in limited (non-browser) environments
		if ( !div.style ) {
			return;
		}
	
		// Support: IE <=9 - 11 only
		// Style of cloned element affects source element cloned (#8908)
		div.style.backgroundClip = "content-box";
		div.cloneNode( true ).style.backgroundClip = "";
		support.clearCloneStyle = div.style.backgroundClip === "content-box";
	
		container.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;" +
			"padding:0;margin-top:1px;position:absolute";
		container.appendChild( div );
	
		jQuery.extend( support, {
			pixelPosition: function() {
				computeStyleTests();
				return pixelPositionVal;
			},
			boxSizingReliable: function() {
				computeStyleTests();
				return boxSizingReliableVal;
			},
			pixelMarginRight: function() {
				computeStyleTests();
				return pixelMarginRightVal;
			},
			reliableMarginLeft: function() {
				computeStyleTests();
				return reliableMarginLeftVal;
			}
		} );
	} )();
	
	
	function curCSS( elem, name, computed ) {
		var width, minWidth, maxWidth, ret,
			style = elem.style;
	
		computed = computed || getStyles( elem );
	
		// Support: IE <=9 only
		// getPropertyValue is only needed for .css('filter') (#12537)
		if ( computed ) {
			ret = computed.getPropertyValue( name ) || computed[ name ];
	
			if ( ret === "" && !jQuery.contains( elem.ownerDocument, elem ) ) {
				ret = jQuery.style( elem, name );
			}
	
			// A tribute to the "awesome hack by Dean Edwards"
			// Android Browser returns percentage for some values,
			// but width seems to be reliably pixels.
			// This is against the CSSOM draft spec:
			// https://drafts.csswg.org/cssom/#resolved-values
			if ( !support.pixelMarginRight() && rnumnonpx.test( ret ) && rmargin.test( name ) ) {
	
				// Remember the original values
				width = style.width;
				minWidth = style.minWidth;
				maxWidth = style.maxWidth;
	
				// Put in the new values to get a computed value out
				style.minWidth = style.maxWidth = style.width = ret;
				ret = computed.width;
	
				// Revert the changed values
				style.width = width;
				style.minWidth = minWidth;
				style.maxWidth = maxWidth;
			}
		}
	
		return ret !== undefined ?
	
			// Support: IE <=9 - 11 only
			// IE returns zIndex value as an integer.
			ret + "" :
			ret;
	}
	
	
	function addGetHookIf( conditionFn, hookFn ) {
	
		// Define the hook, we'll check on the first run if it's really needed.
		return {
			get: function() {
				if ( conditionFn() ) {
	
					// Hook not needed (or it's not possible to use it due
					// to missing dependency), remove it.
					delete this.get;
					return;
				}
	
				// Hook needed; redefine it so that the support test is not executed again.
				return ( this.get = hookFn ).apply( this, arguments );
			}
		};
	}
	
	
	var
	
		// Swappable if display is none or starts with table
		// except "table", "table-cell", or "table-caption"
		// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
		rdisplayswap = /^(none|table(?!-c[ea]).+)/,
		cssShow = { position: "absolute", visibility: "hidden", display: "block" },
		cssNormalTransform = {
			letterSpacing: "0",
			fontWeight: "400"
		},
	
		cssPrefixes = [ "Webkit", "Moz", "ms" ],
		emptyStyle = document.createElement( "div" ).style;
	
	// Return a css property mapped to a potentially vendor prefixed property
	function vendorPropName( name ) {
	
		// Shortcut for names that are not vendor prefixed
		if ( name in emptyStyle ) {
			return name;
		}
	
		// Check for vendor prefixed names
		var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
			i = cssPrefixes.length;
	
		while ( i-- ) {
			name = cssPrefixes[ i ] + capName;
			if ( name in emptyStyle ) {
				return name;
			}
		}
	}
	
	function setPositiveNumber( elem, value, subtract ) {
	
		// Any relative (+/-) values have already been
		// normalized at this point
		var matches = rcssNum.exec( value );
		return matches ?
	
			// Guard against undefined "subtract", e.g., when used as in cssHooks
			Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
			value;
	}
	
	function augmentWidthOrHeight( elem, name, extra, isBorderBox, styles ) {
		var i = extra === ( isBorderBox ? "border" : "content" ) ?
	
			// If we already have the right measurement, avoid augmentation
			4 :
	
			// Otherwise initialize for horizontal or vertical properties
			name === "width" ? 1 : 0,
	
			val = 0;
	
		for ( ; i < 4; i += 2 ) {
	
			// Both box models exclude margin, so add it if we want it
			if ( extra === "margin" ) {
				val += jQuery.css( elem, extra + cssExpand[ i ], true, styles );
			}
	
			if ( isBorderBox ) {
	
				// border-box includes padding, so remove it if we want content
				if ( extra === "content" ) {
					val -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
				}
	
				// At this point, extra isn't border nor margin, so remove border
				if ( extra !== "margin" ) {
					val -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
				}
			} else {
	
				// At this point, extra isn't content, so add padding
				val += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
	
				// At this point, extra isn't content nor padding, so add border
				if ( extra !== "padding" ) {
					val += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
				}
			}
		}
	
		return val;
	}
	
	function getWidthOrHeight( elem, name, extra ) {
	
		// Start with offset property, which is equivalent to the border-box value
		var val,
			valueIsBorderBox = true,
			styles = getStyles( elem ),
			isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";
	
		// Support: IE <=11 only
		// Running getBoundingClientRect on a disconnected node
		// in IE throws an error.
		if ( elem.getClientRects().length ) {
			val = elem.getBoundingClientRect()[ name ];
		}
	
		// Some non-html elements return undefined for offsetWidth, so check for null/undefined
		// svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
		// MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668
		if ( val <= 0 || val == null ) {
	
			// Fall back to computed then uncomputed css if necessary
			val = curCSS( elem, name, styles );
			if ( val < 0 || val == null ) {
				val = elem.style[ name ];
			}
	
			// Computed unit is not pixels. Stop here and return.
			if ( rnumnonpx.test( val ) ) {
				return val;
			}
	
			// Check for style in case a browser which returns unreliable values
			// for getComputedStyle silently falls back to the reliable elem.style
			valueIsBorderBox = isBorderBox &&
				( support.boxSizingReliable() || val === elem.style[ name ] );
	
			// Normalize "", auto, and prepare for extra
			val = parseFloat( val ) || 0;
		}
	
		// Use the active box-sizing model to add/subtract irrelevant styles
		return ( val +
			augmentWidthOrHeight(
				elem,
				name,
				extra || ( isBorderBox ? "border" : "content" ),
				valueIsBorderBox,
				styles
			)
		) + "px";
	}
	
	jQuery.extend( {
	
		// Add in style property hooks for overriding the default
		// behavior of getting and setting a style property
		cssHooks: {
			opacity: {
				get: function( elem, computed ) {
					if ( computed ) {
	
						// We should always get a number back from opacity
						var ret = curCSS( elem, "opacity" );
						return ret === "" ? "1" : ret;
					}
				}
			}
		},
	
		// Don't automatically add "px" to these possibly-unitless properties
		cssNumber: {
			"animationIterationCount": true,
			"columnCount": true,
			"fillOpacity": true,
			"flexGrow": true,
			"flexShrink": true,
			"fontWeight": true,
			"lineHeight": true,
			"opacity": true,
			"order": true,
			"orphans": true,
			"widows": true,
			"zIndex": true,
			"zoom": true
		},
	
		// Add in properties whose names you wish to fix before
		// setting or getting the value
		cssProps: {
			"float": "cssFloat"
		},
	
		// Get and set the style property on a DOM Node
		style: function( elem, name, value, extra ) {
	
			// Don't set styles on text and comment nodes
			if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
				return;
			}
	
			// Make sure that we're working with the right name
			var ret, type, hooks,
				origName = jQuery.camelCase( name ),
				style = elem.style;
	
			name = jQuery.cssProps[ origName ] ||
				( jQuery.cssProps[ origName ] = vendorPropName( origName ) || origName );
	
			// Gets hook for the prefixed version, then unprefixed version
			hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];
	
			// Check if we're setting a value
			if ( value !== undefined ) {
				type = typeof value;
	
				// Convert "+=" or "-=" to relative numbers (#7345)
				if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
					value = adjustCSS( elem, name, ret );
	
					// Fixes bug #9237
					type = "number";
				}
	
				// Make sure that null and NaN values aren't set (#7116)
				if ( value == null || value !== value ) {
					return;
				}
	
				// If a number was passed in, add the unit (except for certain CSS properties)
				if ( type === "number" ) {
					value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
				}
	
				// background-* props affect original clone's values
				if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
					style[ name ] = "inherit";
				}
	
				// If a hook was provided, use that value, otherwise just set the specified value
				if ( !hooks || !( "set" in hooks ) ||
					( value = hooks.set( elem, value, extra ) ) !== undefined ) {
	
					style[ name ] = value;
				}
	
			} else {
	
				// If a hook was provided get the non-computed value from there
				if ( hooks && "get" in hooks &&
					( ret = hooks.get( elem, false, extra ) ) !== undefined ) {
	
					return ret;
				}
	
				// Otherwise just get the value from the style object
				return style[ name ];
			}
		},
	
		css: function( elem, name, extra, styles ) {
			var val, num, hooks,
				origName = jQuery.camelCase( name );
	
			// Make sure that we're working with the right name
			name = jQuery.cssProps[ origName ] ||
				( jQuery.cssProps[ origName ] = vendorPropName( origName ) || origName );
	
			// Try prefixed name followed by the unprefixed name
			hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];
	
			// If a hook was provided get the computed value from there
			if ( hooks && "get" in hooks ) {
				val = hooks.get( elem, true, extra );
			}
	
			// Otherwise, if a way to get the computed value exists, use that
			if ( val === undefined ) {
				val = curCSS( elem, name, styles );
			}
	
			// Convert "normal" to computed value
			if ( val === "normal" && name in cssNormalTransform ) {
				val = cssNormalTransform[ name ];
			}
	
			// Make numeric if forced or a qualifier was provided and val looks numeric
			if ( extra === "" || extra ) {
				num = parseFloat( val );
				return extra === true || isFinite( num ) ? num || 0 : val;
			}
			return val;
		}
	} );
	
	jQuery.each( [ "height", "width" ], function( i, name ) {
		jQuery.cssHooks[ name ] = {
			get: function( elem, computed, extra ) {
				if ( computed ) {
	
					// Certain elements can have dimension info if we invisibly show them
					// but it must have a current display style that would benefit
					return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&
	
						// Support: Safari 8+
						// Table columns in Safari have non-zero offsetWidth & zero
						// getBoundingClientRect().width unless display is changed.
						// Support: IE <=11 only
						// Running getBoundingClientRect on a disconnected node
						// in IE throws an error.
						( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
							swap( elem, cssShow, function() {
								return getWidthOrHeight( elem, name, extra );
							} ) :
							getWidthOrHeight( elem, name, extra );
				}
			},
	
			set: function( elem, value, extra ) {
				var matches,
					styles = extra && getStyles( elem ),
					subtract = extra && augmentWidthOrHeight(
						elem,
						name,
						extra,
						jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
						styles
					);
	
				// Convert to pixels if value adjustment is needed
				if ( subtract && ( matches = rcssNum.exec( value ) ) &&
					( matches[ 3 ] || "px" ) !== "px" ) {
	
					elem.style[ name ] = value;
					value = jQuery.css( elem, name );
				}
	
				return setPositiveNumber( elem, value, subtract );
			}
		};
	} );
	
	jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
		function( elem, computed ) {
			if ( computed ) {
				return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
					elem.getBoundingClientRect().left -
						swap( elem, { marginLeft: 0 }, function() {
							return elem.getBoundingClientRect().left;
						} )
					) + "px";
			}
		}
	);
	
	// These hooks are used by animate to expand properties
	jQuery.each( {
		margin: "",
		padding: "",
		border: "Width"
	}, function( prefix, suffix ) {
		jQuery.cssHooks[ prefix + suffix ] = {
			expand: function( value ) {
				var i = 0,
					expanded = {},
	
					// Assumes a single number if not a string
					parts = typeof value === "string" ? value.split( " " ) : [ value ];
	
				for ( ; i < 4; i++ ) {
					expanded[ prefix + cssExpand[ i ] + suffix ] =
						parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
				}
	
				return expanded;
			}
		};
	
		if ( !rmargin.test( prefix ) ) {
			jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
		}
	} );
	
	jQuery.fn.extend( {
		css: function( name, value ) {
			return access( this, function( elem, name, value ) {
				var styles, len,
					map = {},
					i = 0;
	
				if ( jQuery.isArray( name ) ) {
					styles = getStyles( elem );
					len = name.length;
	
					for ( ; i < len; i++ ) {
						map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
					}
	
					return map;
				}
	
				return value !== undefined ?
					jQuery.style( elem, name, value ) :
					jQuery.css( elem, name );
			}, name, value, arguments.length > 1 );
		}
	} );
	
	
	function Tween( elem, options, prop, end, easing ) {
		return new Tween.prototype.init( elem, options, prop, end, easing );
	}
	jQuery.Tween = Tween;
	
	Tween.prototype = {
		constructor: Tween,
		init: function( elem, options, prop, end, easing, unit ) {
			this.elem = elem;
			this.prop = prop;
			this.easing = easing || jQuery.easing._default;
			this.options = options;
			this.start = this.now = this.cur();
			this.end = end;
			this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
		},
		cur: function() {
			var hooks = Tween.propHooks[ this.prop ];
	
			return hooks && hooks.get ?
				hooks.get( this ) :
				Tween.propHooks._default.get( this );
		},
		run: function( percent ) {
			var eased,
				hooks = Tween.propHooks[ this.prop ];
	
			if ( this.options.duration ) {
				this.pos = eased = jQuery.easing[ this.easing ](
					percent, this.options.duration * percent, 0, 1, this.options.duration
				);
			} else {
				this.pos = eased = percent;
			}
			this.now = ( this.end - this.start ) * eased + this.start;
	
			if ( this.options.step ) {
				this.options.step.call( this.elem, this.now, this );
			}
	
			if ( hooks && hooks.set ) {
				hooks.set( this );
			} else {
				Tween.propHooks._default.set( this );
			}
			return this;
		}
	};
	
	Tween.prototype.init.prototype = Tween.prototype;
	
	Tween.propHooks = {
		_default: {
			get: function( tween ) {
				var result;
	
				// Use a property on the element directly when it is not a DOM element,
				// or when there is no matching style property that exists.
				if ( tween.elem.nodeType !== 1 ||
					tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
					return tween.elem[ tween.prop ];
				}
	
				// Passing an empty string as a 3rd parameter to .css will automatically
				// attempt a parseFloat and fallback to a string if the parse fails.
				// Simple values such as "10px" are parsed to Float;
				// complex values such as "rotate(1rad)" are returned as-is.
				result = jQuery.css( tween.elem, tween.prop, "" );
	
				// Empty strings, null, undefined and "auto" are converted to 0.
				return !result || result === "auto" ? 0 : result;
			},
			set: function( tween ) {
	
				// Use step hook for back compat.
				// Use cssHook if its there.
				// Use .style if available and use plain properties where available.
				if ( jQuery.fx.step[ tween.prop ] ) {
					jQuery.fx.step[ tween.prop ]( tween );
				} else if ( tween.elem.nodeType === 1 &&
					( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null ||
						jQuery.cssHooks[ tween.prop ] ) ) {
					jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
				} else {
					tween.elem[ tween.prop ] = tween.now;
				}
			}
		}
	};
	
	// Support: IE <=9 only
	// Panic based approach to setting things on disconnected nodes
	Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
		set: function( tween ) {
			if ( tween.elem.nodeType && tween.elem.parentNode ) {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	};
	
	jQuery.easing = {
		linear: function( p ) {
			return p;
		},
		swing: function( p ) {
			return 0.5 - Math.cos( p * Math.PI ) / 2;
		},
		_default: "swing"
	};
	
	jQuery.fx = Tween.prototype.init;
	
	// Back compat <1.8 extension point
	jQuery.fx.step = {};
	
	
	
	
	var
		fxNow, timerId,
		rfxtypes = /^(?:toggle|show|hide)$/,
		rrun = /queueHooks$/;
	
	function raf() {
		if ( timerId ) {
			window.requestAnimationFrame( raf );
			jQuery.fx.tick();
		}
	}
	
	// Animations created synchronously will run synchronously
	function createFxNow() {
		window.setTimeout( function() {
			fxNow = undefined;
		} );
		return ( fxNow = jQuery.now() );
	}
	
	// Generate parameters to create a standard animation
	function genFx( type, includeWidth ) {
		var which,
			i = 0,
			attrs = { height: type };
	
		// If we include width, step value is 1 to do all cssExpand values,
		// otherwise step value is 2 to skip over Left and Right
		includeWidth = includeWidth ? 1 : 0;
		for ( ; i < 4; i += 2 - includeWidth ) {
			which = cssExpand[ i ];
			attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
		}
	
		if ( includeWidth ) {
			attrs.opacity = attrs.width = type;
		}
	
		return attrs;
	}
	
	function createTween( value, prop, animation ) {
		var tween,
			collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
			index = 0,
			length = collection.length;
		for ( ; index < length; index++ ) {
			if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {
	
				// We're done with this property
				return tween;
			}
		}
	}
	
	function defaultPrefilter( elem, props, opts ) {
		var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
			isBox = "width" in props || "height" in props,
			anim = this,
			orig = {},
			style = elem.style,
			hidden = elem.nodeType && isHiddenWithinTree( elem ),
			dataShow = dataPriv.get( elem, "fxshow" );
	
		// Queue-skipping animations hijack the fx hooks
		if ( !opts.queue ) {
			hooks = jQuery._queueHooks( elem, "fx" );
			if ( hooks.unqueued == null ) {
				hooks.unqueued = 0;
				oldfire = hooks.empty.fire;
				hooks.empty.fire = function() {
					if ( !hooks.unqueued ) {
						oldfire();
					}
				};
			}
			hooks.unqueued++;
	
			anim.always( function() {
	
				// Ensure the complete handler is called before this completes
				anim.always( function() {
					hooks.unqueued--;
					if ( !jQuery.queue( elem, "fx" ).length ) {
						hooks.empty.fire();
					}
				} );
			} );
		}
	
		// Detect show/hide animations
		for ( prop in props ) {
			value = props[ prop ];
			if ( rfxtypes.test( value ) ) {
				delete props[ prop ];
				toggle = toggle || value === "toggle";
				if ( value === ( hidden ? "hide" : "show" ) ) {
	
					// Pretend to be hidden if this is a "show" and
					// there is still data from a stopped show/hide
					if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
						hidden = true;
	
					// Ignore all other no-op show/hide data
					} else {
						continue;
					}
				}
				orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
			}
		}
	
		// Bail out if this is a no-op like .hide().hide()
		propTween = !jQuery.isEmptyObject( props );
		if ( !propTween && jQuery.isEmptyObject( orig ) ) {
			return;
		}
	
		// Restrict "overflow" and "display" styles during box animations
		if ( isBox && elem.nodeType === 1 ) {
	
			// Support: IE <=9 - 11, Edge 12 - 13
			// Record all 3 overflow attributes because IE does not infer the shorthand
			// from identically-valued overflowX and overflowY
			opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];
	
			// Identify a display type, preferring old show/hide data over the CSS cascade
			restoreDisplay = dataShow && dataShow.display;
			if ( restoreDisplay == null ) {
				restoreDisplay = dataPriv.get( elem, "display" );
			}
			display = jQuery.css( elem, "display" );
			if ( display === "none" ) {
				if ( restoreDisplay ) {
					display = restoreDisplay;
				} else {
	
					// Get nonempty value(s) by temporarily forcing visibility
					showHide( [ elem ], true );
					restoreDisplay = elem.style.display || restoreDisplay;
					display = jQuery.css( elem, "display" );
					showHide( [ elem ] );
				}
			}
	
			// Animate inline elements as inline-block
			if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
				if ( jQuery.css( elem, "float" ) === "none" ) {
	
					// Restore the original display value at the end of pure show/hide animations
					if ( !propTween ) {
						anim.done( function() {
							style.display = restoreDisplay;
						} );
						if ( restoreDisplay == null ) {
							display = style.display;
							restoreDisplay = display === "none" ? "" : display;
						}
					}
					style.display = "inline-block";
				}
			}
		}
	
		if ( opts.overflow ) {
			style.overflow = "hidden";
			anim.always( function() {
				style.overflow = opts.overflow[ 0 ];
				style.overflowX = opts.overflow[ 1 ];
				style.overflowY = opts.overflow[ 2 ];
			} );
		}
	
		// Implement show/hide animations
		propTween = false;
		for ( prop in orig ) {
	
			// General show/hide setup for this element animation
			if ( !propTween ) {
				if ( dataShow ) {
					if ( "hidden" in dataShow ) {
						hidden = dataShow.hidden;
					}
				} else {
					dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
				}
	
				// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
				if ( toggle ) {
					dataShow.hidden = !hidden;
				}
	
				// Show elements before animating them
				if ( hidden ) {
					showHide( [ elem ], true );
				}
	
				/* eslint-disable no-loop-func */
	
				anim.done( function() {
	
				/* eslint-enable no-loop-func */
	
					// The final step of a "hide" animation is actually hiding the element
					if ( !hidden ) {
						showHide( [ elem ] );
					}
					dataPriv.remove( elem, "fxshow" );
					for ( prop in orig ) {
						jQuery.style( elem, prop, orig[ prop ] );
					}
				} );
			}
	
			// Per-property setup
			propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
			if ( !( prop in dataShow ) ) {
				dataShow[ prop ] = propTween.start;
				if ( hidden ) {
					propTween.end = propTween.start;
					propTween.start = 0;
				}
			}
		}
	}
	
	function propFilter( props, specialEasing ) {
		var index, name, easing, value, hooks;
	
		// camelCase, specialEasing and expand cssHook pass
		for ( index in props ) {
			name = jQuery.camelCase( index );
			easing = specialEasing[ name ];
			value = props[ index ];
			if ( jQuery.isArray( value ) ) {
				easing = value[ 1 ];
				value = props[ index ] = value[ 0 ];
			}
	
			if ( index !== name ) {
				props[ name ] = value;
				delete props[ index ];
			}
	
			hooks = jQuery.cssHooks[ name ];
			if ( hooks && "expand" in hooks ) {
				value = hooks.expand( value );
				delete props[ name ];
	
				// Not quite $.extend, this won't overwrite existing keys.
				// Reusing 'index' because we have the correct "name"
				for ( index in value ) {
					if ( !( index in props ) ) {
						props[ index ] = value[ index ];
						specialEasing[ index ] = easing;
					}
				}
			} else {
				specialEasing[ name ] = easing;
			}
		}
	}
	
	function Animation( elem, properties, options ) {
		var result,
			stopped,
			index = 0,
			length = Animation.prefilters.length,
			deferred = jQuery.Deferred().always( function() {
	
				// Don't match elem in the :animated selector
				delete tick.elem;
			} ),
			tick = function() {
				if ( stopped ) {
					return false;
				}
				var currentTime = fxNow || createFxNow(),
					remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),
	
					// Support: Android 2.3 only
					// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
					temp = remaining / animation.duration || 0,
					percent = 1 - temp,
					index = 0,
					length = animation.tweens.length;
	
				for ( ; index < length; index++ ) {
					animation.tweens[ index ].run( percent );
				}
	
				deferred.notifyWith( elem, [ animation, percent, remaining ] );
	
				if ( percent < 1 && length ) {
					return remaining;
				} else {
					deferred.resolveWith( elem, [ animation ] );
					return false;
				}
			},
			animation = deferred.promise( {
				elem: elem,
				props: jQuery.extend( {}, properties ),
				opts: jQuery.extend( true, {
					specialEasing: {},
					easing: jQuery.easing._default
				}, options ),
				originalProperties: properties,
				originalOptions: options,
				startTime: fxNow || createFxNow(),
				duration: options.duration,
				tweens: [],
				createTween: function( prop, end ) {
					var tween = jQuery.Tween( elem, animation.opts, prop, end,
							animation.opts.specialEasing[ prop ] || animation.opts.easing );
					animation.tweens.push( tween );
					return tween;
				},
				stop: function( gotoEnd ) {
					var index = 0,
	
						// If we are going to the end, we want to run all the tweens
						// otherwise we skip this part
						length = gotoEnd ? animation.tweens.length : 0;
					if ( stopped ) {
						return this;
					}
					stopped = true;
					for ( ; index < length; index++ ) {
						animation.tweens[ index ].run( 1 );
					}
	
					// Resolve when we played the last frame; otherwise, reject
					if ( gotoEnd ) {
						deferred.notifyWith( elem, [ animation, 1, 0 ] );
						deferred.resolveWith( elem, [ animation, gotoEnd ] );
					} else {
						deferred.rejectWith( elem, [ animation, gotoEnd ] );
					}
					return this;
				}
			} ),
			props = animation.props;
	
		propFilter( props, animation.opts.specialEasing );
	
		for ( ; index < length; index++ ) {
			result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
			if ( result ) {
				if ( jQuery.isFunction( result.stop ) ) {
					jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
						jQuery.proxy( result.stop, result );
				}
				return result;
			}
		}
	
		jQuery.map( props, createTween, animation );
	
		if ( jQuery.isFunction( animation.opts.start ) ) {
			animation.opts.start.call( elem, animation );
		}
	
		jQuery.fx.timer(
			jQuery.extend( tick, {
				elem: elem,
				anim: animation,
				queue: animation.opts.queue
			} )
		);
	
		// attach callbacks from options
		return animation.progress( animation.opts.progress )
			.done( animation.opts.done, animation.opts.complete )
			.fail( animation.opts.fail )
			.always( animation.opts.always );
	}
	
	jQuery.Animation = jQuery.extend( Animation, {
	
		tweeners: {
			"*": [ function( prop, value ) {
				var tween = this.createTween( prop, value );
				adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
				return tween;
			} ]
		},
	
		tweener: function( props, callback ) {
			if ( jQuery.isFunction( props ) ) {
				callback = props;
				props = [ "*" ];
			} else {
				props = props.match( rnotwhite );
			}
	
			var prop,
				index = 0,
				length = props.length;
	
			for ( ; index < length; index++ ) {
				prop = props[ index ];
				Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
				Animation.tweeners[ prop ].unshift( callback );
			}
		},
	
		prefilters: [ defaultPrefilter ],
	
		prefilter: function( callback, prepend ) {
			if ( prepend ) {
				Animation.prefilters.unshift( callback );
			} else {
				Animation.prefilters.push( callback );
			}
		}
	} );
	
	jQuery.speed = function( speed, easing, fn ) {
		var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
			complete: fn || !fn && easing ||
				jQuery.isFunction( speed ) && speed,
			duration: speed,
			easing: fn && easing || easing && !jQuery.isFunction( easing ) && easing
		};
	
		// Go to the end state if fx are off or if document is hidden
		if ( jQuery.fx.off || document.hidden ) {
			opt.duration = 0;
	
		} else {
			opt.duration = typeof opt.duration === "number" ?
				opt.duration : opt.duration in jQuery.fx.speeds ?
					jQuery.fx.speeds[ opt.duration ] : jQuery.fx.speeds._default;
		}
	
		// Normalize opt.queue - true/undefined/null -> "fx"
		if ( opt.queue == null || opt.queue === true ) {
			opt.queue = "fx";
		}
	
		// Queueing
		opt.old = opt.complete;
	
		opt.complete = function() {
			if ( jQuery.isFunction( opt.old ) ) {
				opt.old.call( this );
			}
	
			if ( opt.queue ) {
				jQuery.dequeue( this, opt.queue );
			}
		};
	
		return opt;
	};
	
	jQuery.fn.extend( {
		fadeTo: function( speed, to, easing, callback ) {
	
			// Show any hidden elements after setting opacity to 0
			return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()
	
				// Animate to the value specified
				.end().animate( { opacity: to }, speed, easing, callback );
		},
		animate: function( prop, speed, easing, callback ) {
			var empty = jQuery.isEmptyObject( prop ),
				optall = jQuery.speed( speed, easing, callback ),
				doAnimation = function() {
	
					// Operate on a copy of prop so per-property easing won't be lost
					var anim = Animation( this, jQuery.extend( {}, prop ), optall );
	
					// Empty animations, or finishing resolves immediately
					if ( empty || dataPriv.get( this, "finish" ) ) {
						anim.stop( true );
					}
				};
				doAnimation.finish = doAnimation;
	
			return empty || optall.queue === false ?
				this.each( doAnimation ) :
				this.queue( optall.queue, doAnimation );
		},
		stop: function( type, clearQueue, gotoEnd ) {
			var stopQueue = function( hooks ) {
				var stop = hooks.stop;
				delete hooks.stop;
				stop( gotoEnd );
			};
	
			if ( typeof type !== "string" ) {
				gotoEnd = clearQueue;
				clearQueue = type;
				type = undefined;
			}
			if ( clearQueue && type !== false ) {
				this.queue( type || "fx", [] );
			}
	
			return this.each( function() {
				var dequeue = true,
					index = type != null && type + "queueHooks",
					timers = jQuery.timers,
					data = dataPriv.get( this );
	
				if ( index ) {
					if ( data[ index ] && data[ index ].stop ) {
						stopQueue( data[ index ] );
					}
				} else {
					for ( index in data ) {
						if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
							stopQueue( data[ index ] );
						}
					}
				}
	
				for ( index = timers.length; index--; ) {
					if ( timers[ index ].elem === this &&
						( type == null || timers[ index ].queue === type ) ) {
	
						timers[ index ].anim.stop( gotoEnd );
						dequeue = false;
						timers.splice( index, 1 );
					}
				}
	
				// Start the next in the queue if the last step wasn't forced.
				// Timers currently will call their complete callbacks, which
				// will dequeue but only if they were gotoEnd.
				if ( dequeue || !gotoEnd ) {
					jQuery.dequeue( this, type );
				}
			} );
		},
		finish: function( type ) {
			if ( type !== false ) {
				type = type || "fx";
			}
			return this.each( function() {
				var index,
					data = dataPriv.get( this ),
					queue = data[ type + "queue" ],
					hooks = data[ type + "queueHooks" ],
					timers = jQuery.timers,
					length = queue ? queue.length : 0;
	
				// Enable finishing flag on private data
				data.finish = true;
	
				// Empty the queue first
				jQuery.queue( this, type, [] );
	
				if ( hooks && hooks.stop ) {
					hooks.stop.call( this, true );
				}
	
				// Look for any active animations, and finish them
				for ( index = timers.length; index--; ) {
					if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
						timers[ index ].anim.stop( true );
						timers.splice( index, 1 );
					}
				}
	
				// Look for any animations in the old queue and finish them
				for ( index = 0; index < length; index++ ) {
					if ( queue[ index ] && queue[ index ].finish ) {
						queue[ index ].finish.call( this );
					}
				}
	
				// Turn off finishing flag
				delete data.finish;
			} );
		}
	} );
	
	jQuery.each( [ "toggle", "show", "hide" ], function( i, name ) {
		var cssFn = jQuery.fn[ name ];
		jQuery.fn[ name ] = function( speed, easing, callback ) {
			return speed == null || typeof speed === "boolean" ?
				cssFn.apply( this, arguments ) :
				this.animate( genFx( name, true ), speed, easing, callback );
		};
	} );
	
	// Generate shortcuts for custom animations
	jQuery.each( {
		slideDown: genFx( "show" ),
		slideUp: genFx( "hide" ),
		slideToggle: genFx( "toggle" ),
		fadeIn: { opacity: "show" },
		fadeOut: { opacity: "hide" },
		fadeToggle: { opacity: "toggle" }
	}, function( name, props ) {
		jQuery.fn[ name ] = function( speed, easing, callback ) {
			return this.animate( props, speed, easing, callback );
		};
	} );
	
	jQuery.timers = [];
	jQuery.fx.tick = function() {
		var timer,
			i = 0,
			timers = jQuery.timers;
	
		fxNow = jQuery.now();
	
		for ( ; i < timers.length; i++ ) {
			timer = timers[ i ];
	
			// Checks the timer has not already been removed
			if ( !timer() && timers[ i ] === timer ) {
				timers.splice( i--, 1 );
			}
		}
	
		if ( !timers.length ) {
			jQuery.fx.stop();
		}
		fxNow = undefined;
	};
	
	jQuery.fx.timer = function( timer ) {
		jQuery.timers.push( timer );
		if ( timer() ) {
			jQuery.fx.start();
		} else {
			jQuery.timers.pop();
		}
	};
	
	jQuery.fx.interval = 13;
	jQuery.fx.start = function() {
		if ( !timerId ) {
			timerId = window.requestAnimationFrame ?
				window.requestAnimationFrame( raf ) :
				window.setInterval( jQuery.fx.tick, jQuery.fx.interval );
		}
	};
	
	jQuery.fx.stop = function() {
		if ( window.cancelAnimationFrame ) {
			window.cancelAnimationFrame( timerId );
		} else {
			window.clearInterval( timerId );
		}
	
		timerId = null;
	};
	
	jQuery.fx.speeds = {
		slow: 600,
		fast: 200,
	
		// Default speed
		_default: 400
	};
	
	
	// Based off of the plugin by Clint Helfers, with permission.
	// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
	jQuery.fn.delay = function( time, type ) {
		time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
		type = type || "fx";
	
		return this.queue( type, function( next, hooks ) {
			var timeout = window.setTimeout( next, time );
			hooks.stop = function() {
				window.clearTimeout( timeout );
			};
		} );
	};
	
	
	( function() {
		var input = document.createElement( "input" ),
			select = document.createElement( "select" ),
			opt = select.appendChild( document.createElement( "option" ) );
	
		input.type = "checkbox";
	
		// Support: Android <=4.3 only
		// Default value for a checkbox should be "on"
		support.checkOn = input.value !== "";
	
		// Support: IE <=11 only
		// Must access selectedIndex to make default options select
		support.optSelected = opt.selected;
	
		// Support: IE <=11 only
		// An input loses its value after becoming a radio
		input = document.createElement( "input" );
		input.value = "t";
		input.type = "radio";
		support.radioValue = input.value === "t";
	} )();
	
	
	var boolHook,
		attrHandle = jQuery.expr.attrHandle;
	
	jQuery.fn.extend( {
		attr: function( name, value ) {
			return access( this, jQuery.attr, name, value, arguments.length > 1 );
		},
	
		removeAttr: function( name ) {
			return this.each( function() {
				jQuery.removeAttr( this, name );
			} );
		}
	} );
	
	jQuery.extend( {
		attr: function( elem, name, value ) {
			var ret, hooks,
				nType = elem.nodeType;
	
			// Don't get/set attributes on text, comment and attribute nodes
			if ( nType === 3 || nType === 8 || nType === 2 ) {
				return;
			}
	
			// Fallback to prop when attributes are not supported
			if ( typeof elem.getAttribute === "undefined" ) {
				return jQuery.prop( elem, name, value );
			}
	
			// Attribute hooks are determined by the lowercase version
			// Grab necessary hook if one is defined
			if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
				hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
					( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
			}
	
			if ( value !== undefined ) {
				if ( value === null ) {
					jQuery.removeAttr( elem, name );
					return;
				}
	
				if ( hooks && "set" in hooks &&
					( ret = hooks.set( elem, value, name ) ) !== undefined ) {
					return ret;
				}
	
				elem.setAttribute( name, value + "" );
				return value;
			}
	
			if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
				return ret;
			}
	
			ret = jQuery.find.attr( elem, name );
	
			// Non-existent attributes return null, we normalize to undefined
			return ret == null ? undefined : ret;
		},
	
		attrHooks: {
			type: {
				set: function( elem, value ) {
					if ( !support.radioValue && value === "radio" &&
						jQuery.nodeName( elem, "input" ) ) {
						var val = elem.value;
						elem.setAttribute( "type", value );
						if ( val ) {
							elem.value = val;
						}
						return value;
					}
				}
			}
		},
	
		removeAttr: function( elem, value ) {
			var name,
				i = 0,
				attrNames = value && value.match( rnotwhite );
	
			if ( attrNames && elem.nodeType === 1 ) {
				while ( ( name = attrNames[ i++ ] ) ) {
					elem.removeAttribute( name );
				}
			}
		}
	} );
	
	// Hooks for boolean attributes
	boolHook = {
		set: function( elem, value, name ) {
			if ( value === false ) {
	
				// Remove boolean attributes when set to false
				jQuery.removeAttr( elem, name );
			} else {
				elem.setAttribute( name, name );
			}
			return name;
		}
	};
	
	jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
		var getter = attrHandle[ name ] || jQuery.find.attr;
	
		attrHandle[ name ] = function( elem, name, isXML ) {
			var ret, handle,
				lowercaseName = name.toLowerCase();
	
			if ( !isXML ) {
	
				// Avoid an infinite loop by temporarily removing this function from the getter
				handle = attrHandle[ lowercaseName ];
				attrHandle[ lowercaseName ] = ret;
				ret = getter( elem, name, isXML ) != null ?
					lowercaseName :
					null;
				attrHandle[ lowercaseName ] = handle;
			}
			return ret;
		};
	} );
	
	
	
	
	var rfocusable = /^(?:input|select|textarea|button)$/i,
		rclickable = /^(?:a|area)$/i;
	
	jQuery.fn.extend( {
		prop: function( name, value ) {
			return access( this, jQuery.prop, name, value, arguments.length > 1 );
		},
	
		removeProp: function( name ) {
			return this.each( function() {
				delete this[ jQuery.propFix[ name ] || name ];
			} );
		}
	} );
	
	jQuery.extend( {
		prop: function( elem, name, value ) {
			var ret, hooks,
				nType = elem.nodeType;
	
			// Don't get/set properties on text, comment and attribute nodes
			if ( nType === 3 || nType === 8 || nType === 2 ) {
				return;
			}
	
			if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
	
				// Fix name and attach hooks
				name = jQuery.propFix[ name ] || name;
				hooks = jQuery.propHooks[ name ];
			}
	
			if ( value !== undefined ) {
				if ( hooks && "set" in hooks &&
					( ret = hooks.set( elem, value, name ) ) !== undefined ) {
					return ret;
				}
	
				return ( elem[ name ] = value );
			}
	
			if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
				return ret;
			}
	
			return elem[ name ];
		},
	
		propHooks: {
			tabIndex: {
				get: function( elem ) {
	
					// Support: IE <=9 - 11 only
					// elem.tabIndex doesn't always return the
					// correct value when it hasn't been explicitly set
					// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
					// Use proper attribute retrieval(#12072)
					var tabindex = jQuery.find.attr( elem, "tabindex" );
	
					return tabindex ?
						parseInt( tabindex, 10 ) :
						rfocusable.test( elem.nodeName ) ||
							rclickable.test( elem.nodeName ) && elem.href ?
								0 :
								-1;
				}
			}
		},
	
		propFix: {
			"for": "htmlFor",
			"class": "className"
		}
	} );
	
	// Support: IE <=11 only
	// Accessing the selectedIndex property
	// forces the browser to respect setting selected
	// on the option
	// The getter ensures a default option is selected
	// when in an optgroup
	if ( !support.optSelected ) {
		jQuery.propHooks.selected = {
			get: function( elem ) {
				var parent = elem.parentNode;
				if ( parent && parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
				return null;
			},
			set: function( elem ) {
				var parent = elem.parentNode;
				if ( parent ) {
					parent.selectedIndex;
	
					if ( parent.parentNode ) {
						parent.parentNode.selectedIndex;
					}
				}
			}
		};
	}
	
	jQuery.each( [
		"tabIndex",
		"readOnly",
		"maxLength",
		"cellSpacing",
		"cellPadding",
		"rowSpan",
		"colSpan",
		"useMap",
		"frameBorder",
		"contentEditable"
	], function() {
		jQuery.propFix[ this.toLowerCase() ] = this;
	} );
	
	
	
	
	var rclass = /[\t\r\n\f]/g;
	
	function getClass( elem ) {
		return elem.getAttribute && elem.getAttribute( "class" ) || "";
	}
	
	jQuery.fn.extend( {
		addClass: function( value ) {
			var classes, elem, cur, curValue, clazz, j, finalValue,
				i = 0;
	
			if ( jQuery.isFunction( value ) ) {
				return this.each( function( j ) {
					jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
				} );
			}
	
			if ( typeof value === "string" && value ) {
				classes = value.match( rnotwhite ) || [];
	
				while ( ( elem = this[ i++ ] ) ) {
					curValue = getClass( elem );
					cur = elem.nodeType === 1 &&
						( " " + curValue + " " ).replace( rclass, " " );
	
					if ( cur ) {
						j = 0;
						while ( ( clazz = classes[ j++ ] ) ) {
							if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
								cur += clazz + " ";
							}
						}
	
						// Only assign if different to avoid unneeded rendering.
						finalValue = jQuery.trim( cur );
						if ( curValue !== finalValue ) {
							elem.setAttribute( "class", finalValue );
						}
					}
				}
			}
	
			return this;
		},
	
		removeClass: function( value ) {
			var classes, elem, cur, curValue, clazz, j, finalValue,
				i = 0;
	
			if ( jQuery.isFunction( value ) ) {
				return this.each( function( j ) {
					jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
				} );
			}
	
			if ( !arguments.length ) {
				return this.attr( "class", "" );
			}
	
			if ( typeof value === "string" && value ) {
				classes = value.match( rnotwhite ) || [];
	
				while ( ( elem = this[ i++ ] ) ) {
					curValue = getClass( elem );
	
					// This expression is here for better compressibility (see addClass)
					cur = elem.nodeType === 1 &&
						( " " + curValue + " " ).replace( rclass, " " );
	
					if ( cur ) {
						j = 0;
						while ( ( clazz = classes[ j++ ] ) ) {
	
							// Remove *all* instances
							while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
								cur = cur.replace( " " + clazz + " ", " " );
							}
						}
	
						// Only assign if different to avoid unneeded rendering.
						finalValue = jQuery.trim( cur );
						if ( curValue !== finalValue ) {
							elem.setAttribute( "class", finalValue );
						}
					}
				}
			}
	
			return this;
		},
	
		toggleClass: function( value, stateVal ) {
			var type = typeof value;
	
			if ( typeof stateVal === "boolean" && type === "string" ) {
				return stateVal ? this.addClass( value ) : this.removeClass( value );
			}
	
			if ( jQuery.isFunction( value ) ) {
				return this.each( function( i ) {
					jQuery( this ).toggleClass(
						value.call( this, i, getClass( this ), stateVal ),
						stateVal
					);
				} );
			}
	
			return this.each( function() {
				var className, i, self, classNames;
	
				if ( type === "string" ) {
	
					// Toggle individual class names
					i = 0;
					self = jQuery( this );
					classNames = value.match( rnotwhite ) || [];
	
					while ( ( className = classNames[ i++ ] ) ) {
	
						// Check each className given, space separated list
						if ( self.hasClass( className ) ) {
							self.removeClass( className );
						} else {
							self.addClass( className );
						}
					}
	
				// Toggle whole class name
				} else if ( value === undefined || type === "boolean" ) {
					className = getClass( this );
					if ( className ) {
	
						// Store className if set
						dataPriv.set( this, "__className__", className );
					}
	
					// If the element has a class name or if we're passed `false`,
					// then remove the whole classname (if there was one, the above saved it).
					// Otherwise bring back whatever was previously saved (if anything),
					// falling back to the empty string if nothing was stored.
					if ( this.setAttribute ) {
						this.setAttribute( "class",
							className || value === false ?
							"" :
							dataPriv.get( this, "__className__" ) || ""
						);
					}
				}
			} );
		},
	
		hasClass: function( selector ) {
			var className, elem,
				i = 0;
	
			className = " " + selector + " ";
			while ( ( elem = this[ i++ ] ) ) {
				if ( elem.nodeType === 1 &&
					( " " + getClass( elem ) + " " ).replace( rclass, " " )
						.indexOf( className ) > -1
				) {
					return true;
				}
			}
	
			return false;
		}
	} );
	
	
	
	
	var rreturn = /\r/g,
		rspaces = /[\x20\t\r\n\f]+/g;
	
	jQuery.fn.extend( {
		val: function( value ) {
			var hooks, ret, isFunction,
				elem = this[ 0 ];
	
			if ( !arguments.length ) {
				if ( elem ) {
					hooks = jQuery.valHooks[ elem.type ] ||
						jQuery.valHooks[ elem.nodeName.toLowerCase() ];
	
					if ( hooks &&
						"get" in hooks &&
						( ret = hooks.get( elem, "value" ) ) !== undefined
					) {
						return ret;
					}
	
					ret = elem.value;
	
					return typeof ret === "string" ?
	
						// Handle most common string cases
						ret.replace( rreturn, "" ) :
	
						// Handle cases where value is null/undef or number
						ret == null ? "" : ret;
				}
	
				return;
			}
	
			isFunction = jQuery.isFunction( value );
	
			return this.each( function( i ) {
				var val;
	
				if ( this.nodeType !== 1 ) {
					return;
				}
	
				if ( isFunction ) {
					val = value.call( this, i, jQuery( this ).val() );
				} else {
					val = value;
				}
	
				// Treat null/undefined as ""; convert numbers to string
				if ( val == null ) {
					val = "";
	
				} else if ( typeof val === "number" ) {
					val += "";
	
				} else if ( jQuery.isArray( val ) ) {
					val = jQuery.map( val, function( value ) {
						return value == null ? "" : value + "";
					} );
				}
	
				hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];
	
				// If set returns undefined, fall back to normal setting
				if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
					this.value = val;
				}
			} );
		}
	} );
	
	jQuery.extend( {
		valHooks: {
			option: {
				get: function( elem ) {
	
					var val = jQuery.find.attr( elem, "value" );
					return val != null ?
						val :
	
						// Support: IE <=10 - 11 only
						// option.text throws exceptions (#14686, #14858)
						// Strip and collapse whitespace
						// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
						jQuery.trim( jQuery.text( elem ) ).replace( rspaces, " " );
				}
			},
			select: {
				get: function( elem ) {
					var value, option,
						options = elem.options,
						index = elem.selectedIndex,
						one = elem.type === "select-one",
						values = one ? null : [],
						max = one ? index + 1 : options.length,
						i = index < 0 ?
							max :
							one ? index : 0;
	
					// Loop through all the selected options
					for ( ; i < max; i++ ) {
						option = options[ i ];
	
						// Support: IE <=9 only
						// IE8-9 doesn't update selected after form reset (#2551)
						if ( ( option.selected || i === index ) &&
	
								// Don't return options that are disabled or in a disabled optgroup
								!option.disabled &&
								( !option.parentNode.disabled ||
									!jQuery.nodeName( option.parentNode, "optgroup" ) ) ) {
	
							// Get the specific value for the option
							value = jQuery( option ).val();
	
							// We don't need an array for one selects
							if ( one ) {
								return value;
							}
	
							// Multi-Selects return an array
							values.push( value );
						}
					}
	
					return values;
				},
	
				set: function( elem, value ) {
					var optionSet, option,
						options = elem.options,
						values = jQuery.makeArray( value ),
						i = options.length;
	
					while ( i-- ) {
						option = options[ i ];
	
						/* eslint-disable no-cond-assign */
	
						if ( option.selected =
							jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
						) {
							optionSet = true;
						}
	
						/* eslint-enable no-cond-assign */
					}
	
					// Force browsers to behave consistently when non-matching value is set
					if ( !optionSet ) {
						elem.selectedIndex = -1;
					}
					return values;
				}
			}
		}
	} );
	
	// Radios and checkboxes getter/setter
	jQuery.each( [ "radio", "checkbox" ], function() {
		jQuery.valHooks[ this ] = {
			set: function( elem, value ) {
				if ( jQuery.isArray( value ) ) {
					return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
				}
			}
		};
		if ( !support.checkOn ) {
			jQuery.valHooks[ this ].get = function( elem ) {
				return elem.getAttribute( "value" ) === null ? "on" : elem.value;
			};
		}
	} );
	
	
	
	
	// Return jQuery for attributes-only inclusion
	
	
	var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/;
	
	jQuery.extend( jQuery.event, {
	
		trigger: function( event, data, elem, onlyHandlers ) {
	
			var i, cur, tmp, bubbleType, ontype, handle, special,
				eventPath = [ elem || document ],
				type = hasOwn.call( event, "type" ) ? event.type : event,
				namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];
	
			cur = tmp = elem = elem || document;
	
			// Don't do events on text and comment nodes
			if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
				return;
			}
	
			// focus/blur morphs to focusin/out; ensure we're not firing them right now
			if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
				return;
			}
	
			if ( type.indexOf( "." ) > -1 ) {
	
				// Namespaced trigger; create a regexp to match event type in handle()
				namespaces = type.split( "." );
				type = namespaces.shift();
				namespaces.sort();
			}
			ontype = type.indexOf( ":" ) < 0 && "on" + type;
	
			// Caller can pass in a jQuery.Event object, Object, or just an event type string
			event = event[ jQuery.expando ] ?
				event :
				new jQuery.Event( type, typeof event === "object" && event );
	
			// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
			event.isTrigger = onlyHandlers ? 2 : 3;
			event.namespace = namespaces.join( "." );
			event.rnamespace = event.namespace ?
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
				null;
	
			// Clean up the event in case it is being reused
			event.result = undefined;
			if ( !event.target ) {
				event.target = elem;
			}
	
			// Clone any incoming data and prepend the event, creating the handler arg list
			data = data == null ?
				[ event ] :
				jQuery.makeArray( data, [ event ] );
	
			// Allow special events to draw outside the lines
			special = jQuery.event.special[ type ] || {};
			if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
				return;
			}
	
			// Determine event propagation path in advance, per W3C events spec (#9951)
			// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
			if ( !onlyHandlers && !special.noBubble && !jQuery.isWindow( elem ) ) {
	
				bubbleType = special.delegateType || type;
				if ( !rfocusMorph.test( bubbleType + type ) ) {
					cur = cur.parentNode;
				}
				for ( ; cur; cur = cur.parentNode ) {
					eventPath.push( cur );
					tmp = cur;
				}
	
				// Only add window if we got to document (e.g., not plain obj or detached DOM)
				if ( tmp === ( elem.ownerDocument || document ) ) {
					eventPath.push( tmp.defaultView || tmp.parentWindow || window );
				}
			}
	
			// Fire handlers on the event path
			i = 0;
			while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {
	
				event.type = i > 1 ?
					bubbleType :
					special.bindType || type;
	
				// jQuery handler
				handle = ( dataPriv.get( cur, "events" ) || {} )[ event.type ] &&
					dataPriv.get( cur, "handle" );
				if ( handle ) {
					handle.apply( cur, data );
				}
	
				// Native handler
				handle = ontype && cur[ ontype ];
				if ( handle && handle.apply && acceptData( cur ) ) {
					event.result = handle.apply( cur, data );
					if ( event.result === false ) {
						event.preventDefault();
					}
				}
			}
			event.type = type;
	
			// If nobody prevented the default action, do it now
			if ( !onlyHandlers && !event.isDefaultPrevented() ) {
	
				if ( ( !special._default ||
					special._default.apply( eventPath.pop(), data ) === false ) &&
					acceptData( elem ) ) {
	
					// Call a native DOM method on the target with the same name as the event.
					// Don't do default actions on window, that's where global variables be (#6170)
					if ( ontype && jQuery.isFunction( elem[ type ] ) && !jQuery.isWindow( elem ) ) {
	
						// Don't re-trigger an onFOO event when we call its FOO() method
						tmp = elem[ ontype ];
	
						if ( tmp ) {
							elem[ ontype ] = null;
						}
	
						// Prevent re-triggering of the same event, since we already bubbled it above
						jQuery.event.triggered = type;
						elem[ type ]();
						jQuery.event.triggered = undefined;
	
						if ( tmp ) {
							elem[ ontype ] = tmp;
						}
					}
				}
			}
	
			return event.result;
		},
	
		// Piggyback on a donor event to simulate a different one
		// Used only for `focus(in | out)` events
		simulate: function( type, elem, event ) {
			var e = jQuery.extend(
				new jQuery.Event(),
				event,
				{
					type: type,
					isSimulated: true
				}
			);
	
			jQuery.event.trigger( e, null, elem );
		}
	
	} );
	
	jQuery.fn.extend( {
	
		trigger: function( type, data ) {
			return this.each( function() {
				jQuery.event.trigger( type, data, this );
			} );
		},
		triggerHandler: function( type, data ) {
			var elem = this[ 0 ];
			if ( elem ) {
				return jQuery.event.trigger( type, data, elem, true );
			}
		}
	} );
	
	
	jQuery.each( ( "blur focus focusin focusout resize scroll click dblclick " +
		"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
		"change select submit keydown keypress keyup contextmenu" ).split( " " ),
		function( i, name ) {
	
		// Handle event binding
		jQuery.fn[ name ] = function( data, fn ) {
			return arguments.length > 0 ?
				this.on( name, null, data, fn ) :
				this.trigger( name );
		};
	} );
	
	jQuery.fn.extend( {
		hover: function( fnOver, fnOut ) {
			return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
		}
	} );
	
	
	
	
	support.focusin = "onfocusin" in window;
	
	
	// Support: Firefox <=44
	// Firefox doesn't have focus(in | out) events
	// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
	//
	// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
	// focus(in | out) events fire after focus & blur events,
	// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
	// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
	if ( !support.focusin ) {
		jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {
	
			// Attach a single capturing handler on the document while someone wants focusin/focusout
			var handler = function( event ) {
				jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
			};
	
			jQuery.event.special[ fix ] = {
				setup: function() {
					var doc = this.ownerDocument || this,
						attaches = dataPriv.access( doc, fix );
	
					if ( !attaches ) {
						doc.addEventListener( orig, handler, true );
					}
					dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
				},
				teardown: function() {
					var doc = this.ownerDocument || this,
						attaches = dataPriv.access( doc, fix ) - 1;
	
					if ( !attaches ) {
						doc.removeEventListener( orig, handler, true );
						dataPriv.remove( doc, fix );
	
					} else {
						dataPriv.access( doc, fix, attaches );
					}
				}
			};
		} );
	}
	var location = window.location;
	
	var nonce = jQuery.now();
	
	var rquery = ( /\?/ );
	
	
	
	// Cross-browser xml parsing
	jQuery.parseXML = function( data ) {
		var xml;
		if ( !data || typeof data !== "string" ) {
			return null;
		}
	
		// Support: IE 9 - 11 only
		// IE throws on parseFromString with invalid input.
		try {
			xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
		} catch ( e ) {
			xml = undefined;
		}
	
		if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
			jQuery.error( "Invalid XML: " + data );
		}
		return xml;
	};
	
	
	var
		rbracket = /\[\]$/,
		rCRLF = /\r?\n/g,
		rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
		rsubmittable = /^(?:input|select|textarea|keygen)/i;
	
	function buildParams( prefix, obj, traditional, add ) {
		var name;
	
		if ( jQuery.isArray( obj ) ) {
	
			// Serialize array item.
			jQuery.each( obj, function( i, v ) {
				if ( traditional || rbracket.test( prefix ) ) {
	
					// Treat each array item as a scalar.
					add( prefix, v );
	
				} else {
	
					// Item is non-scalar (array or object), encode its numeric index.
					buildParams(
						prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
						v,
						traditional,
						add
					);
				}
			} );
	
		} else if ( !traditional && jQuery.type( obj ) === "object" ) {
	
			// Serialize object item.
			for ( name in obj ) {
				buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
			}
	
		} else {
	
			// Serialize scalar item.
			add( prefix, obj );
		}
	}
	
	// Serialize an array of form elements or a set of
	// key/values into a query string
	jQuery.param = function( a, traditional ) {
		var prefix,
			s = [],
			add = function( key, valueOrFunction ) {
	
				// If value is a function, invoke it and use its return value
				var value = jQuery.isFunction( valueOrFunction ) ?
					valueOrFunction() :
					valueOrFunction;
	
				s[ s.length ] = encodeURIComponent( key ) + "=" +
					encodeURIComponent( value == null ? "" : value );
			};
	
		// If an array was passed in, assume that it is an array of form elements.
		if ( jQuery.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {
	
			// Serialize the form elements
			jQuery.each( a, function() {
				add( this.name, this.value );
			} );
	
		} else {
	
			// If traditional, encode the "old" way (the way 1.3.2 or older
			// did it), otherwise encode params recursively.
			for ( prefix in a ) {
				buildParams( prefix, a[ prefix ], traditional, add );
			}
		}
	
		// Return the resulting serialization
		return s.join( "&" );
	};
	
	jQuery.fn.extend( {
		serialize: function() {
			return jQuery.param( this.serializeArray() );
		},
		serializeArray: function() {
			return this.map( function() {
	
				// Can add propHook for "elements" to filter or add form elements
				var elements = jQuery.prop( this, "elements" );
				return elements ? jQuery.makeArray( elements ) : this;
			} )
			.filter( function() {
				var type = this.type;
	
				// Use .is( ":disabled" ) so that fieldset[disabled] works
				return this.name && !jQuery( this ).is( ":disabled" ) &&
					rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
					( this.checked || !rcheckableType.test( type ) );
			} )
			.map( function( i, elem ) {
				var val = jQuery( this ).val();
	
				return val == null ?
					null :
					jQuery.isArray( val ) ?
						jQuery.map( val, function( val ) {
							return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
						} ) :
						{ name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
			} ).get();
		}
	} );
	
	
	var
		r20 = /%20/g,
		rhash = /#.*$/,
		rts = /([?&])_=[^&]*/,
		rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,
	
		// #7653, #8125, #8152: local protocol detection
		rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
		rnoContent = /^(?:GET|HEAD)$/,
		rprotocol = /^\/\//,
	
		/* Prefilters
		 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
		 * 2) These are called:
		 *    - BEFORE asking for a transport
		 *    - AFTER param serialization (s.data is a string if s.processData is true)
		 * 3) key is the dataType
		 * 4) the catchall symbol "*" can be used
		 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
		 */
		prefilters = {},
	
		/* Transports bindings
		 * 1) key is the dataType
		 * 2) the catchall symbol "*" can be used
		 * 3) selection will start with transport dataType and THEN go to "*" if needed
		 */
		transports = {},
	
		// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
		allTypes = "*/".concat( "*" ),
	
		// Anchor tag for parsing the document origin
		originAnchor = document.createElement( "a" );
		originAnchor.href = location.href;
	
	// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
	function addToPrefiltersOrTransports( structure ) {
	
		// dataTypeExpression is optional and defaults to "*"
		return function( dataTypeExpression, func ) {
	
			if ( typeof dataTypeExpression !== "string" ) {
				func = dataTypeExpression;
				dataTypeExpression = "*";
			}
	
			var dataType,
				i = 0,
				dataTypes = dataTypeExpression.toLowerCase().match( rnotwhite ) || [];
	
			if ( jQuery.isFunction( func ) ) {
	
				// For each dataType in the dataTypeExpression
				while ( ( dataType = dataTypes[ i++ ] ) ) {
	
					// Prepend if requested
					if ( dataType[ 0 ] === "+" ) {
						dataType = dataType.slice( 1 ) || "*";
						( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );
	
					// Otherwise append
					} else {
						( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
					}
				}
			}
		};
	}
	
	// Base inspection function for prefilters and transports
	function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {
	
		var inspected = {},
			seekingTransport = ( structure === transports );
	
		function inspect( dataType ) {
			var selected;
			inspected[ dataType ] = true;
			jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
				var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
				if ( typeof dataTypeOrTransport === "string" &&
					!seekingTransport && !inspected[ dataTypeOrTransport ] ) {
	
					options.dataTypes.unshift( dataTypeOrTransport );
					inspect( dataTypeOrTransport );
					return false;
				} else if ( seekingTransport ) {
					return !( selected = dataTypeOrTransport );
				}
			} );
			return selected;
		}
	
		return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
	}
	
	// A special extend for ajax options
	// that takes "flat" options (not to be deep extended)
	// Fixes #9887
	function ajaxExtend( target, src ) {
		var key, deep,
			flatOptions = jQuery.ajaxSettings.flatOptions || {};
	
		for ( key in src ) {
			if ( src[ key ] !== undefined ) {
				( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
			}
		}
		if ( deep ) {
			jQuery.extend( true, target, deep );
		}
	
		return target;
	}
	
	/* Handles responses to an ajax request:
	 * - finds the right dataType (mediates between content-type and expected dataType)
	 * - returns the corresponding response
	 */
	function ajaxHandleResponses( s, jqXHR, responses ) {
	
		var ct, type, finalDataType, firstDataType,
			contents = s.contents,
			dataTypes = s.dataTypes;
	
		// Remove auto dataType and get content-type in the process
		while ( dataTypes[ 0 ] === "*" ) {
			dataTypes.shift();
			if ( ct === undefined ) {
				ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
			}
		}
	
		// Check if we're dealing with a known content-type
		if ( ct ) {
			for ( type in contents ) {
				if ( contents[ type ] && contents[ type ].test( ct ) ) {
					dataTypes.unshift( type );
					break;
				}
			}
		}
	
		// Check to see if we have a response for the expected dataType
		if ( dataTypes[ 0 ] in responses ) {
			finalDataType = dataTypes[ 0 ];
		} else {
	
			// Try convertible dataTypes
			for ( type in responses ) {
				if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
					finalDataType = type;
					break;
				}
				if ( !firstDataType ) {
					firstDataType = type;
				}
			}
	
			// Or just use first one
			finalDataType = finalDataType || firstDataType;
		}
	
		// If we found a dataType
		// We add the dataType to the list if needed
		// and return the corresponding response
		if ( finalDataType ) {
			if ( finalDataType !== dataTypes[ 0 ] ) {
				dataTypes.unshift( finalDataType );
			}
			return responses[ finalDataType ];
		}
	}
	
	/* Chain conversions given the request and the original response
	 * Also sets the responseXXX fields on the jqXHR instance
	 */
	function ajaxConvert( s, response, jqXHR, isSuccess ) {
		var conv2, current, conv, tmp, prev,
			converters = {},
	
			// Work with a copy of dataTypes in case we need to modify it for conversion
			dataTypes = s.dataTypes.slice();
	
		// Create converters map with lowercased keys
		if ( dataTypes[ 1 ] ) {
			for ( conv in s.converters ) {
				converters[ conv.toLowerCase() ] = s.converters[ conv ];
			}
		}
	
		current = dataTypes.shift();
	
		// Convert to each sequential dataType
		while ( current ) {
	
			if ( s.responseFields[ current ] ) {
				jqXHR[ s.responseFields[ current ] ] = response;
			}
	
			// Apply the dataFilter if provided
			if ( !prev && isSuccess && s.dataFilter ) {
				response = s.dataFilter( response, s.dataType );
			}
	
			prev = current;
			current = dataTypes.shift();
	
			if ( current ) {
	
				// There's only work to do if current dataType is non-auto
				if ( current === "*" ) {
	
					current = prev;
	
				// Convert response if prev dataType is non-auto and differs from current
				} else if ( prev !== "*" && prev !== current ) {
	
					// Seek a direct converter
					conv = converters[ prev + " " + current ] || converters[ "* " + current ];
	
					// If none found, seek a pair
					if ( !conv ) {
						for ( conv2 in converters ) {
	
							// If conv2 outputs current
							tmp = conv2.split( " " );
							if ( tmp[ 1 ] === current ) {
	
								// If prev can be converted to accepted input
								conv = converters[ prev + " " + tmp[ 0 ] ] ||
									converters[ "* " + tmp[ 0 ] ];
								if ( conv ) {
	
									// Condense equivalence converters
									if ( conv === true ) {
										conv = converters[ conv2 ];
	
									// Otherwise, insert the intermediate dataType
									} else if ( converters[ conv2 ] !== true ) {
										current = tmp[ 0 ];
										dataTypes.unshift( tmp[ 1 ] );
									}
									break;
								}
							}
						}
					}
	
					// Apply converter (if not an equivalence)
					if ( conv !== true ) {
	
						// Unless errors are allowed to bubble, catch and return them
						if ( conv && s.throws ) {
							response = conv( response );
						} else {
							try {
								response = conv( response );
							} catch ( e ) {
								return {
									state: "parsererror",
									error: conv ? e : "No conversion from " + prev + " to " + current
								};
							}
						}
					}
				}
			}
		}
	
		return { state: "success", data: response };
	}
	
	jQuery.extend( {
	
		// Counter for holding the number of active queries
		active: 0,
	
		// Last-Modified header cache for next request
		lastModified: {},
		etag: {},
	
		ajaxSettings: {
			url: location.href,
			type: "GET",
			isLocal: rlocalProtocol.test( location.protocol ),
			global: true,
			processData: true,
			async: true,
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
	
			/*
			timeout: 0,
			data: null,
			dataType: null,
			username: null,
			password: null,
			cache: null,
			throws: false,
			traditional: false,
			headers: {},
			*/
	
			accepts: {
				"*": allTypes,
				text: "text/plain",
				html: "text/html",
				xml: "application/xml, text/xml",
				json: "application/json, text/javascript"
			},
	
			contents: {
				xml: /\bxml\b/,
				html: /\bhtml/,
				json: /\bjson\b/
			},
	
			responseFields: {
				xml: "responseXML",
				text: "responseText",
				json: "responseJSON"
			},
	
			// Data converters
			// Keys separate source (or catchall "*") and destination types with a single space
			converters: {
	
				// Convert anything to text
				"* text": String,
	
				// Text to html (true = no transformation)
				"text html": true,
	
				// Evaluate text as a json expression
				"text json": JSON.parse,
	
				// Parse text as xml
				"text xml": jQuery.parseXML
			},
	
			// For options that shouldn't be deep extended:
			// you can add your own custom options here if
			// and when you create one that shouldn't be
			// deep extended (see ajaxExtend)
			flatOptions: {
				url: true,
				context: true
			}
		},
	
		// Creates a full fledged settings object into target
		// with both ajaxSettings and settings fields.
		// If target is omitted, writes into ajaxSettings.
		ajaxSetup: function( target, settings ) {
			return settings ?
	
				// Building a settings object
				ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :
	
				// Extending ajaxSettings
				ajaxExtend( jQuery.ajaxSettings, target );
		},
	
		ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
		ajaxTransport: addToPrefiltersOrTransports( transports ),
	
		// Main method
		ajax: function( url, options ) {
	
			// If url is an object, simulate pre-1.5 signature
			if ( typeof url === "object" ) {
				options = url;
				url = undefined;
			}
	
			// Force options to be an object
			options = options || {};
	
			var transport,
	
				// URL without anti-cache param
				cacheURL,
	
				// Response headers
				responseHeadersString,
				responseHeaders,
	
				// timeout handle
				timeoutTimer,
	
				// Url cleanup var
				urlAnchor,
	
				// Request state (becomes false upon send and true upon completion)
				completed,
	
				// To know if global events are to be dispatched
				fireGlobals,
	
				// Loop variable
				i,
	
				// uncached part of the url
				uncached,
	
				// Create the final options object
				s = jQuery.ajaxSetup( {}, options ),
	
				// Callbacks context
				callbackContext = s.context || s,
	
				// Context for global events is callbackContext if it is a DOM node or jQuery collection
				globalEventContext = s.context &&
					( callbackContext.nodeType || callbackContext.jquery ) ?
						jQuery( callbackContext ) :
						jQuery.event,
	
				// Deferreds
				deferred = jQuery.Deferred(),
				completeDeferred = jQuery.Callbacks( "once memory" ),
	
				// Status-dependent callbacks
				statusCode = s.statusCode || {},
	
				// Headers (they are sent all at once)
				requestHeaders = {},
				requestHeadersNames = {},
	
				// Default abort message
				strAbort = "canceled",
	
				// Fake xhr
				jqXHR = {
					readyState: 0,
	
					// Builds headers hashtable if needed
					getResponseHeader: function( key ) {
						var match;
						if ( completed ) {
							if ( !responseHeaders ) {
								responseHeaders = {};
								while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
									responseHeaders[ match[ 1 ].toLowerCase() ] = match[ 2 ];
								}
							}
							match = responseHeaders[ key.toLowerCase() ];
						}
						return match == null ? null : match;
					},
	
					// Raw string
					getAllResponseHeaders: function() {
						return completed ? responseHeadersString : null;
					},
	
					// Caches the header
					setRequestHeader: function( name, value ) {
						if ( completed == null ) {
							name = requestHeadersNames[ name.toLowerCase() ] =
								requestHeadersNames[ name.toLowerCase() ] || name;
							requestHeaders[ name ] = value;
						}
						return this;
					},
	
					// Overrides response content-type header
					overrideMimeType: function( type ) {
						if ( completed == null ) {
							s.mimeType = type;
						}
						return this;
					},
	
					// Status-dependent callbacks
					statusCode: function( map ) {
						var code;
						if ( map ) {
							if ( completed ) {
	
								// Execute the appropriate callbacks
								jqXHR.always( map[ jqXHR.status ] );
							} else {
	
								// Lazy-add the new callbacks in a way that preserves old ones
								for ( code in map ) {
									statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
								}
							}
						}
						return this;
					},
	
					// Cancel the request
					abort: function( statusText ) {
						var finalText = statusText || strAbort;
						if ( transport ) {
							transport.abort( finalText );
						}
						done( 0, finalText );
						return this;
					}
				};
	
			// Attach deferreds
			deferred.promise( jqXHR );
	
			// Add protocol if not provided (prefilters might expect it)
			// Handle falsy url in the settings object (#10093: consistency with old signature)
			// We also use the url parameter if available
			s.url = ( ( url || s.url || location.href ) + "" )
				.replace( rprotocol, location.protocol + "//" );
	
			// Alias method option to type as per ticket #12004
			s.type = options.method || options.type || s.method || s.type;
	
			// Extract dataTypes list
			s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnotwhite ) || [ "" ];
	
			// A cross-domain request is in order when the origin doesn't match the current origin.
			if ( s.crossDomain == null ) {
				urlAnchor = document.createElement( "a" );
	
				// Support: IE <=8 - 11, Edge 12 - 13
				// IE throws exception on accessing the href property if url is malformed,
				// e.g. http://example.com:80x/
				try {
					urlAnchor.href = s.url;
	
					// Support: IE <=8 - 11 only
					// Anchor's host property isn't correctly set when s.url is relative
					urlAnchor.href = urlAnchor.href;
					s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
						urlAnchor.protocol + "//" + urlAnchor.host;
				} catch ( e ) {
	
					// If there is an error parsing the URL, assume it is crossDomain,
					// it can be rejected by the transport if it is invalid
					s.crossDomain = true;
				}
			}
	
			// Convert data if not already a string
			if ( s.data && s.processData && typeof s.data !== "string" ) {
				s.data = jQuery.param( s.data, s.traditional );
			}
	
			// Apply prefilters
			inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );
	
			// If request was aborted inside a prefilter, stop there
			if ( completed ) {
				return jqXHR;
			}
	
			// We can fire global events as of now if asked to
			// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
			fireGlobals = jQuery.event && s.global;
	
			// Watch for a new set of requests
			if ( fireGlobals && jQuery.active++ === 0 ) {
				jQuery.event.trigger( "ajaxStart" );
			}
	
			// Uppercase the type
			s.type = s.type.toUpperCase();
	
			// Determine if request has content
			s.hasContent = !rnoContent.test( s.type );
	
			// Save the URL in case we're toying with the If-Modified-Since
			// and/or If-None-Match header later on
			// Remove hash to simplify url manipulation
			cacheURL = s.url.replace( rhash, "" );
	
			// More options handling for requests with no content
			if ( !s.hasContent ) {
	
				// Remember the hash so we can put it back
				uncached = s.url.slice( cacheURL.length );
	
				// If data is available, append data to url
				if ( s.data ) {
					cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;
	
					// #9682: remove data so that it's not used in an eventual retry
					delete s.data;
				}
	
				// Add anti-cache in uncached url if needed
				if ( s.cache === false ) {
					cacheURL = cacheURL.replace( rts, "" );
					uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce++ ) + uncached;
				}
	
				// Put hash and anti-cache on the URL that will be requested (gh-1732)
				s.url = cacheURL + uncached;
	
			// Change '%20' to '+' if this is encoded form body content (gh-2658)
			} else if ( s.data && s.processData &&
				( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
				s.data = s.data.replace( r20, "+" );
			}
	
			// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
			if ( s.ifModified ) {
				if ( jQuery.lastModified[ cacheURL ] ) {
					jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
				}
				if ( jQuery.etag[ cacheURL ] ) {
					jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
				}
			}
	
			// Set the correct header, if data is being sent
			if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
				jqXHR.setRequestHeader( "Content-Type", s.contentType );
			}
	
			// Set the Accepts header for the server, depending on the dataType
			jqXHR.setRequestHeader(
				"Accept",
				s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
					s.accepts[ s.dataTypes[ 0 ] ] +
						( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
					s.accepts[ "*" ]
			);
	
			// Check for headers option
			for ( i in s.headers ) {
				jqXHR.setRequestHeader( i, s.headers[ i ] );
			}
	
			// Allow custom headers/mimetypes and early abort
			if ( s.beforeSend &&
				( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {
	
				// Abort if not done already and return
				return jqXHR.abort();
			}
	
			// Aborting is no longer a cancellation
			strAbort = "abort";
	
			// Install callbacks on deferreds
			completeDeferred.add( s.complete );
			jqXHR.done( s.success );
			jqXHR.fail( s.error );
	
			// Get transport
			transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );
	
			// If no transport, we auto-abort
			if ( !transport ) {
				done( -1, "No Transport" );
			} else {
				jqXHR.readyState = 1;
	
				// Send global event
				if ( fireGlobals ) {
					globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
				}
	
				// If request was aborted inside ajaxSend, stop there
				if ( completed ) {
					return jqXHR;
				}
	
				// Timeout
				if ( s.async && s.timeout > 0 ) {
					timeoutTimer = window.setTimeout( function() {
						jqXHR.abort( "timeout" );
					}, s.timeout );
				}
	
				try {
					completed = false;
					transport.send( requestHeaders, done );
				} catch ( e ) {
	
					// Rethrow post-completion exceptions
					if ( completed ) {
						throw e;
					}
	
					// Propagate others as results
					done( -1, e );
				}
			}
	
			// Callback for when everything is done
			function done( status, nativeStatusText, responses, headers ) {
				var isSuccess, success, error, response, modified,
					statusText = nativeStatusText;
	
				// Ignore repeat invocations
				if ( completed ) {
					return;
				}
	
				completed = true;
	
				// Clear timeout if it exists
				if ( timeoutTimer ) {
					window.clearTimeout( timeoutTimer );
				}
	
				// Dereference transport for early garbage collection
				// (no matter how long the jqXHR object will be used)
				transport = undefined;
	
				// Cache response headers
				responseHeadersString = headers || "";
	
				// Set readyState
				jqXHR.readyState = status > 0 ? 4 : 0;
	
				// Determine if successful
				isSuccess = status >= 200 && status < 300 || status === 304;
	
				// Get response data
				if ( responses ) {
					response = ajaxHandleResponses( s, jqXHR, responses );
				}
	
				// Convert no matter what (that way responseXXX fields are always set)
				response = ajaxConvert( s, response, jqXHR, isSuccess );
	
				// If successful, handle type chaining
				if ( isSuccess ) {
	
					// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
					if ( s.ifModified ) {
						modified = jqXHR.getResponseHeader( "Last-Modified" );
						if ( modified ) {
							jQuery.lastModified[ cacheURL ] = modified;
						}
						modified = jqXHR.getResponseHeader( "etag" );
						if ( modified ) {
							jQuery.etag[ cacheURL ] = modified;
						}
					}
	
					// if no content
					if ( status === 204 || s.type === "HEAD" ) {
						statusText = "nocontent";
	
					// if not modified
					} else if ( status === 304 ) {
						statusText = "notmodified";
	
					// If we have data, let's convert it
					} else {
						statusText = response.state;
						success = response.data;
						error = response.error;
						isSuccess = !error;
					}
				} else {
	
					// Extract error from statusText and normalize for non-aborts
					error = statusText;
					if ( status || !statusText ) {
						statusText = "error";
						if ( status < 0 ) {
							status = 0;
						}
					}
				}
	
				// Set data for the fake xhr object
				jqXHR.status = status;
				jqXHR.statusText = ( nativeStatusText || statusText ) + "";
	
				// Success/Error
				if ( isSuccess ) {
					deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
				} else {
					deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
				}
	
				// Status-dependent callbacks
				jqXHR.statusCode( statusCode );
				statusCode = undefined;
	
				if ( fireGlobals ) {
					globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
						[ jqXHR, s, isSuccess ? success : error ] );
				}
	
				// Complete
				completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );
	
				if ( fireGlobals ) {
					globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );
	
					// Handle the global AJAX counter
					if ( !( --jQuery.active ) ) {
						jQuery.event.trigger( "ajaxStop" );
					}
				}
			}
	
			return jqXHR;
		},
	
		getJSON: function( url, data, callback ) {
			return jQuery.get( url, data, callback, "json" );
		},
	
		getScript: function( url, callback ) {
			return jQuery.get( url, undefined, callback, "script" );
		}
	} );
	
	jQuery.each( [ "get", "post" ], function( i, method ) {
		jQuery[ method ] = function( url, data, callback, type ) {
	
			// Shift arguments if data argument was omitted
			if ( jQuery.isFunction( data ) ) {
				type = type || callback;
				callback = data;
				data = undefined;
			}
	
			// The url can be an options object (which then must have .url)
			return jQuery.ajax( jQuery.extend( {
				url: url,
				type: method,
				dataType: type,
				data: data,
				success: callback
			}, jQuery.isPlainObject( url ) && url ) );
		};
	} );
	
	
	jQuery._evalUrl = function( url ) {
		return jQuery.ajax( {
			url: url,
	
			// Make this explicit, since user can override this through ajaxSetup (#11264)
			type: "GET",
			dataType: "script",
			cache: true,
			async: false,
			global: false,
			"throws": true
		} );
	};
	
	
	jQuery.fn.extend( {
		wrapAll: function( html ) {
			var wrap;
	
			if ( this[ 0 ] ) {
				if ( jQuery.isFunction( html ) ) {
					html = html.call( this[ 0 ] );
				}
	
				// The elements to wrap the target around
				wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );
	
				if ( this[ 0 ].parentNode ) {
					wrap.insertBefore( this[ 0 ] );
				}
	
				wrap.map( function() {
					var elem = this;
	
					while ( elem.firstElementChild ) {
						elem = elem.firstElementChild;
					}
	
					return elem;
				} ).append( this );
			}
	
			return this;
		},
	
		wrapInner: function( html ) {
			if ( jQuery.isFunction( html ) ) {
				return this.each( function( i ) {
					jQuery( this ).wrapInner( html.call( this, i ) );
				} );
			}
	
			return this.each( function() {
				var self = jQuery( this ),
					contents = self.contents();
	
				if ( contents.length ) {
					contents.wrapAll( html );
	
				} else {
					self.append( html );
				}
			} );
		},
	
		wrap: function( html ) {
			var isFunction = jQuery.isFunction( html );
	
			return this.each( function( i ) {
				jQuery( this ).wrapAll( isFunction ? html.call( this, i ) : html );
			} );
		},
	
		unwrap: function( selector ) {
			this.parent( selector ).not( "body" ).each( function() {
				jQuery( this ).replaceWith( this.childNodes );
			} );
			return this;
		}
	} );
	
	
	jQuery.expr.pseudos.hidden = function( elem ) {
		return !jQuery.expr.pseudos.visible( elem );
	};
	jQuery.expr.pseudos.visible = function( elem ) {
		return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
	};
	
	
	
	
	jQuery.ajaxSettings.xhr = function() {
		try {
			return new window.XMLHttpRequest();
		} catch ( e ) {}
	};
	
	var xhrSuccessStatus = {
	
			// File protocol always yields status code 0, assume 200
			0: 200,
	
			// Support: IE <=9 only
			// #1450: sometimes IE returns 1223 when it should be 204
			1223: 204
		},
		xhrSupported = jQuery.ajaxSettings.xhr();
	
	support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
	support.ajax = xhrSupported = !!xhrSupported;
	
	jQuery.ajaxTransport( function( options ) {
		var callback, errorCallback;
	
		// Cross domain only allowed if supported through XMLHttpRequest
		if ( support.cors || xhrSupported && !options.crossDomain ) {
			return {
				send: function( headers, complete ) {
					var i,
						xhr = options.xhr();
	
					xhr.open(
						options.type,
						options.url,
						options.async,
						options.username,
						options.password
					);
	
					// Apply custom fields if provided
					if ( options.xhrFields ) {
						for ( i in options.xhrFields ) {
							xhr[ i ] = options.xhrFields[ i ];
						}
					}
	
					// Override mime type if needed
					if ( options.mimeType && xhr.overrideMimeType ) {
						xhr.overrideMimeType( options.mimeType );
					}
	
					// X-Requested-With header
					// For cross-domain requests, seeing as conditions for a preflight are
					// akin to a jigsaw puzzle, we simply never set it to be sure.
					// (it can always be set on a per-request basis or even using ajaxSetup)
					// For same-domain requests, won't change header if already provided.
					if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
						headers[ "X-Requested-With" ] = "XMLHttpRequest";
					}
	
					// Set headers
					for ( i in headers ) {
						xhr.setRequestHeader( i, headers[ i ] );
					}
	
					// Callback
					callback = function( type ) {
						return function() {
							if ( callback ) {
								callback = errorCallback = xhr.onload =
									xhr.onerror = xhr.onabort = xhr.onreadystatechange = null;
	
								if ( type === "abort" ) {
									xhr.abort();
								} else if ( type === "error" ) {
	
									// Support: IE <=9 only
									// On a manual native abort, IE9 throws
									// errors on any property access that is not readyState
									if ( typeof xhr.status !== "number" ) {
										complete( 0, "error" );
									} else {
										complete(
	
											// File: protocol always yields status 0; see #8605, #14207
											xhr.status,
											xhr.statusText
										);
									}
								} else {
									complete(
										xhrSuccessStatus[ xhr.status ] || xhr.status,
										xhr.statusText,
	
										// Support: IE <=9 only
										// IE9 has no XHR2 but throws on binary (trac-11426)
										// For XHR2 non-text, let the caller handle it (gh-2498)
										( xhr.responseType || "text" ) !== "text"  ||
										typeof xhr.responseText !== "string" ?
											{ binary: xhr.response } :
											{ text: xhr.responseText },
										xhr.getAllResponseHeaders()
									);
								}
							}
						};
					};
	
					// Listen to events
					xhr.onload = callback();
					errorCallback = xhr.onerror = callback( "error" );
	
					// Support: IE 9 only
					// Use onreadystatechange to replace onabort
					// to handle uncaught aborts
					if ( xhr.onabort !== undefined ) {
						xhr.onabort = errorCallback;
					} else {
						xhr.onreadystatechange = function() {
	
							// Check readyState before timeout as it changes
							if ( xhr.readyState === 4 ) {
	
								// Allow onerror to be called first,
								// but that will not handle a native abort
								// Also, save errorCallback to a variable
								// as xhr.onerror cannot be accessed
								window.setTimeout( function() {
									if ( callback ) {
										errorCallback();
									}
								} );
							}
						};
					}
	
					// Create the abort callback
					callback = callback( "abort" );
	
					try {
	
						// Do send the request (this may raise an exception)
						xhr.send( options.hasContent && options.data || null );
					} catch ( e ) {
	
						// #14683: Only rethrow if this hasn't been notified as an error yet
						if ( callback ) {
							throw e;
						}
					}
				},
	
				abort: function() {
					if ( callback ) {
						callback();
					}
				}
			};
		}
	} );
	
	
	
	
	// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
	jQuery.ajaxPrefilter( function( s ) {
		if ( s.crossDomain ) {
			s.contents.script = false;
		}
	} );
	
	// Install script dataType
	jQuery.ajaxSetup( {
		accepts: {
			script: "text/javascript, application/javascript, " +
				"application/ecmascript, application/x-ecmascript"
		},
		contents: {
			script: /\b(?:java|ecma)script\b/
		},
		converters: {
			"text script": function( text ) {
				jQuery.globalEval( text );
				return text;
			}
		}
	} );
	
	// Handle cache's special case and crossDomain
	jQuery.ajaxPrefilter( "script", function( s ) {
		if ( s.cache === undefined ) {
			s.cache = false;
		}
		if ( s.crossDomain ) {
			s.type = "GET";
		}
	} );
	
	// Bind script tag hack transport
	jQuery.ajaxTransport( "script", function( s ) {
	
		// This transport only deals with cross domain requests
		if ( s.crossDomain ) {
			var script, callback;
			return {
				send: function( _, complete ) {
					script = jQuery( "<script>" ).prop( {
						charset: s.scriptCharset,
						src: s.url
					} ).on(
						"load error",
						callback = function( evt ) {
							script.remove();
							callback = null;
							if ( evt ) {
								complete( evt.type === "error" ? 404 : 200, evt.type );
							}
						}
					);
	
					// Use native DOM manipulation to avoid our domManip AJAX trickery
					document.head.appendChild( script[ 0 ] );
				},
				abort: function() {
					if ( callback ) {
						callback();
					}
				}
			};
		}
	} );
	
	
	
	
	var oldCallbacks = [],
		rjsonp = /(=)\?(?=&|$)|\?\?/;
	
	// Default jsonp settings
	jQuery.ajaxSetup( {
		jsonp: "callback",
		jsonpCallback: function() {
			var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
			this[ callback ] = true;
			return callback;
		}
	} );
	
	// Detect, normalize options and install callbacks for jsonp requests
	jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {
	
		var callbackName, overwritten, responseContainer,
			jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
				"url" :
				typeof s.data === "string" &&
					( s.contentType || "" )
						.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
					rjsonp.test( s.data ) && "data"
			);
	
		// Handle iff the expected data type is "jsonp" or we have a parameter to set
		if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {
	
			// Get callback name, remembering preexisting value associated with it
			callbackName = s.jsonpCallback = jQuery.isFunction( s.jsonpCallback ) ?
				s.jsonpCallback() :
				s.jsonpCallback;
	
			// Insert callback into url or form data
			if ( jsonProp ) {
				s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
			} else if ( s.jsonp !== false ) {
				s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
			}
	
			// Use data converter to retrieve json after script execution
			s.converters[ "script json" ] = function() {
				if ( !responseContainer ) {
					jQuery.error( callbackName + " was not called" );
				}
				return responseContainer[ 0 ];
			};
	
			// Force json dataType
			s.dataTypes[ 0 ] = "json";
	
			// Install callback
			overwritten = window[ callbackName ];
			window[ callbackName ] = function() {
				responseContainer = arguments;
			};
	
			// Clean-up function (fires after converters)
			jqXHR.always( function() {
	
				// If previous value didn't exist - remove it
				if ( overwritten === undefined ) {
					jQuery( window ).removeProp( callbackName );
	
				// Otherwise restore preexisting value
				} else {
					window[ callbackName ] = overwritten;
				}
	
				// Save back as free
				if ( s[ callbackName ] ) {
	
					// Make sure that re-using the options doesn't screw things around
					s.jsonpCallback = originalSettings.jsonpCallback;
	
					// Save the callback name for future use
					oldCallbacks.push( callbackName );
				}
	
				// Call if it was a function and we have a response
				if ( responseContainer && jQuery.isFunction( overwritten ) ) {
					overwritten( responseContainer[ 0 ] );
				}
	
				responseContainer = overwritten = undefined;
			} );
	
			// Delegate to script
			return "script";
		}
	} );
	
	
	
	
	// Support: Safari 8 only
	// In Safari 8 documents created via document.implementation.createHTMLDocument
	// collapse sibling forms: the second one becomes a child of the first one.
	// Because of that, this security measure has to be disabled in Safari 8.
	// https://bugs.webkit.org/show_bug.cgi?id=137337
	support.createHTMLDocument = ( function() {
		var body = document.implementation.createHTMLDocument( "" ).body;
		body.innerHTML = "<form></form><form></form>";
		return body.childNodes.length === 2;
	} )();
	
	
	// Argument "data" should be string of html
	// context (optional): If specified, the fragment will be created in this context,
	// defaults to document
	// keepScripts (optional): If true, will include scripts passed in the html string
	jQuery.parseHTML = function( data, context, keepScripts ) {
		if ( typeof data !== "string" ) {
			return [];
		}
		if ( typeof context === "boolean" ) {
			keepScripts = context;
			context = false;
		}
	
		var base, parsed, scripts;
	
		if ( !context ) {
	
			// Stop scripts or inline event handlers from being executed immediately
			// by using document.implementation
			if ( support.createHTMLDocument ) {
				context = document.implementation.createHTMLDocument( "" );
	
				// Set the base href for the created document
				// so any parsed elements with URLs
				// are based on the document's URL (gh-2965)
				base = context.createElement( "base" );
				base.href = document.location.href;
				context.head.appendChild( base );
			} else {
				context = document;
			}
		}
	
		parsed = rsingleTag.exec( data );
		scripts = !keepScripts && [];
	
		// Single tag
		if ( parsed ) {
			return [ context.createElement( parsed[ 1 ] ) ];
		}
	
		parsed = buildFragment( [ data ], context, scripts );
	
		if ( scripts && scripts.length ) {
			jQuery( scripts ).remove();
		}
	
		return jQuery.merge( [], parsed.childNodes );
	};
	
	
	/**
	 * Load a url into a page
	 */
	jQuery.fn.load = function( url, params, callback ) {
		var selector, type, response,
			self = this,
			off = url.indexOf( " " );
	
		if ( off > -1 ) {
			selector = jQuery.trim( url.slice( off ) );
			url = url.slice( 0, off );
		}
	
		// If it's a function
		if ( jQuery.isFunction( params ) ) {
	
			// We assume that it's the callback
			callback = params;
			params = undefined;
	
		// Otherwise, build a param string
		} else if ( params && typeof params === "object" ) {
			type = "POST";
		}
	
		// If we have elements to modify, make the request
		if ( self.length > 0 ) {
			jQuery.ajax( {
				url: url,
	
				// If "type" variable is undefined, then "GET" method will be used.
				// Make value of this field explicit since
				// user can override it through ajaxSetup method
				type: type || "GET",
				dataType: "html",
				data: params
			} ).done( function( responseText ) {
	
				// Save response for use in complete callback
				response = arguments;
	
				self.html( selector ?
	
					// If a selector was specified, locate the right elements in a dummy div
					// Exclude scripts to avoid IE 'Permission Denied' errors
					jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :
	
					// Otherwise use the full result
					responseText );
	
			// If the request succeeds, this function gets "data", "status", "jqXHR"
			// but they are ignored because response was set above.
			// If it fails, this function gets "jqXHR", "status", "error"
			} ).always( callback && function( jqXHR, status ) {
				self.each( function() {
					callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
				} );
			} );
		}
	
		return this;
	};
	
	
	
	
	// Attach a bunch of functions for handling common AJAX events
	jQuery.each( [
		"ajaxStart",
		"ajaxStop",
		"ajaxComplete",
		"ajaxError",
		"ajaxSuccess",
		"ajaxSend"
	], function( i, type ) {
		jQuery.fn[ type ] = function( fn ) {
			return this.on( type, fn );
		};
	} );
	
	
	
	
	jQuery.expr.pseudos.animated = function( elem ) {
		return jQuery.grep( jQuery.timers, function( fn ) {
			return elem === fn.elem;
		} ).length;
	};
	
	
	
	
	/**
	 * Gets a window from an element
	 */
	function getWindow( elem ) {
		return jQuery.isWindow( elem ) ? elem : elem.nodeType === 9 && elem.defaultView;
	}
	
	jQuery.offset = {
		setOffset: function( elem, options, i ) {
			var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
				position = jQuery.css( elem, "position" ),
				curElem = jQuery( elem ),
				props = {};
	
			// Set position first, in-case top/left are set even on static elem
			if ( position === "static" ) {
				elem.style.position = "relative";
			}
	
			curOffset = curElem.offset();
			curCSSTop = jQuery.css( elem, "top" );
			curCSSLeft = jQuery.css( elem, "left" );
			calculatePosition = ( position === "absolute" || position === "fixed" ) &&
				( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;
	
			// Need to be able to calculate position if either
			// top or left is auto and position is either absolute or fixed
			if ( calculatePosition ) {
				curPosition = curElem.position();
				curTop = curPosition.top;
				curLeft = curPosition.left;
	
			} else {
				curTop = parseFloat( curCSSTop ) || 0;
				curLeft = parseFloat( curCSSLeft ) || 0;
			}
	
			if ( jQuery.isFunction( options ) ) {
	
				// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
				options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
			}
	
			if ( options.top != null ) {
				props.top = ( options.top - curOffset.top ) + curTop;
			}
			if ( options.left != null ) {
				props.left = ( options.left - curOffset.left ) + curLeft;
			}
	
			if ( "using" in options ) {
				options.using.call( elem, props );
	
			} else {
				curElem.css( props );
			}
		}
	};
	
	jQuery.fn.extend( {
		offset: function( options ) {
	
			// Preserve chaining for setter
			if ( arguments.length ) {
				return options === undefined ?
					this :
					this.each( function( i ) {
						jQuery.offset.setOffset( this, options, i );
					} );
			}
	
			var docElem, win, rect, doc,
				elem = this[ 0 ];
	
			if ( !elem ) {
				return;
			}
	
			// Support: IE <=11 only
			// Running getBoundingClientRect on a
			// disconnected node in IE throws an error
			if ( !elem.getClientRects().length ) {
				return { top: 0, left: 0 };
			}
	
			rect = elem.getBoundingClientRect();
	
			// Make sure element is not hidden (display: none)
			if ( rect.width || rect.height ) {
				doc = elem.ownerDocument;
				win = getWindow( doc );
				docElem = doc.documentElement;
	
				return {
					top: rect.top + win.pageYOffset - docElem.clientTop,
					left: rect.left + win.pageXOffset - docElem.clientLeft
				};
			}
	
			// Return zeros for disconnected and hidden elements (gh-2310)
			return rect;
		},
	
		position: function() {
			if ( !this[ 0 ] ) {
				return;
			}
	
			var offsetParent, offset,
				elem = this[ 0 ],
				parentOffset = { top: 0, left: 0 };
	
			// Fixed elements are offset from window (parentOffset = {top:0, left: 0},
			// because it is its only offset parent
			if ( jQuery.css( elem, "position" ) === "fixed" ) {
	
				// Assume getBoundingClientRect is there when computed position is fixed
				offset = elem.getBoundingClientRect();
	
			} else {
	
				// Get *real* offsetParent
				offsetParent = this.offsetParent();
	
				// Get correct offsets
				offset = this.offset();
				if ( !jQuery.nodeName( offsetParent[ 0 ], "html" ) ) {
					parentOffset = offsetParent.offset();
				}
	
				// Add offsetParent borders
				parentOffset = {
					top: parentOffset.top + jQuery.css( offsetParent[ 0 ], "borderTopWidth", true ),
					left: parentOffset.left + jQuery.css( offsetParent[ 0 ], "borderLeftWidth", true )
				};
			}
	
			// Subtract parent offsets and element margins
			return {
				top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
				left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
			};
		},
	
		// This method will return documentElement in the following cases:
		// 1) For the element inside the iframe without offsetParent, this method will return
		//    documentElement of the parent window
		// 2) For the hidden or detached element
		// 3) For body or html element, i.e. in case of the html node - it will return itself
		//
		// but those exceptions were never presented as a real life use-cases
		// and might be considered as more preferable results.
		//
		// This logic, however, is not guaranteed and can change at any point in the future
		offsetParent: function() {
			return this.map( function() {
				var offsetParent = this.offsetParent;
	
				while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
					offsetParent = offsetParent.offsetParent;
				}
	
				return offsetParent || documentElement;
			} );
		}
	} );
	
	// Create scrollLeft and scrollTop methods
	jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
		var top = "pageYOffset" === prop;
	
		jQuery.fn[ method ] = function( val ) {
			return access( this, function( elem, method, val ) {
				var win = getWindow( elem );
	
				if ( val === undefined ) {
					return win ? win[ prop ] : elem[ method ];
				}
	
				if ( win ) {
					win.scrollTo(
						!top ? val : win.pageXOffset,
						top ? val : win.pageYOffset
					);
	
				} else {
					elem[ method ] = val;
				}
			}, method, val, arguments.length );
		};
	} );
	
	// Support: Safari <=7 - 9.1, Chrome <=37 - 49
	// Add the top/left cssHooks using jQuery.fn.position
	// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
	// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
	// getComputedStyle returns percent when specified for top/left/bottom/right;
	// rather than make the css module depend on the offset module, just check for it here
	jQuery.each( [ "top", "left" ], function( i, prop ) {
		jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
			function( elem, computed ) {
				if ( computed ) {
					computed = curCSS( elem, prop );
	
					// If curCSS returns percentage, fallback to offset
					return rnumnonpx.test( computed ) ?
						jQuery( elem ).position()[ prop ] + "px" :
						computed;
				}
			}
		);
	} );
	
	
	// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
	jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
		jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
			function( defaultExtra, funcName ) {
	
			// Margin is only for outerHeight, outerWidth
			jQuery.fn[ funcName ] = function( margin, value ) {
				var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
					extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );
	
				return access( this, function( elem, type, value ) {
					var doc;
	
					if ( jQuery.isWindow( elem ) ) {
	
						// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
						return funcName.indexOf( "outer" ) === 0 ?
							elem[ "inner" + name ] :
							elem.document.documentElement[ "client" + name ];
					}
	
					// Get document width or height
					if ( elem.nodeType === 9 ) {
						doc = elem.documentElement;
	
						// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
						// whichever is greatest
						return Math.max(
							elem.body[ "scroll" + name ], doc[ "scroll" + name ],
							elem.body[ "offset" + name ], doc[ "offset" + name ],
							doc[ "client" + name ]
						);
					}
	
					return value === undefined ?
	
						// Get width or height on the element, requesting but not forcing parseFloat
						jQuery.css( elem, type, extra ) :
	
						// Set width or height on the element
						jQuery.style( elem, type, value, extra );
				}, type, chainable ? margin : undefined, chainable );
			};
		} );
	} );
	
	
	jQuery.fn.extend( {
	
		bind: function( types, data, fn ) {
			return this.on( types, null, data, fn );
		},
		unbind: function( types, fn ) {
			return this.off( types, null, fn );
		},
	
		delegate: function( selector, types, data, fn ) {
			return this.on( types, selector, data, fn );
		},
		undelegate: function( selector, types, fn ) {
	
			// ( namespace ) or ( selector, types [, fn] )
			return arguments.length === 1 ?
				this.off( selector, "**" ) :
				this.off( types, selector || "**", fn );
		}
	} );
	
	jQuery.parseJSON = JSON.parse;
	
	
	
	
	// Register as a named AMD module, since jQuery can be concatenated with other
	// files that may use define, but not via a proper concatenation script that
	// understands anonymous AMD modules. A named AMD is safest and most robust
	// way to register. Lowercase jquery is used because AMD module names are
	// derived from file names, and jQuery is normally delivered in a lowercase
	// file name. Do this after creating the global so that if an AMD module wants
	// to call noConflict to hide this version of jQuery, it will work.
	
	// Note that for maximum portability, libraries that are not jQuery should
	// declare themselves as anonymous modules, and avoid setting a global if an
	// AMD loader is present. jQuery is a special case. For more information, see
	// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon
	
	if ( true ) {
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
			return jQuery;
		}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}
	
	
	
	
	
	var
	
		// Map over jQuery in case of overwrite
		_jQuery = window.jQuery,
	
		// Map over the $ in case of overwrite
		_$ = window.$;
	
	jQuery.noConflict = function( deep ) {
		if ( window.$ === jQuery ) {
			window.$ = _$;
		}
	
		if ( deep && window.jQuery === jQuery ) {
			window.jQuery = _jQuery;
		}
	
		return jQuery;
	};
	
	// Expose jQuery and $ identifiers, even in AMD
	// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
	// and CommonJS for browser emulators (#13566)
	if ( !noGlobal ) {
		window.jQuery = window.$ = jQuery;
	}
	
	
	return jQuery;
	} );


/***/ }
/******/ ]);