import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import  {  useHistory } from 'react-router-dom'
import Axios from 'axios';
import '../../assets/styles/navigation.css';


const Navigation = () => {
    const history = useHistory()
    const [style, setStyle] = useState({
        nav: "d-block",
        side: "d-none"
    })

    const openNav = () => {
        setStyle({
            nav: "d-none",
            side: "d-block"
        })
    }

    const closeNav = () => {
        setStyle({
            nav: "d-block",
            side: "d-none"
        })
    }

    const handleLogout = () => {
        Axios.delete("http://localhost:3001/logout", { withCredentials: true })
            .then(response => {
                if (response.data.logged_out) {
                    history.push('/')
                }
            })
            .catch(error => {
                console.log(error)
            })

    }

    const loggedin = useSelector(state => state.logged);

    return (
        <div>
            <div className={style.nav}>
                <div className="navbar shadow-sm p-1 mb-1 bg-white rounded">
                    <button className="openbtn ml-4" onClick={openNav}> ☰ </button>
                    <ul className="ml-auto pr-4">
                        <div className="align-middle ">
                            {
                                loggedin.loggedInStatus === "NOT_LOGGED_IN" ?
                                    <a href="/">Login</a>
                                    :
                                    <button className="btn border-0" onClick={handleLogout}>Logout</button>
                            }
                        </div>
                    </ul>
                </div>
            </div>

            <nav className={style.side}>
                <div className="sidebar">
                    <button className="closebtn" onClick={closeNav} > x </button>
                    <div className="font-weight-light">
                            <a className="nav-link" href="/">Home</a>
                            <a className="nav-link" href="/houses">Houses</a>
                            <a className="nav-link" href="/dashboard">Dashboard</a>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navigation;