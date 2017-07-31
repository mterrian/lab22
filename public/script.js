var app = angular.module('myApp', []);

app.controller('myController', function($scope, $http) {
	

	$http({
		method: 'GET',
		url: '/test/ajax'
	}).then(function(response){
		console.log(response);
		$scope.rand = response.data[0];
    	setInterval(function () {
        $scope.$apply(function () {
        	var rng = Math.floor(Math.random() * response.data.length);
            $scope.rand = response.data[rng];
       	 });
    	}, 2000);
		
	});
});