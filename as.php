<?php
$con = mysql_connect("localhost","root","root");
if(!$con){
	die('数据库连接失败:'.mysql_error());
}
else{
	mysql_query("SET NAMES UTF8");
	mysql_select_db("websecurity",$con);
	$result = mysql_query("SELECT * FROM teacher");
	echo"<h2>欢迎</h2><p>ad</p>";
	echo"<table border='2'width=300><tr><th>id</th><th>name</th><th>sex</th><th>addr</th></tr>";
	while($row = mysql_fetch_array($result)){
		echo "<tr>";
		echo "<td>".$row['id']."</td>";
		echo "<td>".$row['name']."</td>";
		echo "<td>".$row['sex']."</td>";
		echo "<td>".$row['addr']."</td>";
	}
	echo "</table>";
}
mysql_close($con);
?>