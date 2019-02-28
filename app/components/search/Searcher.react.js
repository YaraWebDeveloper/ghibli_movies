// dependencies
import React from 'react';
import {connect} from 'react-redux';

// import components
import List from './List.react'

//class
class Searcher extends React.Component {

  //init
  constructor() {
    super(); //parent

    /* searcher*/
    this.state = {
      look: ''
    }
  }
  // change valkue
  onChange(e){
    // target
    var _name = e.target.name;
    var _value = e.target.value;
    // set state
    this.setState({[_name]: _value});
  }

  /* on click */
  onClickAutocomplete(data){
    /* set data */
    this.setState({look: data})
  }

  // return
  render() {
    return (<div className="_in-searcher">
      <div className="field">
        <div className="control">
          <input className="input _in-text-int" type="text" placeholder="lookin' for?" name="look" value={this.state.look} onChange={this.onChange.bind(this)}/>
          <button className="_button-search"><i className="fas fa-search"></i></button>
        </div>
      </div>

      <List term={this.state.look} onClick={this.onClickAutocomplete.bind(this)}/>
    </div>)
  }
}
//export method
export default Searcher;
