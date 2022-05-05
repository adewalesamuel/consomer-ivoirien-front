import { Components } from "../components";

export function MonCompteView(props) {
    return (
        <>
            <Components.HeroSection title={"Mon compte"} />
            <div className="container">
                <div className="row" style={{padding: "30px 0"}}>
                    <div className="col-6 col-lg-3">
                        <Components.AccountTab title='Ajouter produits' icon='fa-plus' 
                        handleClick={e => console.log("clicked tabs")}/>
                    </div>
                    <div className="col-6 col-lg-3">
                        <Components.AccountTab title='Vos produits' icon='fa-list' 
                        handleClick={e => console.log("clicked tabs")}/>
                    </div>
                    <div className="col-6 col-lg-3">
                        <Components.AccountTab title='Votre profil de vendeur' icon='fa-user' 
                        handleClick={e => console.log("clicked tabs")}/>
                    </div>
                    <div className="col-6 col-lg-3">
                        <Components.AccountTab title='Historique de commission' icon='fa-list' 
                        handleClick={e => console.log("clicked tabs")}/>
                    </div>
                </div>
            </div>
        </>
    )
}