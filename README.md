# reazy-auth
### A simple auth store for your Reazy apps

---

## Installation

### 1. Using [Reazy CLI](https://www.npmjs.com/package/reazy-cli)

  ```sh
  $ reazy add auth
  ```

### 2. Manual

  - Install `reazy-auth`
  ```sh
  $ npm install --save reazy-auth
  ```

  - Add these lines to your `src/app.js`.
  ```js
  import reazy from 'reazy';
  import auth from 'reazy-auth';                    // <-- import the service
  import reactNative from './services/react-native';

  const app = reazy();

  app.use(auth(), 'auth');                          // <-- Initialize the service
  app.use(reactNative(), 'reactNative');

  export default app;
  ```

## Usage

This Reazy plugin is just an authentication store service. For full implementation of authentication, use this with one of the following:
- [reazy-auth-jwt](https://www.npmjs.com/package/reazy-auth-jwt)
- [reazy-native-auth-facebook](https://www.npmjs.com/package/reazy-native-auth-facebook)

Let's assume you have registered this service with name `auth`. Then you can access the service in two ways:
```js
const authService = app.auth;
// OR
const authService = app.get('auth');
```

This service provides the following functions:

- **setUser(user)**
  ```js
  app.auth.setUser({name: 'Sanket', email: 'sanket@reazyframework.io'});
  ```

- **getUser()**
  ```js
  const user = app.auth.getUser();
  ```

- **user()**

  Alias of `getUser`

- **setToken(token)**
  ```js
  app.auth.setToken('secret-auth-token');
  ```

- **getToken()**
  ```js
  const token = app.auth.getToken();
  ```
