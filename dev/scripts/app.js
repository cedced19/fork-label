angular.module('ForkLabel', [])
.controller('ForkLabelCtrl', ['$scope', '$http', function($scope, $http) {
    $http.get('config.json').success(function(data) {
        $scope.result = '';
        $scope.config = data;
        
        $scope.compile = function(){
            if($scope.config.organization){
                $scope.result = $scope.config.html.start + $scope.config.username +'/'+ $scope.config.reponame + $scope.config.html.organization;
            }else{
                $scope.result = $scope.config.html.start + $scope.config.username +'/'+ $scope.config.reponame + $scope.config.html.alone;
            }
        }
    }).error(function() {
        $scope.error = true;
    });
}]);