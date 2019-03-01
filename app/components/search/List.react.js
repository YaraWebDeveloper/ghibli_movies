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
      active: false
    }

    /* container */
    this.container = React.createRef();
  }

  /* component did mount */
  componentDidMount() {
    this._outside();
  }

  /* handle change */
  onClick(data, e) {
    this.props.onClick(data);

    // prevent
    this.setState({active: false});
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

  /* on blur */
  /* click outsude */
  _outside() {
    var _self = this;
    // event listeners
    document.addEventListener("click", (evt) => {
      // const flyoutElement = this.list.current;
      const flyoutElement = this.props.control;
      const flyoutConst = this.container.current;
      let targetElement = evt.target; // clicked element

      do {
        if ((targetElement == flyoutElement) || (flyoutConst == targetElement)) {
          // Do nothing, just return.
          this.setState({active: true});
          //alert('inside ');
          return;
        }
        // Go up the DOM.
        targetElement = targetElement.parentNode;
      } while (targetElement);
      // state
      this.setState({active: false});
    });
  }

  // parent
  render() {
    var term = this.props.term.toLowerCase();
    var _active = (this.state.active && term.length >= 1)
      ? 'is-active'
      : '';
    // return
    return (<div className={"_list-autocomplete " + _active} ref={this.container}>
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
