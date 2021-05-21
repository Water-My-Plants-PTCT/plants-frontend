
import { Route } from 'react-router';
import './App.css';
import Login from './components/Login';
import PlantPage from './components/PlantPage';
import PrivateRoute from './components/PrivateRoute';
import Signup from './components/Signup';

const logout = () => {
  localStorage.removeItem('token')
}
function App() {
  return (
    <div className="App">
      
      Water Plants App
      <button onClick={logout}>LOGOUT</button>
      <Route exact path='/' component={Login}/>
      <PrivateRoute exact path ='/protected/PlantPage' component={PlantPage} />
      <Signup />
      
    </div>
  );
}

export default App;
