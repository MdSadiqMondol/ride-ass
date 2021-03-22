
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './component/Home/Home';
import Header from './component/Header/Header';
import NotFound from './component/NotFound/NotFound';
import Login from './component/Login/Login';

import Blog from './component/Blog/Blog';
import Contact from './component/Contact/Contact';
import { createContext, useState } from 'react';
import Destination from './component/Destination/Destination';
import PrivateRoute from './component/PrivateRoute/PrivateRoute';
import Image from './images/Bg.png'
export const userContext = createContext();
function App() {
  const style={
    backgroundImage: `url(${Image})`
  }
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    
    <userContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <div style={style} className="bg">
      <Router>
        <Header></Header>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/">
           <Home></Home>
          </Route>
          <Route path="/blog">
              <Blog></Blog>
          </Route>
          <PrivateRoute path = "/destination" >
              <Destination></Destination>
          </PrivateRoute>
           <Route path="/contact">
              <Contact></Contact>
            </Route>
          <Route path="/login">
              <Login></Login>
            </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </div>
    </userContext.Provider>
  );
}

export default App;
