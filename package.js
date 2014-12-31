Package.describe({
  name: 'long:htmldiff',
  summary: ' Diff algorithm that understands HTML, in the browser. ',
  version: '1.0.0',
  git: 'https://github.com/iyou/meteor-htmldiff.git'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.2.1');
  if (typeof api.export !== 'undefined') {
    api.export("Htmldiff", ["client", "server"]);
  }

  api.addFiles('long:htmldiff.js');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('long:htmldiff');

  api.addFiles('long:htmldiff-tests.js');
});
