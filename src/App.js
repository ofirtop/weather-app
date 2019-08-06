import React from 'react';
import Navbar from './cmps/Navbar'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './cmps/Home';
import Favorites from './cmps/Favorites';
import { ToastContainer } from 'react-toastify';



function App() {
  return (
    <BrowserRouter>
    <ToastContainer />
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/favorites" component={Favorites} />
          <Route path="/:cityId" component={Home} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
