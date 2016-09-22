var request = require('request');

exports.name = "slack";

var slack = exports.exec = function(data) {
  if(data.token === undefined) throw new Error('Token (channelId) is required');
  if(data.channel === undefined) throw new Error('Channel (channel) is required');
  if(data.body === undefined) throw new Error('Body (body) is required');

  var params = {
    token: data.token,
    channel: data.channel,
    text: data.body,
    pretty: true,
    unfurl_links: true,
    unfurl_media: true,
    link_names: true
  }

  if(data.attachments !== undefined) {
    params.attachments = (typeof data.attachments === 'object') ? JSON.stringify(data.attachments) : data.attachments;
  }

  console.log(params);

  request.post('https://slack.com/api/chat.postMessage', {form: params},
    function(err, response, body) {
      if(err) throw err;
      var json = JSON.parse('' + body);
      if(!json.ok) {
        throw new Error(json.error);
      }
    });
}
