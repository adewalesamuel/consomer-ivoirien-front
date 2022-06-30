import { Link } from "react-router-dom";

import siteLogo from '../assets2/images/logo-jeconsommeivoirien.jpg';

export function Logo(props) {
    return (
        <Link to="/" className="biolife-logo">
            <img src={siteLogo} alt="je consomme ivoirien logo" width="80" height="36" />
        </Link>
    )
}