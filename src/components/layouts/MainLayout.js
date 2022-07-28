import {Route, Routes, useLocation} from 'react-router-dom';
import { useEffect, useMemo, useState } from "react";

import { Services } from '../../services';

import { Components } from "..";
import { Views } from '../../views';
import { Utils } from '../../utils';

export function MainLayout(props) {
    const abortController = useMemo(() => new AbortController(), []);
    
    const [categories, setCategories] = useState([]);
    const { pathname } = useLocation();

    useEffect(() => { 
        if (!pathname.startsWith('/mon-compte')) window.scrollTo(0, 0);

        Utils.DomManager.hideElement('mobile-menu');
        Services.HomeService.getAll(abortController.signal)
        .then(response => setCategories(response.categories));
    }, [abortController, pathname]);

    return (
        <>
            <Components.Header />
            <div className='container' id="top-section">
                <div className='row' >
                    <Components.SearchBar />
                    <Components.Menu />
                    <Components.NavBar categories={categories}/>
                </div>
            </div>
            <div className="page-contain">
                <div id="main-content" className="main-content">
                    <Routes>
                        <Route exact path='' element={<Views.AccueilView categories={categories}/>} />
                        <Route exact path='contact' element={<Views.ContactView />} />
                        <Route exact path='conditions-d-utilisation' element={<Views.ConditionsView />} />
                        <Route exact path='qui-sommes-nous' element={<Views.QuiSommesNous />} />
                        <Route exact path='produits/:id' element={<Views.ProduitDetailsView />} />
                        <Route exact path='authentification' element={<Views.AuthentificationView />} />
                        <Route path='mon-compte/*' element={<Views.MonCompteView categories={categories}/>} />
                        <Route exact path='categories/:id/produits' element={<Views.CategorieProduitView categories={categories}/>} />
                    </Routes>
                </div>
            </div>
            <Components.Footer categories={categories}/>
        </>
    )
}