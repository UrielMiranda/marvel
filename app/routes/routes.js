(function(){
  'use strict';

  angular
  .module("marvel")
  .config(configuration);

  configuration.$inject = ['$routeProvider'];

  function configuration($routeProvider){
    $routeProvider
    .when('/',
      {
        templateUrl : './app/home/ctrl_home.html',
        controller  : 'marvelCtrl',
        controllerAs: "marvel"
      })
      .otherwise({
        redirectTo : '/'
      });
    }
})();
