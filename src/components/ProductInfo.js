import { useState } from "react";
import { Api } from "../services/Api";

import avatarPlaceholder from '../assets2/images/avatar-placeholder.png';

export function ProductInfo(props) {
    const [hasClicked, setHasClicked] = useState(false);

    return (
        <div className="action-form">
            <div className="user-info">
                <div className="avatar text-center">
                    <img src={props.usePost.utilisateur.img_url ? 
                    `${Api.URL}/${props.usePost.utilisateur.img_url}` 
                    : avatarPlaceholder} width={'100px'} alt="avatar"
                    style={{borderRadius: "100px"}}/>
                </div>
                <h4 className="text">
                    {props.usePost.categorie.description ?? ''}
                </h4>
                <div className="date">
                    <h4>{props.usePost.utilisateur.nom_prenoms}</h4>
                    <span>Date d'inscription : </span>
                    <time>{props.usePost.utilisateur.created_at ? 
                        new Date(props.usePost.utilisateur.created_at)
                        .toLocaleDateString('fr', {
                            day:'2-digit', 
                            month: 'short', 
                            year: 'numeric'})
                            : ''}
                    </time>
                </div>
            </div>
            <div className="total-price-contain">
                <span className="title">Prix:</span>
                <p className="price">CFA {props.usePost.prix ?? '' }</p>
            </div>
            <div className="buttons">
                {hasClicked ? 
                    <a className="btn btn-submit btn-bold" href={`tel:${props.usePost.utilisateur.telephone}`} 
                    style={{width:'100%'}}>
                        {props.usePost.utilisateur.telephone}
                    </a>
                : <button className="btn btn-submit btn-bold" style={{width:'100%'}}
                onClick={e => setHasClicked(true)}>Voir le numero</button>}
            </div>
            <div className="social-media">
                <ul className="social-list">
                    <li><a href="/" className="social-link"><i className="fa fa-twitter"></i></a></li>
                    <li><a href="/" className="social-link"><i className="fa fa-facebook"></i></a></li>
                    <li><a href="/" className="social-link"><i className="fa fa-pinterest"></i></a></li>
                    <li><a href="/" className="social-link"><i className="fa fa-share-alt"></i></a></li>
                    <li><a href="/" className="social-link"><i className="fa fa-instagram"></i></a></li>
                </ul>
            </div>
        </div>
    )
}