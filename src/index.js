
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

    const authService = {
      setUser,
      getUser,
      user,
      setToken,
      getToken,
    };

    app.set(serviceName, authService);

    return authService;
  }
}
