import React, { Component } from 'react';
import Contacts from './components/contacts/Contacts'
import { BrowserRouter as Router , Route ,Switch } from 'react-router-dom'
import Header from './components/layouts/Header'
import About from './components/pages/about'
import NotFound from './components/pages/NotFound'
import { Provider } from './Context'
import AddContact from './components/contacts/AddContact'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {

  componentDidMount(){

    const contacts=localStorage.getItem('contacts');
    
    
 }
  render() {
    return (
      <Provider>
        <Router>
          <div className="App">   
          <Header branding="Contact Manager"/> 
          <div className="container">
            <Switch>
              <Route exact path="/" component ={Contacts} />
              <Route exact path="/about" component ={About} />
              <Route exact path="/contact/add" component ={AddContact} />
              <Route component = {NotFound} />
            </Switch>   
          </div>       
        </div>
        </Router>
      </Provider>
     
    );
  }
}

export default App;
