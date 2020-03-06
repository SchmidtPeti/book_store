import React from 'react';
import './menu-item.style.scss';
import {withRouter} from 'react-router-dom';

const MenuItem = ({title,imageUrl,size,history,linkUrl,match}) =>{
    return(
        <div style={{backgroundImage: `url(${imageUrl})`}} className={`${size} menu-item`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
        <div className={'content'}>
            <h1 className={'title'}>{title.toUpperCase()}</h1>
            <span className={'subtitle'}>Shop now</span>
        </div>
    </div>);
};
export default withRouter(MenuItem);