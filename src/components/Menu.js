import { useState } from "react";
import { Utils } from "../utils";

export function Menu(props) {
    const MENU_ID = 'wrap-menu';

    const toggleMenu = e => {
        e.preventDefault();

        setIsMenuOpen(!isMenuOpen);

        if (isMenuOpen) {
            Utils.DomManager.hideElement(MENU_ID);
        }else {
            Utils.DomManager.showElement(MENU_ID);
        };
    }

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <div className="col-lg-3 col-md-4 hidden-sm hidden-xs">
            <div className="biolife-vertical-menu none-box-shadow">
                <div className="vertical-menu vertical-category-block always" onClick={toggleMenu} role="button">
                    <div className="block-title">
                        <span className="menu-icon">
                            <span className="line-1"></span>
                            <span className="line-2"></span>
                            <span className="line-3"></span>
                        </span>
                        <span className="menu-title">Navigation</span>
                        <span className="angle" data-tgleclass="fa fa-caret-down"><i className="fa fa-caret-up" aria-hidden="true"></i></span>
                    </div>
                    <div className="wrap-menu" id="wrap-menu">
                        <ul className="menu clone-main-menu">
                            <li className="menu-item"><a href="#" className="menu-title"><i className="biolife-icon icon-fast-food"></i>Meilleurs Ventes</a></li>
                            <li className="menu-item"><a href="#" className="menu-title"><i className="biolife-icon icon-beef"></i>Nos partenaires</a></li>
                            <li className="menu-item"><a href="#" className="menu-title"><i className="biolife-icon icon-onions"></i>Nos magasins</a></li>
                            <li className="menu-item"><a href="#" className="menu-title"><i className="biolife-icon icon-avocado"></i>Devenir Vendeur</a></li>
                            <li className="menu-item"><a href="#" className="menu-title"><i className="biolife-icon icon-contain"></i>Blog</a></li>
                            <li className="menu-item"><a href="#" className="menu-title"><i className="biolife-icon icon-fresh-juice"></i>Nouveaux produits</a></li>
                            <li className="menu-item"><a href="#" className="menu-title"><i className="biolife-icon icon-fresh-juice"></i>Nos offres</a></li>
                            <li className="menu-item"><a href="#" className="menu-title"><i className="biolife-icon icon-fresh-juice"></i>Faq</a></li>
                            <li className="menu-item"><a href="#" className="menu-title"><i className="biolife-icon icon-fresh-juice"></i>Qui sommes nous</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}