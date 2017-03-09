##a-Chrome-Extension

###最简单的 Google Chrome 扩展需要的文件

####0. 详细准确信息查看 Google 文档

	https://developer.chrome.com/extensions/getstarted
	https://developer.chrome.com/extensions/overview

####1. content scripts 作用域是仅限操作页面 DOM,不能调用页面 Javascript 对象.

	jquery-3.1.1.min.js,content.js,contentscript.js
	修改页面 DOM 可以使用 content.js 中的函数
	
####2. injected scripts 作用域同页面 Javascript

	jquery-3.1.1.min.js,injected.js
	页面中调用的函数, 新增的自定义函数保存在 injected.js
