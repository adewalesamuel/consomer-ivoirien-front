import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Hooks } from "../hooks";
import { Services } from "../services";
import { Components } from "../components";

export function AjouterProduitView(props) {
    const abortController = new AbortController();

    const navigate = useNavigate();
    const usePost = Hooks.usePost();

    const [isDisabled, setIsDisabled] = useState(false);

    const handleFormSubmit = event => {
        event.preventDefault();
        
          setIsDisabled(true);
          usePost.createPost(abortController.signal)
          .then(() => {
            setIsDisabled(false);
            alert("Félicitation! Votre produit à bien été ajouté");
            navigate('mon-compte/produits');
          })
          .catch(err => setIsDisabled(false));
        }
      const handleFileChange = event => {
        event.preventDefault();

        const formData = new FormData();

        formData.append('img', event.target.files[0]);

        setIsDisabled(true);
        Services.FileService.store(formData, abortController.signal)
        .then(response => {
          let img_urls = usePost.img_urls ? JSON.parse(usePost.img_urls) : [];
    
          img_urls.push(response.img_url);
          usePost.setImg_urls(JSON.stringify(img_urls));
          setIsDisabled(false);
        })
        .catch(err => setIsDisabled(false));
        
      }
    
      const handleImageDeleteClick = (event, img_url) => {
        event.preventDefault();
        
        let img_urls = usePost.img_urls ? JSON.parse(usePost.img_urls) : [];
    
        img_urls.splice(img_urls.indexOf(img_url), 1);
        usePost.setImg_urls(JSON.stringify(img_urls));
      }

    return (
        <div className="col-lg-12">
            <h3>Ajouter produits</h3>
            <div className="row">
                <Components.PostForm usePost={usePost} categories={props.categories}
                handleImageDeleteClick={handleImageDeleteClick} handleFileChange={handleFileChange}
                isDisabled={isDisabled} handleFormSubmit={handleFormSubmit}/>
            </div>
        </div>
    )
}