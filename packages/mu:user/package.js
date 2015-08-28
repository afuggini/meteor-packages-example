'use strict';

Package.describe({
  name: 'mu:user',
  summary: 'Users Package',
  version: '0.0.0'
});

Package.onUse(function (api) {
  api.versionsFrom('1.1.0.3');

  // Using mu:app-base will automatically imply all important packages
  // avoiding repeating dependencies.
  api.use([
    'mu:app-base',
    'accounts-base',
    'accounts-password',
    'templating'
  ]);

  // Both
  api.addFiles([
    'user_both.js',
    'routes.js'
  ], ['client', 'server']);

  // Client
  api.addFiles([
    'user_client.html'
  ], ['client']);

  // Server
  api.addFiles([
    'user_server.js',
  ], ['server']);

});
