import React from "react";
import "./NewsItems.css";
const NewsItems = (props) => {
    let { title, description, imageUrl, newsUrl, author, publishedAt, source } = props;

    return (
      <div className="card">
        <span className="badge" style={{backgroundColor:props.backgroundColor}}>{!source?'Unknown':source}</span>
        <div>
          <img
            src={
              !imageUrl
                ? "https://www.reuters.com/resizer/zysKTDfzmef9l28FnvwwbAPeT1E=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/2XMAL27ELRI6VLGJ55SLN4TZGE.jpg"
                : imageUrl
            }
            alt="Card"
            className="card-image"
          />
        </div>
        <div className="card-elements">
          <h3 className="card-title">{title}...</h3>
          <p className="card-content">{description}...</p>
          <p className="card-content" style={{fontSize:"0.8rem"}}> By {author} On: { new Date(publishedAt).toGMTString()}</p>
          <a className="btn" href={newsUrl} target="_blank" rel="noopener noreferrer">Read more</a>
        </div>
      </div>
    );
  }

export default NewsItems;
