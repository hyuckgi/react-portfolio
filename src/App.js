import React, { Component } from 'react';
import { Header } from './components';
import './App.css';

class App extends Component {

    render() {
        const router = this.props.router;

        return (
          <div>
              <Header router={router}/>
               {this.props.children}
          </div>
        );
    }
}

export default App;
