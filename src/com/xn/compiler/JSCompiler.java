package com.xn.compiler;

import java.io.File;
import java.io.IOException;
import java.util.LinkedHashMap;

import com.google.common.base.Charsets;
import com.google.common.io.Files;

/**
 * 负责合并JS文件
 * @author Administrator
 *
 */
public class JSCompiler extends CompilerBase implements CompilerInterface{
   
	public static String ADVANCED_OPTIMIZATIONS ="ADVANCED_OPTIMIZATIONS";
	public static String SIMPLE_OPTIMIZATIONS="SIMPLE_OPTIMIZATIONS";
	public JSCompiler(String rootPath) {
		
		super(rootPath);
		// TODO Auto-generated constructor stub
		this.setDefaultParams();
		this.CompileToolPath = this.rootPath+File.separator+"WEB-INF"+File.separator+"lib"+File.separator+"compiler.jar";
	}


	@Override
	public void setDefaultParams() {
		// TODO Auto-generated method stub
		/**
		 * 编译等级
		 */
		this.params.put("compilation_level", this.SIMPLE_OPTIMIZATIONS);
		this.params.put("js_output_file", this.rootPath+File.separator+"out_js"+File.separator+"out.js");
	}

	public String build(LinkedHashMap<String,String> params){
		this.setParams(params);
		String command = this.changeMapToCommandString(params);
		System.out.println("执行命令："+command);
		String resultStr = null;
		try {
			int result = this.excuteRunTime(command);
			if(result==0){
				resultStr = Files.toString(new File(this.params.get("js_output_file")), Charsets.UTF_8);
			}else{
				resultStr = "压缩异常";
			}
		} catch (IOException | InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			resultStr = "压缩异常";
		}
		return resultStr;
	}
	
	public static void main(String[] args){
		File file = new File(System.getProperty("user.dir")+File.separator + "WebContent"+File.separator+"configs"+File.separator+"oauth");
		try {
			/**
			 * 使用google 提供的Files类直接读取静态文件内容
			 */
			String fileContents = Files.toString(file, Charsets.UTF_8);
			System.out.print(fileContents);
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}


	
}
