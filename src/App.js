import React from 'react';
import './App.css';
import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import {Route,Switch} from 'react-router-dom';
import Header from './components/header/header.component';
import SignInAndSignOut from './pages/sign-in-and-sign-out/sign-in-and-sign-out.component';
import {auth} from './components/firebase/firebase.utils';


class App extends React.Component{
  constructor(){
      super();
      this.state = {
          currentUser: {}
      }
    }
    unscribeAuth = null;
    componentDidMount(){
      this.unscribeAuth = auth.onAuthStateChanged((user) => {
          this.setState({currentUser : user});
          console.log(user);
      })
    }
    componentWillMount(){

    }
    render(){
        return (
            <div>
                <Header currentUser={this.state.currentUser}/>
                <Switch>
                    <Route exact={true} path={'/'} component={Homepage}/>
                    <Route exact={true} path={'/shop'} component={ShopPage}/>
                    <Route exact={true} path={'/signin'} component={SignInAndSignOut}/>
                </Switch>
            </div>
        );
    }
}

export default App;
