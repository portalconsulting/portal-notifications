var request = require('request');
var plivo = require('plivo');

exports.name = "sms";

var sms = exports.exec = function(data) {
  if(data.auth === undefined) throw new Error('Auth (auth) info is required');
  if(data.auth.id === undefined && data.auth.id !== '') throw new Error('Auth ID (auth.id) is required');
  if(data.auth.token === undefined && data.auth.token !== '') throw new Error('Auth Token (auth.token) is required');
  if(data.senderNum === undefined && data.senderNum !== '') throw new Error('Sender number (senderNum) is required');
  if(data.recipientNum === undefined && data.recipientNum !== '') throw new Error('Recipient (recipientNum) is required');
  if(data.body === undefined && data.body !== '') throw new Error('Body (body) is required');

  var p = plivo.RestAPI({
    authId: data.auth.id,
    authToken: data.auth.token
  });

  var params = {
    src: data.senderNum,
    dst: data.recipientNum,
    text: data.body
  }

  p.send_message(params, function(status, response) {
    console.log(status, response);
  });
}
