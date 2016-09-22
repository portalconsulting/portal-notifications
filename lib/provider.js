var fs = require('fs');
var send = require('./send');

var Provider = exports.Provider = function(config) {
  this.config = {_vendors: {}};
  this.setConfig(config);
  this.init();
}

Provider.prototype.setConfig = function(config) {
  for(var key in config) {
    if(key !== '_vendor') {
      this.config[key] = config[key];
    }
  }

  return this;
}

Provider.prototype.getConfig = function() {
  return this.config;
}

Provider.prototype.init = function() {
  var that = this;
  fs.readdirSync(__dirname+'/vendors').map(function(file) {
    var vendor = require(__dirname+'/vendors/'+file);
    that.config._vendors[vendor.name.toLowerCase()] = vendor.exec;
  });
}

Provider.prototype.send = function(methods, data) {
  return send(this.config, methods, data);
}
