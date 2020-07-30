/* eslint camelcase: ["error", {"properties": "never", ignoreDestructuring: true}] */
import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { logged } from '../../actions';

const Registration = () => {
  const history = useHistory();

  const [data, setData] = useState({
    email: '',
    password: '',
    errors: '',
  });

  const dispatch = useDispatch();

  const handleSubmit = event => {
    const { email, password, password_confirmation } = data;
    axios
      .post(' https://frozen-bayou-05010.herokuapp.com/registrations',
        {
          user: {
            email,
            password,
            password_confirmation,
          },
        })
      .then(response => {
        if (response.status === 200) {
          dispatch(logged(response.data));
          history.push('/dashboard');
        }
      })
      .catch(error => {
        setData({
          ...data,
          errors: <p className="alert alert-danger ">{error.response.data.message}</p>,
        });
      });

    event.preventDefault();
  };

  const handleChange = event => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div>
      <hr />
      {data.errors}
      <h4 className="form-group">Create Account</h4>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            className="form-control"
            type="email"
            name="email"
            placeholder="your@email"
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            className="form-control"
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            className="form-control"
            type="password"
            name="password_confirmation"
            placeholder="Password Confirmation"
            onChange={handleChange}
            required
          />
        </div>
        <button className="btn btn-info" type="submit">Register</button>
      </form>
    </div>
  );
};

export default Registration;
