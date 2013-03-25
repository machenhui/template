package com.xn.test;

import java.io.File;
import java.util.LinkedHashMap;
import java.util.LinkedList;

import com.xn.compiler.CSSCompiler_1;
import com.xn.compiler.JSCompiler;

public class CSS {

	public static void main(String[] arguments){
		String rootPath = System.getProperty("user.dir")+File.separator+"WebContent"+File.separator;
		
		CSSCompiler_1 jsc = new CSSCompiler_1(rootPath);
		LinkedHashMap<String,String> params = new LinkedHashMap<String,String>();
		LinkedList<String> cssFiles = new LinkedList<String>();
		cssFiles.push(rootPath+"gss"+File.separator+"test.gss");
		String result = jsc.build(params,cssFiles);
		System.out.println(result);
	}
}
