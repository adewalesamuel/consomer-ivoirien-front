export function ServiceBox(props) {
    return (
        <div className="biolife-service type01 biolife-service__type01 sm-margin-top-25px xs-margin-top-65px">
            <ul className="services-list">
                <li>
                    <div className="service-inner">
                        <span className="number">1</span>
                        <span className="biolife-icon icon-beer"></span>
                        <a className="srv-name" href="#">produits vérifié</a>
                    </div>
                </li>
                <li>
                    <div className="service-inner">
                        <span className="number">2</span>
                        <span className="biolife-icon icon-schedule"></span>
                        <a className="srv-name" href="#">livraison sûr et rapide</a>
                    </div>
                </li>
                <li>
                    <div className="service-inner">
                        <span className="number">3</span>
                        <span className="biolife-icon icon-car"></span>
                        <a className="srv-name" href="#">produits divers et variés</a>
                    </div>
                </li>
            </ul>
        </div>
    )
}