import slideBg from '../assets2/images/slide-bg.jpg';

export function Slide(props) {
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-9 col-md-8 col-xs-12" style={{float:'right'}}>
                    <div className="main-slide block-slider nav-change type02">
                        <ul className="biolife-carousel">
                            <li>
                                <div className="slide-contain slider-opt04__layout01">
                                    <img src={slideBg} alt="" width={'100%'} />
                                    {/* <div className="media" style={{backgroundImage: `url(${slideBg})`}}></div> */}
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}