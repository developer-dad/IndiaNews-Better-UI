import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import InfiniteScroll from "react-infinite-scroll-component";
import Loader from "./Loader";

function News({ country = "in", category = "top" }) {
  const FALLBACK_IMAGE =
    "https://img.freepik.com/vector-premium/vector-icono-imagen-predeterminado-pagina-imagen-faltante-diseno-sitio-web-o-aplicacion-movil-no-hay-foto-disponible_87543-11093.jpg";

  const [result, setResult] = useState([]);
  const [nextPage, setNextPage] = useState(null);
  const [hasMore, setHasMore] = useState(true);


  const FetchNews = async () => {
    const URL = `https://newsdata.io/api/1/latest?apikey=pub_cfba624d2f6b453889e0ccae937a8a41&country=${country}&category=${category}${nextPage ? `&page=${nextPage}` : ""}`;

    const data = await fetch(URL);
    const parsedData = await data.json();

    setResult((prev) => [...prev, ...parsedData.results]);
    setNextPage(parsedData.nextPage);
    setHasMore(!!parsedData.nextPage);
  };

  useEffect(() => {
    setResult([]);
    setNextPage(null);
    setHasMore(true);
    FetchNews();
  }, [country, category]);

  return (
    <InfiniteScroll
      dataLength={result.length}
      next={FetchNews}
      hasMore={hasMore}
      loader={<Loader />}
    >
      <div
        className="grid grid-cols-1 gap-4 mx-4 mt-4 md:grid-cols-3 md:mx-28 md:mt-7"
      >
        {result.map((news) => {
          const pub_on = new Date(news.pubDate);
          const random = crypto.randomUUID();
          return (
            <div
              key={random}
            >
              <NewsItem
                title={news.title?.slice(0, 46) || "Title not Present"}
                description={
                  news.description?.slice(0, 93) || "Description not Present"
                }
                source={news.source_name.slice(0, 20) || "Unknown"}
                image_url={news.image_url || FALLBACK_IMAGE}
                month={pub_on.toLocaleString("en-US", { month: "short" })}
                date={pub_on.getDate()}
                year={pub_on.getFullYear()}
                link={news.link}
              />
            </div>
          );
        })}
      </div>
    </InfiniteScroll>
  );
}

export default News;
