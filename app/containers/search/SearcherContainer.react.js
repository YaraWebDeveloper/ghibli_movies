/* dependencies */
import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

// actions
import {listAllFilms} from '../../actions/search/SearchActions'

/* component */
import Header from '../../components/Header.react';
import Body from '../../components/Body.react';

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

  // render
  render() {
    // return
    return (<section className="hero is-fullheight">
      <div className="hero-head">
        <Header/>
      </div>

      <div className="hero-body" id="_main-content">
        <div className="container has-text-centered __just-content">
          <Body/>
        </div>
      </div>
    </section>)
  }
}

/* actions to props */
var _actToProps = () => {
  return {_listAllFilms: listAllFilms}
}


// export
export default connect(null, _actToProps())(SearcherContainer);
