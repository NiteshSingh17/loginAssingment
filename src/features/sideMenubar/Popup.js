import React from 'react';

class Popup extends React.Component {
    render() {
        return (
            <div className={ 'popupContianer center ' + ( this.props.show ? 'openPopup' : 'closePopup' ) }>
                <div className='popupBox'>
                    {
                        this.props.children
                    }
                    <div className='flex' style={{ justifyContent: 'flex-end', marginTop: '75px' }}>
                        <button style={{ marginRight: '10px' }} onClick={ this.props.onCancel }>Cancel</button>
                        <button class='danger' onClick={this.props.onOk}>Logout</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Popup;