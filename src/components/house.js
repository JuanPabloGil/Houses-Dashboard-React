import React from "react"
import PropTypes from "prop-types"
import Axios from "axios";


const House = (props) => {

    const { id, title, about, price, created_at } = props.location.data
    const time = created_at.split('T')[0]

    return (
        <div className="container">
            <a href="/">
                <button type="button" className="btn bg-info text-white mt-4 ">{' < Go Back '}</button>
            </a>
            <h4 className="text-center p-3">{title}</h4>
            <div className="row">
                <div className="col-md-6 img-with-text ">
                    <div className="bottom-right-text "><strong>$ {price} /Month</strong></div>
                </div>
                <div className="col-md-6">
                    <p>{about}</p>
                    <hr />
                    <span className="badge"> Posted on: {time}</span>
                </div>
            </div>
        </div>
    );
}


export default House