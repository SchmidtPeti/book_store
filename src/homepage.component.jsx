import React from 'react';
import './homepage.styles.scss';

const Homepage = () =>{
  return(
      <div className={'homepage'}>
          <div className={'directory-menu'}>
              <div className={'menu-item'}>
                  <div className={'content'}>
                      <h1 className={'title'}>Classic books</h1>
                      <span className={'subtitle'}>Shop now</span>
                  </div>
              </div>
              <div className={'menu-item'}>
                  <div className={'content'}>
                      <h1 className={'title'}>Cool books</h1>
                      <span className={'subtitle'}>Shop now</span>
                  </div>
              </div>
              <div className={'menu-item'}>
                  <div className={'content'}>
                      <h1 className={'title'}>Knowledge books</h1>
                      <span className={'subtitle'}>Shop now</span>
                  </div>
              </div>
              <div className={'menu-item'}>
                  <div className={'content'}>
                      <h1 className={'title'}>Learning books</h1>
                      <span className={'subtitle'}>Shop now</span>
                  </div>
              </div>
              <div className={'menu-item'}>
                  <div className={'content'}>
                      <h1 className={'title'}>Kids books</h1>
                      <span className={'subtitle'}>Shop now</span>
                  </div>
              </div>
          </div>
      </div>
  )
};
export default Homepage;