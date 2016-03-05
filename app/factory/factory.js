(function(){
  'use strict';

  angular
  .module("marvel", ['ngResource'])
  .factory("apiMarvel", apiMarvel);

  apiMarvel.$inject = ['$resource'];
  function apiMarvel($resource){
    return $resource("http://gateway.marvel.com/v1/public/characters?apikey=4339f97c8d2f4e6b58223609ccd215b8&ts=1&hash=a00641a5c54db3011f573060d17696d3&name=Spider-Man");

  }

})();
