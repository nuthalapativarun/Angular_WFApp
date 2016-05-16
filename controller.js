//Controllers
weatherApp.controller('homeController',['$scope','$location', 'cityService',function($scope,$location, cityService){
    
    $scope.city=cityService.city;
    $scope.$watch('city',function(){
        cityService.city=$scope.city;
    });
    
    $scope.submit=function(){
        $location.path("/forecast");
    }
}]);


weatherApp.controller('forecastController',['$scope','$routeParams','cityService','weatherService',function($scope,$routeParams,cityService,weatherService){
    
    $scope.city=cityService.city;
    $scope.days=$routeParams.days || '2';
    console.log($scope.days);
    /*$scope.weatherAPI=$resource("http://api.openweathermap.org/data/2.5/forecast/daily?APPID=e84614b91a23f5b336f5c428748b56e0",{
        callback:"JSON_CALLBACK"},{get:{method:"JSONP"}});
    */
    $scope.weatherResult=weatherService.GetWeather($scope.city,$scope.days);
    
    //console.log($scope.weatherResult);
    
    $scope.convertToFahrenheit=function(degK){
        return Math.round(degK-273.15);
    };
    
    $scope.convertToDate=function(dt){
        return new Date(dt*1000);
    };
    
}]);
