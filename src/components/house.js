import React from 'react';
import PropTypes from 'prop-types';

const House = props => {
  const { location } = props;
  const { data } = location;
  const {
    id, title, about, category, price, created_at,
  } = data;
  const time = created_at.split('T')[0];

  return (
    <div className="container">
      <a href="/">
        <button type="button" className="btn bg-info text-white mt-4 ">{' < Go Back '}</button>
      </a>
      <h4 className="text-center p-3">{title}</h4>
      <div className="row">
        <div className="col-md-6 img-with-text ">
          <div className="bottom-right-text ">
            <strong>
              $
              {price}
              /Month
            </strong>
          </div>
        </div>
        <div className="col-md-6">
          {id}
          {category}
          <p>{about}</p>
          <hr />
          <span className="badge">
            Posted on:
            {time}
          </span>
        </div>
      </div>
    </div>
  );
};

House.propTypes = {
  location: PropTypes.shape({
    data: PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      category: PropTypes.string,
      about: PropTypes.string,
      price: PropTypes.string,
      created_at: PropTypes.string,
    }),
  }).isRequired,
};

export default House;
