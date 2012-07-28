<%@page import="test.HelloWorld"%>
<%@page import="com.google.template.soy.SoyFileSet"%>
<%@page import="com.google.template.soy.jssrc.SoyJsSrcOptions"%>
<%@page import="com.google.template.soy.tofu.SoyTofu"%>

<%@page import="java.io.File"%>
<%@page import="java.util.List"%>
<%@ page language="java" contentType="text/javascript; charset=utf-8"
	pageEncoding="utf-8" import="java.util.*"%>
<%@ include file="soyutils.js" %> 
<%
	/* String str=HelloWorld.test(request.getRealPath("/")); */
	 response.setHeader("content-type", "text/javascript"); 
	/*  out.print(str); */
	// Bundle the Soy files for your project into a SoyFileSet.
	
	File directory = new File(request.getRealPath("/") + "/soy/");
	String reslut=HelloWorld.transFileDir(directory,null);
	out.print(reslut);
%>


