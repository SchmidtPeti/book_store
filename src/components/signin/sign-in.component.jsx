import React from 'react';
import './sign-in.styles.scss';

class SignIn extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email : '',
            password : ''
        }
    }
    HandleSubmit = (event) =>{
        event.preventDefault();
        this.setState({email: "",password: ""});
    };
    HandleChange = (event) =>{
        const {name,value} = event;
        this.setState({[name]:value});

    };
    render() {
        return (
            <div className={'sign-in'}>
                <h2>I already have an account</h2>
                <span>Sign with your username and password</span>
                <form action="" onSubmit={this.HandleSubmit}>
                    <input type="text" name={'email'} value={this.state.email} onChange={this.HandleChange}/>
                    <input type="text" name={'password'} value={this.state.password} onChange={this.HandleChange}/>
                </form>
            </div>
        );
    }
}
export default SignIn;