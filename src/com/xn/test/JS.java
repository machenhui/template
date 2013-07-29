package com.xn.test;

import java.io.File;
import java.util.LinkedHashMap;

import com.xn.compiler.JSCompiler;

public class JS {

	public static void main(String[] args){
		String rootPath = System.getProperty("user.dir")+File.separator+"WebContent"+File.separator;
		
		JSCompiler jsc = new JSCompiler(rootPath);
		LinkedHashMap<String,String> params = new LinkedHashMap<String,String>();
		params.put("js",rootPath+"js"+File.separator+"test.js");
		params.put("js",rootPath+"js"+File.separator+"test1.js");
		params.put("js",rootPath+"js"+File.separator+"test2.js");
		params.put("js_output_file",rootPath+"out_js"+File.separator+"test.js");
		params.put("compilation_level",com.xn.compiler.JSCompiler.ADVANCED_OPTIMIZATIONS);
		String result = jsc.build(params);
		System.out.println(result);
	}
}
