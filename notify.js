module.exports = function () {

  const notifier = require('node-notifier');

  // String
  notifier.notify('Folder Was Updated');

  /*  Can add Object
  notifier.notify({
    'title': 'Folder Watch',
    'subtitle': 'Daily Maintenance',
    'message': 'You need to do better',
    'icon': 'dwb-logo.png',
    'contentImage': 'blog.png',
    'sound': 'ding.mp3',
    'wait': true
  });
*/ 

};

