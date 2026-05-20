import React, { useEffect, useMemo, useState } from "react";
import { easeIn, motion } from "motion/react";
import NewsItem from "./NewsItem";
import InfiniteScroll from "react-infinite-scroll-component";
import Loader from "./Loader";
import EndMessage from "./EndMessage";
import axios from "axios";
import BACKEND_URL from "../api/url.js";

const News = ({
  country = "in",
  category = "top",
  q,
  setCountry,
  setCategory,
  setQ,
  auth,
}) => {
  const FALLBACK_IMAGE =
    "https://img.freepik.com/vector-premium/vector-icono-imagen-predeterminado-pagina-imagen-faltante-diseno-sitio-web-o-aplicacion-movil-no-hay-foto-disponible_87543-11093.jpg";

  const [result, setResult] = useState([]);
  const [nextPage, setNextPage] = useState(null);
  const [hasMore, setHasMore] = useState(true);

  const adGap = useMemo(() => {
    return Math.floor(Math.random() * 5) + 2;
  })

  // Fetching News From Backend
  const FetchNews = async () => {
    try {
      const URL = `/news/fetch-news?${country ? `&country=${country}` : ""}${category ? `&category=${category}` : ""}${q ? `&q=${q}` : ""}${nextPage ? `&page=${nextPage}` : ""}`;
      const news = await BACKEND_URL(URL);

      setResult((prev) => [...prev, ...(news.data.data.results || [])]);
      setNextPage(news.data.data.nextPage);
      setHasMore(!!news.data.data.nextPage);
    } catch (error) {
      console.error(`Error in Fetching News ${error}`);
    }
  };

  // Reset Country and Category on Searching
  useEffect(() => {
    if (q) {
      setCountry("");
      setCategory("");
    }
  }, [q]);

  // Reset Search on Country or Category Selection
  useEffect(() => {
    if (country || category) {
      setQ(null);
    }
  }, [country, category]);

  // On Changing Country, Category or Q reset the News(results)
  useEffect(() => {
    setResult([]);
    setNextPage(null);
    setHasMore(true);
    FetchNews();
  }, [country, category, q]);

  // Div Variant of Framer Motion
  const divVariants = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.07,
        delayChildren: 0.12,
      },
    },
  };

  // Card Variant of Framer Motion
  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 40,
      scale: 0.92,
    },

    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 16,
      },
    },
  };

  return (
    <InfiniteScroll
      dataLength={result.length}
      next={FetchNews}
      hasMore={hasMore}
      loader={<><Loader /><Loader /><Loader /></>}
      endMessage={
        <EndMessage
          msg={
            result.length == 0
              ? "No Result Found"
              : "You have reached the end!!"
          }
        />
      }
    >
      <motion.div
        variants={divVariants}
        animate="show"
        initial="hidden"
        layout
        className="grid grid-cols-1 gap-4 mt-4 md:grid-cols-3 md:mt-7"
      >
        {result.map((news, index) => {
          const pub_on = new Date(news.pubDate);
          return (
            <React.Fragment key={news.article_id}>
              <motion.div variants={cardVariants} layout key={news.article_id}>
                <NewsItem
                  article_id={news.article_id}
                  title={news.title?.slice(0, 46) || "Title not Present"}
                  description={
                    news.description?.slice(0, 93) || "Description not Present"
                  }
                  source={news.source_name?.slice(0, 20) || "Unknown"}
                  image_url={news.image_url || FALLBACK_IMAGE}
                  month={pub_on.toLocaleString("en-US", { month: "short" })}
                  date={pub_on.getDate()}
                  year={pub_on.getFullYear()}
                  pubDate={news.pubDate}
                  link={news.link}
                  auth={auth}
                />
              </motion.div>
            </React.Fragment>
          );
        })}
      </motion.div>
    </InfiniteScroll>
  );
};

export default News;
