import React from 'react';
import './custom-button.styles.scss';

const CustomButton = ({children,isGoogleSignIn,...otherprops}) =>{
    return(
        <div className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} {...otherprops}>
            {children}
        </div>
    )
};
export default CustomButton;