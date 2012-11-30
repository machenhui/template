package com.xn.compiler;

import java.io.File;
import java.io.IOException;
import java.util.Iterator;
import java.util.LinkedHashMap;
import java.util.LinkedList;

import com.google.common.base.Charsets;
import com.google.common.io.Files;

/**
 * 负责合并JS文件
 * @author Administrator
 *
 */
public class CSSCompiler_1 extends CompilerBase implements CompilerInterface{
   

	public CSSCompiler_1(String rootPath) {
		
		super(rootPath);
		// TODO Auto-generated constructor stub
		this.setDefaultParams();
		this.CompileToolPath = this.rootPath+File.separator+"WEB-INF"+File.separator+"lib"+File.separator+"closure-stylesheets.jar";
	}


	@Override
	public void setDefaultParams() {
		// TODO Auto-generated method stub
		/**
		 * 编译等级
		 */
		// 生成文件存放地址
		params.put("output-file", this.rootPath + File.separator + "g_css"
				+ File.separator + "out.css");
		// 是否在控制台输出
		// params.put("pretty-print", "");
		// 混淆命名的压缩参数
		params.put("output-renaming-map-format", "CLOSURE_COMPILED");
		// rename 使用的方式
		params.put("rename", "CLOSURE");
		// rename map 生成的键值对的文件
		params.put("output-renaming-map", this.rootPath+"renameJS" + File.separator
				+ "renameing_map.js");
		// 去除CSS文件用其他浏览器用的代码
		params.put("vendor", "WEBKIT");
	}
	
	

	public String build(LinkedHashMap<String,String> params,LinkedList<String> cssfiles){
		this.setParams(params);
		StringBuffer command = new StringBuffer();
		command.append(this.changeMapToCommandString(params));
		Iterator ite = cssfiles.iterator();
		
		while(ite.hasNext()){
			command.append(" "+ ite.next());
		}
		System.out.println("执行命令："+command);
		String resultStr = null;
		try {
			int result = this.excuteRunTime(command.toString());
			if(result==0){
				resultStr = Files.toString(new File(this.params.get("output-file")), Charsets.UTF_8);
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
		
	}


	
}
