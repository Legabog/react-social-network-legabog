import React from "react";
import classes from "./News.module.css";
import Switcher from "../common/Switcher/Switcher";

const News = (props) => {
  return (
    <div className={classes.root}>

      <Switcher/>
           
      {props.news.map((e) => {
        let date = new Date(e.publishedAt);
        return (
          <div className={classes.newsCard}>
            <h2>{e.title}</h2>
            <p className={classes.newsHeader}>
              {date.toLocaleString()} ● Источник: {e.source.name}
              {" ● "}
              {e.author ? `Автор:` + e.author : ""}
            </p>
            <div className={classes.newsInfo}>
              <a href={e.url}>
                <img src={e.urlToImage} alt="description"></img>
              </a>
              <p>{e.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default News;
