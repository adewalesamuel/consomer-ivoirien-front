import { Components } from "../components";

export function AccueilView(props) {
    return (
        <div className="container z-index-20 xs-margin-top-80px sm-margin-top-0">
            {props.categories.length === 0 ?
                <div style={{textAlign:'center', margin:'30px auto', padding: '100px 0', display:'block'}}>
                    Chargement en cours...
                </div>
            : null}
            {props.categories.map((categorie, index) => {
               return (
                    <div className="row" key={index}>
                        <div className="col-lg-12 bold-style biolife-title-box__bold-style mobile-tiny sm-margin-top-80px">
                            <h3 className="title" style={{color: 'orange'}}>{categorie.nom}</h3>
                        </div>
                        <div className="col-lg-4 col-sm-4">
                            <div className="row">
                                <div className="col-lg-12col-xs-12">
                                    <div className="biolife-banner style-05 biolife-banner__style-05">
                                        <div className="banner-contain" style={{backgroundImage: `url(/${categorie.img_url})`}}>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-8 col-sm-8">
                           <Components.ProducList products={categorie.posts} colNumber='3'/>
                        </div>

                    </div>
               ) 
            })}
            <Components.ServiceBox />
            <Components.BrandList />
        </div>
    )
}