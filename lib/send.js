module.exports = function(config, methods, data) {

  if(!Array.isArray(methods)) throw new Error('methods must be an array');
  methods.forEach(function(method) {
    var method = method.toLowerCase();
    if(config._vendors[method] !== undefined) {
      config._vendors[method](data);
    } else {
      throw new Error('No vendor found for ' + method)
    }
  });
}
