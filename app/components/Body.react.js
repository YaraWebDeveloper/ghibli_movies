/* dependencies */
import React from 'react';
import {connect} from 'react-redux';

/* componentes */
import Item from './body/Item.react';

// class
class Body extends React.Component {
  // super
  constructor() {
    super();
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

      return (<Item data={data} key={i} />)
      // if (data.img) {
      //   return <img src={data.img} style={{
      //       width: 'auto'
      //     }} key={i}/>
      // }
    });

    return node;
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
  return {films: state.main.search.films, pureFilms: state.main.search.pureFilms}
}
// export class
export default connect(_staToProps)(Body);
