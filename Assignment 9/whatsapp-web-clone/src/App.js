

import './App.css';
import Chat from './components/Chat';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import { useState } from 'react';
import Login from './components/Login';
import { useSelector } from 'react-redux';

function App() {

  // const [user, setUser] = useState(null)
  const user = useSelector(state => state.user);
  console.log(user);

  return (
    <div className="app">
      {!user ? <Login /> : (
        <div className='app-body'>
          <Router>
            <Sidebar />
            <Switch>
              <Route path="/rooms/:roomId">
                <Chat />
              </Route>
              <Route path="/">
                <Chat />
              </Route>
            </Switch>
          </Router>
        </div>
      )}

    </div>
  );
}

export default App;
