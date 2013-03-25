<%@page import="com.xn.compiler.TemplateTrans"%>
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
 	String subPath = request.getParameter("subPath");
 	String configFileName = request.getParameter("config");

 	if(configFileName != null){
 		File configFile = new File(request.getRealPath("/") + "/configs/"+configFileName);
 		String reslut=TemplateTrans.transFileConfig(configFile);
 		out.print(reslut);
 		return;
 	}		
 	
 	if(subPath == null)
 		subPath ="";
 	File directory = new File(request.getRealPath("/") + "/soy/"+subPath);
 	String reslut=TemplateTrans.transFileDir(directory,null);
 	out.print(reslut);
 	
 	//out.print(request.getHeader("user-agent"));
 %>


