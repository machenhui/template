<%@page import="test.HelloWorld"%>
<%@page import="com.google.template.soy.SoyFileSet"%>
<%@page import="com.google.template.soy.jssrc.SoyJsSrcOptions"%>
<%@page import="com.google.template.soy.tofu.SoyTofu"%>

<%@page import="java.io.File"%>
<%@page import="java.util.List"%>
<%@ page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="utf-8" import="java.util.*"%>
<%
	/* String str=HelloWorld.test(request.getRealPath("/")); */
	/* response.setHeader("content-type", "text/javascript"); */
	/*  out.print(str); */
	// Bundle the Soy files for your project into a SoyFileSet.
	File directory = new File(request.getRealPath("/") + "/soy/");
	File[] soys = directory.listFiles();
	int i = soys.length;
	while (i-- != 0) {
		File tmpSoy = soys[i];
%>
<script type="text/javascript" id="<%=tmpSoy.getName()%>">
<%
				/* SoyFileSet sfs = new SoyFileSet.Builder().add(tmpSoy).build();
				SoyJsSrcOptions options = new SoyJsSrcOptions();
				List<String> jsSrc = sfs.compileToJsSrc(options, null);
				out.print(jsSrc.get(0)); */
%>

</script>
<%
	}
%>