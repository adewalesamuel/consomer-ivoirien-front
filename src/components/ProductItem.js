import { Link } from "react-router-dom";
import { Api } from "../services/Api";

export function ProductItem(props) {
    const productImg = props.product.img_urls ? JSON.parse(props.product.img_urls)[0] : '';
    const cols = {'3': 'col-third','4': 'col-fourth'};
    const colNumber = props.colNumber && props.colNumber in cols ? 
    props.colNumber.toString() : '3';

    return (
        <li className={`product-item ${cols[colNumber]}`} key={Math.random()}>
            <div className="contain-product layout-default">
                <div className="product-thumb">
                    {props.product.categorie_id ? 
                        <Link to={`/produits/${props.product.id}`} className="link-to-product">
                            <img src={`${Api.URL}/${productImg}`} alt="" width="270" 
                            height="270" className="product-thumnail" />
                        </Link>
                    : 
                        <img src={`${Api.URL}/${props.product.img_url ?? ""}`} alt="" width="270" 
                        height="270" className="product-thumnail" />
                    }
                    <a className="lookup btn_call_quickview" href="#">
                        <i className="biolife-icon icon-search"></i>
                    </a>
                </div>
                <div className="info">
                    <h4 className="product-title">
                        {props.product.categorie_id ? 
                            <Link to={`/produits/${props.product.id}`}  className="pr-name">
                                {props.product.titre ?? ""}
                            </Link>
                        : 
                            <Link to={`/mon-compte/souscriptions/${props.product.id}/commander`}  className="pr-name">
                                {props.product.titre ?? ""}
                            </Link>
                        }
                    </h4>
                    <div className="price ">
                        <ins>
                            <span className="price-amount">
                                <span className="currencySymbol">FCFA </span>
                                {props.product.prix}
                            </span>
                        </ins>
                    </div>
                    {!props.product.categorie_id ? 
                        <div className="shipping-info">
                             <p className="shipping-day">{props.product.periode ?? ""} mois</p>
                        </div>
                    : null}
                    <div className="slide-down-box">
                        {!props.product.categorie_id ? 
                            <p className="message">{props.product.description ?? ""}</p>
                        : null}
                        <div className="buttons">
                        {props.product.categorie_id ? 
                            <Link to={`/produits/${props.product.id}`}  className="btn add-to-cart-btn">
                                <i className="fa fa-cart-arrow-down" aria-hidden="true"></i>
                                    Voir l'article
                            </Link>
                        : 
                            <Link to={`/mon-compte/souscriptions/${props.product.id}/commander`}  className="btn add-to-cart-btn">
                                <i className="fa fa-cart-arrow-down" aria-hidden="true"></i>
                                 Souscrire
                            </Link>
                        }
                        </div>
                    </div>
                </div>
            </div>
        </li>
    )
}