import React from 'react';
import './sign-in.styles.scss';
import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../../components/custom-button/custom-button.component';
import {auth, signinwithGoogle} from '../../components/firebase/firebase.utils';

class SignIn extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email : '',
            password : ''
        }
    }
    HandleSubmit = async (event) =>{
        const {email,password} = this.state;
        event.preventDefault();
        try {
            await auth.signInWithEmailAndPassword(email,password);
            this.setState({email: "",password: ""});
        }
        catch (e) {
            console.log('error with sign in')
        }
        this.setState({email: "",password: ""});
    };
    HandleChange = (event) =>{
        const {name,value} = event.target;
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
                    <CustomButton type={'submit'} onClick={this.HandleSubmit}>Sign in</CustomButton>
                    <CustomButton type={'submit'} isGoogleSignIn={true} onClick={signinwithGoogle}>Sign in with google</CustomButton>

                </form>
            </div>
        );
    }
}
export default SignIn;