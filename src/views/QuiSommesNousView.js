import { Components } from "../components";

export function QuiSommesNous(props) {
    return (
        <>
            <Components.HeroSection title={"Qui sommes nous"} />
            <div className="container">
                <div className="row" style={{padding: "30px 0"}}>
                    <div className="col-xs-12">
                        <h2>Présentation</h2>
                        <p>
                        Nous sommes honorés de vous accueillir sur cette plateforme de vente en ligne « Je Consomme Ivoirien », site dédié à la vente exclusive des produits faits en Côte d’Ivoire.
                        </p>
                        <p>
                        La Côte d’Ivoire regorge de nombreux talents, et dans tous les secteurs d’activité. Malheureusement, la plupart de ces talents sont soit ignorés, soit dilués dans de nombreux sites. Afin de valoriser véritablement le talent ivoirien, nous avons trouvé bon de mettre en place une plateforme internet pour en être le meilleur canal.
                        </p>
                        <p>
                        Notre objectif est, non seulement de faire la promotion des produits « faits en Côte d’Ivoire », mais aussi et surtout de permettre à l’ensemble des personnes vivant en Côte d’Ivoire et au-delà de consommer sain et riche.
                        </p>
                        <p>
                        Fières Ivoiriennes, fiers Ivoiriens, fiers habitants, de la Côte d’Ivoire fiers amis de la Côte d’Ivoire au-delà de nos frontières,  ce site est le vôtre.
                        </p>
                        <p>
                        Vous pourrez désormais y vendre ou acheter tous les produits faits en Côte d’ivoire ; des produits sains et bio.
                        </p>
                        <p>
                        Afin de faciliter l’accès, nous les avons organisés en plusieurs catégories, présentées de la manière suivante :
                        </p>
                        <ol className="row">
                            <li className="col-lg-4 col-mg-4 col-sm-6 col-xs-12">
                                <h3>Produits Alimentaires</h3>
                                <ul>
                                - Pâte/Pâtés <br />
                                - Farines <br />
                                - Semoules/Granulés <br />
                                - Epices/Assaisonnements <br />
                                - Riz <br />
                                - Chips/ cacahuètes <br />
                                - Viandes <br />
                                - Poissons <br />
                                - Champignons <br />
                                - Huiles <br />
                                - Légumes <br />
                                - Précuits <br />
                                - Graines <br />
                                - Chocolats/ Friandises
                                </ul>
                            </li>
                            <li className="col-lg-4 col-mg-4 col-sm-6 col-xs-12">
                                <h3>Compléments Alimentaires</h3>
                                - Moringa : grains, poudre, bonbon, thé/tisane, jus, etc <br />
                                - Soja : lait, farine, grains, chips, fromage, yaourt, viande, etc
                            </li>
                            <li className="col-lg-4 col-mg-4 col-sm-6 col-xs-12">
                                <h3>Boissons</h3>
                                - Vins <br />
                                - Jus <br />
                                - Sirop <br />
                                - Bières <br />
                            </li>
                            <li className="col-lg-4 col-mg-4 col-sm-6 col-xs-12">
                                <h3>Cosmétiques</h3>
                                - Pommades <br />
                                - Huiles/Beurres <br />
                                - Savon <br />
                                - Baume <br />
                                - Bougies <br />
                                - Lotions <br />
                                - Désodorisant <br />
                                - Gommage <br />
                                - Shampoing <br />
                                - Après shampoing <br />
                                - Kits <br />
                            </li>
                            <li className="col-lg-4 col-mg-4 col-sm-6 col-xs-12">
                                <h3>Vêtements</h3>
                                - Pagnes <br />
                                - Robes <br />
                                - Boubous <br />
                                - Jupes <br />
                                - Hauts <br />
                                - Tenues filles <br />
                                - Tenues garçons
                            </li>
                            <li className="col-lg-4 col-mg-4 col-sm-6 col-xs-12">
                                <h3>Accessoires</h3>
                                - Chaussures <br />
                                - Chapeau <br />
                                - Ceintures <br />
                                - Bracelets <br />
                                - Bijoux <br />
                                - Sacs <br />
                                - Valises <br />
                            </li>
                            <li className="col-lg-4 col-mg-4 col-sm-6 col-xs-12">
                                <h3>Literie</h3>
                                - Draps <br />
                                - House de couette <br />
                                - Rideaux <br />
                                - Taies d’oreillers <br />
                            </li>
                            <li className="col-lg-4 col-mg-4 col-sm-6 col-xs-12">
                                <h3>Décoration/ Art</h3>
                                - Aquarium <br />
                                - Tableaux et peintures <br />
                                - Objets décoratifs <br />
                            </li>
                        </ol>
                        <p>
                        Cette liste est loin d’être exhaustive. Nous promettons de la compléter progressivement, en tenant compte de vos suggestions et surtout de l’ingéniosité créatrice des Ivoiriennes et des Ivoiriens.
                        De plus, cette plateforme se veut un espace de conseils nutritionnels, pour vous permettre d’utiliser efficacement tous les aliments mis à votre disposition.
                        Notre but étant d’aider les population à vivre en meilleur santé, grâce aux bienfaits d’une alimentation riche et saine.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}