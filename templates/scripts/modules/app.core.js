'use strict';

var Core = Class.extend(function(){
    var module = this;
    module.settings = {}
    
    //initializer is executed before the constructor.
    module.initializer = function(){
      events();
    }
    
    function events(){}

    var privateVariable = 1;

    module.publicVariable = 2;

    function privateMethod(){
      return 3;
    }
  
    module.publicMethod = function(){
      return 4;
    }


});