/* create api */
import axios from 'axios';

// class
class SearchApi {
  // api search
  constructor() {}

  // send search
  listSearch() {
    // get all films
    return axios.get(global.conf.apiServer + "films");
  }

  // search image
  async searchImage(query) {
    // stop
    return axios.get(global.conf.apiImg, {
      params: {
        "q": query + " ghibli wallpaper",
        "count": 4
      },
      headers: {
        'Ocp-Apim-Subscription-Key': '7cc8bc669750430d9203a66735dfb1da'
      }
    })
  }
}

// export
export default SearchApi;
