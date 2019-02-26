/* dependencies */
import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

// actions
import {listAllFilms} from '../../actions/search/SearchActions'

/* class */
class  SearcherContainer extends React.Component {

  static propTypes = {
    _listAllFilms: PropTypes.func.isRequired
  }

  // init
  constructor() {
    // call parent
    super();
  }

  /* component did mount */
  componentDidMount(){
    // execute
    this.props._listAllFilms();
  }

  /* node */
  _getNode () {
    // return
    var {films, pureFilms} = this.props;

    // fils
    var node = pureFilms.map((data, i)=>{
      // log datat

      return <img src={data['img']} style={{width: '100px', height: '100px', backgoundColor: '#000'}} key={i}/>
    });

    return node;
  }

  // render
  render(){
    // return
    return (
      <div>
        default class
        {
          this._getNode()
        }
      </div>
    )
  }
}

/* actions to props */
var _actToProps = () =>{
  console.log(listAllFilms);
  return {
    _listAllFilms: listAllFilms
  }
}

//* actiosn to state *//
var _staToProps = (state) => {
  return {
    films: state.main.search.films,
    pureFilms: state.main.search.pureFilms
  }
}
// export
export default connect(_staToProps, _actToProps())(SearcherContainer);
