package com.xn.test;

import java.io.File;
import java.util.LinkedHashMap;
import java.util.LinkedList;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import com.xn.compiler.CSSCompiler_1;
import com.xn.compiler.JSCompiler;
import com.xn.compiler.TemplateCompiler_1;

public class Template {

	public static void main(String[] arguments){
		String rootPath = System.getProperty("user.dir")+File.separator+"WebContent"+File.separator;
		
		TemplateCompiler_1 jsc = new TemplateCompiler_1(rootPath);
		LinkedHashMap<String,String> params = new LinkedHashMap<String,String>();
		LinkedList<String> templateFiles = new LinkedList<String>();
		
		templateFiles.push(rootPath+"soy"+File.separator+"test.soy");
		String result = jsc.build(params,templateFiles);
		System.out.println(result);
		
	/*	String candidate = "A Matcher examines the results of applying a pattern.<!--as&&&dfa\\sdfsad-->";
		String regex = "\\ba\\w*\\b";
		regex ="<!--[^-->]*-->";
		Pattern p = Pattern.compile(regex);
		Matcher m = p.matcher(candidate);
		String val = null;
		System.out.println("INPUT: " + candidate);
		System.out.println("REGEX: " + regex + "\r\n");
		System.out.println(m.replaceAll(""));
		while (m.find()) {
			val = m.group();
			System.out.println("MATCH: " + val);
		}  */

	
	}
}
