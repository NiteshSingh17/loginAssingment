import React from 'react';
import LoginForm from './LoginForm';

class LoginPage extends React.Component {
    render() {
        console.log("LoginPage");
      return <div className='loginContainer center'>
        <div>
            <div class='loginMain'>
                <LoginForm />
            </div>
        </div>
      </div>;
    }
  }

export default LoginPage;
  