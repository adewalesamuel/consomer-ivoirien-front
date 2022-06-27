import {Route, Routes} from 'react-router-dom';
import { useEffect, useMemo, useState } from "react";

import { Services } from '../../services';

import { Components } from "..";
import { Views } from '../../views';

export function MainLayout(props) {
    const abortController = useMemo(() => new AbortController(), []);
    
    const [categories, setCategories] = useState([])

    
    useEffect(() => {        
        Services.HomeService.getAll(abortController.signal)
        .then(response => setCategories(response.categories))
    }, [abortController]);

    return (
        <>
            <Components.Header />
            <div className='container'>
                <div className='row'>
                    <Components.SearchBar />
                    <Components.Menu />
                    <Components.NavBar categories={categories}/>
                </div>
            </div>
            <div className="page-contain">
                <div id="main-content" className="main-content">
                    <Routes>
                        <Route exact path='' element={<Views.AccueilView categories={categories}/>} />
                        <Route exact path='produits/:id' element={<Views.ProduitDetailsView />} />
                        <Route exact path='authentification' element={<Views.AuthentificationView />} />
                        <Route path='mon-compte/*' element={<Views.MonCompteView categories={categories}/>} />
                        <Route exact path='categories/:id/produits' element={<Views.CategorieProduitView categories={categories}/>} />
                    </Routes>
                </div>
            </div>
            <Components.Footer />
        </>
    )
}