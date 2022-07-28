import { Components } from '..'

export function ContactForm(props) {
    return (
        <form className='form' disabled={props.isDisabled ?? false}
        onSubmit={props.handleFormSubmit ?? null}>
            <div className='col-12'>
                <div className='form-group'>
                    <label htmlFor='email'>Email</label>
                    <input className='form-control' type='text' id='email' name='email' 
                    placeholder='Votre adresse mail' value={props.email ?? ''} disabled={props.isDisabled} 
                    onChange={ e => props.setEmail(e.target.value) ?? null} required/>
                </div>
            </div>
            <div className='col-12'>
                <div className='form-group'>
                    <label htmlFor='mesasge'>Message</label>
                    <textarea className='form-control' id='mesasge' name='mesasge' 
                    placeholder='Votre Message' value={props.message ?? ''} required rows={6}
                    disabled={props.isDisabled} onChange={ e => props.setMessage(e.target.value) ?? null}>
                    </textarea>
                </div>
            </div>
            <div className='col-12 text-right'>
                <button disabled={props.isDisabled ?? false} type='button' 
                className='btn btn-submit btn-bold' onClick={props.handleFormSubmit}>
                    <span>Envoyez mon message</span>
                </button>
            </div>
        </form>
    )
}