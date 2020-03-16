import React from 'react';
import SignIn from '../../components/signin/sign-in.component';
import './sign-in-and-sign-up.styles.scss';
import SignUp from '../../components/sign-up/sign-up.component'

const SignInAndSignOut = () =>{
  return(
      <div className={'sign-and-sign-up'}>
          <SignIn/>
          <SignUp/>
      </div>
  )
};
export default SignInAndSignOut;