import { useState } from 'react';
import { Services } from '../services';

export const useUtilisateur = () => {
    const [id, setId] = useState('');
	const [nom_prenoms, setNom_prenoms] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [cpassword, setCpassword] = useState("");
	const [adresse, setAdresse] = useState('');
	const [ville, setVille] = useState('');
	const [pays, setPays] = useState('');
	const [telephone, setTelephone] = useState('');
	const [img_url, setImg_url] = useState('');
	const [status, setStatus] = useState('');
	const [created_at, setCreated_at] = useState('');
	

    const [errors, setErrors] = useState([]);
    const [isDisabled, setIsDisabled] = useState(false);

    const getUtilisateur = (utilisateurId, signal) => {        
        return Services.UtilisateurService.getById(utilisateurId, signal)
        .then(response => {
            fillUtilisateur(response.utilisateur);
            setIsDisabled(false);
        });
    }

    const createUtilisateur = signal => {
        const payload = {
            nom_prenoms,
		email,
		password,
		adresse,
		ville,
		pays,
		telephone,
		img_url,
		status,
		
        };

        return Services.UtilisateurService.create(JSON.stringify(payload), signal);
    }
    const updateUtilisateur = (utilisateurId, signal) => {
        const payload = {
            nom_prenoms,
		email,
		password,
		adresse,
		ville,
		pays,
		telephone,
		img_url,
		status,
		
        };

        return Services.UtilisateurService.update(utilisateurId, JSON.stringify(payload), signal);
    }
    const deleteUtilisateur = (utilisateurId, signal) => {
        return Services.UtilisateurService.destroy(utilisateurId, signal);
    }
    const fillUtilisateur = (utilisateur) => {
        setId(utilisateur.id);
        setNom_prenoms(utilisateur.nom_prenoms ?? '');
		setEmail(utilisateur.email ?? '');
		setPassword(utilisateur.password ?? '');
		setAdresse(utilisateur.adresse ?? '');
		setVille(utilisateur.ville ?? '');
		setPays(utilisateur.pays ?? '');
		setTelephone(utilisateur.telephone ?? '');
		setImg_url(utilisateur.img_url ?? '');
		setStatus(utilisateur.status ?? '');
		setCreated_at(utilisateur.created_at);
		
    }
    const emptyUtilisateur = () => {
        setId('');
        setNom_prenoms('');
		setEmail('');
		setPassword('');
		setCpassword('');
		setAdresse('');
		setVille('');
		setPays('');
		setTelephone('');
		setImg_url('');
		setStatus('');
		setCreated_at('');
		
    }

    return {
        id,
        nom_prenoms,
		email,
		password,
		cpassword,
		adresse,
		ville,
		pays,
		telephone,
		img_url,
		status,
		created_at,
		
        errors,
        isDisabled,
        setNom_prenoms,
		setEmail,
		setPassword,
		setCpassword,
		setAdresse,
		setVille,
		setPays,
		setTelephone,
		setImg_url,
		setStatus,
		setCreated_at,
		
        setId,
        setErrors,
        setIsDisabled,
        getUtilisateur,
        createUtilisateur,
        updateUtilisateur,
        deleteUtilisateur,
        fillUtilisateur,
        emptyUtilisateur
    };
}