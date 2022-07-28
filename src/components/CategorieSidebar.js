export function CategorieSidebar(props) {
    return (
        <aside id="sidebar" className="sidebar col-lg-3 col-md-4 col-sm-12 col-xs-12">
            <div className="biolife-mobile-panels">
                <span className="biolife-current-panel-title">Sidebar</span>
                <a className="biolife-close-btn" href="/" data-object="open-mobile-filter">&times;</a>
            </div>
            <div className="sidebar-contain">
                <div className="widget biolife-filter">
                    <h4 className="wgt-title">Categories</h4>
                    <div className="wgt-content">
                        <ul className="cat-list">
                            {/* <li className="cat-list-item"><a href="/" className="cat-link">Organic Food</a></li>
                            <li className="cat-list-item"><a href="/" className="cat-link">Fresh Fruit</a></li>
                            <li className="cat-list-item"><a href="/" className="cat-link">Dried Fruits</a></li> */}
                        </ul>
                    </div>
                </div>

                <div className="widget price-filter biolife-filter">
                    <h4 className="wgt-title">Prix</h4>
                    <div className="wgt-content">
                        {/* <div className="frm-contain">
                            <form action="#" name="price-filter" id="price-filter" method="get">
                                <p className="f-item">
                                    <label htmlFor="pr-from">$</label>
                                    <input className="input-number" type="number" id="pr-from" name="price-from" />
                                </p>
                                <p className="f-item">
                                    <label htmlFor="pr-to">to $</label>
                                    <input className="input-number" type="number" id="pr-to" name="price-from" />
                                </p>
                                <p className="f-item"><button className="btn-submit" type="submit">go</button></p>
                            </form>
                        </div>
                        <ul className="check-list bold single">
                            <li className="check-list-item"><a href="/" className="check-link">$0 - $5</a></li>
                            <li className="check-list-item"><a href="/" className="check-link">$5 - $10</a></li>
                            <li className="check-list-item"><a href="/" className="check-link">$15 - $20</a></li>
                        </ul> */}
                    </div>
                </div>

            </div>

        </aside>
    )
}