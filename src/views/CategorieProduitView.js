import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { Components } from "../components";
import { Services } from "../services";

export function CategorieProduitView(props) {
    const [products, setProducts] = useState([]);
    
    const {id} = useParams();
    const page = useSearchParams()[0].get('page');
    
    const [categorieName, setCategorieName] = useState("Chargement...");
    
    useEffect(() => {
        const abortController = new AbortController();

        if (props.categories && props.categories.length > 0) {
            const subCategories = !props.categories ? [] : props.categories
            .map(categorie => categorie.sub_categories).flat();
    
            setCategorieName(subCategories.find(subCategorie => (
                parseInt(subCategorie.id) === parseInt(id))).nom);

            Services.CategorieService.getAllPostByPage(id, page ?? 1, abortController.signal)
            .then(response => setProducts(response.posts.data))
            .catch(err => console.log(err));  
        }

        return () => {
            //    
        }
    }, [id, page, props.categories.length])

    return (
        <>
        <Components.HeroSection title={categorieName} />
        <div className="page-contain category-page left-sidebar py-40">
            <div className="container">
                <div className="row">
                    <div id="main-content" className="main-content col-lg-9 
                    col-md-8 col-sm-12 col-xs-12">
                        <Components.ProductList products={products}/>
                    </div>
                    <Components.CategorieSidebar />
                </div>
            </div>
        </div>
     
    </>
    )
}