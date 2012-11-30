<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>测试页面</title>
<%@include file="index.jsp" %>
</head>
<body>
<script type="text/javascript">
	console.profile("xnTest");
	var startTime = window.performance.webkitNow();
</script>
<% int b = 0;for(b =0;b<10000;b++){ %>
  <img src="http://fmn.rrimg.com/fmn065/20120814/1145/original_3Z6x_779400008e7d1260.jpg" />
  <img src="http://fmn.rrfmn.com/fmn058/20120815/1055/large_HDLW_26bd00002adf1260.jpg" />
<%} %>
<script type="text/javascript">
var endTime = window.performance.webkitNow();
console.profileEnd("xnTest");
console.log(console.profiles[0].head.totalTime);
console.log(endTime-startTime);
</script>
</body>
</html>