(function(){
  'use strict';

  angular.module("marvel")
  .controller("marvelCtrl", marvelCtrl);

  function marvelCtrl(characters){
    var marvel = this;
    marvel.characters = characters;
  }
})();
