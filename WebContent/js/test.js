/**
 * 主要负责将浏览器信息写入页面
 * 操作系统信息 和操作系统版本
 */
(function(){
	var ua = window.navigator.userAgent;
	var resultArray = ua.match(/(Android|Ipad|Iphone|MSIE)/gi);
	var androidVersionArray = ua.match(/(Android)\s([\d.]+)/gi);
	var iosVersionArray = ua.match(/OS\s([\d_]+)/gi);

	if(resultArray != null && resultArray.length >0 ){
		DOM.addClass(DOC.documentElement,resultArray[0].toLowerCase());
	}

	if(androidVersionArray!=null&&androidVersionArray.length>0){
		var version = androidVersionArray[0].toLowerCase().match(/\s([\d.]+)/gi)[0].replace(/\s/gi,"");
		
		DOC.documentElement.setAttribute("version",version);
	}else if(iosVersionArray!=null&&iosVersionArray.length>0){
		
		var version = iosVersionArray[0].toLowerCase().match(/\s([\d_]+)/gi)[0].replace(/\s/gi,"");
		
		DOC.documentElement.setAttribute("version",version);
	}

	/**
	 * 检测浏览器内核引擎
	 */
	if(ua.search(/webkit/gi)!=-1){
		DOM.addClass(DOC.documentElement,'webkit');
	}else if(ua.search(/Gecko/gi)!=-1){
		DOM.addClass(DOC.documentElement,'gecko');
	}

	/**
	 * 检测是否是Android chrome 浏览器
	 */
	var isChromePhone = ua.search(/Android\s.*Chrome\/[.0-9]* Mobile/gi);
	var isChromeTablet = ua.search(/Android\s.*sChrome\/[.0-9]* (?!Mobile)/gi);
	if(isChromePhone!=-1||isChromeTablet!=-1){
		DOM.addClass(DOC.documentElement,'chrome');
	}
	
})();


