'use strict';

Package.describe({
  name: 'mu:app-base',
  summary: 'App base code',
  version: '0.0.0'
});

Package.onUse(function (api) {
  api.versionsFrom('1.1.0.3');

  // Load all packages this package uses
  api.use([
    'coffeescript',
    'templating',
    'underscore',
    'iron:router',
    'ui'
  ]);

  // Load all external packages here
  // All other packages using mu:app-base will have access to these
  api.imply([
    'iron:router@1.0.9',
    'underscore',
    'jquery',
    'tracker',
    'templating'
  ]);

  // Both
  api.addFiles([
    'app-base.js',
  ], ['client', 'server']);

  // Client
  api.addFiles([

  ], ['client']);

  // Server
  api.addFiles([

  ], ['server']);

  // Export
  api.export('MU');

});


Package.onTest(function (api) {
  api.use('mu:app-base');
  api.use('tinytest');

  api.export('MU');

  api.addFiles('mu:app-base_tests.js');
});
