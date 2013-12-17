angular.module('myApp')
    .controller('loginController',function($scope,$sanitize,$location,Authenticate,Flash){

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
					$scope.alerts = [{ type: "danger", msg: response.data.message }];
            })
        }


})
    .controller('homeController',function($scope,$location,Authenticate, Movies,Flash){
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