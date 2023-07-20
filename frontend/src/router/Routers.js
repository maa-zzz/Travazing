import React,{useContext} from "react";
import {Routes, Route, Navigate} from "react-router-dom";

import Home from "./../pages/Home";
import Tours from "./../pages/Tours";
import TourDetails from "./../pages/TourDetails";
import Login from "./../pages/Login";
import Register from "./../pages/Register";
import SearchResultList from "./../pages/SearchResultList";
import ThankYou from "../pages/ThankYou";
import About from "../pages/About";
import Bookings from "../pages/Bookings";
import AddCustomForm from '../pages/Customize'
import SupportAdmin from '../services/SupportAdmin'
import ProfilePage from '../pages/Profile'
import Admin from '../pages/Admin'
import {BASE_URL} from '../utils/config'
import useFetch from '../hooks/useFetch'
import {authContext} from '../context/AuthContext'
const Routers = () => {
  const {user} = useContext(authContext)
  const {data:users} = useFetch(`${BASE_URL}/users`)
  let id = ""
  users?.map((users) => id = users._id)

  let isAdmin=''
  if(user&&user._id!==null){
    if(user._id===id){
      isAdmin='admin'
    }
  }

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path='/customize' element={<AddCustomForm />} /> 
      <Route path="/tours" element={<Tours />} />
      <Route path="/about" element={<About />} />
      <Route path='/support' element={<SupportAdmin />} />
      {
          isAdmin && <Route path='/admin' element={<Admin />}/>
      }
      <Route path='/profile' element={<ProfilePage />} />
      <Route path="/tours/:id" element={<TourDetails />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/thank-you" element={<ThankYou />} />
      <Route path="/bookings" element={<Bookings/>} />
      <Route path="/tours/search" element={<SearchResultList />} />
    </Routes>
  );
};

export default Routers;
