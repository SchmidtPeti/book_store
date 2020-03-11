import React from 'react';
import './sign-in.styles.scss';
import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../../components/custom-button/custom-button.component';
import {signinwithGoogle} from '../../components/firebase/firebase.utils';

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
                    <FormInput type="text" name={'email'} value={this.state.email} handleChange={this.HandleChange} label={'email'}/>
                    <FormInput type="password" name={'password'} value={this.state.password} handleChange={this.HandleChange} label={'password'}/>
                    <CustomButton type={'submit'}>Sign in</CustomButton>
                    <CustomButton type={'submit'} onClick={signinwithGoogle}>Sign in with google</CustomButton>

                </form>
            </div>
        );
    }
}
export default SignIn;