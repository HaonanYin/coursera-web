(function () {
    'use strict';
    angular.module('LunchCheck', []).controller('LunchCheckController', function ($scope) {
        $scope.inputMsg = "";

        $scope.check = function () {
            $scope.showMsg = "Please enter data first";

            if ($scope.inputMsg.length > 0) {
                var words = $scope.inputMsg.split(',');
                if (words.length > 3) {
                    $scope.showMsg = "Too much!"
                } else {
                    $scope.showMsg = "Enjoy!"
                }
            }
        }
    });
})();
