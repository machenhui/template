package com.xn.compiler;

import java.io.File;
import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.Date;
import java.util.Iterator;
import java.util.LinkedHashMap;
import java.util.LinkedList;
import java.util.regex.Matcher;
import java.util.regex.Pattern;







import com.google.common.base.Charsets;
import com.google.common.io.Files;

/**
 * 负责合并JS文件
 * @author Administrator
 *
 */
public class TemplateCompiler_1 extends CompilerBase implements CompilerInterface{
   
	private String soyUtilsJS = this.rootPath+File.separator+"WEB-INF"+File.separator+"lib"+File.separator+"soyutils.js";
	private String soyUtilsUseGooGJS = this.rootPath+File.separator+"WEB-INF"+File.separator+"lib"+File.separator+"soyutils_usegoog.js";
	private String googBaseJS = this.rootPath+File.separator+"WEB-INF"+File.separator+"lib"+File.separator+"base_tmp.js";
	private String renameMapJS = this.rootPath+File.separator+"renameJS"+File.separator+"renameing_map.js";

	private String soyOutPutPath = this.rootPath+File.separator+"soy_js"+File.separator;
	public TemplateCompiler_1(String rootPath) {
		
		super(rootPath);
		// TODO Auto-generated constructor stub
		this.setDefaultParams();
		this.CompileToolPath = this.rootPath+File.separator+"WEB-INF"+File.separator+"lib"+File.separator+"SoyToJsSrcCompiler.jar";
	}


	@Override
	public void setDefaultParams() {
		// TODO Auto-generated method stub
		/**
		 * 编译等级
		 */
		// 生成文件存放地址
		params.put("outputPathFormat", this.soyOutPutPath+"{INPUT_FILE_NAME}.js");
		
		// 混淆命名的压缩参数
		params.put("cssHandlingScheme", "GOOG");
		
	}
	
	private String getSoyJSFilesContent(LinkedList<String> templateFiles) throws IOException{
		Iterator<String> ite = templateFiles.iterator();
		StringBuffer sb = new StringBuffer();
		
		sb.append(Files.toString(new File(this.googBaseJS), Charsets.UTF_8));
		sb.append(Files.toString(new File(this.renameMapJS), Charsets.UTF_8));
		sb.append(Files.toString(new File(this.soyUtilsJS), Charsets.UTF_8));
		//sb.append(Files.toString(new File(this.soyUtilsUseGooGJS), Charsets.UTF_8));
		
		while(ite.hasNext()){
			File temp = new File(ite.next());
			File soyJS = new File(this.soyOutPutPath+temp.getName()+".js");
			String content = Files.toString(soyJS, Charsets.UTF_8);
			
			/*Pattern pattern = Pattern.compile("[\r,\n,\t]*");*/
			Pattern pattern = Pattern.compile("<!--[^-->]*-->");
			Matcher matcher = pattern.matcher(content);
			content = matcher.replaceAll("");
			Files.write(content, soyJS, Charsets.UTF_8);
			sb.append(content);
		}
		return sb.toString();
	}

	private File trimFile(File soyFile) throws IOException{
		String content = Files.toString(soyFile, Charsets.UTF_8);
		Pattern pattern = Pattern.compile("(<!--[^-->]*-->|[\t,\n]*)");
		Matcher matcher = pattern.matcher(content);
		content = matcher.replaceAll("");
		File temp;
		try {
			temp = new File(this.rootPath+"soy_tmp"+File.separator+getMD5(content)+soyFile.getName());
			Files.write(content, temp, Charsets.UTF_8);
			
			return temp;
		} catch (NoSuchAlgorithmException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}		
		return null;
	}
	private String getMD5(String content) throws UnsupportedEncodingException, NoSuchAlgorithmException{
		//确定计算方法 
		MessageDigest md5 = MessageDigest.getInstance("MD5");
		
		//BASE64Encoder base64en = new BASE64Encoder(); 
		//加密后的字符串 
		//String newstr=base64en.encode(md5.digest(content.getBytes("utf-8"))); 
		
		String newstr = "b"+new Date().getTime();
		System.out.println(newstr);
	    return newstr;
		
	}
	public String build(LinkedHashMap<String,String> params,LinkedList<String> templateFiles){
		this.setParams(params);
		StringBuffer command = new StringBuffer();
		command.append(this.changeMapToCommandString(params));
		Iterator<String> ite = templateFiles.iterator();
		LinkedList <String> trimTemplates = new LinkedList <String>();
		while(ite.hasNext()){
			String filepath = ite.next();
			File tempFile = null;
			try {
				tempFile = trimFile(new File(filepath));
				filepath = tempFile.getPath();
			} catch (IOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			command.append(" "+ filepath);
			trimTemplates.push(tempFile.getName());
		}
		System.out.println("执行命令："+command);
		String resultStr = null;
		try {
			int result = this.excuteRunTime(command.toString());
			if(result==0){
				resultStr = getSoyJSFilesContent(trimTemplates);
			}else{
				resultStr = "压缩异常";
			}
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			resultStr = "压缩异常";
		}
		return resultStr;
	}
	
	public static void main(String[] args){
		
	}


	
}
