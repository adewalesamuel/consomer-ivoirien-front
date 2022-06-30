import { Link } from "react-router-dom";
import { Components } from ".";

export function Header(props) {
    return (
        <header id="header" className="header-area style-01 layout-04">
            <Components.HeaderTop />
            <div className="header-middle biolife-sticky-object ">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-2 col-md-6 col-xs-6">
                            <Components.Logo />
                        </div>
                        <div className="col-lg-6 col-md-7 hidden-sm hidden-xs">
                            <div className="primary-menu">
                                <ul className="menu biolife-menu clone-main-menu clone-primary-menu" id="primary-menu" data-menuname="main menu">
                                    <li className="menu-item"><Link to="/">Accueil</Link></li>
                                    <li className="menu-item">
                                        <a href="/" className="menu-name" data-title="Product">Articles</a>
                                    </li>
                                    <li className="menu-item">
                                        <a href="/" className="menu-name" data-title="Pages">Qui sommes nous</a>
                                    </li>
                                    <li className="menu-item">
                                        <a href="/" className="menu-name" data-title="Blog">Blog</a>
                                    </li>
                                    <li className="menu-item"><a href="/">Contact</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-md-6 col-xs-6">
                            <div className="biolife-cart-info">
                                <div className="mobile-search">
                                    <a href="/" className="open-searchbox"><i className="biolife-icon icon-search"></i></a>
                                    <div className="mobile-search-content">
                                        <form action="#" className="form-search" name="mobile-seacrh" method="get">
                                            <a href="/" className="btn-close"><span className="biolife-icon icon-close-menu"></span></a>
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
                                    <a href="/" className="link-to">
                                        <span className="icon-qty-combine">
                                            <i className="icon-heart-bold biolife-icon"></i>
                                            {/* <span className="qty">4</span> */}
                                        </span>
                                    </a>
                                </div>
                                <div className="minicart-block">
                                    <div className="minicart-contain">
                                        <a href="/" className="link-to">
                                            <span className="icon-qty-combine">
                                                <i className="icon-cart-mini biolife-icon"></i>
                                                {/* <span className="qty">8</span> */}
                                            </span>
                                            {/* <span className="title">Panier -</span> */}
                                            {/* <span className="sub-total">$0.00</span> */}
                                        </a>
                                    </div>
                                </div>
                                <div className="mobile-menu-toggle">
                                    <a className="btn-toggle" data-object="open-mobile-menu" href="/">
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