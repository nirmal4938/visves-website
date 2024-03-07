import React from "react";
import { Hero } from "./Hero";
import "../../styles/scss/news.scss";
import { News } from "./News";

export const NewsArticle = () => {
  return (
    <React.Fragment>
      <div className="news-article-page">
        <Hero />
        <News />
      </div>
    </React.Fragment>
  );
};
