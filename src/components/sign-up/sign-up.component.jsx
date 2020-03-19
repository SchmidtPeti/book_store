import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import {auth,createUserProfileDocument} from '../firebase/firebase.utils';
import './sign-up.styles.scss';

class SignUp extends React.Component{
    constructor(){
        super();
        this.state = {
            displayName : '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }
    handleChange = event =>{
        const {name,value} = event.target;
        this.setState({[name]:value});

    }
    handleSumit = async (event) =>{
        event.preventDefault();
        const {displayName,email,password,confirmPassword} = this.state;
        if(password!==confirmPassword){
            alert('password don t match');
            return;
        }
        try{
            const user = await auth.createUserWithEmailAndPassword(email,password);
            await createUserProfileDocument(user,displayName);
            this.setState({
                displayName : '',
                email: '',
                password: '',
                confirmPassword: ''
            })
        }
        catch (e) {
            console.log('Someting went wrong!',e.message);
        }

    };
    render(){
        const {displayName,email,password,confirmPassword} = this.state;
        return(
            <div className={'sign-up'}>
                <h2 className={'title'}>
                    I do not have an account
                </h2>
                <span>
                    Sign up with your password and email
                </span>
                <form onSubmit={this.handleSumit} className={'sign-up-form'}>
                    <FormInput
                    type={'text'}
                    name={'displayName'}
                    value={displayName}
                    label={'Display name'}
                    onChange={this.handleChange}
                    required
                    >
                    </FormInput>

                    <FormInput
                    type={'email'}
                    name={'email'}
                    value={email}
                    label={'Email address:'}
                    onChange={this.handleChange}
                    required
                    >
                        </FormInput>

                        <FormInput
                    type={'password'}
                    name={'password'}
                    value={password}
                    label={'Password'}
                    onChange={this.handleChange}
                    required
                    >
                        </FormInput>
                            <FormInput
                    type={'password'}
                    name={'confirmPassword'}
                    value={confirmPassword}
                    label={'Confirm password'}
                    onChange={this.handleChange}
                    required
                    >

                    </FormInput>
                    <CustomButton type={'submit'} onClick={this.handleSumit}>Sign up</CustomButton>
                </form>
            </div>
        )
    }
}
export default SignUp;