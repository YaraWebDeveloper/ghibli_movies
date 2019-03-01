// dependencies
import React from 'react';
import {connect} from 'react-redux';

// import actions
import {changeTerm} from '../../actions/search/SearchActions';

// import components
import List from './List.react';

//class
class Searcher extends React.Component {

  //init
  constructor() {
    super(); //parent

    /* searcher */
    this.state = {
      look: '',
      active: false
    }

    // block
    this.block = React.createRef();
  }
  // change valkue
  onChange(e) {
    // target
    var _name = e.target.name;
    var _value = e.target.value;
    // set state
    this.setState({[_name]: _value});

    // send to term
    this.props.changeTerm(_value);
  }

  /* on click */
  onClickAutocomplete(data) {
    /* set data */
    this.setState({look: data});
    this.props.changeTerm(data);
  }

  /* focus */
  onFocus() {
    this.setState({active: true})
  }

  // search
  onSearch(e) {
    // prevern
    e.preventDefault();

    // send
    this.props.changeTerm(this.state.look);
  }

  // return
  render() {
    return (<div className="_in-searcher">
      <div className="field">
        <form onSubmit={this.onSearch.bind(this)}>
          <div className="control">
            <input className="input _in-text-int" type="text" autoComplete="off" placeholder="lookin' for?" name="look" value={this.state.look} onChange={this.onChange.bind(this)} onFocus={this.onFocus.bind(this)} ref={this.block}/>
            <button className="_button-search" type="submit">
              <i className="fas fa-search"></i>
            </button>
          </div>
        </form>
      </div>

      <List term={this.state.look} onClick={this.onClickAutocomplete.bind(this)} active={this.state.active} control={this.block.current}/>
    </div>)
  }
}

// a
var _actToProps = () => {
  return {changeTerm: changeTerm}
}
//export method
export default connect(null, _actToProps())(Searcher);
