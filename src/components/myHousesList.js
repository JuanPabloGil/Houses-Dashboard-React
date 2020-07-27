import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Axios from 'axios';

const MyHousesList = props => {
  const { data } = props;

  const {
    title, price, id, category,
  } = data;

  const handleDelete = () => {
    Axios.delete(`http://localhost:3001/houses/${id}`, { withCredentials: true })
      .then(response => {
        if (response.status === 204) {
          window.location.reload(false);
        }
      });
    // .catch(error => {  });
  };

  return (
    <div className="col-md-6 col-lg-4">
      <div className="shadow p-3 mb-5 bg-white rounded">
        <hr />
        <div className="row">
          <div className="col-8">

            <h2 className="h6 text-dark">
              <strong>{title}</strong>
            </h2>
            <span className="badge badge-secondary mb-3">
              {category}
            </span>

          </div>
          <div className="col-4">
            <p className="text-right">
              $
              {price}
              <span className="text-muted"> / Month </span>
            </p>
          </div>
        </div>
        <button type="button" onClick={handleDelete} className="btn btn-danger m-2"> Delete House </button>
        <Link
          to={
                        {
                          pathname: `/house/${id}`,
                          data,
                        }
                    }
        >
          <button type="button" className="btn btn-warning m-2"> Preview House </button>
        </Link>
      </div>
    </div>
  );
};

MyHousesList.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    category: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
};

export default MyHousesList;
