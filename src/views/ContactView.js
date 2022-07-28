import { useMemo, useState } from "react";
import { Components } from "../components";
import { Api } from "../services/Api";

export function ContactView(props) {
    const abortController = useMemo(() => new AbortController());

    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isDisabled, setIsDisabled] = useState(false);

    const handleContactFormSubmit = event => {
        event.preventDefault();
        console.log('contact form submit');

        if (!email || email === '') 
            return alert('Vous devez renseigner votre adresse mail !');
        

        const payload = {email, message};

        setIsDisabled(true);
        fetch(`${Api.URL}/api/contact`, {
            method:'POST',
             headers: {
            "Content-type": "application/json",
            "Accept": "application/json"},
            body: JSON.stringify(payload)
            })
        .then(response => response.json())
        .then(result => {
            if (!result.success) {
                setIsDisabled(false);
                return alert("Une erreure est survenue. Veuillez réessayer !")
            };

            alert('Votre message à bien été envoyé !');
            setIsDisabled(false);
            setEmail('');
            setMessage('');
        })
        .catch(error => {
            setIsDisabled(false);
            alert("Une erreure est survenue. Veuillez réessayer !")}
            );
    }
    return (
        <>
            <Components.HeroSection title={"Contact"} />
            <div className="container">
                <div className="row" style={{padding: "30px 0"}}>
                    <div className="col-lg-6 col-md-6 col-sm-6 d-xs-none map">
                    <div className="mapouter"><div className="gmap_canvas"><iframe width="100%" height="400" id="gmap_canvas" src="https://maps.google.com/maps?q=Abidjan,%20Cocody%20Riviera%204,%20Beverly%20Hill%20&t=&z=15&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe><a href="https://123movies-to.org"></a></div></div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-xs-12 form">
                        <h2>Contactez nous</h2>
                        <p>Remplissez le formulaire de contact</p>
                        <br />
                        <Components.ContactForm handleFormSubmit={handleContactFormSubmit}
                        setEmail={setEmail} setMessage={setMessage} email={email} message={message} 
                        isDisabled={isDisabled}/>
                    </div>
                </div>
            </div>
        </>)
}