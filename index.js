'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');

var ChookGenerator = module.exports = function ChookGenerator(args, options, config) {
  // By calling `NamedBase` here, we get the argument to the subgenerator call
  // as `this.name`.
  yeoman.generators.NamedBase.apply(this, arguments);

  console.log('You called the chook subgenerator with the argument ' + this.name + '.');
};

util.inherits(ChookGenerator, yeoman.generators.NamedBase);

ChookGenerator.prototype.files = function files() {
  this.directory('scripts', 'web/scripts');
  this.directory('styles', 'web/styles');
};