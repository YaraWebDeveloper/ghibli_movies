// dependencies
import React from 'react';

//class
class Searcher extends React.Component {

  //init
  constructor() {
    super(); //parent
  }

  // return
  render() {
    return (<div className="_in-searcher">
      <div className="field">
        <div className="control">
          <input className="input _in-text-int" type="text" placeholder="¿Qué peli buscas?"/>
          <button className="_button-search"><i className="fas fa-search"></i></button>
        </div>
      </div>
    </div>)
  }
}
//export method
export default Searcher;
