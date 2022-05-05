import { Components } from '..'

export function UtilisateurForm(props) {
    return (
        <form className='form' disabled={props.isDisabled ?? false}
        onSubmit={props.handleFormSubmit ?? null}>
            <div className='row'>
                <div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='nom_prenoms'>Nom prenoms</label>
                        <input className='form-control' type='text' id='nom_prenoms' name='nom_prenoms' 
                        placeholder='Nom prenoms' value={props.useUtilisateur.nom_prenoms ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.useUtilisateur.setNom_prenoms(e.target.value) ?? null} required/>
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
                        <label htmlFor='telephone'>Telephone</label>
                        <input className='form-control' type='tel' id='telephone' name='telephone' 
                        placeholder='Telephone' value={props.useUtilisateur.telephone ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.useUtilisateur.setTelephone(e.target.value) ?? null} required/>
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
                        <label htmlFor='password'>Mot de passe</label>
                        <input className='form-control' type='password' id='password' name='password' 
                        placeholder='Mot de passe' value={props.useUtilisateur.password ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.useUtilisateur.setPassword(e.target.value) ?? null} required/>
                    </div>
                </div>
                <div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='cpassword'>Confirmer le mot de passe</label>
                        <input className='form-control' type='password' id='cpassword' name='cpassword' 
                        placeholder='Mot de passe' value={props.useUtilisateur.cpassword ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.useUtilisateur.setCpassword(e.target.value) ?? null} required/>
                    </div>
                </div>
                <div className='col-12 text-right'>
                    <button disabled={props.isDisabled ?? false} type='button' 
                    className='btn btn-submit btn-bold' onClick={props.handleFormSubmit}>
                        <span>Enregistrer</span>
                    </button>
                </div>
            </div>
        </form>
    )
}