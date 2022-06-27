import { Link } from "react-router-dom"

export function NavBar(props) {
    return (
        <div className="container">
            <div className="row">
                <nav className="col-lg-9 col-md-8 hidden-sm hidden-xs">
                    <ul className="nav-menu" id="nav-menu">
                        {props.categories.map((categorie, index) => {
                            return (<li className="menu-item" key={index}>
                                        <button className="btn">{categorie.nom ?? ""}</button>
                                        { categorie.sub_categories ? 
                                            <div className="sub-menu">
                                                <ul>
                                                    { categorie.sub_categories.map((sub_categorie, jndex) => {
                                                        return (
                                                            <li className="sub-menu-item" key={jndex}>
                                                            <Link to={`/categories/${sub_categorie.id}/produits`}>
                                                                    {sub_categorie.nom}
                                                                </Link>
                                                            </li>
                                                        )
                                                    })}
                                                </ul>
                                            </div> 
                                            : null }
                                    </li>)
                        })}
                    </ul>
                </nav>
            </div>
        </div>
    )
}