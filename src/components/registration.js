import React, { useState } from 'react';
import axios from 'axios';
// import { useDispatch, useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { useHistory } from "react-router-dom";
import { logged } from '../actions'

const Registration = () => {

    // const loggedin = useSelector(state => state.logged);
    const history = useHistory();

    const [data, setData] = useState({
        username: '',
        password: '',
    });

    const dispatch = useDispatch();


    const handleSubmit = (event) => {

        const { email, password, password_confirmation } = data
        axios
            .post('http://localhost:3001/registrations',
                {
                    user: {
                        email: email,
                        password: password,
                        password_confirmation: password_confirmation
                    }
                },

                { withCredentials: true }
            )
            .then(response => {
                if (response.status === 200) {
                    dispatch(logged(response.data));
                    history.push('/')
                }
            })
            .catch(error => {
                console.log("errors", error)
            });

        event.preventDefault()
    }


    const handleChange = (event) => {
        setData({
            ...data,
            [event.target.name]: event.target.value
        });
    }

    // console.log(loggedin)

    return (
        <div>
            Registration goes here
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