import { useEffect, useMemo, useState } from "react";
import { Components } from "../components";
import { Hooks } from "../hooks";
import { Auth } from "../utils/Auth";

export function EditProfileView(props) {
    const abortController = useMemo(() => new AbortController(), []);

    const useUtilisateur = Hooks.useUtilisateur();
    const [isDisabled, setIsDisabled] = useState(false);

    const handleUtilisateurFormSubmit = (event) => {
        event.preventDefault();
        console.log('submted!');
    }

    useEffect(() => {
        setIsDisabled(true);
        useUtilisateur.getUtilisateur(Auth.getUser().id, abortController.signal)
        .then(() => setIsDisabled(false))
        .catch(err => console.log(err))
        
    }, [abortController])
    return (
        <div className="col-lg-12">
            <h3>Mon profile</h3>
            <div className="row">
                <Components.ProfileForm isDisabled={isDisabled} 
                handleFormSubmit={handleUtilisateurFormSubmit}
                useUtilisateur={useUtilisateur}/>
            </div>
        </div>
    )
}