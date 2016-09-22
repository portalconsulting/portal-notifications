var n = require('./index');
var data = {
  slack: {
    token: '',
    channel: '',
    body: 'Talk to asdf about this http://imgur.com/gallery/cr0G5',
    attachments: [
        {
            "text": "And here's an attachment!"
        }
    ]
  }
}

n.send(['slack'], data);
//console.log(n.getConfig());
