var conductores = angular.module('conductores', []);
conductores.controller('conductorescontroller', function ($scope, $http) {
    $http.get('/Conductors/Index').then(function (response) {
        $scope.lista = response.data;
    })
})

