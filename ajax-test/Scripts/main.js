﻿var conductores = angular.module('conductores', ["ngSanitize"]);

conductores.factory("listaconductores", function ($http) {
    var factoria = {};
    factoria.listaconductores = function () {
        return $http.get("http://localhost:52033/Conductors/listaconductores");
    }
    return factoria;
});
  
conductores.controller("conductorescontroller", function ($scope, listaconductores) {
    listaconductores.listaconductores().success(function (datos) {
        $scope.listaconductores = datos
        
    });
});



var usuarios = angular.module('usuarios', ["ngSanitize"]);

usuarios.factory("listausuarios", function ($http) {
    var factoria = {};
    factoria.listausuarios = function () {
        return $http.get("http://localhost:52033/Usuarios/listausuarios");
    }
    return factoria;
});

usuarios.controller("usuarioscontroller", function ($scope, listausuarios) {
    listausuarios.listausuarios().success(function (datos) {
        $scope.listausuarios = datos

    });
});
