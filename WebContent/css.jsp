<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<%@page import="java.io.File"%>
<%@page import="java.io.InputStreamReader" %>
<%@page import="java.io.InputStream" %>
<%@page import="java.io.BufferedReader,java.io.FileReader,com.xn.compiler.CSSCompiler_1,java.util.LinkedHashMap,java.util.LinkedList" %>
<%
String rootPath = request.getRealPath("/")+File.separator;
response.setHeader("content-type", "text/css"); 

String configFileName = request.getParameter("config");
CSSCompiler_1 jsc = new CSSCompiler_1(rootPath);
LinkedHashMap<String,String> params = new LinkedHashMap<String,String>();
LinkedList<String> cssFiles = new LinkedList<String>();
String basePath = rootPath+File.separator+"gss"+File.separator;

if(configFileName != null){
		File configFile = new File(request.getRealPath("/") + "/css_configs/"+configFileName);
		BufferedReader bf = new BufferedReader(new FileReader(configFile));
		String fileName = "";
		
		while(fileName != null){
			fileName = bf.readLine();
			   
			   if(fileName == null){
			    break;
			   }
			   fileName = fileName.split(" ")[0];
			   System.out.println("========css files start=========");
			   if(fileName.trim() !=null &&fileName.trim().endsWith("gss")){
				   System.out.println(fileName.trim());
				   
				   cssFiles.push(basePath+fileName.trim());
			   }
			   System.out.println("========css files end=========");
			}
		
}	


String result = jsc.build(params,cssFiles);
out.println(result);

%>

