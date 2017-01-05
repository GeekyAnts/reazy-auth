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

    var login = function login() {
      var credentials = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      return new Promise(function (resolve, reject) {
        setTimeout(function () {
          setUser({
            name: 'Himanshu',
            email: 'himanshu@sahusoft.com'
          });
          setToken('testToken');
          app.http.setDefaultHeaders({
            Authorization: 'Bearer ' + 'testToken'
          });
          resolve({
            user: getUser(),
            token: getToken()
          });
        }, 1000);
      });
    };

    var logout = function logout() {
      var credentials = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      return new Promise(function (resolve, reject) {
        setTimeout(function () {
          setUser(null);
          setToken(null);
          resolve('success');
        }, 1000);
      });
    };

    var authService = {
      setUser: setUser,
      getUser: getUser,
      user: user,
      setToken: setToken,
      getToken: getToken,
      login: login,
      logout: logout
    };

    app.set(serviceName, authService);

    return authService;
  };
};