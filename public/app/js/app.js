angular.module("myApp",['ngResource','ngSanitize', 'ngRoute', 'ui.bootstrap', 'ui.router'])

	.config(['$stateProvider', '$urlRouterProvider', '$locationProvider',function($stateProvider, $urlRouterProvider, $locationProvider){

		$locationProvider.html5Mode(true);

		$urlRouterProvider.otherwise("/");

		// Now set up the states
		$stateProvider
			.state('home', {
				url: "/",
				templateUrl: "app/views/home.html",
				controller: 'homeController'
			})
			.state('movie', {
				url: "/",
				templateUrl: "app/views/movie.html",
				controller: 'movieController'
			})
			.state('login', {
				url: "/login",
				templateUrl: "app/views/login.html",
				controller: 'loginController'
			})
			.state('register', {
				url: "/register",
				templateUrl: "app/views/register.html",
				controller: 'registerController'
			})

	}])

	.config(function($httpProvider){

		var interceptor = function($rootScope,$location,$q,Flash){
		var success = function(response){
			return response
		}

		var error = function(response){
			if (response.status = 401){
				delete sessionStorage.authenticated
				$location.path('/')
				Flash.show(response.data.flash)
			}
			return $q.reject(response)
		}
			return function(promise){
				return promise.then(success, error)
			}
		}
		$httpProvider.responseInterceptors.push(interceptor)

	})

	.run(function($rootScope, $http, CSRF_TOKEN){

		$http.defaults.headers.common['csrf_token'] = CSRF_TOKEN;


	})