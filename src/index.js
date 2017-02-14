
export default function(authConfig) {
  return function(serviceName) {
    const app = this;

    const setUser = user => {
      app.set([serviceName, 'userObj'], user);
    };

    const getUser = () => {
      return app.get([serviceName, 'userObj']);
    };

    const user = () => {
      return app.get([serviceName, 'userObj']);
    };

    const setToken = token => {
      app.set([serviceName, 'accessToken'], token);
    };

    const getToken = () => {
      return app.get([serviceName, 'accessToken']);
    };

    const login = (credentials = {}) => {
      return new Promise(function(resolve, reject) {
        setTimeout(() => {
          setUser({
            name: 'Himanshu',
            email: 'himanshu@sahusoft.com',
          });
          setToken('testToken');
          app.http.setDefaultHeaders({
            Authorization: `Bearer ${'testToken'}`
          })
          resolve({
            user: getUser(),
            token: getToken(),
          });
        }, 1000);
      });
    };

    const logout = (credentials = {}) => {
      return new Promise(function(resolve, reject) {
        setTimeout(() => {
          setUser(null);
          setToken(null);
          resolve('success');
        }, 1000);
      });
    };

    const authService = {
      setUser,
      getUser,
      user,
      setToken,
      getToken,
      login,
      logout,
    };

    app.set(serviceName, authService);

    return authService;
  }
}
