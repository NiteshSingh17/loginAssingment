import React from 'react';
import { connect } from 'react-redux';
import SideBarMenu from '../sideMenubar'

class Dashboard extends React.Component {
    render() {
        const userName = this.props.user.name;
        const password = this.props.user.password;
        return (
        <>
            <StudentDetailsBoard name={userName} password={password}/>
        </>)
    }
  }

class StudentDetailsBoard extends React.Component{
    render() {
        return (
            <div className='flex'>
                <SideBarMenu />
                <div className='dashboardContainer flex1 center'>
                    <div>
                        <h1>👋 {this.props.name}</h1>
                        <h4 className='passwordBox'>password : {this.props.password}</h4>
                    </div>
                </div>
            </div>
        )
    }
}
  
  const mapStateToProps = state => {
    return { user : state.user };
  };
  
  export default connect(
    mapStateToProps
  )(Dashboard);
