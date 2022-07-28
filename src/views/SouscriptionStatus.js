import { useEffect, useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Components } from "../components";
import { Services } from "../services";


export function SouscriptionStatus(props) {
    const abortController = useMemo(() => new AbortController(),[]);
    
    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState(true);
    const [souscriptionUtilisateur, setSouscriptionUtilisateur] = useState('');

    const getSouscription = () => {
        setIsLoading(true);
        Services.UtilisateurService.getSouscription(abortController.signal)
        .then(response => {
          setSouscriptionUtilisateur(response.souscription_utilisateur)
          setIsLoading(false);
        })
        .catch(err => {
          setIsLoading(false);
          
          if (err.status === 404) {
            alert("Vous n'avez pas de souscription!. Veuillez souscrire à un pack pour ajouter un produit !");
            navigate('/mon-compte/souscriptions');
          }
        })
    }

    useEffect(() => {
      getSouscription();
    
      return () => {
        //
      }
    }, [abortController])
    

return (
    <div className="col-lg-12">
        <h3>Vérification de votre souscription</h3>
        <div className="row">
            {!isLoading ? 
            <>
                {souscriptionUtilisateur?.status === 'paye' ? 
                <div className="col-lg-12 text-center">
                    <div className="alert alert-success">
                        Votre souscription est valide !
                    </div>
                    <Link to='/mon-compte/ajouter-produit' className="btn btn-primary">
                        Ajouter un produit
                    </Link>
                </div> : 
                null }
                {souscriptionUtilisateur?.status === 'en-attente' ? 
                <div className="col-lg-12 text-center">
                    <div className="alert alert-info">
                        Votre souscription est en cours de validation ! 
                        Veuillez re-verifier plus tard !
                    </div>
                    <button className="btn btn-primary" onClick={getSouscription}>
                        Re-verifier
                    </button>
                </div> : 
                null }
                {souscriptionUtilisateur?.status === 'annule' ? 
                <div className="col-lg-12 text-center">
                    <div className="alert alert-danger">
                        Votre souscription a été annulée !
                    </div>
                    <Link to='/mon-compte/souscriptions' className="btn btn-primary">
                        Souscrire à un pack
                    </Link>
                </div> : 
                null }
            </>
            : <Components.Loader />}
        </div>
    </div>
)
    }