<%@page import="com.xn.compiler.TemplateTrans"%>
<%@page import="com.google.template.soy.SoyFileSet"%>
<%@page import="com.google.template.soy.jssrc.SoyJsSrcOptions"%>
<%@page import="com.google.template.soy.tofu.SoyTofu"%>

<%@page import="java.io.File"%>
<%@page import="java.util.List"%>
<%@ page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="utf-8" import="java.util.*"%>

<%@ include file="venderMapT.jsp" %>


<!DOCTYPE html>
<html>
<head>
<title>PAD适配</title>
<script type="text/javascript" src="/lib/spdy.js"></script>
<link rel="stylesheet" type="text/css" href="https://developers.google.com/_static/css/screen.css">
</head>
<body>
<img alt="胡强" src="http://hdn.xnimg.cn/photos/hdn221/20121025/0255/tiny_cxsQ_6cd00003124e1376.jpg">
<%
	out.print(src_map.get("JS"));
	response.setHeader("X-Associated-Content", "\"/lib/lib.js?t=1\",\"https://ajax.googleapis.com/ajax/libs/jquery/1.6.1/jquery.min.js\"");
%>
<script type="text/javascript">
function loadScript(src){
	var script = document.createElement("script");
	script.src=src;
	document.head.appendChild(script);
	
}
window.setTimeout(function(){
	loadScript("/lib/lib.js?t=1");
	loadScript("https://ajax.googleapis.com/ajax/libs/jquery/1.6.1/jquery.min.js");
},2000);
</script>
</body>
</html>