'use strict';
var App = App || {};

$.extend(App, {
  init: function(){
    // Load init methods of modules
    App.Module.init();

    // Remove loading class on window load
    $( window ).load(function() {
      $('body').removeClass('loading');
    });
  }
});

$(function(){
  App.init();
});