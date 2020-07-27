/* eslint camelcase: ["error", {"properties": "never", ignoreDestructuring: true}] */
import React from 'react';
import PropTypes from 'prop-types';
import houseImage from '../assets/images/house-image.jpg';
import '../assets/styles/houses.css';

const House = props => {
  const { location } = props;
  const { data } = location;
  const {
    title, about, category, price, created_at,
  } = data;

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
          <button type="button" className="btn btn-info btn-block"> Add to favorites</button>
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
