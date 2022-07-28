export function SearchBar(props) {
    return (
        <div className="col-lg-12 hidden-sm hidden-xs">
            <div className="row" style={{backgroundColor:'green', margin:'0px'}}>
                <div className="col-lg-3 col-sm-3">
                    <div className="live-info" style={{paddingTop:'10px'}}>
                        <strong style={{color:'white'}}>Contactez nous</strong>
                        <p className="telephone" style={{color:'orange'}}>
                            <i className="fa fa-phone" aria-hidden="true"></i>
                            <b className="phone-number">(+225) 07 58 74 46 77</b>
                        </p>
                    </div>
                </div>
                <div className="col-lg-6 col-sm-6" style={{padding: '10px 0px'}}>
                    <div className="header-search-bar layout-01">
                        <form action="#" className="form-search" name="desktop-seacrh">
                            <input type="text" name="s" className="input-text" defaultValue="" placeholder="Rechercher des articles..." />
                            <button type="submit" className="btn-submit"><i className="biolife-icon icon-search"></i></button>
                        </form>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-3" style={{backgroundColor: 'red', color:'white', padding: '10px 10px 6px'}}>
                    <div className="live-info">
                        <strong>Horraires</strong>
                        <p className="working-time">Lundi-Dimanche: 8:30am à 17:30</p>
                    </div>
                </div>
            </div>
        </div>
    )
}