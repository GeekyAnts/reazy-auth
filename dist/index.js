'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (authConfig) {
  return function (serviceName) {
    var app = this;

    var setUser = function setUser(user) {
      app.set([serviceName, 'userObj'], user);
    };

    var getUser = function getUser() {
      return app.get([serviceName, 'userObj']);
    };

    var user = function user() {
      return app.get([serviceName, 'userObj']);
    };

    var setToken = function setToken(token) {
      app.set([serviceName, 'accessToken'], token);
    };

    var getToken = function getToken() {
      return app.get([serviceName, 'accessToken']);
    };

    var authService = {
      setUser: setUser,
      getUser: getUser,
      user: user,
      setToken: setToken,
      getToken: getToken
    };

    app.set(serviceName, authService);

    return authService;
  };
};