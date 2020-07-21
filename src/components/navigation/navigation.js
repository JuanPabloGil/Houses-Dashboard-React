import React, { useState } from 'react';
import '../../assets/styles/navigation.css';

const Navigation = () => {

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

    return (
        <div>
            <div className={style.nav}>
                <div className="navbar shadow-sm p-1 mb-1 bg-white rounded">
                    <button className="openbtn ml-4" onClick={openNav}> ☰ </button>
                    <ul className="ml-auto pr-4">
                        <span className="align-middle "> Log Out</span>
                    </ul>
                </div>
            </div>

            <nav className={style.side}>
                <div className="sidebar">
                    <button className="closebtn" onClick={closeNav} > x </button>
                    <div className="font-weight-light">
                        <a className="nav-link" href="/">Home</a>
                        <a className="nav-link" href="/houses">Houses</a>
                    </div>
                </div>

            </nav>
        </div>
    );
}

export default Navigation;