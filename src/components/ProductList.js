import { Components } from "."

export function ProducList(props) {
    return (
        <div className="advance-product-box">
            <ul className="products-list nav-top-right nav-main-color nav-none-on-mobile eq-height-contain">
                {props.products.map((product, index) => {
                    return <Components.ProductItem product={product} key={index} colNumber={props.colNumber ?? '3'}/>
                })}
            </ul>
        </div>
    )
}