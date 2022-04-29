import { Api } from "../services/Api";

export function ProductItem(props) {
    const productImg = props.product.img_urls ? JSON.parse(props.product.img_urls)[0] : '';
    const cols = {'3': 'col-third','4': 'col-fourth'};
    const colNumber = props.colNumber && props.colNumber in cols ? props.colNumber.toString() : '3';

    return (
        <li className={`product-item ${cols[colNumber]}`} key={Math.random()}>
            <div className="contain-product layout-default">
                <div className="product-thumb">
                    <a href="#" className="link-to-product">
                        <img src={`${Api.URL}/${productImg}`} alt="" width="270" height="270" className="product-thumnail" />
                    </a>
                    <a className="lookup btn_call_quickview" href="#"><i className="biolife-icon icon-search"></i></a>
                </div>
                <div className="info">
                    <h4 className="product-title"><a href="#" className="pr-name">{props.product.titre ?? ""}</a></h4>
                    <div className="price ">
                        <ins><span className="price-amount"><span className="currencySymbol">FCFA</span>{props.product.prix}</span></ins>
                    </div>
                    <div className="slide-down-box">
                        <div className="buttons">
                            <a href="#" className="btn wishlist-btn"><i className="fa fa-heart" aria-hidden="true"></i></a>
                            <a href="#" className="btn add-to-cart-btn"><i className="fa fa-cart-arrow-down" aria-hidden="true"></i>Voir l'article</a>
                            <a href="#" className="btn compare-btn"><i className="fa fa-random" aria-hidden="true"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    )
}