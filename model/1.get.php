<?php
header('contet-type:text/html;charset="utf-8"');
error_reporting(0); // 关闭错误报告
// $_REQUEST
// `$_REQUEST`可以获取get方式传过来的数据也可以获取post方式传过来的数据
// 如果使用`$_REQUEST`获取数据则用get方式或post方式传递都可以
// 但如果指明了用get方式或post方式获取数据，传递方式需要对应起来
$username = $_GET['username'];
$age = $GET['age'];

echo "名字：{$username}，年龄：{$age}";

 ?>
