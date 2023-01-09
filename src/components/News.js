import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
    };
  }
  async componentDidMount() {
    let url = this.props.urls;
    let data = await fetch(url);
    let parseddata = await data.json();
    this.setState({ articles: parseddata.articles });
  }
  render() {
    return (
      <div className="container mt-4">
        <div className="row">
          {this.state.articles.map((element) => {
            if (element.urlToImage) {
              return (
                <div className="col-md-6" key={element.url}>
                  <NewsItem
                    newsUrl={element.url}
                    title={element.title}
                    description={element.description}
                    imgUrl={element.urlToImage}
                    dateAt={element.publishedAt}
                  />
                </div>
              );
            }
          })}
        </div>
      </div>
    );
  }
}

export default News;
