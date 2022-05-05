// import { Link, useNavigate } from "react-router-dom";
// import { Services } from "../services";

import { Link } from "react-router-dom";

export function Header(props) {
    const abortController = new AbortController();

    const logout = event => {
        event.preventDefault();

        // Services.AuthService.logout(abortController.signal)
        // navigate('/auth', {replace: true});
    }
    return (
        <header id="header" className="header-area style-01 layout-04">
            <div className="header-top bg-main hidden-xs">
                <div className="container">
                    <div className="top-bar left">
                        <ul className="horizontal-menu">
                            <li><a href="#"><i className="fa fa-envelope" aria-hidden="true"></i>info@consomerivoirien.com</a></li>
                            <li><a href="#">Le meilleur du sie de E-commerce</a></li>
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
                                <Link to="/authentification" className="login-link">
                                    <i className="biolife-icon icon-login"></i>Connexion
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="header-middle biolife-sticky-object ">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-2 col-md-6 col-xs-6">
                            <a href="home-04.html" className="biolife-logo"><img src="/assets2/images/organic-4.png" alt="biolife logo" width="135" height="36" /></a>
                        </div>
                        <div className="col-lg-6 col-md-7 hidden-sm hidden-xs">
                            <div className="primary-menu">
                                <ul className="menu biolife-menu clone-main-menu clone-primary-menu" id="primary-menu" data-menuname="main menu">
                                    <li className="menu-item"><a href="#">Accueil</a></li>
                                    <li className="menu-item">
                                        <a href="#" className="menu-name" data-title="Product">Articles</a>
                                    </li>
                                    <li className="menu-item">
                                        <a href="#" className="menu-name" data-title="Pages">Qui sommes nous</a>
                                    </li>
                                    <li className="menu-item">
                                        <a href="#" className="menu-name" data-title="Blog">Blog</a>
                                    </li>
                                    <li className="menu-item"><a href="contact.html">Contact</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-md-6 col-xs-6">
                            <div className="biolife-cart-info">
                                <div className="mobile-search">
                                    <a href="#" className="open-searchbox"><i className="biolife-icon icon-search"></i></a>
                                    <div className="mobile-search-content">
                                        <form action="#" className="form-search" name="mobile-seacrh" method="get">
                                            <a href="#" className="btn-close"><span className="biolife-icon icon-close-menu"></span></a>
                                            <input type="text" name="s" className="input-text" defaultValue="" placeholder="Search here..." />
                                            <select name="category">
                                                <option defaultValue="-1">All Categories</option>
                                                {/* List des categores */}
                                            </select>
                                            <button type="submit" className="btn-submit">go</button>
                                        </form>
                                    </div>
                                </div>
                                <div className="wishlist-block hidden-sm hidden-xs">
                                    <a href="#" className="link-to">
                                        <span className="icon-qty-combine">
                                            <i className="icon-heart-bold biolife-icon"></i>
                                            <span className="qty">4</span>
                                        </span>
                                    </a>
                                </div>
                                <div className="minicart-block">
                                    <div className="minicart-contain">
                                        <a href="#" className="link-to">
                                            <span className="icon-qty-combine">
                                                <i className="icon-cart-mini biolife-icon"></i>
                                                <span className="qty">8</span>
                                            </span>
                                            <span className="title">Panier -</span>
                                            <span className="sub-total">$0.00</span>
                                        </a>
                                        <div className="cart-content">
                                            <div className="cart-inner">
                                                <ul className="products">
                                                    <li>
                                                        <div className="minicart-item">
                                                            <div className="thumb">
                                                                <a href="#"><img src="/assets2/images/minicart/pr-01.jpg" width="90" height="90" alt="National Fresh" /></a>
                                                            </div>
                                                            <div className="left-info">
                                                                <div className="product-title"><a href="#" className="product-name">National Fresh Fruit</a></div>
                                                                <div className="price">
                                                                    <ins><span className="price-amount"><span className="currencySymbol">£</span>85.00</span></ins>
                                                                    <del><span className="price-amount"><span className="currencySymbol">£</span>95.00</span></del>
                                                                </div>
                                                                <div className="qty">
                                                                    <label htmlFor="cart[id123][qty]">Qty:</label>
                                                                    <input type="number" className="input-qty" name="cart[id123][qty]" id="cart[id123][qty]" value="1" disabled />
                                                                </div>
                                                            </div>
                                                            <div className="action">
                                                                <a href="#" className="edit"><i className="fa fa-pencil" aria-hidden="true"></i></a>
                                                                <a href="#" className="remove"><i className="fa fa-trash-o" aria-hidden="true"></i></a>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                                <p className="btn-control">
                                                    <a href="#" className="btn view-cart">panier</a>
                                                    <a href="#" className="btn">commander</a>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mobile-menu-toggle">
                                    <a className="btn-toggle" data-object="open-mobile-menu" href="#">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}