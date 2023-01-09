import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imgUrl, dateAt, newsUrl } = this.props;
    return (
      <div>
        <div className="card my-3">
          <img src={imgUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h2 className="card-title  pb-4 border-bottom border-danger">
              {title}
            </h2>

            <p className="card-text ">{description}</p>
            <div className="card-body position-relative">
              <h6 className="position-absolute top-0 start-0 card-title float-left mt-2 opacity-50 ">
                <small className="text-muted ">
                  Published At: {dateAt.slice(0, 10)} - {dateAt.slice(11, 19)}
                </small>
              </h6>
              <a
                href={newsUrl}
                className="position-absolute bottom-0 end-0 btn btn-sm btn-dark"
              >
                Read more
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
