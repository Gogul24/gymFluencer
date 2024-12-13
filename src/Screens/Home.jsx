import React from 'react'
import Navbar from '../Components/Navbar'
import Features from '../Components/Features'
import Features2 from '../Components/Features2'
import DietPlan from '../Components/DietPlan'
import WorkoutPlan from '../Components/WorkoutPlan'
import Blogs from '../Components/Blogs'
import Pricing from '../Components/Pricing'
import { Footers } from '../Components/Footer'
const Home = () => {
  return (
    <>
    <div id='navbar'> <Navbar/></div>
    <div id='feat'><Features/></div>
    <div id='feat2'><Features2/></div>
    <div id='diet'><DietPlan/></div>
    <div id='workout'><WorkoutPlan/></div>
    <div id='price'><Pricing/></div>
    <div id='blog'><Blogs/></div>
    <div id='foot'><Footers/></div>          
    </>
  )
}

export default Home