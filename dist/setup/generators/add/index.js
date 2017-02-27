'use strict';

var _yeomanGenerator = require('yeoman-generator');

var _yeomanGenerator2 = _interopRequireDefault(_yeomanGenerator);

var _reazySetupHelper = require('reazy-setup-helper');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = _yeomanGenerator2.default.Base.extend({
  constructor: function constructor() {
    _yeomanGenerator2.default.Base.apply(this, arguments);
  },

  initializing: function initializing() {
    this.pkg = this.fs.readJSON(this.destinationPath('package.json'), {});
    if (this.pkg && this.pkg.name) {
      this.props = {
        name: this.pkg.name
      };
    } else {
      this.log('Please run this command in the root of a Reazy project');
      process.exit(1);
    }
  },

  writing: function writing() {
    (0, _reazySetupHelper.addImport)('reazy-auth', 'auth');
    (0, _reazySetupHelper.addUse)('app.use(auth(), \'auth\')');
  }
});