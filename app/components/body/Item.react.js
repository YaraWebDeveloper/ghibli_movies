/* export default */
import React from 'react';

// class
class Item extends React.Component {
  constructor() {
    super(); // parent
  }

  /* item */
  onClickItem(){
    var {id} = this.props.data;
    console.log(this.props);
    this.props.onClickItem(id);
  }


  /* render */
  render() {
    // return ite
    var {
      img, title, release_date,rt_score, director
    } = this.props.data;
    var _classHadImg = '';
    var _back = {};
    if (img != '') {
      _classHadImg = 'had-image';
      _back = {
        backgroundImage: 'url(' + img + ') '
      }
    }
    return (<article className="_items-films column is-3 ">
      <figure className={"_content-item " + _classHadImg} style={_back} onClick={this.onClickItem.bind(this)}>
        <div className="_content-info">
          <div className="_title _item">{title}</div>
          <div className="_dir _item">{director}</div>
          <div className="_subtitle _item">
            year: {release_date} - <i className="fas fa-star"></i>&nbsp;{rt_score}
          </div>
        </div>
      </figure>
    </article>)
  }
}

// export component
export default Item;
