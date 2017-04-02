var myApp = angular.module('myApp', []);
myApp.controller('myAppController', ['$scope', function myAppController($scope) {
  var vm = $scope;
  
  $scope.countries = [
    {name: 'China', population: 1300000000},
    {name: 'India', population: 19000000},
    {name: 'United States', population: 150000000},
  ]
}]);
