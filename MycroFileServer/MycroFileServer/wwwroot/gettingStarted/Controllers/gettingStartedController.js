app.register.controller('productsListController', function($scope, $http) {
	$http.get('http://localhost:3000').then(function(res) {
		$scope.products = res.data.products;
	});


});