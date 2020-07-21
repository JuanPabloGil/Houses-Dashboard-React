import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import { logged } from '../../actions'

const Login = () => {

    const history = useHistory();

    const [data, setData] = useState({
        email: '',
        password: '',
    });

    const dispatch = useDispatch();


    const handleSubmit = (event) => {

        const { email, password } = data
        axios
            .post('http://localhost:3001/sessions',
                {
                    user: {
                        email: email,
                        password: password,
                    }
                },

                { withCredentials: true }
            )
            .then(response => {
                if (response.data.logged_in) {
                    dispatch(logged(response.data));
                    history.push('/dashboard')
                }
                console.log("login_petition", response)
            })
            .catch(error => {
                console.log("errors login_petition", error)
            });

        event.preventDefault()
    }


    const handleChange = (event) => {
        setData({
            ...data,
            [event.target.name]: event.target.value
        });
    }


    return (
        <div>
            <hr />
            <h3 className="form-group">Loggin in your account </h3>

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