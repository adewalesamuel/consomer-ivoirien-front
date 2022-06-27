import { Api } from "../services/Api"

export function ProductMedia(props) {
    return (
        <div className="media">
                {props.usePost.img_urls && JSON.parse(props.usePost.img_urls) ? 
                    <>
                        <ul className="biolife-carousel slider-for">
                            <li>
                                <img src={`${Api.URL}/${JSON.parse(props.usePost.img_urls)[0]}`} alt="" 
                                width="500" height="500" />
                            </li>
                        </ul>
                        <ul className="biolife-carousel slider-nav">
                            {JSON.parse(props.usePost.img_urls).map((img, index) => {
                                return (
                                    <li key={index} role='button'>
                                        <img src={`${Api.URL}/${img}`} alt="" 
                                        width="88" height="88" style={{width:'80px', height:'80px'}}/>
                                    </li>
                                )
                            })}
                        </ul>
                    </>
                : null}
        </div>
    )
}