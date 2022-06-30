import { Components } from '.';
import paiement1 from '../assets2/images/card1.jpg';
import paiement2 from '../assets2/images/card2.jpg';
import paiement3 from '../assets2/images/card3.jpg';
import paiement4 from '../assets2/images/card4.jpg';
import paiement5 from '../assets2/images/card5.jpg';

export function Footer(props) {
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
                                        <span>(700)  9001-1909  (900) 689 -66</span>
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
                                                <li><a href="/">Qui sommes nous</a></li>
                                                <li><a href="/">Presse</a></li>
                                                <li><a href="/">Achat sécurisé</a></li>
                                                <li><a href="/">Information de livraison</a></li>
                                                <li><a href="/">Politique de confidentialité</a></li>
                                                <li><a href="/">Plan du site</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-sm-6 col-xs-6">
                                        <div className="wrap-custom-menu vertical-menu-2">
                                            <ul className="menu">
                                                <li><a href="/">A propos</a></li>
                                                <li><a href="/">Nos services</a></li>
                                                <li><a href="/">Projets</a></li>
                                                <li><a href="/">Contactez nous</a></li>
                                                <li><a href="/">Innovation</a></li>
                                                <li><a href="/">Temoignages</a></li>
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
                                                <b className="desc">Abidjan, Riviera Palmerais </b>
                                            </p>
                                        </li>
                                        <li>
                                            <p className="info-item">
                                                <i className="biolife-icon icon-phone"></i>
                                                <b className="desc">Tel: (+067) 234 789  (+068) 222 888</b>
                                            </p>
                                        </li>
                                        <li>
                                            <p className="info-item">
                                                <i className="biolife-icon icon-letter"></i>
                                                <b className="desc">Email:  info@jeconsommeivoirien.com</b>
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
                                            <a href="/" title="twitter" className="socail-btn">
                                                <i className="fa fa-twitter" aria-hidden="true"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/" title="facebook" className="socail-btn">
                                                <i className="fa fa-facebook" aria-hidden="true"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/" title="pinterest" className="socail-btn">
                                                <i className="fa fa-pinterest" aria-hidden="true"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/" title="youtube" className="socail-btn">
                                                <i className="fa fa-youtube" aria-hidden="true"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/" title="instagram" className="socail-btn">
                                                <i className="fa fa-instagram" aria-hidden="true"></i>
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
                        <div className="col-lg-6 col-sm-6 col-xs-12">
                            {/* <div className="copy-right-text"><p><a href="/emplateshub.net">Templates Hub</a></p></div> */}
                        </div>
                        <div className="col-lg-6 col-sm-6 col-xs-12">
                            <div className="payment-methods">
                                <ul>
                                    <li><a href="/" className="payment-link"><img src={paiement1} width="51" height="36" alt="" /></a></li>
                                    <li><a href="/" className="payment-link"><img src={paiement2} width="51" height="36" alt="" /></a></li>
                                    <li><a href="/" className="payment-link"><img src={paiement3} width="51" height="36" alt="" /></a></li>
                                    <li><a href="/" className="payment-link"><img src={paiement4} width="51" height="36" alt="" /></a></li>
                                    <li><a href="/" className="payment-link"><img src={paiement5} width="51" height="36" alt="" /></a></li>
                                </ul>
                            </div>
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
                    <a className="menu-bar filter-toggle btn-toggle" data-object="open-mobile-filter" href="/">
                        <i className="fa fa-sliders" aria-hidden="true"></i>
                        <span className="text">Navigation</span>
                    </a>
                </div>
                <div className="mobile-block block-minicart">
                    <a className="link-to-cart" href="/">
                        <span className="fa fa-shopping-bag" aria-hidden="true"></span>
                        <span className="text">Panier</span>
                    </a>
                </div>
                <div className="mobile-block block-global">
                    <a className="menu-bar myaccount-toggle btn-toggle" data-object="global-panel-opened" href="/">
                        <span className="fa fa-globe"></span>
                        <span className="text">Global</span>
                    </a>
                </div>
            </div>
        </div>
       </>
    )
    
}