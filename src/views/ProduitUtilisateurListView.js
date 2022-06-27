import { useEffect, useMemo, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Components } from "../components";
import { Api } from "../services/Api";
import { UtilisateurService } from "../services/UtilisateurService";
import { Auth } from "../utils/Auth";

export function ProduitUtilisateurListView(props) {
    const abortController = useMemo(() => new AbortController(), []);

    const user = Auth.getUser() ?? null;
    const tableHead = ['id', 'image', 'titre', 'prix', 'date de creation'];
    const tableActions = ['edit', 'delete'];

    const navigate = useNavigate();

    const [posts, setPosts] = useState([]);

    const findPostIndex = data => {
        return posts.findIndex(administrateur => (
            parseInt(administrateur.id) === parseInt(data.id)));
    }
    const handlePostEditClick = (event, data)  => {
        event.preventDefault();

        navigate(`/mon-compte/produits/${data.id ?? ''}/modifier`);
    }
    const handlePostDeleteClick = (event, data) => {
        event.preventDefault();

        const postCopy = [...posts];
        const index = findPostIndex(data);
        
        UtilisateurService.destroyPost(data.id, abortController.signal)
        .then(() => {
            postCopy.splice(index, 1);
            setPosts(postCopy);
        })
        .catch(err => null);
        
    }

    useEffect(() => {
        UtilisateurService.getPosts(user.id, abortController.signal)
        .then(response => {
            let postCopy = response.posts.map(post => {
                return {
                    id: post.id,
                    image: post.img_urls ? 
                    (<img src={`${Api.URL}/${JSON.parse(post.img_urls)[0]}`} width={'100px'} 
                    height={'100px'} alt=""/>) : '--',
                    titre: <Link to={`/produits/${post.id}`}>{post.titre ?? ""}</Link>,
                    prix: post.prix,
                    'date de creation': new Date(post.created_at)
                    .toLocaleDateString('fr', {dateStyle: 'medium'})
                };
            } );

            setPosts([...postCopy]);
        })
        .catch(err => null);

        return () => {
            //
        }
    }, [abortController, user.id]);

    return (
        <div className="col-lg-12">
            <h3>Mes publications</h3>
            <Components.Table tableHead={tableHead} tableActions={tableActions}
            tableData={posts} handleEditClick={handlePostEditClick} 
            handleDeleteClick={handlePostDeleteClick}/>
        </div>
    )
}