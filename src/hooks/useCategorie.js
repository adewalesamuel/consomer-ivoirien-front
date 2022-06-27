import { useState, useEffect } from 'react';
import { Services } from '../services';

export const useCategorie = (l) => {
    const [id, setId] = useState('');
	const [nom, setNom] = useState('');
	const [slug, setSlug] = useState('');
	const [description, setDescription] = useState('');
    const [parent_category_id, setParent_category_id] = useState('');
	const [img_url, setImg_url] = useState('');

    const [categories, setCategories] = useState([]);
	
    const [errors, setErrors] = useState([]);
    const [isDisabled, setIsDisabled] = useState(false);

    const getCategorie = (categorieId, signal) => {        
        return Services.CategorieService.getById(categorieId, signal)
        .then(response => {
            fillCategorie(response.categorie);
            setIsDisabled(false);
        });
    }
    const createCategorie = signal => {
        const payload = {
            nom,
		slug,
		description,
		img_url,
        parent_category_id
		
        };

        return Services.CategorieService.create(JSON.stringify(payload), signal);
    }
    const updateCategorie = (categorieId, signal) => {
        const payload = {
            nom,
		slug,
		description,
		img_url,
        parent_category_id
		
        };

        return Services.CategorieService.update(categorieId, JSON.stringify(payload), signal);
    }
    const deleteCategorie = (categorieId, signal) => {
        return Services.CategorieService.destroy(categorieId, signal);
    }
    const fillCategorie = (categorie) => {
        setId(categorie.id);
        setNom(categorie.nom ?? '');
		setSlug(categorie.slug ?? '');
		setDescription(categorie.description ?? '');
		setImg_url(categorie.img_url ?? '');
        setParent_category_id(categorie.parent_category_id ?? '');
		
    }
    const emptyCategorie = () => {
        setId('');
        setNom('');
		setSlug('');
		setDescription('');
		setImg_url('');
        setParent_category_id('');
		
    }

    useEffect(() => {        
        const abortController = new AbortController();

        Services.CategorieService.getAll(abortController.signal)
        .then(response => {
            setCategories(response.categories);
        })
        .catch(err => console.log(err));
    
      return () => {
        
      }
    }, [])


    return {
        id,
        nom,
		slug,
		description,
		img_url,
        parent_category_id,
		
        errors,
        isDisabled,
        setNom,
		setSlug,
		setDescription,
		setImg_url,
        setParent_category_id,
		
        setId,
        setErrors,
        setIsDisabled,
        getCategorie,
        createCategorie,
        updateCategorie,
        deleteCategorie,
        fillCategorie,
        emptyCategorie
    };
}