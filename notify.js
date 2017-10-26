module.exports = function() {

const notifier = require('node-notifier');

// String
notifier.notify('Folder Was Updated');

// Object
notifier.notify({
  'title': 'JBone',
  'subtitle': 'Daily Maintenance',
  'message': 'You need to do better',
  'icon': 'dwb-logo.png',
  'contentImage': 'blog.png',
  'sound': 'ding.mp3',
  'wait': true
});

};