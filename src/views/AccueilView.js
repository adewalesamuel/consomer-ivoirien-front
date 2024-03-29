import { useEffect } from "react";
import { Components } from "../components";
import { Api } from "../services/Api";
import { Utils } from "../utils";

export function AccueilView(props) {
    useEffect(() => {
      Utils.DomManager.showElement('wrap-menu');
    
      return () => {
        Utils.DomManager.hideElement('wrap-menu');
      }
    }, [])
    
    return (
        <>  
            <Components.Slide />
            <div className="container z-index-20 xs-margin-top-80px sm-margin-top-0">
                {props.categories.length === 0 ?
                   <Components.Loader />
                : null}
                {props.categories.slice(0,5).map((categorie, index) => {
                    return (
                        <div className="row" key={index}>
                            <div className="col-lg-12 bold-style biolife-title-box__bold-style 
                            mobile-tiny sm-margin-top-80px categorie-section">
                                <h3 className="title" style={{color: 'orange'}}>{categorie.nom}</h3>
                            </div>
                            <div className="col-lg-4 col-sm-4">
                                <div className="banner-contain">
                                    <img src={`${Api.URL}/${categorie.img_url}`} width="100%" 
                                    alt={categorie.nom}/>
                                </div>
                            </div>

                            <div className="col-lg-8 col-sm-8">
                            <Components.ProductList products={categorie.posts} colNumber='3'/>
                            </div>
                        </div>
                    ) 
                })}
                <Components.ServiceBox />
                {/* <Components.BrandList /> */}
            </div>
        </>
    )
}