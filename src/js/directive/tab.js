'use strict'

angular.module('app').directive('appTab', [function () {
    return {
        restrict: 'AE',
        replace: true,
        scope: {
            list: '=',
            clickFn: '&',
            selectId: '='
        },
        templateUrl: 'view/template/tab.html',
        link: function ($scope) {
            $scope.click = function (tab) {
                $scope.selectId = tab.id;
                $scope.clickFn(tab);
            };
        }
    }
}]);