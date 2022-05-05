export function AccountTab(props) {
    return (
        <div className="card text-center contain-product__right-info-layout" 
        onClick={props.handleClick ?? null} style={{cursor: 'pointer'}}>
            <div className="card-body">
                <span className={`fa ${props.icon ?? ''}`} style={{fontSize: '36px'}}></span>
                <h4 className="card-text">{props.title ?? ""}</h4>
            </div>
        </div>
    )
}