<%@ page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="utf-8" import="com.xn.compiler.CSSCompiler,java.util.LinkedList,java.io.File,java.util.LinkedHashMap,java.util.Date"%>

<%
String rootPath = request.getRealPath("/");
rootPath = "D:"+File.separator+"EclipseWorkSpace"+File.separator+"j-template-t2"+File.separator+"WebContent";
CSSCompiler cc = new CSSCompiler(rootPath);

LinkedList<String> inputCSS = new LinkedList<String>() ;
String testgssPath1 = rootPath + File.separator +"gss" + File.separator + "test.gss";

inputCSS.add(testgssPath1);
LinkedHashMap<String,String> param = new LinkedHashMap<String,String>();
param.put("output-file", rootPath + File.separator +"g_css" + File.separator + "test"+new Date().getDay()+".gss");
String rs = cc.getRenamedCSSFile(inputCSS, param);
out.println(rs);
%>


