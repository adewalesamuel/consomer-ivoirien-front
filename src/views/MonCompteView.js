import { Route, Routes, useNavigate } from "react-router-dom";
import { Views } from ".";
import { Components } from "../components";

export function MonCompteView(props) {
    const navigate = useNavigate();

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
                        handleClick={e => console.log("clicked tabs")}/>
                    </div>
                    <div className="col-xs-6 col-md-3">
                        <Components.AccountTab title='Votre profil de vendeur' icon='fa-user' 
                        handleClick={e => console.log("clicked tabs")}/>
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
                    </Routes>
                </div>
            </div>
        </>
    )
}