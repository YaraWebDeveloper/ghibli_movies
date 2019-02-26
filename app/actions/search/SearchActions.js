/* actions */
import {LIST_FILMS, CHANGE_IMAGE} from '../../constants/ActionTypes';
import _ from 'lodash';

// import api
import SearchApi from '../../api/SearchFilms';
var apiSearch = new SearchApi();

// exports
export const listAllFilms = () => {
  // return
  return(dispatch) => {

    // test
    apiSearch.listSearch().then((response) => {
      // return all data
      var _response = response.data;
      // sender}
      var _return = {};
      _response.map((data) => {
        // data
        _return[data.id] = data;
        _return[data.id]['img'] = '';
        // list images
      });
      // log response
      dispatch(_films({films: _return, pureFilms: _response}));
      listImages(_return, _response, dispatch);
    });
  }
}

// list images
var listImages = (_return, _response, dispatch) => {
  // get keys
  var control = 0;
  var _max = _response.length;
  var _ped = () => {
    // only if data
    if (control < _max) {
      // response control
      var _data = _response[control];

      // api search
      apiSearch.searchImage(_data.title).then((response) => {
        // get a random number
        var _rand = Math.floor(Math.random() * (3 - 0 + 1) + 0);

        // get image
        var image = response.data.value[_rand].thumbnailUrl;
        _return[_data.id]['img'] = image;
        _response[control]['img'] = image;
        // para no sobrecargar el server
        dispatch(_changeImage({films: _return, pureFilms: _response}));
        setTimeout(() => {
          control++;
          _ped();
        }, 100);
      });
    } else {
      // si quiero enviar todo de una
      // console.log('acabe -->', control);
      dispatch(_changeImage({films: _return, pureFilms: _response}));
    }
  }
  // ped
  _ped();
}

/* ------------------- pure dispatch -------------------------- */
var _films = (action) => {
  return {type: LIST_FILMS, films: action.films, pureFilms: action.pureFilms}
}
var _changeImage = (action) => {
  return {type: CHANGE_IMAGE, id: action.id, image: action.image}
}