import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router';
import { Redirect } from 'react-router-dom';

/* class */
class PrivateRouteContainer extends React.Component {
  render() {
    const {
      isAuthenticated,
      component: Component,
      ...props
    } = this.props

    return (<Route {...props} render={props => isAuthenticated
        ? <Component {...props}/>
        : (<Redirect to={{
            pathname: '/login',
            state: {
              from: props.location
            }
          }}/>)}/>)
  }
}

/* if is aut */
const mapStateToProps = (state, ownProps) => {
  return {isAuthenticated: state.main.session.isAuthenticated}
}


export default connect(mapStateToProps)(PrivateRouteContainer)
