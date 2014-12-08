angular.module('ForkLabel', [])
.controller('ForkLabelCtrl', ['$scope', '$http', function($scope, $http) {
    $http.get('config.json').success(function(data) {
        
    }).error(function() {
        $scope.error = true;
    });
}]);