import brand1 from '../assets2/images/home-03/brd-01.jpg';
import brand2 from '../assets2/images/home-03/brd-02.jpg';
import brand3 from '../assets2/images/home-03/brd-03.jpg';
import brand4 from '../assets2/images/home-03/brd-04.jpg';

export function BrandList(props) {
    return (
        <div className="brand-slide background-fafafa xs-margin-top-50px sm-margin-top-80px sm-margin-bottom-73px">
            <div className="container">
                <ul className="row">
                    <li className="col-6 col-lg-3">
                        <div className="biolife-brd-container">
                            <a href="/" className="link">
                                <figure><img src={brand1} width="214" height="163" alt="" /></figure>
                            </a>
                        </div>
                    </li>
                    <li className="col-6 col-lg-3">
                        <div className="biolife-brd-container">
                            <a href="/" className="link">
                                <figure><img src={brand2} width="214" height="163" alt="" /></figure>
                            </a>
                        </div>
                    </li>
                    <li className="col-6 col-lg-3">
                        <div className="biolife-brd-container">
                            <a href="/" className="link">
                                <figure><img src={brand3} width="153" height="163" alt="" /></figure>
                            </a>
                        </div>
                    </li>
                    <li className="col-6 col-lg-3">
                        <div className="biolife-brd-container">
                            <a href="/" className="link">
                                <figure><img src={brand4} width="224" height="163" alt="" /></figure>
                            </a>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}