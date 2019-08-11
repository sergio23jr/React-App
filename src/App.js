import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/Navbar';
import ExerciseList from './components/ExerciseList';
import EditExercise from './components/EditExercise';
import CreateExercise from './components/CreateExercise';
import CreateUser from './components/CreateUser';



function App() {
  return (
    <Router>
      <Navbar />
      <Route exact path='/' copmponent={ExerciseList} />
      <Route path='/edit/:id' component={EditExercise} />
      <Route path='/create' component={CreateExercise} />
      <Route path='/user' component={CreateUser} />
    </Router>
  );
}

export default App;
