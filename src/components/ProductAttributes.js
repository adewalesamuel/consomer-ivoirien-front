export function ProductAttributes(props) {
    return (
        <div className="product-attribute">
            <h3 className="title">{props.usePost.titre ?? ''}</h3>
            <div className="rating">
                <b className="category">Categorie: {props.usePost.categorie.nom ?? ''}</b>
            </div>
            <p className="excerpt">{props.usePost.description ?? ''}</p>
        </div>
    )
}