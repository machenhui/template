package test;

import com.google.template.soy.SoyFileSet;
import com.google.template.soy.data.SoyMapData;
import com.google.template.soy.jssrc.SoyJsSrcOptions;
import com.google.template.soy.tofu.SoyTofu;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.util.List;

import org.eclipse.jetty.util.resource.Resource;

public class HelloWorld {
  public  HelloWorld(){
	  
  }
  public static String transFile (String path) {

    // Bundle the Soy files for your project into a SoyFileSet.
    SoyFileSet sfs = new SoyFileSet.Builder().add(new File(path+"/soy/simple.soy")).build();

    // Compile the template into a SoyTofu object.
    // SoyTofu's newRenderer method returns an object that can render any template in file set.
    SoyTofu tofu = sfs.compileToJavaObj();
    
    SoyJsSrcOptions options = new SoyJsSrcOptions();
	List<String> jsSrc = sfs.compileToJsSrc(options, null);
	/*Resource targetDir = resourceResolver.getResource("templates/");
	if (targetDir.exists()) {
		String combinedSource = "";
		for (String src : jsSrc) {
			combinedSource += src;
		}
		File target = new File(targetDir.getFile(), "template.js");
		FileCopyUtils.copy(combinedSource.getBytes(), target);
	}*/
	
    // Call the template with no data.
    /*System.out.println(tofu.newRenderer("examples.simple.helloWorld").render());*/
	
	return jsSrc.toString();
  }
  
  public static String transFileDir (File file,String name) {
	  StringBuffer resultStr=new StringBuffer();
	  
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
				resultStr.append(transFileDir(tmpSoy,name));	
			}  
		    return resultStr.toString();
	  }else if(file.isFile()){
		    String fileName=file.getName();
		    System.out.println(name+"."+fileName);
		    
		    SoyFileSet sfs = new SoyFileSet.Builder().add(file).build();
		    
		    SoyTofu tofu = sfs.compileToJavaObj();
		    
		    SoyJsSrcOptions options = new SoyJsSrcOptions();
		    
			List<String> jsSrc = sfs.compileToJsSrc(options, null);
			return jsSrc.get(0);
		  
	  }
	  
	  return "";
  } 
  

}
