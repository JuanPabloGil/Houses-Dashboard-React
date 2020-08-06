import React from 'react';
import Registration from './registration';
import Login from './login';

const Signup = () => (
  <div>
    <h2 className="text-center p-5"> Sign Up </h2>
    <div className="row">
      <div className="col-md-6">
        <Registration />
      </div>
      <div className="col-md-6">
        <Login />
      </div>
    </div>
  </div>
);

export default Signup;
