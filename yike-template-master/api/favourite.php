<?php
		$url="https://moment.douban.com/api/column/48/posts?alt=json&apikey=0bcf52793711959c236df76ba534c0d4&app_version=1.7.4&douban_udid=d623045db9fcb0d5243174c1bf1a675f887047c0&max_id=142703&udid=9a34d8b038ff38971050199b0c5ee9c60c6d1ca3&version=6";
		$fav=file_get_contents($url);
		echo $fav
?>
