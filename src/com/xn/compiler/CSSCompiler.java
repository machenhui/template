package com.xn.compiler;

import java.io.BufferedReader;
import java.io.File;


import java.io.FileReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.util.Date;
import java.util.Iterator;
import java.util.LinkedHashMap;
import java.util.LinkedList;
import java.util.Set;


/**
 * 负责CSS 文件的动态压缩
 * @author Administrator
 *
 */
public class CSSCompiler {

	private LinkedHashMap<String,String> params = new LinkedHashMap<String,String>();
	private String gCssOutPutPath ;
	private String commandJar;
	private String renameJS;
	public CSSCompiler(String rootPath){
		if (rootPath == null)
			rootPath =System.getProperty("user.dir")+File.separator + "WebContent";
		
		this.gCssOutPutPath = rootPath + File.separator +"g_css" + File.separator;
		this.commandJar = rootPath + File.separator
				+ "WEB-INF" + File.separator + "lib" + File.separator
				+ "closure-stylesheets.jar";
		this.renameJS =rootPath + File.separator +"renameJS" + File.separator;
		this.setDefaultParams();
	}
	private void setDefaultParams(){
		//生成文件存放地址
		params.put("output-file", this.gCssOutPutPath+"out.css");
		//是否在控制台输出
		//params.put("pretty-print", "");
		//混淆命名的压缩参数
		params.put("output-renaming-map-format", "CLOSURE_COMPILED");
		//rename 使用的方式
		params.put("rename", "CLOSURE");
		//rename map 生成的键值对的文件
		params.put("output-renaming-map", this.renameJS+"renameing_map.js");
		//去除CSS文件用其他浏览器用的代码
		params.put("vendor", "WEBKIT");
		
	}
	
	private LinkedHashMap<String,String> transParamMap(LinkedHashMap<String,String> paramsMap){
		
		Set<String>  keys = paramsMap.keySet();
		for(String key : keys){
			params.put(key, paramsMap.get(key));
		}
		return params;
	}
	private String changeToCommandString(LinkedList<String> inputCSS){
		StringBuffer result = new StringBuffer();
		result.append("java -jar  " +this.commandJar);
		Set<String>  keys = params.keySet();
		for(String key : keys){
			
			result.append(" --"+key+" "+params.get(key)+" ");
		}
		
		Iterator ite = inputCSS.iterator();
	
		while(ite.hasNext()){
			result.append(" "+ ite.next());
		}
		return result.toString();
	}
	private void excuteRunTime(String command){
		try {
			Process process = null;
			
			System.out.println(command);
			//command = "java -version";
			process = Runtime.getRuntime().exec(command);
			

			InputStream ins = null;
			InputStream ens = null;
			// cmd 的信息
			ins = process.getInputStream();
			BufferedReader reader = new BufferedReader(new InputStreamReader(
					ins));
			String line = null;
			while ((line = reader.readLine()) != null) {
				// 输出
				System.out.println(line);
			}
			
			ens = process.getErrorStream();
			BufferedReader er = new BufferedReader(new InputStreamReader(ens));   
			String el = null; 
			System.out.println("错误信息<br />");
			while ((el = er.readLine()) != null)   {   
				// 输出   
				System.out.println(el+"<br />");   
			} 

			int exitValue = process.waitFor();
			if(exitValue != 0){
				System.out.println("异常返回值：" + exitValue); 
			}
			// 关闭
			process.getOutputStream().close();
			process.destroy();
			System.out.println(System.getProperty("user.dir"));
		} catch (Exception e) {
			System.out.println(e);
		}
		
	}
	
	private String getResultCSS() throws IOException{
		File g_css_file = new File(this.params.get("output-file"));
		BufferedReader fr = new BufferedReader(new FileReader(g_css_file));
		StringBuffer sb = new StringBuffer();
		String s;
		while ( null != ( s = fr.readLine()))
		{
		 sb.append(s);
		}
		return sb.toString();
	}
	public String getRenamedCSSFile(LinkedList<String> inputCSS,LinkedHashMap<String,String> paramMap){
		if(paramMap != null)
			paramMap = transParamMap(paramMap);
		String command = changeToCommandString(inputCSS);
		System.out.print(command);
		excuteRunTime(command);
		try {
			return getResultCSS();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return null;
	}
	
	public static void main(String arguments[]) {
		CSSCompiler cc = new CSSCompiler(null);
		LinkedList<String> inputCSS = new LinkedList<String>() ;
		String testgssPath1 = System.getProperty("user.dir")+File.separator + "WebContent" + File.separator +"gss" + File.separator + "test.gss";

		inputCSS.add(testgssPath1);
		
		String rs = cc.getRenamedCSSFile(inputCSS, null);
		System.out.println(rs);
		try {
			Process process = null;
			String jarPath = File.separator + "WebContent" + File.separator
					+ "WEB-INF" + File.separator + "lib" + File.separator
					+ "closure-stylesheets.jar";
			String testgssPath = System.getProperty("user.dir")+File.separator + "WebContent" + File.separator +"gss" + File.separator + "test.gss";
			String g_cssPath = System.getProperty("user.dir")+File.separator + "WebContent" + File.separator +"g_css" + File.separator + "test.css";
			String command = "java -jar  " + System.getProperty("user.dir")
					+ jarPath + " --pretty-print --output-file "+g_cssPath+" "+testgssPath;
			
			System.out.println(command);
			//command = "java -version";
			process = Runtime.getRuntime().exec(command);
			

			InputStream ins = null;
			InputStream ens = null;
			// cmd 的信息
			ins = process.getInputStream();
			BufferedReader reader = new BufferedReader(new InputStreamReader(
					ins));
			String line = null;
			while ((line = reader.readLine()) != null) {
				// 输出
				System.out.println(line);
			}
			
			ens = process.getErrorStream();
			BufferedReader er = new BufferedReader(new InputStreamReader(ens));   
			String el = null; 
			System.out.println("错误信息<br />");
			while ((el = er.readLine()) != null)   {   
				// 输出   
				System.out.println(el+"<br />");   
			} 

			int exitValue = process.waitFor();
			if(exitValue != 0){
				System.out.println("异常返回值：" + exitValue); 
			}
			// 关闭
			process.getOutputStream().close();
			process.destroy();
			System.out.println(System.getProperty("user.dir"));
		} catch (Exception e) {
			System.out.println(e);
		}
	}
}
