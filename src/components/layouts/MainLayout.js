import {Route, Routes} from 'react-router-dom';
import { useEffect, useState } from "react";

import { Services } from '../../services';

import { Components } from "..";
import { Utils } from "../../utils";
import { Views } from '../../views';

export function MainLayout(props) {
    const abortController = new AbortController();
    
    const isLoggedIn = Utils.Auth.isLoggedIn();
    
    const [categories, setCategories] = useState([])

    
    useEffect(() => {
        Services.HomeService.getAll(abortController.signal)
        .then(response => setCategories(response.categories));
    }, []);

    return (
        <>
             {/* <Components.Preloader /> */}
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
                        <Route exact path='authentification' element={<Views.AuthentificationView categories={categories}/>} />
                        <Route exact path='mon-compte' element={<Views.MonCompteView />} />
                    </Routes>
                </div>
            </div>
            <Components.Footer />
        </>
    )
}