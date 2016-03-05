(function(){
  'use strict';

  angular
  .module("marvel")
  .factory("apiMarvel", apiMarvel);

  apiMarvel.$inject = ['$resource'];
  function apiMarvel($resource){
    apiKey = "4339f97c8d2f4e6b58223609ccd215b8";
    has = "a00641a5c54db3011f573060d17696d3";
    superHeroe = "Spider-Man";
    return $resource("http://gateway.marvel.com/v1/public/characters?apikey="+apiKey+"&ts=1&hash="+hash+"&name="+superHeroe+"",{},{});

  }

})();
