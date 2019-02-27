/* export default */
import React from 'react';

// class
class Item extends React.Component {
  constructor() {
    super(); // parent
  }

  /* render */
  render() {
    // return ite
    var {
      img
    } = this.props.data;
    var _back = {};
    if (img != '') {
      _back = {
        backgroundImage: 'url(' + img + ') '
      }
    }
    return (<article className="_items-films column is-3">
      <article className="_content-item" style={_back}></article>
    </article>)
  }
}

// export component
export default Item;
