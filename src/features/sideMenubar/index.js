import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../store/user';
import Popup from './Popup';

class SideBarMenu extends React.Component {

    constructor(props) {
        super(props);
        this.state = { popupVisible: false, showDrawer: false };
        this.hidePopup = this.hidePopup.bind(this);
        this.showPopup = this.showPopup.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
        this.toggleDrawer = this.toggleDrawer.bind(this);
        
    }

    hidePopup() {
        this.setState({ popupVisible: false });
    }

    showPopup() {
        this.setState({ popupVisible: true });
    }

    handleLogout() {
        this.props.logoutAction();
        this.hidePopup();
    }

    toggleDrawer() {
        this.setState({ showDrawer: !this.state.showDrawer })
    }


    render() {
        if (!this.props.user.isLogedin) return null;
        return (
            <div className={ 'sidebar ' + (this.state.showDrawer ? 'openDrawer' : 'closeDrawer') }>
                <div id='menuButton' onClick={this.toggleDrawer}>
                    <div className='menuBar'></div>
                    <div className='menuBar'></div>
                    <div className='menuBar'></div>
                </div>
                {
                    this.state.showDrawer &&
                    <div>
                        <div className='navItems'>About us</div>
                        <div className='navItems'><button onClick={this.showPopup} className='navItems' id='logoutBt'>Logout</button></div>
                        <Popup show={this.state.popupVisible} onCancel={this.hidePopup} onOk={this.handleLogout}>
                            <h1>Confirm alert</h1>
                            <div>are you sure you want to logout</div>
                        </Popup>
                    </div>
                }
            </div>
        )
    }
}


const mapStateToProps = state => {
    return { user: state.user };
};

const mapDispatchToProps = dispatch => {
    return {
        logoutAction: () => {
            dispatch(logout());
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SideBarMenu);
