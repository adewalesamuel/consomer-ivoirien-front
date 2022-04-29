export function NavBar(props) {
    return (
        <div className="container">
            <div className="row">
                <nav className="col-lg-9 col-md-8 hidden-sm hidden-xs">
                    <ul className="nav-menu" id="nav-menu">
                        {props.categories.map((categorie, index) => {
                            return <li className="menu-item" key={index}><a href="#">{categorie.nom ?? ""}</a></li>
                        })}
                    </ul>
                </nav>
            </div>
        </div>
    )
}