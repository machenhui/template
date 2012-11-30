package com.xn.compiler;

import com.google.template.soy.SoyFileSet;
import com.google.template.soy.SoyFileSet.Builder;
import com.google.template.soy.data.SoyMapData;
import com.google.template.soy.jssrc.SoyJsSrcOptions;
import com.google.template.soy.jssrc.SoyJsSrcOptions.CodeStyle;
import com.google.template.soy.tofu.SoyTofu;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.util.Iterator;
import java.util.LinkedList;
import java.util.List;
import java.util.regex.Pattern;

import org.eclipse.jetty.util.resource.Resource;

public class TemplateTrans {
  public  TemplateTrans(){
	  
  }
  public static String transFile (File soyFile) {


    SoyFileSet sfs = new SoyFileSet.Builder().add(soyFile).build();

    SoyJsSrcOptions options = new SoyJsSrcOptions();
    
    //options.setCodeStyle(CodeStyle.CONCAT);
	List<String> jsSrc = sfs.compileToJsSrc(options, null);

	
	return jsSrc.toString();
  }
  
  private static LinkedList<File>  decodeConfig(File configFile) throws IOException{
	  LinkedList<File> result = new LinkedList<File>();
	  BufferedReader bf = new BufferedReader(new FileReader(configFile));
	  String content ="";
	  String rootPath = configFile.getParentFile().getParentFile().getPath();
	  String basePath = rootPath+"/soy/";
	  while(content != null){
		   content = bf.readLine();
		   
		   if(content == null){
		    break;
		   }
		   content = content.split(" ")[0];
		   if(content.trim() !=null &&content.trim().endsWith("soy")){
			   System.out.println(content.trim());
			   
			   result.add(new File(basePath+content.trim()));
		   }
		 
		}
	  return result;
  }
  
  public static String transFileConfig (File configFile) {
	  StringBuffer resultStr=new StringBuffer();
	  Builder builder = new SoyFileSet.Builder();
	  try {
		LinkedList<File> fileList = decodeConfig(configFile);
		Iterator<File> iterator = fileList.iterator();
		while(iterator.hasNext()){
			File temp = iterator.next();
			//resultStr.append(transFile(temp));
			builder.add(temp);
			  
		}
		
		 SoyFileSet sfs = builder.build();

		 SoyJsSrcOptions options = new SoyJsSrcOptions();
		 List<String> jsSrc = sfs.compileToJsSrc(options, null);
		 Iterator<String> iteratorJS = jsSrc.iterator();
			while(iteratorJS.hasNext()){
				resultStr.append(iteratorJS.next());
			}
			
	} catch (IOException e) {
		// TODO Auto-generated catch block
		e.printStackTrace();
	}
	  return resultStr.toString();
  }
  
  public static Builder transFileDirBuilder (File file,String name,Builder builder) {
	  
	  if(file.isDirectory()){
		
		  File[] soys = file.listFiles();
		  if(name==null){
			  name=file.getName();
		  }else{
			  name+="."+file.getName();
		  }
		  
		  int i = soys.length;
			while (i-- != 0) {
				File tmpSoy = soys[i];				
				builder = transFileDirBuilder(tmpSoy,name,builder);	
				
			}  
		    
	  }else if(file.isFile()){
		    String fileName=file.getName();
		    System.out.println(name+"."+fileName);
		    builder.add(file);
		   	  
	  }else{
		  System.out.println("-----");
	  }
	  
	  return builder;	
  }
  public static String transFileDir (File file,String name) {
	  StringBuilder result = new StringBuilder();
	  Builder builder = new SoyFileSet.Builder();
	  SoyFileSet sfs = transFileDirBuilder(file,name,builder).build();
	    
	    
	    SoyJsSrcOptions options = new SoyJsSrcOptions();
	    //options.setCodeStyle(CodeStyle.CONCAT);
		List<String> jsSrc = sfs.compileToJsSrc(options, null);
		
		Iterator<String> iterator = jsSrc.iterator();
		while(iterator.hasNext()){
			result.append(iterator.next());
		}
		return result.toString();
	 
  } 
  

}
