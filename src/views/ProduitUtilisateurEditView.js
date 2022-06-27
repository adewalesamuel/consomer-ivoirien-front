import { useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Components } from "../components";
import { Hooks } from "../hooks";
import { Services } from "../services";

export function ProduitUtilisateurEditView(props) {
    const abortController = useMemo(() => new AbortController(), []);

    const params = useParams();

    const navigate = useNavigate();
    const usePost = Hooks.usePost();

    const [isDisabled, setIsDisabled] = useState(false);

    const handleFormSubmit = event => {
        event.preventDefault();
        const payload = {
            titre: usePost.titre,
            description: usePost.description,
            attributs: usePost.attributs,
            prix: usePost.prix,
            img_urls: usePost.img_urls,
            categorie_id: usePost.categorie_id
        };
        
          setIsDisabled(true);
          Services.UtilisateurService.updatePost(params.id, 
            JSON.stringify(payload), abortController.signal)
          .then(() => {
            setIsDisabled(false);
            alert("Félicitation! Votre produit à bien été modifié");
            navigate('/mon-compte/produits');
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

    useEffect(() => {
        usePost.getPost(params.id, abortController.signal)
        .catch(err => console.log(err));
    }, [params.id, abortController])

    return (
        <div className="col-lg-12">
            <h3>Modifier le produit</h3>
            <div className="row">
                <Components.PostForm usePost={usePost} categories={props.categories}
                handleImageDeleteClick={handleImageDeleteClick} handleFileChange={handleFileChange}
                isDisabled={isDisabled} handleFormSubmit={handleFormSubmit}/>
            </div>
        </div>
    )
}