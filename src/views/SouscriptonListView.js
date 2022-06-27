import { useEffect, useMemo, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Components } from "../components"
import { Services } from "../services";

export function SouscriptionListView(props) {
    const abortController = useMemo(() => new AbortController(), []);

    const [souscriptions, setSouscriptions] = useState([]);

    useEffect(() => {
      Services.SouscriptionService.getAll(abortController.signal)
      .then(response => {
        setSouscriptions(response.souscriptions);
      })
      .catch(err => null)
    
      return () => {
      }
    }, [abortController])
    
    return (
        <div className="col-lg-12 souscriptions">
            <h3>Liste des souscriptions</h3>
            <div className="row">
              <div className="col-lg-3 col-md-3 col-xs-12">
                <h3 className="alert alert-info">
                  Veuillez souscrire à un pack pour commencer à poster des articles
                </h3>
              </div>
              <div className="col-lg-9 col-md-9 col-xs-12">
                <Components.ProductList products={souscriptions} />
              </div>
            </div>
            <Routes>
                <Route exact path=':id/commander' element={<Components.PaiementCommande 
                souscriptions={souscriptions}/>} />
            </Routes>
        </div>
    )
}