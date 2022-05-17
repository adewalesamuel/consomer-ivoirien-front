import { Components } from "../components";

export function ProduitDetailsView(props) {
    return (
        <>
            <Components.HeroSection title={""} />
            <div className="page-contain single-product paddding-top-20px">
                <div className="container">
                   <div id="main-content" className="main-content">
                        <div className="sumary-product single-layout">
                            <div className="media">
                                <ul className="biolife-carousel slider-for">
                                    <li>
                                        <img src="/assets2/images/details-product/p01.jpg" alt="" width="500" 
                                        height="500" />
                                    </li>
                                </ul>
                                <ul className="biolife-carousel slider-nav">
                                    <li>
                                        <img src="/assets2/images/details-product/thumb_p01.jpg" alt="" width="88" 
                                        height="88" />
                                    </li>
                                </ul>
                            </div>
                            <div className="product-attribute">
                                <h3 className="title">Organic Sweet Potatoes</h3>
                                <div className="rating">
                                    <b className="category">Categorie: Natural food</b>
                                </div>
                                <p className="excerpt">Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. 
                                Cras ultricies ligula sed magna dictum porta. Vestibulum ac diam sit amet quam vehicula 
                                elementum sed sit amet dui. Cras ultricies ligula sed magna dictum porta. Mauris blandit 
                                aliquet elit, eget tincidunt nibh pulvinar a.</p>
                            </div>
                            <div className="action-form">
                            <div className="total-price-contain">
                                <span className="title">Total Price:</span>
                                    <p className="price">£199.99</p>
                                </div>
                                <div className="buttons">
                                    <button className="btn btn-submit btn-bold" style={{width:'100%'}}>add to </button>
                                </div>
                                <div className="social-media">
                                    <ul className="social-list">
                                        <li><a href="#" className="social-link"><i className="fa fa-twitter"></i></a></li>
                                        <li><a href="#" className="social-link"><i className="fa fa-facebook"></i></a></li>
                                        <li><a href="#" className="social-link"><i className="fa fa-pinterest"></i></a></li>
                                        <li><a href="#" className="social-link"><i className="fa fa-share-alt"></i></a></li>
                                        <li><a href="#" className="social-link"><i className="fa fa-instagram"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>        
                    </div>
                </div>
            </div>
         
        </>
    )
}