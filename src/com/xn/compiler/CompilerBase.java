package com.xn.compiler;

import java.io.BufferedReader;
import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.util.Iterator;
import java.util.LinkedHashMap;
import java.util.Set;

public  class CompilerBase  {
	/**
	 * 文件所在的根目录
	 */
	protected String rootPath;
	/**
	 * 参数列表
	 */
	protected LinkedHashMap<String,String> params = new LinkedHashMap<String,String>();
	/**
	 * 编译工具的默认路径
	 */
	protected String CompileToolPath=null;
	public CompilerBase(String rootPath){
		this.rootPath = rootPath;
		
	}
	
	protected void setParams(LinkedHashMap<String,String> paramsMap){
		Set<String>  keys = paramsMap.keySet();
		for(String key : keys){
			params.put(key, paramsMap.get(key));
		}
		
	}
	
	protected String changeMapToCommandString(LinkedHashMap<String,String> paramsMap){
		StringBuffer result = new StringBuffer();
		result.append("java -jar  " +this.CompileToolPath);
		Set<String>  keys = params.keySet();
		for(String key : keys){
			
			result.append(" --"+key+" "+params.get(key)+" ");
		}
		
		return result.toString();
	}
	
	protected int excuteRunTime(String command) throws IOException, InterruptedException{
		Process process = null;
		
		System.out.println(command);
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
	
		while ((el = er.readLine()) != null)   {   
			// 输出   
			System.out.println("错误信息:"+el);   
		} 
		
		

		int exitValue = process.waitFor();
		if(exitValue != 0){
			System.out.println("异常返回值：" + exitValue); 
		}
		// 关闭
		process.getOutputStream().close();
		process.destroy();
		
		return exitValue;
	}

	

}
