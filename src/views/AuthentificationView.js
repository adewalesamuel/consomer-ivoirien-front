import { useState } from "react";
import { Components } from "../components";
import { Hooks } from "../hooks";
import { Services } from "../services";
import { useNavigate } from "react-router-dom";
import { Utils } from "../utils";

export function AuthentificationView(props) {
    const abortController = new AbortController();
    const navigate = useNavigate();

    const useUtilisateur = Hooks.useUtilisateur();

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("");
    const [isDisabled, setIsDisabled] = useState(false);

    const handleLoginSubmit = e => {
        e.preventDefault();
        
        const payload = {
            email,
            password
        };

        setIsDisabled(true);
        Services.AuthService.login(JSON.stringify(payload), abortController.signal)
        .then(response => {
            Utils.Auth.setSessionToken(response.utilisateur.api_token);
            Utils.Auth.setUser(response.utilisateur);
            
            window.location.assign('/mon-compte')
        })
        .catch(err => {
            console.log(err);
            setIsDisabled(false);
        });
    }

    const handleSignUpSubmit = e => {
        e.preventDefault();

        if (useUtilisateur.password !== useUtilisateur.cpassword)
            return alert("Les mots de passe doivent être identique");

        const payload = {
            nom_prenoms: useUtilisateur.nom_prenoms,
            adresse: useUtilisateur.adresse,
            ville: useUtilisateur.ville,
            telephone: useUtilisateur.telephone,
            email: useUtilisateur.email,
            password: useUtilisateur.password,
        };
        
        setIsDisabled(true);
        Services.UtilisateurService.create(JSON.stringify(payload), abortController.signal)
        .then(response => {
            alert("Vous êtes inscris avec success! Veuillez vous connecter");
            useUtilisateur.emptyUtilisateur();
            setIsDisabled(false);
        })
        .catch(err => {
            console.log(err);
            setIsDisabled(false);
        });
    }

    return (
        <>
            <Components.HeroSection title={"Connexion"} />
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                        <div className="signin-container">
                            <form name="frm-login" disabled={props.isDisabled ?? false}>
                                <p className="form-row">
                                    <label htmlFor="email">Email<span className="requite">*</span></label>
                                    <input type="email" id="email" name="name" className="txt-input" 
                                    value={email} required onChange={e => setEmail(e.target.value)}
                                    disabled={isDisabled}/>
                                </p>
                                <p className="form-row">
                                    <label htmlFor="password">Mot de passe<span className="requite">*</span></label>
                                    <input type="password" id="password" name="password" className="txt-input" 
                                    value={password} onChange={e => setPassword(e.target.value)} disabled={isDisabled}/>
                                </p>
                                <p className="form-row wrap-btn">
                                    <button className="btn btn-submit btn-bold" type="submit" disabled={isDisabled}
                                    onClick={handleLoginSubmit}>Connexion</button>
                                    <a href="#" className="link-to-help">Mot de passe oublié ?</a>
                                </p>
                            </form>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                        <div className="register-in-container">
                            <div className="intro">
                                <h4 className="box-title">Pas encore inscris?</h4>
                                <p className="sub-title">Créez un compte en remplissant le formulaire ci-dessous:</p>
                                <div style={{padding: "15px"}}>
                                    <Components.UtilisateurForm useUtilisateur={useUtilisateur} 
                                    handleFormSubmit={handleSignUpSubmit} isDisabled={isDisabled}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}