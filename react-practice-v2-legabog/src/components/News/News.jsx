import React from "react";
import classes from "./News.module.css";

const News = (props) => {
  return (
    <div className={classes.root}>
      <div className={classes.optionCountries}>
        <div class="input-group">
          <select
            class="custom-select"
            id="inputGroupSelect04"
            aria-label="Example select with button addon"
          >
            {props.country.map((e) => (
              <option value={e.id}>{e.title}</option>
            ))}
          </select>
          <div class="input-group-append">
            <button class="btn btn-outline-secondary" type="button">
              Choose
            </button>
          </div>
        </div>
      </div>

      <div className={classes.optionCategories}>
        <div class="input-group">
          <select
            class="custom-select"
            id="inputGroupSelect04"
            aria-label="Example select with button addon"
          >
            {props.categories.map((e) => (
              <option value={e.id}>{e}</option>
            ))}
          </select>
          <div class="input-group-append">
            <button class="btn btn-outline-secondary" type="button">
              Choose
            </button>
          </div>
        </div>
      </div>

      {props.news.map((e) => {
        let date = new Date(e.publishedAt);
        return (
          <div className={classes.newsCard} key={Math.random(10000)}>
            <h2>{e.title}</h2>
            <p className={classes.newsHeader}>
              {date.toLocaleString()} ● Источник: {e.source.name}
              {" ● "}
              {e.author ? `Автор: ` + e.author : ""}
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
