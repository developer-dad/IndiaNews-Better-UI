import React, { useEffect, useState } from 'react'
import { motion } from "motion/react";
import NavBar from '../components/NavBar_Component/NavBar'
import NewsItem from '../components/NewsItem';
import BACKEND_URL from '../api/url';

const SavedNews = () => {

  const [news, setNews] = useState([])

  const fetchSavedNews = async () => {
    const res = await BACKEND_URL.get('/save/fetch-saved-news')
    setNews(res.data)
    console.log(news);
    
  }

  useEffect(() => {
    fetchSavedNews()
  }, [])

   const divVarients = {
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        ease: "easeIn",
        delay: 0.25,
      },
    },
    hidden: {
      opacity: 0,
      scale: 0.95,
    },
  };
  return (
    <>
    <NavBar/>
    <motion.div
      variants={divVarients}
      initial="hidden"
      animate="show"
      className="overflow-hidden relative rounded-xl border border-white/30 select-none mt-3 md:mt-5"
    >
      <div className="h-20 w-50 bg-white/70 rounded-full blur-2xl absolute inset-0 left-96 md:left-9/12"></div>
      <div className="bg-gray-600/30 text-center text-white text-md font-bold flex justify-center items-center backdrop-blur-3xl h-14 md:h-16 md:text-2xl">
        Showing All the Saved News
      </div> 
      <div className="h-20 w-50 bg-white/30 rounded-full blur-2xl absolute inset-0"></div>
    </motion.div>
    <NewsItem
      image_url=""
      title=""
      source=""
      description=""
      link=""
      article_id=''
      userID=''
      pubDate=''
    />
    </>
  )
}

export default SavedNews