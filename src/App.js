import React, { Component } from 'react';
import './App.css';
import  Home from './components/home'
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route path="/"><Home></Home></Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
