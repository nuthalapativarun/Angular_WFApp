//Module
var weatherApp=angular.module('weatherApp',['ngRoute','ngResource']);


/*

//Routes
weatherApp.config(function($routeProvider){
    $routeProvider
    .when('/',{
        templateUrl:'pages/home.htm',
        controller:'homeController'
    })
    .when('/forecast',{
        templateUrl:'pages/forecast.htm',
        controller:'forecastController'
    })
    .when('/forecast/:days',{
        templateUrl:'pages/forecast.htm',
        controller:'forecastController'
    })
    
});


//Service

weatherApp.service('cityService',function(){
    this.city="New York, NY";
    
});

//Controllers
weatherApp.controller('homeController',['$scope', 'cityService',function($scope, cityService){
    
    $scope.city=cityService.city;
    $scope.$watch('city',function(){
        cityService.city=$scope.city;
    });
}]);


weatherApp.controller('forecastController',['$scope','$resource','$routeParams','cityService',function($scope,$resource,$routeParams,cityService){
    
    $scope.city=cityService.city;
    $scope.days=$routeParams.days || '2';
    console.log($scope.days);
    $scope.weatherAPI=$resource("http://api.openweathermap.org/data/2.5/forecast/daily?APPID=e84614b91a23f5b336f5c428748b56e0",{
        callback:"JSON_CALLBACK"},{get:{method:"JSONP"}});
    
    $scope.weatherResult=$scope.weatherAPI.get({q:$scope.city,cnt:$scope.days});
    
    //console.log($scope.weatherResult);
    
    $scope.convertToFahrenheit=function(degK){
        return Math.round(degK-273.15);
    };
    
    $scope.convertToDate=function(dt){
        return new Date(dt*1000);
    };
    
}]);

//Directive

weatherApp.directive('weatherReport',function(){
    
    return{
        restrict:"E",
        templateUrl:'directives/weatherReport.html',
        replace:true,
        scope:{
            
            weatherDay:"=" ,
            convertToStandard:"&",
            convertToDate: "&",
            dateFormat:"@"
            
        }
        
    }
    
    
});

*/
