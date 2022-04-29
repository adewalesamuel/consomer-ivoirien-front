import { Components } from '..'

export function UtilisateurForm(props) {
    return (
        <form className='form' disabled={props.isDisabled ?? false}
        onSubmit={props.handleFormSubmit ?? null}>
            <div className='row'>
                <div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='nom_prenoms'>Nom_prenoms</label>
                        <input className='form-control' type='text' id='nom_prenoms' name='nom_prenoms' 
                        placeholder='Nom_prenoms' value={props.useUtilisateur.nom_prenoms ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.useUtilisateur.setNom_prenoms(e.target.value) ?? null} required/>
                    </div>
                </div>
				<div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='email'>Email</label>
                        <input className='form-control' type='text' id='email' name='email' 
                        placeholder='Email' value={props.useUtilisateur.email ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.useUtilisateur.setEmail(e.target.value) ?? null} required/>
                    </div>
                </div>
				<div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='password'>Password</label>
                        <input className='form-control' type='text' id='password' name='password' 
                        placeholder='Password' value={props.useUtilisateur.password ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.useUtilisateur.setPassword(e.target.value) ?? null} required/>
                    </div>
                </div>
				<div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='adresse'>Adresse</label>
                        <input className='form-control' type='text' id='adresse' name='adresse' 
                        placeholder='Adresse' value={props.useUtilisateur.adresse ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.useUtilisateur.setAdresse(e.target.value) ?? null} required/>
                    </div>
                </div>
				<div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='ville'>Ville</label>
                        <input className='form-control' type='text' id='ville' name='ville' 
                        placeholder='Ville' value={props.useUtilisateur.ville ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.useUtilisateur.setVille(e.target.value) ?? null} required/>
                    </div>
                </div>
				<div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='pays'>Pays</label>
                        <input className='form-control' type='text' id='pays' name='pays' 
                        placeholder='Pays' value={props.useUtilisateur.pays ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.useUtilisateur.setPays(e.target.value) ?? null} required/>
                    </div>
                </div>
				<div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='telephone'>Telephone</label>
                        <input className='form-control' type='text' id='telephone' name='telephone' 
                        placeholder='Telephone' value={props.useUtilisateur.telephone ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.useUtilisateur.setTelephone(e.target.value) ?? null} required/>
                    </div>
                </div>
				<div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='img_url'>Img_url</label>
                        <input className='form-control' type='text' id='img_url' name='img_url' 
                        placeholder='Img_url' value={props.useUtilisateur.img_url ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.useUtilisateur.setImg_url(e.target.value) ?? null} required/>
                    </div>
                </div>
				<div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='status'>Status</label>
                        <input className='form-control' type='text' id='status' name='status' 
                        placeholder='Status' value={props.useUtilisateur.status ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.useUtilisateur.setStatus(e.target.value) ?? null} required/>
                    </div>
                </div>
				
                <div className='col-12 text-right'>
                    <button disabled={props.isDisabled ?? false} type='button' className='btn btn-primary' 
                    onClick={props.handleFormSubmit}>
                        <span>Enregistrer</span>
                    </button>
                </div>
            </div>
        </form>
    )
}