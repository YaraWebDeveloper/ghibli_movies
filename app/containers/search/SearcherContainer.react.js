/* dependencies */
import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

// actions
import {listAllFilms} from '../../actions/search/SearchActions'

/* class */
class SearcherContainer extends React.Component {

  static propTypes = {
    _listAllFilms: PropTypes.func.isRequired
  }

  // init
  constructor() {
    // call parent
    super();
  }

  /* component did mount */
  componentDidMount() {
    // execute
    this.props._listAllFilms();
  }

  /* node */
  _getNode() {
    // return
    var {
      films
    } = this.props;
    // fils
    var node = Object.keys(films).map((key, i) => {
      // log datat
      var data = films[key];
      if (data.img) {
        return <img src={data.img} style={{
            width: 'auto',
            height: '100px',
            backgoundColor: '#000'
          }} key={i}/>
      }
    });

    return node;
  }

  // render
  render() {
    // return
    return (<div>
      {this._getNode()}
    </div>)
  }
}

/* actions to props */
var _actToProps = () => {
  console.log(listAllFilms);
  return {_listAllFilms: listAllFilms}
}

//* actiosn to state *//
var _staToProps = (state) => {
  return {films: state.main.search.films, pureFilms: state.main.search.pureFilms}
}
// export
export default connect(_staToProps, _actToProps())(SearcherContainer);
