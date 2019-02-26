/* server */
import Server from './ServerApi';

/* class */
class Users extends Server {
  /* call parent */
  constructor() {
    super();
  }

  /* fetch login */
  doLogin(user, pass) {
    //Success do it
    return this.req.post('/users/login', {
      user: user,
      pass: pass
    });
  }
}

/* export */
export default Users;
