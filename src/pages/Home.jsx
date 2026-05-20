import React from 'react'
import NavBar from '../components/NavBar_Component/NavBar';
import CurrentNews from "../components/CurrentNews.jsx"
import { useState } from 'react';
import News from '../components/News';
import Greeting from '../utilis/Greeting.jsx';

const Home = ({ auth, setAuth, setCountry, setCategory, setQ, setCountryName, setCategoryName, country, category, countryName, categoryName, q }) => {
  return (
    <>
    <Greeting auth={auth}/>
    <NavBar topmargin={auth ? "mt-1.5" : "mt-5"} auth={auth} setAuth={setAuth} setCategory={setCategory} setCountry={setCountry} setQ={setQ} setCountryName={setCountryName} setCategoryName={setCategoryName}/>
    <CurrentNews countryName={countryName} categoryName={categoryName} q={q} />
    <News  country={country} category={category} q={q} setCountry={setCountry} setCategory={setCategory} setQ={setQ} auth={auth}/>
    </>
  ) 
} 

export default Home