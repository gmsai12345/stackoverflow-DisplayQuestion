import React from 'react';
import {Routes, Route} from 'react-router-dom';
//import Home from './Home/Home'
//import Auth from './Auth/Auth'
import LeftSidebar from "../LeftSidebar/LeftSidebar";
import RightSidebar from "../RightSidebar/RightSidebar";
import HomeMainbar from "../HomeMainbar/HomeMainbar";

const Home = () => {
  
  return (
    <div className = 'home-container-1' >
      <LeftSidebar/>
      <div className = 'home-container-2' >
        <HomeMainbar/>
        <RightSidebar/> 
      
      </div>
  );
}   
export default Home;