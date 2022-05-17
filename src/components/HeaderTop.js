import { Link } from "react-router-dom";
import { Utils } from "../utils";

export function HeaderTop(props) {
    return (
        <div className="header-top bg-main hidden-xs">
            <div className="container">
                <div className="top-bar left">
                    <ul className="horizontal-menu">
                        <li><a href="#"><i className="fa fa-envelope" aria-hidden="true"></i>info@jeconsommeivoirien.com</a></li>
                        <li><a href="#">Le meilleur site de E-commerce</a></li>
                    </ul>
                </div>
                <div className="top-bar right">
                    <ul className="social-list">
                        <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-pinterest" aria-hidden="true"></i></a></li>
                    </ul>
                    <ul className="horizontal-menu">
                        <li>
                            {!Utils.Auth.isLoggedIn() ? 
                                <Link to="/authentification" className="login-link">
                                    <i className="biolife-icon icon-login"></i>Connexion
                                </Link>
                            :
                            <Link to="/mon-compte" className="login-link">
                                <i className="biolife-icon icon-login"></i>Mon compte
                            </Link> 
                            }
                            
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}