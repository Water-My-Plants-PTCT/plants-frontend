
import { Route } from 'react-router';
import './App.css';
import Login from './components/Login';
import PlantPage from './components/PlantPage';
import PrivateRoute from './components/PrivateRoute';
import Signup from './components/Signup';
import Header from './Header';
import AddPlantForm from "./components/AddPlantForm"


function App() {
  return (
    <div className="App">
      <Header />
      Water Plants App
      <Route exact path='/' component={Login}/>
      <Route exact path='/signup' component={Signup} />
      <PrivateRoute exact path ='/protected/PlantPage' component={PlantPage} />
      <Signup />
      <PrivateRoute exact path = '/protected/AddPlantForm' component={AddPlantForm}/>
      
    </div>
  );
}

export default App;
