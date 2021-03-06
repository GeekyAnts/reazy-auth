import generators from 'yeoman-generator';
import { addImport, addUse } from 'reazy-setup-helper';

module.exports = generators.Base.extend({
  constructor: function () {
    generators.Base.apply(this, arguments);
  },

  initializing: function () {
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

  writing: function () {
    addImport('reazy-auth', 'auth');
    addUse(`app.use(auth(), 'auth')`);
  }
});
