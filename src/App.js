import React from 'react';
import {Route, Routes , BrowserRouter as Router} from "react-router-dom"
import TodoList from './pages/todoList';
import './App.css';
import Details from './pages/Details';
import Menu from "./pages/menu"
import Weather from './pages/weather';


function App() {
  return (
    <div className='container'>
      <Router>
        <Menu />
            <Routes>
              <Route index element={<TodoList/>} />
              <Route path='/list' element={<Details/>} />
              <Route path='/weather' element={<Weather/>} />
            </Routes>
      </Router>
    </div>
    
  );
}

export default App;
