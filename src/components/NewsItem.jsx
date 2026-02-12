import React from "react";
import { FaCaretRight } from "react-icons/fa6";

const NewsItem = ({ image_url, title, source, description, link, month, date, year }) => {
  return (
    <div className="relative h-120 rounded-xl overflow-hidden bg-black">
      <img
        src={image_url}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-linear-to-t from-black via-black/55 to-transparent z-10" />
      <div className="relative z-20 h-full flex flex-col justify-between p-4 text-white">
        <div>
          <span className="w-fit px-3 py-1 text-xs rounded-full bg-white/20 backdrop-blur-lg shadow-xl shadow-white/30 border border-white/30">
            {source}
          </span>
        </div>
        <div>
          <h2 className="text-xl font-semibold leading-snug mb-3">
            {title}...
          </h2>
          <p className="text-sm text-white/80 mb-8 line-clamp-3">
            {description}...
          </p>
          <div className="flex items-center justify-between">
            <a
              href={link}
              target="_blank"
              className="cursor-pointer flex items-center gap-1 mb-3 w-fit px-2 py-2.5 text-sm rounded-full bg-white/20 hover:bg-white/30 transition shadow-xl shadow-white/20 inset-shadow-sm inset-shadow-white/30 border border-white/20"
            >
              Read More
              <FaCaretRight className="size-5" />
            </a>
            <div className="mb-3 text-xs text-white/60 text-end">
              Published on {month} {date}, {year} <br className="md:hidden" /> •{" "}
              {source}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
