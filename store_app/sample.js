var app=angular.module("myApp",['ngRoute']);

app.config(['$routeProvider',function($routeProvider){
	$routeProvider
	.when("/",{
		templateUrl:'views/home.html'
	})
	.when('/home',{
		templateUrl:'views/home.html',
		controller:'home'
	})

	.when('/about',{
		templateUrl:'views/about.html',
		controller:'about'
	})

	.when('/CV',{
		templateUrl:'views/CV.html',
		controller:'CV'
	})

	.when('/blog',{
		templateUrl:'views/blog.html',
		controller:'blog'
	})
}]);

app.controller('home', ['$scope', function($scope){
	
}]);
app.controller('about', ['$scope', function($scope){
	
}]);
app.controller('CV', ['$scope', function($scope){
	
}]);
app.controller('blog', ['$scope', function($scope){
	
}]);