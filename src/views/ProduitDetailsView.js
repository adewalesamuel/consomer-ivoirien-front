import { useEffect, useState } from "react";
import { Components } from "../components";

import { Hooks } from "../hooks";
import { useParams } from "react-router-dom";

export function ProduitDetailsView(props) {
    const abortController = new AbortController();
    
    const [posts, setPosts] = useState([]);
    
    const {id} = useParams() ?? null;

    const usePost = Hooks.usePost();

    useEffect(() => {
        window.scrollTo(0, 0);
        
        usePost.getPost(id, abortController.signal);
        
        return () => {
        //
        }
    }, [])
    

    return (
        <>
            <Components.HeroSection title={usePost.titre === '' ? "Chargement..." : usePost.titre} />
            <div className="page-contain single-product paddding-top-20px">
                <div className="container">
                   <div id="main-content" className="main-content">
                        <div className="sumary-product single-layout">
                            <Components.ProductMedia usePost={usePost}/>
                            <Components.ProductAttributes usePost={usePost}/>
                            <Components.ProductInfo usePost={usePost}/>
                            <div className="other-products">
                                <Components.ProductList products={posts}/>
                            </div>
                        </div>        
                    </div>
                </div>
            </div>
         
        </>
    )
}