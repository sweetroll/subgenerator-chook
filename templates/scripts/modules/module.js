'use strict';
var App = App || {};

$.extend(App, {
  Module: {

    settings : {
      button : $('button'),
      output : 15,
    },

    init : function(){
      this.events();
    },

    events : function(){
      this.settings.button.bind('click', function(){
        App.Module.fireEvent();
      });
    },
      
    fireEvent : function(){
      console.log('fire');
    }

  }
});