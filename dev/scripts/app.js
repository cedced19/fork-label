angular.module('ForkLabel', ['ngCookies'])
.controller('ForkLabelCtrl', ['$scope', '$http', '$cookieStore', function($scope, $http, $cookieStore) {
    $http.get('config.json').success(function(data) {
        $scope.result = '';
        $scope.config = data;


        $scope.compile = function(){
            $cookieStore.put('reponame', $scope.config.reponame);
            $cookieStore.put('username', $scope.config.username);
            $cookieStore.put('organization', $scope.config.organization);
            if($scope.config.organization){
                $scope.result = $scope.config.html.start + $scope.config.username +'/'+ $scope.config.reponame + $scope.config.html.organization;
            }else{
                $scope.result = $scope.config.html.start + $scope.config.username +'/'+ $scope.config.reponame + $scope.config.html.alone;
            }
        };

        if($cookieStore.get('organization') !== undefined || $cookieStore.get('reponame') !== undefined || $cookieStore.get('username') !== undefined){
            $scope.config.reponame = $cookieStore.get('reponame');
            $scope.config.username = $cookieStore.get('username');
            $scope.config.organization = $cookieStore.get('organization') ;
            $scope.compile();
        }
    }).error(function() {
        $scope.error = true;
    });
}]);
