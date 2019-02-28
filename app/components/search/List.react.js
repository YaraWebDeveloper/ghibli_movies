// import dependencies
import React from 'react';
import {connect} from 'react-redux';
import Is from 'is_js';
import _ from 'lodash';

// import search
class List extends React.Component {

  // init
  constructor() {
    super(); // parent

    /* states */
    this.state = {
      active: true
    }
  }

  /* handle change */
  onClick(data) {
    this.props.onClick(data);
    this.setState({active: false})
  }

  /* node */
  _nodes() {
    /* nodes */
    var _data = this.props.films;
    var term = this.props.term.toLowerCase();

    /* films */
    var _node = Object.keys(_data).map((key, i) => {
      // data
      var {
        title
      } = _data[key];
      if (title.toLowerCase().includes(term)) {
        // return
        return <span className="_item-complete" onClick={this.onClick.bind(this, title)} key={i}>{title}</span>;
      } else {
        return null;
      }
    });

    /* return */
    var _node = _.compact(_node);

    if (Is.not.empty(_node)) {
      return _node;
    } else {
      return <span className="_item-complete">Sorry, nothing to show :C</span>;
    }

  }

  // parent
  render() {
    var term = this.props.term.toLowerCase();
    var _active = (this.props.active && term.length >= 2)
      ? 'is-active'
      : '';
    // return
    return (<div className={"_list-autocomplete " + _active}>
      {this._nodes()}
    </div>)
  }

}

/* store */
var _staToProps = (state) => {
  return {films: state.main.search.films}
}
//export
export default connect(_staToProps)(List);
