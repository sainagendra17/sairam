import React, { Component } from 'react';
import {BrowserRouter,HashRouter,Switch,Route} from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Gallery from './components/dashboard/Gallery';
import Arti from './components/dashboard/Arti';


class App extends Component {
  render() {
    return (
      <HashRouter>
      <div className="App">
        <Navbar/>
        <Switch>
          <Route path='/gallery' component={Gallery}/>
          <Route path='/arti' component={Arti}/>
        </Switch>
      </div>
      </HashRouter>
    );
  }
}

export default App;
