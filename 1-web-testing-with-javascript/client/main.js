var testApp = angular.module('testApp', []);

testApp.controller('AddController', ['$scope', function($scope){
    $scope.result = null;
    $scope.add = function(x, y)
    {
        $scope.result = parseInt(x) + parseInt(y);
    }
}]);