(function(){
  'use strict';

  angular.module("marvel")
  .controller("marvelCtrl", marvelCtrl);

  marvelCtrl.$inject = ["characters"];

  function marvelCtrl(characters){
    var marvel = this;
    marvel.characters = characters;
  }
})();
