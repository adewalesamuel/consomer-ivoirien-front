import { Link } from 'react-router-dom';
import { Components } from '.';
import { Utils } from '../utils';

export function Footer(props) {
    const MOBILE_MENU_ID = 'mobile-menu';

    return (
       <>
       <footer id="footer" className="footer layout-03">
            <div className="footer-content background-footer-03">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-sm-9">
                            <section className="footer-item">
                                <Components.Logo />
                                <div className="footer-phone-info">
                                    <i className="biolife-icon icon-head-phone"></i>
                                    <p className="r-info">
                                        <span>Vous avez des question ?</span>
                                        <span>(+225) 07 58 74 46 77</span>
                                    </p>
                                </div>
                                <div className="newsletter-block layout-01">
                                    <h4 className="title">Souscription Newsletter</h4>
                                    <div className="form-content">
                                        <form action="#" name="new-letter-foter">
                                            <input type="email" className="input-text email" defaultValue="" placeholder="Entrez votre email.." />
                                            <button type="submit" className="bnt-submit" name="ok">Inscription</button>
                                        </form>
                                    </div>
                                </div>
                            </section>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6 md-margin-top-5px sm-margin-top-50px xs-margin-top-40px">
                            <section className="footer-item">
                                <h3 className="section-title">Liens utiles</h3>
                                <div className="row">
                                    <div className="col-lg-6 col-sm-6 col-xs-6">
                                        <div className="wrap-custom-menu vertical-menu-2">
                                            <ul className="menu">
                                                <li><Link to="/qui-sommes-nous">Qui sommes nous</Link></li>
                                                <li><Link to="/authentification">Devenir Vendeur</Link></li>
                                                <li><Link to="/conditions-d-utilisation">Conditions d'utilisation</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-sm-6 col-xs-6">
                                        <div className="wrap-custom-menu vertical-menu-2">
                                            <ul className="menu">
                                            <li><Link to="/faq">Faq</Link></li>
                                            <li><Link to="/contact">Contactez nous</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6 md-margin-top-5px sm-margin-top-50px xs-margin-top-40px">
                            <section className="footer-item">
                                <h3 className="section-title">Localisation</h3>
                                <div className="contact-info-block footer-layout xs-padding-top-10px">
                                    <ul className="contact-lines">
                                        <li>
                                            <p className="info-item">
                                                <i className="biolife-icon icon-location"></i>
                                                <b className="desc">Abidjan, Cocody Riviera 4, Beverly Hill </b>
                                            </p>
                                        </li>
                                        <li>
                                            <p className="info-item">
                                                <i className="biolife-icon icon-phone"></i>
                                                <b className="desc">Tel: (+225) 07 58 74 46 77</b>
                                            </p>
                                        </li>
                                        <li>
                                            <p className="info-item">
                                                <i className="biolife-icon icon-letter"></i>
                                                <b className="desc">Email:  info@jeconsommivoirien.com</b>
                                            </p>
                                        </li>
                                        <li>
                                            <p className="info-item">
                                                <i className="biolife-icon icon-clock"></i>
                                                <b className="desc">Horraires: 7j/7 a partir de 8:00</b>
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                                <div className="biolife-social inline">
                                    <ul className="socials">
                                        <li>
                                            <a href="https://facebook.com/Je-Consomme-Ivoirien-182192885906130/" title="facebook" className="socail-btn">
                                                <i className="fa fa-facebook" aria-hidden="true"></i>
                                            </a>
                                        </li>
                                        {/* <li>
                                            <a href="/" title="youtube" className="socail-btn">
                                                <i className="fa fa-youtube" aria-hidden="true"></i>
                                            </a>
                                        </li> */}
                                        <li>
                                            <a href="/" title="instagram" className="socail-btn">
                                                <i className="fa fa-instagram" aria-hidden="true"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://twitter.com/jeconsommivo" title="twitter" className="socail-btn">
                                                <i className="fa fa-twitter" aria-hidden="true"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </section>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-12">
                            <div className="separator sm-margin-top-62px xs-margin-top-40px"></div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

        <div className="mobile-footer">
            <div className="mobile-footer-inner">
                <div className="mobile-block block-menu-main">
                    <a className="menu-bar menu-toggle btn-toggle" data-object="open-mobile-menu" href="/">
                        <span className="fa fa-bars"></span>
                        <span className="text">Menu</span>
                    </a>
                </div>
                <div className="mobile-block block-sidebar">
                    <a className="menu-bar filter-toggle btn-toggle" role={'button'}
                    onClick={() => Utils.DomManager.toggleElement(MOBILE_MENU_ID)}>
                        <i className="fa fa-sliders" aria-hidden="true"></i>
                        <span className="text">Navigation</span>
                    </a>
                </div>
                <div className="mobile-block block-global">
                    <Link to="/qui-sommes-nous" className="menu-bar myaccount-toggle btn-toggle">
                        <span className="fa fa-globe" aria-hidden="true"></span>
                        <span className="text">Présentation</span>
                    </Link> 
                    {/* <a className="menu-bar myaccount-toggle btn-toggle" data-object="global-panel-opened" href="/">
                        <span className="fa fa-globe"></span>
                        <span className="text">Global</span>
                    </a> */}
                </div>
                <div className="mobile-block block-minicart">
                    {!Utils.Auth.isLoggedIn() ? 
                        <Link to="/authentification" className="link-to-cart">
                            <span className="fa fa-user" aria-hidden="true"></span>
                            <span className="text">Connexion</span>
                        </Link>
                        :
                        <Link to="/mon-compte" className="link-to-cart">
                              <span className="fa fa-user" aria-hidden="true"></span>
                            <span className="text">Mon Compte</span>
                        </Link> 
                        }
                </div>
            </div>
        </div>
        <div className='mobile-menu' id="mobile-menu">
            <Components.Logo />
            <Components.NavBar {...props} isMobile={true}/>
        </div>
       </>
    )
    
}