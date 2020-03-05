import React from 'react';
import './App.css';
import Homepage from './pages/homepage/homepage.component';
import {Route,Switch} from 'react-router-dom';

const Hats = () =>(
    <div>
        <h1>Hats page</h1>
    </div>
);

function App() {
  return (
    <div>
        <Switch>
            <Route exact={true} path={'/'} component={Homepage}/>
            <Route exact={true} path={'/hats'} component={Hats}/>
        </Switch>
    </div>
  );
}

export default App;
