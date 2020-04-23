import React from "react";
import News from "./News";
import { connect } from "react-redux";
import { getNews } from "../../redux/news-reducer"


class NewsContainer extends React.Component {

  componentDidMount() {
    this.props.getNews()
  
  }


  render() {
    return <News
      {...this.props}     
      />;
  }
}

const mapStateToProps = (state) => {
  return {
    news: state.newsReducer.news
  };
};

export default connect(mapStateToProps, {getNews})(NewsContainer);
