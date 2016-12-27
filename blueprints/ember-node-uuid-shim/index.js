/*jshint node:true*/
module.exports = {
  description: 'Installation blueprint for ember-uuid-shim',

  normalizeEntityName: function() {},

  afterInstall: function() {
    return this.addPackagesToProject([
      { name: 'uuid', target: '^3.0.1' }
    ]);
  }
};
