/*
* @Author: Administrator
* @Date:   2017-03-29 18:49:53
* @Last Modified by:   Administrator
* @Last Modified time: 2017-04-01 20:06:49
*/
var yike=angular.module("yike",["ngRoute"]);
//导航菜单配置
yike.config(["$routeProvider",function($routeProvider){
	$routeProvider.when("/today",{
		controller:"bodyController",
		templateUrl:"./views/today.html"
	}).when("/older",{
		controller:"olderController",
		templateUrl:"./views/older.html"
	}).when("/author",{
		controller:"authorController",
	 	templateUrl:"./views/author.html"
	 }).when("/category",{
	 	controller:"categoryController",
		templateUrl:"./views/category.html"
	 }).when("/favourite",{
	 	controller:"favourController",
		templateUrl:"./views/favourite.html"
	 }).when("/settings",{
		templateUrl:"./views/settings.html"
	 }).otherwise({
		redirectTo:"/today"
	 })
}])
//内容显示
yike.controller("bodyController",["$scope","$http","$filter","$rootScope",function($scope,$http,
	$filter,$rootScope){
	$rootScope.text="今日一刻";
	$rootScope.hide=false;
	var date=$filter("date");
	var Today=date(new Date(),"yyyy-MM-dd")
	$http({
		url:"./api/today.php",
		method:"get",
		params:{
			date:Today
		}
	}).success(function(data){
		console.log(data)
		$rootScope.hide=true;
		$scope.posts=data.posts;
		$scope.date=data.date;
	})
}])
//动画配置 
yike.run(["$rootScope",function($rootScope){
	$rootScope.falge=false;
	var nav=[{"text":"今日一刻"},{"text":"往期内容"},
					{"text":"热门作者"},{"text":"栏目浏览"},
					{"text":"我的喜欢"},{"text":"设置"}
	]
	
	$rootScope.hide=false;
	$rootScope.change=function(index){
		$rootScope.falge=!$rootScope.falge;
		console.log(typeof index)
		var navsdd=document.querySelectorAll(".navs dd");
		if($rootScope.falge){
			for(var i=0;i<navsdd.length;i++){
				navsdd[i].style.transform="translate(0%)";
				navsdd[i].style.transitionDuration=i*0.1+0.15+"s";
				navsdd[i].style.transitionDelay=0.3+"s";
			}
			
		}
		if(typeof index=="number"){
				
				$rootScope.text=nav[index].text;
				

			}
	}
}])
yike.controller("yikeController",["$scope",function($scope){
	$scope.list=[
		{"text":"今日一刻","link":"#/today","inoc":"icon-home"},
		{"text":"往期内容","link":"#/older","inoc":"icon-file-empty"},
		{"text":"热门作者","link":"#/author","inoc":"icon-pencil"},
		{"text":"栏目浏览","link":"#/category","inoc":"icon-menu"},
		{"text":"我的喜欢","link":"#/favourite","inoc":"icon-heart"},
		{"text":"设置","link":"#/settings","inoc":"icon-cog"}
	]
}])
//往期内容
yike.controller("olderController",["$scope","$http","$rootScope","$filter",function(
	$scope,$http,$rootScope,$filter){
	$rootScope.text="往期内容";
	$rootScope.hide=false;
	
	$http({
		url:"./api/older.php",
		method:"get",
		params:{
			day:-1
		}
	}).success(function(data){
		console.log(data)
		$rootScope.hide=true;
		$scope.posts=data.posts;
		$scope.date=data.date;
	})
}])
//热门作者
yike.controller("authorController",["$scope","$rootScope","$http","$filter",function(
	$scope,$rootScope,$http,$filter){
	$rootScope.text="热门作者";
	$rootScope.hide=false;
	$http({
		url:"./api/author.php",
		method:"get"
	}).success(function(data){
		console.log(data);
		$rootScope.hide=true;
		$scope.rec=data.rec.authors;
		$scope.allResult=data.allResult.authors;
	})
}])
//栏目浏览
yike.controller("categoryController",["$scope","$rootScope","$http","$filter",function(
	$scope,$rootScope,$http,$filter){
	$rootScope.text="栏目浏览";
	$rootScope.hide=false;
	$http({
		url:"./api/category.php",
		method:"get"
	}).success(function(data){
		console.log(data);
		$rootScope.hide=true;
		$rootScope.columns=data.columns;
	})
}])
//我的喜欢
yike.controller("favourController",["$scope","$rootScope","$http",function($scope,$rootScope,
	$http){
	$rootScope.text="我的喜欢";
	$rootScope.hide=false;
	$http({
		url:"./api/favourite.php",
		method:"get"
	}).success(function(data){
		console.log(data);
		$rootScope.hide=true;
	})
}])
//设置
yike.controller("setController",["$scope","$rootScope","$http",function($scope,

	$rootScope,$http){
	$rootScope.text="设置";
	$rootScope.hide=false;
	$http({
		url:"",
		method:"get"
	}).success(function(data){
		console.log(data);
		$rootScope.hide=true;
	})
}])