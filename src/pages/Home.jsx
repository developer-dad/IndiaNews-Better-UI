import React from 'react'
import NavBar from '../components/NavBar_Component/NavBar';
import CurrentNews from "../components/CurrentNews.jsx"
import { useState } from 'react';
import News from '../components/News';
import Greeting from '../utilis/Greeting.jsx';

const Home = ({ auth, setAuth }) => {
  const [country, setCountry] = useState("in");
  const [countryName, setCountryName] = useState("India");
  const [category, setCategory] = useState("top");
  const [categoryName, setCategoryName] = useState("Top");
  const [q, setQ] = useState(null);
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