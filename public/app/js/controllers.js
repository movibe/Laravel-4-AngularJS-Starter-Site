angular.module('myApp', ['ui.router'])

	.controller('homeController',function($scope,$sanitize,$location,Authenticate,Flash){

		/********
		 * Alerts
		 ********/
		$scope.alerts = [];
		$scope.closeAlert = function(index) {
			$scope.alerts.splice(index, 1);
		};

		/********
		 * Login
		 ********/
		$scope.login = function(){
			Authenticate.save({
				'email': $sanitize($scope.email),
				'password': $sanitize($scope.password)
			},function() {
				$location.path('/home')
				Flash.clear()
				sessionStorage.authenticated = true;
			},function(response){
				$scope.alerts = [{ type: "warning", msg: response.data.message }];
			})
		}


	})


    .controller('loginController',function($scope,$sanitize,$location,Authenticate,Flash, $state, $stateParams, $interpolate){

		/********
		 * Alerts
		 ********/
		$scope.alerts = [];
		$scope.closeAlert = function(index) {
			$scope.alerts.splice(index, 1);
		};

		/********
		 * Login
		 ********/
		$scope.login = function(){
            Authenticate.save({
                'email': $sanitize($scope.email),
                'password': $sanitize($scope.password)
            },function() {
                $location.path('/home')
                Flash.clear()
                sessionStorage.authenticated = true;
            },function(response){
					$scope.alerts = [{ type: "warning", msg: response.data.message }];
            })
        }


	})

	.controller('registerController',function($scope,$sanitize,$location,Authenticate,Flash){

		/********
		 * Alerts
		 ********/
		$scope.alerts = [];
		$scope.closeAlert = function(index) {
			$scope.alerts.splice(index, 1);
		};

		/********
		 * Login
		 ********/
		$scope.login = function(){
			Authenticate.save({
				'email': $sanitize($scope.email),
				'password': $sanitize($scope.password)
			},function() {
				$location.path('/home')
				Flash.clear()
				sessionStorage.authenticated = true;
			},function(response){
				$scope.alerts = [{ type: "warning", msg: response.data.message }];
			})
		}


	})

    .controller('movieController',function($scope,$location,Authenticate, Movies,Flash){
        if (!sessionStorage.authenticated){
            $location.path('/')
            Flash.show("you should be authenticated to access this page")
        }
        Movies.get({},function(response){
            $scope.movies = response.movies
        })
        $scope.logout = function (){
            Authenticate.get({},function(response){
                delete sessionStorage.authenticated
                Flash.show(response.flash)
                $location.path('/')
            })
        }
    })