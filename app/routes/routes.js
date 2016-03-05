(function(){
  'use strict';

  angular
  .module("marvel")
  .config(configuration);


  charactersData.$inject = ["apiMarvel"];
  function charactersData(apiMarvel){
    return apiMarvel.query();
  }

  configuration.$inject = ['$routeProvider'];
  function configuration($routeProvider){
    $routeProvider
    .when('/',
      {
        templateUrl  : './app/home/ctrl_home.html',
        controller   : 'marvelCtrl',
        controllerAs : "marvel",
        resolve      : {
          characters: charactersData,
        }
      })
      .otherwise({
        redirectTo : '/'
      });
    }
})();
