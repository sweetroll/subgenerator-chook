'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');

var ChookGenerator = module.exports = function ChookGenerator(args, options, config) {
  yeoman.generators.NamedBase.apply(this, arguments);
};

util.inherits(ChookGenerator, yeoman.generators.NamedBase);

ChookGenerator.prototype.files = function files() {
  this.directory('scripts', 'web/scripts');
  this.directory('styles', 'web/styles');
};