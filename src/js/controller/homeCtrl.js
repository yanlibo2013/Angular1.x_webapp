'use strict'

angular.module('app').controller('homeCtrl', ['$scope', '$http', 'cache', function($scope, $http, cache) {

    $scope.onTap = function() {
        alert("tap");
        // console.log($scope.event); // the event object
        // console.log('tap event called');
    }

}]);