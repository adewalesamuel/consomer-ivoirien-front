import { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { Views } from ".";
import { Components } from "../components";
import { AuthService } from "../services/AuthService";
import { Auth } from "../utils/Auth";

export function MonCompteView(props) {
    const navigate = useNavigate();

    useEffect(() => {
        if (!Auth.isLoggedIn())
            navigate('/authentification', {replace: true});
    }, []);

    if (!Auth.isLoggedIn()) return null;

    return (
        <>
            <Components.HeroSection title={"Mon compte"} />
            <div className="container">
                <div className="row" style={{padding: "30px 0"}}>
                    <div className="col-xs-6 col-md-3">
                        <Components.AccountTab title='Ajouter produits' icon='fa-plus' 
                        handleClick={e => navigate('ajouter-produit')}/>
                    </div>
                    <div className="col-xs-6 col-md-3">
                        <Components.AccountTab title='Vos produits' icon='fa-list' 
                        handleClick={e => navigate('produits')}/>
                        </div>
                    <div className="col-xs-6 col-md-3">
                        <Components.AccountTab title='Votre profile' icon='fa-user' 
                        handleClick={e => navigate('profile')}/>
                    </div>
                    <div className="col-xs-6 col-md-3">
                        <Components.AccountTab title='Historique de commission' icon='fa-list' 
                        handleClick={e => console.log("clicked tabs")}/>
                    </div>
                </div>
                <div className="row">
                    <Routes>
                        <Route exact path='ajouter-produit' element={<Views.AjouterProduitView 
                        categories={props.categories}/>} />
                        <Route exact path='profile' element={<Views.EditProfileView />} />
                        <Route exact path='produits/:id/modifier' element={<Views.ProduitUtilisateurEditView 
                         categories={props.categories}/>} />
                        <Route exact path='produits' element={<Views.ProduitUtilisateurListView />} />
                        <Route exact path='souscription/status' element={<Views.SouscriptionStatus />} />
                        <Route exact path='souscriptions/*' element={<Views.SouscriptionListView />} />
                    </Routes>
                </div>
                <button className="btn btn-danger my-20" onClick={e => {
                    AuthService.logout(new AbortController().signal );
                    window.location.assign('/');}}>Se Deconnecter</button>
            </div>
        </>
    )
}