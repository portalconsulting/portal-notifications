var n = require('./index');
var config = {
  url: 'microsoft.com'
}

n.setConfig(config).send(['slack'], {boo: 'loo'});
//console.log(n.getConfig());
