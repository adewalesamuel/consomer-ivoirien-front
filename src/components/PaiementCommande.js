import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Components } from ".";
import { Services } from "../services";
import { Api } from "../services/Api";
import { Auth } from "../utils/Auth";

export function PaiementCommande(props) {
    const abortController = new AbortController();

    const params = useParams();
    const navigate = useNavigate();

    const [souscription, setSouscription] = useState('');
    const [isDisabled, setIsDisabled] = useState(false)

    const goBack = () => {
        navigate('/mon-compte/souscriptions');
    }
    const handleSouscriptionUtilisateurSubmit = () => {
        const payload = {
            souscription_id: souscription.id,
            prix: souscription.prix, 
            utilisateur_id: Auth.getUser().id,
            quantite: 1,
            mode_paiement: 'CinetPay',
        };

        setIsDisabled(true);
        Services.SouscriptionUtilisateurService.create(JSON.stringify(payload), abortController.signal)
        .then(() => {
            setIsDisabled(false);
            navigate('/mon-compte/ajouter-produit');
        })
        .catch(err => setIsDisabled(false));
    }
    useEffect(() => {
        if (props.souscriptions.length <= 0) return;

        const selectedSouscription = props.souscriptions?.find(souscription => {
            return parseInt(souscription.id) === parseInt(params.id);
        });

        setSouscription(selectedSouscription);

    }, [params.id, props.souscriptions])
    
    return (
        <Components.Modal isHidden={false} modalTitle={"Commander une souscription"}
        closeModal={goBack} confirmModal={handleSouscriptionUtilisateurSubmit} 
        isDisabled={isDisabled}>
            <div className="col-xs-12 sm-margin-bottom-0 xs-margin-bottom-15px">
                <div className="order-summary">
                    <div className="title-block">
                        <h3 className="title">Paiement</h3>
                    </div>
                    <div className="cart-list-box short-type">
                        <span className="number"></span>
                        <ul className="cart-list">
                            <li className="cart-elem">
                                <div className="cart-item">
                                    <div className="product-thumb">
                                        <span className="prd-thumb" href="#">
                                            <figure>
                                                <img src={`${Api.URL}/${souscription.img_url ?? ""}`} 
                                                width="113" height="113" alt="shop-cart" />
                                            </figure>
                                        </span>
                                    </div>
                                    <div className="info">
                                        <span className="txt-quantity">
                                            X{souscription.periode}
                                        </span>
                                        <span href="#" className="pr-name">{souscription.titre ?? ""}</span>
                                    </div>
                                    <div className="price price-contain">
                                        <ins>
                                            <span className="price-amount">
                                                <span className="currencySymbol">FCFA </span>{souscription.prix}
                                            </span>
                                        </ins>
                                    </div>
                                </div>
                            </li>
                        </ul>
                        <ul className="subtotal">
                            <li>
                                <div className="subtotal-line">
                                    <b className="stt-name">Sous-total</b>
                                    <span className="stt-price">FCFA {souscription.prix}</span>
                                </div>
                            </li>
                            <li>
                                <div className="subtotal-line">
                                    <b className="stt-name">TVA</b>
                                    <span className="stt-price">FCFA 0.00</span>
                                </div>
                            </li>
                            <li>
                                <div className="subtotal-line">
                                    <b className="stt-name">Total:</b>
                                    <span className="stt-price">FCFA {souscription.prix}</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </Components.Modal>
    )
}