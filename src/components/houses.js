import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const HousesList = props => {
  const { data } = props;

  const {
    title, price, id, category,
  } = data;

  return (
    <div className="col-md-6 col-lg-4">
      <div className="shadow p-3 mb-5 bg-white rounded">
        <hr />
        <div className="row">
          <div className="col-8">
            <Link
              to={
                {
                  pathname: `/house/${id}`,
                  data,
                }
              }
            >
              <h2 className="h6 text-dark">
                <strong>{title}</strong>
              </h2>
              <span className="badge badge-secondary mb-3">
                {category}
              </span>
            </Link>
          </div>
          <div className="col-4">
            <p className="text-right">
              $
              {price}
              <span className="text-muted"> / Month </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

HousesList.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    category: PropTypes.string,
    price: PropTypes.string,
  }).isRequired,
};

export default HousesList;
