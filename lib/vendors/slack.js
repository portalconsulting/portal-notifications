

exports.name = "slack";

var slack = exports.exec = function(data) {
  if(data.channelId === undefined) throw new Error('Channel ID (channelId) is required');
  if(data.userid === undefined) throw new Error('User ID (userId) is required');
  if(data.body === undefined) throw new Error('Body (body) is required');

  console.log('in slack', data);
}
