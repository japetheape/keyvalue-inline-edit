Package.describe({
  name: 'japetheape:keyvalue-inline-edit',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'A inline edit key value editor',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/japetheape/keyvalue-inline-edit',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');

  api.use(['templating', 'less'], 'client');
  api.use(['minimongo', 'mongo-livedata']);

  api.addFiles(['keyvalue-inline-edit.js']);
  api.addFiles(['templates/keyvalue-inline-edit.html', 'templates/keyvalue-inline-edit.js', 'templates/keyvalue-inline-edit.less'], 'client')
  api.export('KeyvalueInlineEdit');

});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('japetheape:keyvalue-inline-edit');
  api.addFiles('keyvalue-inline-edit-tests.js');
});
