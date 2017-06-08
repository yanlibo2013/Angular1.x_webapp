'use strict'

angular.module('app').controller('favoriteCtrl', ['$scope', '$http', function ($scope, $http) {

    $http.get('data/myFavorite.json').then(function (data) {
        $scope.favorList = data.data;
    })
}]);