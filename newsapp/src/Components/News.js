import React, { useState, useEffect } from 'react'
import NewsItems from './NewsItems'
import Spinner from './Spinner';
import './News.css'
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';

const News = (props) => {

  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalArticles, setTotalArticles] = useState(0);
  const [hasMore, setHasMore] = useState(true);

  const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  useEffect(() => {
    const fetchData = async () => {
      await fetchArticles(currentPage);
    };

    fetchData();
  }, []);

  const fetchArticles = async (page) => {
    props.setProgress(10);
    const apiKey = 'a13ba0fab9004b8aa5fb7c6e9149c6aa';
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${apiKey}&page=${page}&pageSize=${props.articlesPerPage}`;

    try {
      
      let data = await fetch(url);
      let parsedData = await data.json();
      props.setProgress(50);
      setArticles([...articles, ...parsedData.articles]);
      setTotalArticles(parsedData.totalResults);
      setCurrentPage(page + 1);
      setHasMore(page * props.articlesPerPage < parsedData.totalResults);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
    props.setProgress(100);
  }

  const handleNextPage = () => {
    // Call fetchArticles to load more articles when scrolling to the bottom
    fetchArticles(currentPage);
  };

  return (
    <div className='container'>
      <h1 style={{ textAlign: 'center' }}> News Portal - Top Headlines - {capitalize(props.category)} </h1>
      {loading && <Spinner />}
      <InfiniteScroll
        dataLength={articles.length}
        next={handleNextPage}
        hasMore={hasMore}
        loader={<Spinner />}
      >
        <div className="insideContainer">
          {!loading && articles.map((element, index) => {
            return <div className="items" key={index}>
              <NewsItems title={element.title ? element.title.slice(0, 25) : ''} description={element.description ? element.description.slice(0, 30) : ''} imageUrl={element.urlToImage || ''} newsUrl={element.url || ''} author={element.author? element.author.slice(0,10):''} publishedAt={element.publishedAt} source={element.source.name} backgroundColor={props.backgroundColor} />
            </div>
          })}
        </div>
      </InfiniteScroll>
    </div>
  )
}

News.defaultProps = {
  country: 'us',
  articlesPerPage: 12,
  category: ''
}

News.propTypes = {
  country: PropTypes.string,
  articlesPerPage: PropTypes.number,
  category: PropTypes.string,
}

export default News;
