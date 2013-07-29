<%@page import="com.xn.compiler.TemplateTrans"%>
<%@page import="com.google.template.soy.SoyFileSet"%>
<%@page import="com.google.template.soy.jssrc.SoyJsSrcOptions"%>
<%@page import="com.google.template.soy.tofu.SoyTofu"%>
<%@page import="com.xn.compiler.TemplateCompiler_1,java.io.BufferedReader,java.io.FileReader"%>

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

 			
 	String rootPath = request.getRealPath("/")+File.separator;
 	TemplateCompiler_1 jsc = new TemplateCompiler_1(rootPath);
 	LinkedHashMap<String,String> params = new LinkedHashMap<String,String>();
	LinkedList<String> templateFiles = new LinkedList<String>();
	String basePath = rootPath+File.separator+"soy"+File.separator;
	
	
	if(configFileName != null){
		File configFile = new File(request.getRealPath("/") + "/configs/"+configFileName);
		BufferedReader bf = new BufferedReader(new FileReader(configFile));
		String fileName = "";
		
		while(fileName != null){
			fileName = bf.readLine();
			   
			   if(fileName == null){
			    break;
			   }
			   fileName = fileName.split(" ")[0];
			   System.out.println("========template files start=========");
			   if(fileName.trim() !=null &&fileName.trim().endsWith("soy")){
				   System.out.println(fileName.trim());
				   
				   templateFiles.push(basePath+fileName.trim());
			   }
			   System.out.println("========template files end=========");
			}
		
	}	
	
	String result = jsc.build(params,templateFiles);
	out.println(result); 
	
 	
 %>


