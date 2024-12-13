"use client";
import React from 'react';
import './App.css'
import Home from './Screens/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Components/Login';
import DietPlan from './Components/DietPlan';
import WorkoutPlan from './Components/WorkoutPlan';
import Pricing from './Components/Pricing';
import Blogs from './Components/Blogs';

function App() {

  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/login' element={<Login/>}></Route>
    <Route path='/diet' element={<DietPlan/>}></Route>
    <Route path='/workout' element={<WorkoutPlan/>}></Route>
    <Route path='/price' element={<Pricing/>}></Route>
    <Route path='/blogs' element={<Blogs/>}></Route>
   </Routes>
   
   </BrowserRouter>
  )
}

export default App
