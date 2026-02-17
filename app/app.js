var myNinjaApp = angular.module("myNinjaApp", ["ngRoute"]);

myNinjaApp.config([
    "$routeProvider",
    ($routeProvider) => {
        $routeProvider
            .when("/home", {
                templateUrl: "views/home.html",
            })
            .when("/directory", {
                templateUrl: "views/directory.html",
                controller: "NinjaController",
            })
            .otherwise({
                redirectTo: "/home",
            });
    },
]);

myNinjaApp.controller("NinjaController", [
    "$scope",
    "$http",
    ($scope, $http) => {
        $scope.addNinja = () => {
            $scope.ninjas.push({
                name: $scope.newninja.name,
                belt: $scope.newninja.belt,
                rate: parseInt($scope.newninja.rate),
                available: true,
            });
            $scope.newninja.name = "";
            $scope.newninja.belt = "";
            $scope.newninja.rate = "";
        };

        $scope.removeNinja = (ninja) => {
            var removeNinja = $scope.ninjas.indexOf(ninja);
            $scope.ninjas.splice(removeNinja, 1);
        };

        $scope.ninjas = [
            {
                name: "Yoshi",
                belt: "green",
                rate: 50,
                available: true,
            },
            {
                name: "Crystal",
                belt: "Yellow",
                rate: 30,
                available: true,
            },
            {
                name: "Ryu",
                belt: "orange",
                rate: 10,
                available: false,
            },
            {
                name: "Shaun",
                belt: "black",
                rate: 1000,
                available: true,
            },
        ];
        $http.get("data/ninjas.json").success((data) => {
            $scope.ninjas = data;
        });
    },
]);
