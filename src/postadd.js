import yeoman from 'yeoman-environment';

const env = yeoman.createEnv();

env.register(__dirname + '/generators/add', 'reazy-auth-add');

env.run('reazy-auth-add', { disableNotifyUpdate: true });
