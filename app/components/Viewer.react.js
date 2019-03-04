/* import dependencies */
import React from 'react';
import {connect} from 'react-redux';
import Is from 'is_js';

// active
import {activeId} from '../actions/search/SearchActions.js';

/* create class */
class Viewer extends React.Component {

  // contrictor
  constructor() {
    super();
    // parent
  }

  // mounted
  onClickClose() {
    // update item
    this.props.activeId('');
  }

  // viewer movie
  render() {
    // var _id
    var {
      active
    } = this.props;
    var _data = this.props.films[active]
    var _class = (Is.not.empty(active))
      ? 'is-active'
      : '';

    // return
    console.log('data', _data);
    if (_data) {
      // return
      return (<section className={"_viewer-content " + _class}>
        {/* image back */}
        <figure className="_back-viewer" style={{
            backgroundImage: 'url(' + _data.banner + ')'
          }}></figure>

        {/* content-image */}
        <section className="_item-content">
          <article className="media">
            <figure className="media-left">
              <div className="image _only-img" style={{
                  backgroundImage: 'url(' + _data.img + ')'
                }}></div>
            </figure>
            <div className="media-content _info-media">
              <div className="content">
                <p className="_item-cont-info">
                  <strong>{_data.title}</strong>
                  <small>{_data.director}</small>
                  <br/>
                  <small>
                    <b>year:</b> &nbsp;
                    {_data.release_date}&nbsp;
                    -&nbsp;
                    <i className="fas fa-star"></i>&nbsp;{_data.rt_score}</small>
                  <br/>
                </p>

                <p className="_item-descr">
                  {_data.description}
                </p>

              </div>
            </div>
          </article>
        </section>

        {/* button close */}
        <button className="button _button-container" onClick={this.onClickClose.bind(this)}>
          <i className="fas fa-times-circle"></i>
        </button>
      </section>)
    } else {
      return (<section className="_viewer-content "></section>)
    }
  }
}

/* connect viewer */
var _staToProps = (state) => {
  return {active: state.main.search.active, films: state.main.search.films}
}

// actions
var _actToProps = () => {
  return {activeId}
}
/* export defaul */
export default connect(_staToProps, _actToProps())(Viewer);
