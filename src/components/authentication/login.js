import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { logged } from '../../actions';

const Login = () => {
  const history = useHistory();

  const [data, setData] = useState({
    email: '',
    password: '',
    errors: '',
  });

  const dispatch = useDispatch();

  const handleSubmit = event => {
    const { email, password } = data;
    axios
      .post(' https://frozen-bayou-05010.herokuapp.com/sessions',
        {
          user: {
            email,
            password,
          },
        }, { withCredentials: true })
      .then(response => {
        if (response.data.logged_in) {
          dispatch(logged(response.data));
          history.push('/dashboard');
        } else {
          setData({
            ...data,
            errors: <p className="alert alert-danger ">Wrong User or Password</p>,
          });
        }
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
      <h4 className="form-group">Login</h4>

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
        <button className="btn btn-info" type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
