import React, { useState } from 'react';
import Axios from 'axios';
import { useHistory } from 'react-router-dom';

const Dashboard = () => {

    const history = useHistory()

    const [data, setData] = useState({
        title: '',
        about: '',
        price: '',
        category: 'House',
        errors: '',

    });


    const handleChange = (event) => {
        setData({
            ...data,
            [event.target.name]: event.target.value
        });
    }

    const handelSubmit = () => {
        const { title, about, price, category } = data

        Axios.post('http://localhost:3001/houses',
            {
                title: title,
                about: about,
                price: price,
                category: category,

            },
            { withCredentials: true }
        )
            .then(response => {
                if (response.statusText === "Created") {
                    history.push('/')
                }
            })

            .catch(error => {
                setData({
                    ...data,
                    errors: <p className="alert alert-danger ">{error.response.data.message}</p>
                })
            })
    }

    return (
        <div>
            <h1>Dashboard</h1>
            {data.errors}
            <form >
                <div className="form-group">
                    <input
                        className="form-control"
                        onChange={handleChange}
                        type="text"
                        name="title"
                        placeholder="Title of the house"
                        required
                    />
                </div>

                <div className="form-group">
                    <select
                        onChange={handleChange}
                        className="form-control"
                    >
                        <option value="House">House</option>
                        <option value="Aparment" >Aparment</option>
                        <option value="Room">Room</option>
                        <option value="Loft">Loft</option>
                        <option value="Other">Other</option>
                    </select>
                </div>

                <div className="form-group">
                    <textarea
                        onChange={handleChange}
                        className="form-control"
                        type="text-box"
                        name="about"
                        placeholder="Description of the house"
                        required
                    />
                </div>
                <div className="form-group">
                    <input
                        onChange={handleChange}
                        className="form-control"
                        type="number"
                        name="price"
                        placeholder="Price /month"
                        required
                    />
                </div>
            </form>
            <button type="submit" className="btn bg-info text-white" onClick={handelSubmit}>Create new House</button>
        </div>
    );
};
export default Dashboard;