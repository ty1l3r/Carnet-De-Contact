import React from 'react';
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link to="/" className="navbar-brand">App Contact</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02"
                        aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarColor02">
                    <ul className="navbar-nav mr-auto">

                        <li className="nav-item active">
                            <Link to="/ajouter" className="nav-link"> Ajouter
                                <span className="sr-only">(current)</span>
                            </Link>
                        </li>
                        <li className="nav-item active">
                            <Link to="/apropos" className="nav-link"> A propos
                                <span className="sr-only">(current)</span>
                            </Link>
                        </li>

                    </ul>
                </div>
            </nav>

        </div>
    );
};

export default Header;
