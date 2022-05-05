import { Components } from ".";

export function Slide(props) {
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-9 col-md-8 col-xs-12" style={{float:'right'}}>
                    <div className="main-slide block-slider nav-change type02">
                        <ul className="biolife-carousel">
                            <li>
                                <div className="slide-contain slider-opt04__layout01">
                                    <div className="media"></div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}