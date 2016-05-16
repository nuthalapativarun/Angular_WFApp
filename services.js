//Service

weatherApp.service('cityService',function(){
    this.city="New York, NY";
    
});


weatherApp.service('weatherService',['$resource',function($resource){
    
   this.GetWeather=function(city,days){
      var weatherAPI=$resource("http://api.openweathermap.org/data/2.5/forecast/daily?APPID=e84614b91a23f5b336f5c428748b56e0",{
        callback:"JSON_CALLBACK"},{get:{method:"JSONP"}});
    
    return weatherAPI.get({q:city,cnt:days}); 
   }; 
    
}]);