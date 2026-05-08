import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import NavBar from "../components/NavBar_Component/NavBar";
import NewsItem from "../components/NewsItem";
import BACKEND_URL from "../api/url";
import EndMessage from "../components/EndMessage";

const SavedNews = () => {
  const [savedNews, setSavedNews] = useState([]);

  // To fetch the Saved News of the User from the DataBase
  const fetchSavedNews = async () => {
    const token = localStorage.getItem("token");

    if (!token) {
      console.log("No token found");
      return;
    }

    try {
      const res = await BACKEND_URL.get("/save/fetch-saved-news", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setSavedNews(res.data.data || []);
    } catch (error) {
      console.log("Error fetching saved news:", error.response?.data || error);
    }
  };

  // To Remove the Unsaved News from UI
  const removeNewsFromUI = (article_id) => {
    setSavedNews((prev) => 
    prev.filter((news) => news.article_id !== article_id)
  )
  }

  // to get the news saved by user on first render
  useEffect(() => {
    fetchSavedNews();
  }, []);

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
      <NavBar />

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

      <div className="grid grid-cols-1 gap-4 mt-4 md:grid-cols-3 md:mt-7">
        {savedNews.map((news) => {
          const pub_on = new Date(news.pubDate);

          return (
            <NewsItem
              key={news._id || news.article_id}
              article_id={news.article_id}
              title={news.title?.slice(0, 46) || "Title not Present"}
              description={
                news.description?.slice(0, 93) || "Description not Present"
              }
              image_url={news.image_url}
              source={news.source?.slice(0, 20) || "Unknown"}
              link={news.link}
              pubDate={news.pubDate}
              month={pub_on.toLocaleString("en-US", { month: "short" })}
              date={pub_on.getDate()}
              year={pub_on.getFullYear()}
              alreadySaved={true}
              onRemove={removeNewsFromUI}
            />
          );
        })}
      </div>

      <EndMessage msg={
        savedNews.length == 0 ? "Save Your First News" : "You have Reached the End!"
      }/>
    </>
  );
};

export default SavedNews;