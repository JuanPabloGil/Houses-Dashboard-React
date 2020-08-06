/* eslint camelcase: ["error", {"properties": "never", ignoreDestructuring: true}] */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Axios from 'axios';
import houseImage from '../assets/images/house-image.jpg';
import '../assets/styles/houses.css';

const House = props => {
  const { location } = props;
  const { data } = location;
  const {
    id, title, about, category, price, created_at,
  } = data;

  const [favorite, setFavorite] = useState({
    itsFavorite: false,
    favoriteId: null,
    display: 'Add to Favorites',
  });

  const handleDeleteFavorites = () => {
    Axios.delete(`http://localhost:3001/favorites/${favorite.favoriteId}`, { withCredentials: true })
      .then(response => {
        if (response.data.status === 'deleted') {
          setFavorite({
            itsFavorite: false,
            favoriteId: null,
            display: 'Add to Favorites',
          });
        }
      });
  };

  const isFavorite = () => {
    Axios.post('http://localhost:3001/isfavorite', { house_id: id }, { withCredentials: true })
      .then(response => {
        if (response.data.status) {
          setFavorite({
            itsFavorite: true,
            favoriteId: response.data.favoriteId,
            display: 'Delete from  Favorites',
          });
        }
      });
  };

  const handleFavorites = () => {
    Axios.post('http://localhost:3001/favorites', { house_id: id }, { withCredentials: true })
      .then(response => {
        if (response.statusText === 'Created') {
          isFavorite();
        }
      });
  };

  useEffect(() => {
    Axios.post('http://localhost:3001/isfavorite', { house_id: id }, { withCredentials: true })
      .then(response => {
        if (response.data.status) {
          setFavorite({
            itsFavorite: true,
            favoriteId: response.data.favoriteId,
            display: 'Delete from  Favorites',
          });
        }
      });
  },[id]);

  const time = created_at.split('T')[0];

  return (
    <div className="container">
      <a href="/">
        <button type="button" className="btn bg-info text-white mt-4 ">{' < Go Home '}</button>
      </a>
      <h3 className="text-center p-3">{title}</h3>
      <div className="row">
        <div className="col-md-6 img-with-text ">
          <img src={houseImage} className="img-fluid rounded" alt="House" />
          <div className="bottom-right-text ">
            <strong>
              $
              {price}
              /Month
            </strong>
          </div>
        </div>
        <div className="col-md-6">
          <p>{about}</p>
          <span className="badge badge-secondary mt-3 mb-0">{category}</span>
          <span className="badge">
            Posted on:
            {time}
          </span>
          <hr />
          {
            favorite.itsFavorite
              ? (
                <button type="button" onClick={handleDeleteFavorites} className="btn btn-info btn-block">
                  {' '}
                  {favorite.display}
                  {' '}
                </button>
              )
              : (
                <button type="button" onClick={handleFavorites} className="btn btn-info btn-block">
                  {' '}
                  {favorite.display}
                </button>
              )
          }
        </div>
      </div>
    </div>
  );
};

House.propTypes = {
  location: PropTypes.shape({
    data: PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      category: PropTypes.string,
      about: PropTypes.string,
      price: PropTypes.number,
      created_at: PropTypes.string,
    }),
  }).isRequired,
};

export default House;
