import React from 'react'
import { connect } from 'react-redux';
import { loginUser } from '../../store/user';

class LoginForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: '',
            password: '',
            redirect: false
        }
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    handleFormSubmit(e){
        e.preventDefault();
        const data = { name : e.target.name.value, password: e.target.password.value };
        this.props.loginUserAction(data);
    }

    render(){
        return (
            <div >
                <form autocomplete="off" onSubmit={this.handleFormSubmit}>
                    <InputElement label='Name' name="name" type='text' />
                    <InputElement label='Password' name="password" type='password' />
                    <button id='submitBt' type='submit'>Submit</button>
                </form>
            </div>
        )
    }
}

class InputElement extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            value: ''
        }
    }

    handleInputChange(value){
        this.setState({value});
    }
    render(){
        return (
            <div>
                <label for={this.props.name}>{this.props.label}</label>
                <div>
                <input isrequired type={this.props.type} name={this.props.name} value={this.state.value} onChange={ e => this.handleInputChange(e.target.value) }/>
                </div>
            </div>)
    }
}
const mapStateToProps = state => {
    return { count: state };
  };
  
  const mapDispatchToProps = dispatch => {
    return {
        loginUserAction : (data) => {
            dispatch(loginUser(data));
        }
    };
  };
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(LoginForm);
