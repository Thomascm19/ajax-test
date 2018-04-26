var conductores = angular.module('conductores', ["ngSanitize"]);

conductores.factory("listaconductores", function ($http) {
    var factoria = {};
    factoria.listaconductores = function () {
        return $http.get("http://localhost:52033/Conductors/listaconductores");
    }
    return factoria;
});
  
conductores.controller("listaconductores", function ($scope, listaconductores) {
    listaconductores.listarconductores().success(function (datos) {
        $scope.listaconductores = datos

    });
});

