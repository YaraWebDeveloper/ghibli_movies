// import dependencies
import React from 'react';

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

  /* handle change*/
  onClick(data){
    this.props.onClick(data);
    this.setState({active: false})
  }
  // parent
  render(){
    var _active = this.state.active? 'is-active': '';
    // return
    return (
      <div className={"_list-autocomplete "+ _active}>
        <span className="_item-complete" onClick={this.onClick.bind(this, 'List 1')}>List 1</span>
        <span className="_item-complete" onClick={this.onClick.bind(this, 'List 2')}>List 2</span>
        <span className="_item-complete" onClick={this.onClick.bind(this, 'List 3')}>List 3</span>
        <span className="_item-complete" onClick={this.onClick.bind(this, 'List 4')}>List 4</span>
      </div>
    )
  }

}
//export
export default List;
