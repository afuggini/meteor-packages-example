'use strict';

Package.describe({
  name: 'mu:app',
  summary: 'Umbrella Package',
  version: '0.0.0'
});

Package.onUse(function (api) {
  api.versionsFrom('1.1.0.3');

  // Imply Meteor platform packages in all custom packages
  // https://github.com/meteor/meteor/blob/devel/packages/meteor-platform/package.js
  api.imply([
    'standard-app-packages',

    // Load all custom app packages here
    'mu:app-base',
    'mu:user'
  ]);

});
