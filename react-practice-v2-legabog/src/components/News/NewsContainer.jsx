import React from "react";
import News from "./News";
import { connect } from "react-redux";
import { getNews } from "../../redux/news-reducer"
import Preloader from "../common/Preloader/Preloader";


class NewsContainer extends React.Component {

  componentDidMount() {
    this.props.getNews()
  
  }


  render() {
    return <>
    {this.props.isFetching ? <Preloader /> : null}
    <News
      {...this.props}
    />
  </>
  }
}

const mapStateToProps = (state) => {
  return {
    news: state.newsReducer.news,
    isFetching: state.newsReducer.isFetching,
    country: state.settingsReducer.countries,
    categories: state.settingsReducer.categories
  };
};

export default connect(mapStateToProps, {getNews})(NewsContainer);
