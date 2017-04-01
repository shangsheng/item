<?php
	 header("Content-Type:text/html;charset=UTF-8");
	 //热门作者
	  $recUrl='https://moment.douban.com/api/auth_authors/rec?alt=json&apikey=0bcf52793711959c236df76ba534c0d4&app_version=1.7.4&count=20&douban_udid=d623045db9fcb0d5243174c1bf1a675f887047c0&start=0&udid=9a34d8b038ff38971050199b0c5ee9c60c6d1ca3&version=6';
	 //全部作者
	 $allUrl='https://moment.douban.com/api/auth_authors/all?alt=json&apikey=0bcf52793711959c236df76ba534c0d4&app_version=1.7.4&count=20&douban_udid=d623045db9fcb0d5243174c1bf1a675f887047c0&start=0&udid=9a34d8b038ff38971050199b0c5ee9c60c6d1ca3&version=6';
	 //json字符串
	 $recauthor=file_get_contents($recUrl);
	 $allauthor=file_get_contents($allUrl);
	 //将json字符串转换成PHP对象
	 $recauthor=json_decode($recauthor);
	 $allauthor=json_decode($allauthor);

	 //创建数组
	 $array=array(
	 	"rec"=>$recauthor,
        "allResult"=>$allauthor
	 );
	 echo json_encode($array);
?>
