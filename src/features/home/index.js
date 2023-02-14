import React from 'react';
import { connect } from 'react-redux';
import LoginPage from '../login';
import Dashboard from './Dashboard';

class Home extends React.Component {
    render() {
      return this.props.user.isLogedin ? <Dashboard /> : <LoginPage />;
    }
  }

  const mapStateToProps = state => {
    return { user : state.user };
  };

  export default connect(
    mapStateToProps
  )(Home);

  