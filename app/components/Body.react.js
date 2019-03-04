/* dependencies */
import React from 'react';
import {connect} from 'react-redux';
import Is from 'is_js';
import _ from 'lodash';

/* componentes */
import Item from './body/Item.react';

// import actions
import {activeId} from '../actions/search/SearchActions.js';

// class
class Body extends React.Component {
  // super
  constructor() {
    super();
  }

  /* onclick item */
  onClickItem(id) {
    console.log('click me', id);
    /* this .active */
    this.props.activeId(id);
  }

  /* node */
  _getNode() {
    // return
    var {
      films
    } = this.props;
    var term = this.props.term.toLowerCase();
    // fils
    var node = Object.keys(films).map((key, i) => {
      // iterate data igual
      var data = films[key];
      if (term != '') {
        if (data.title.toLowerCase().includes(term)) {
          return (<Item data={data} key={i} onClickItem={this.onClickItem.bind(this)}/>)
        } else {
          return null;
        }
      } else {
        return (<Item data={data} key={i} onClickItem={this.onClickItem.bind(this)}/>)
      }
    });

    /* return */
    var _node = _.compact(node);
    // nodos
    if (Is.not.empty(_node)) {
      return _node;
    } else {
      return <span className="_item-complete">Sorry, nothing to show :C</span>;
    }
  }

  // render
  render() {
    return (<section className="columns is-multiline is-3-desktop">
      {this._getNode()}
    </section>)
  }
}
//* actiosn to state *//
var _staToProps = (state) => {
  return {films: state.main.search.films, pureFilms: state.main.search.pureFilms, term: state.main.search.term}
}

var _actToProps = () => {
  return {activeId}
}
// export class
export default connect(_staToProps, _actToProps())(Body);
