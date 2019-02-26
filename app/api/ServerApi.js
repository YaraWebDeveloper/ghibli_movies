/* import actions */
import axios from 'axios';
import {Cookies} from 'react-cookie'
const cookies = new Cookies();
/* cookies */
class Server {

  /* firt entry */
  constructor() {
    // console.log('---> cookies', cookies.cookies.access_token);
    let _authorization = "JWT " + cookies.get('access_token');
    this.req = axios.create({
      baseURL: global.conf.apiServer,
      headers: {
        "Authorization": _authorization,
        "Content-Type": "application/x-www-form-urlencoded"
      }
    });

    /*  */
  }
  /* do get jwt */
  getJWT() {
    console.log('aqui voy a estar');
  }

}

//Export default
export default Server;
