export function HeroSection(props) {
    return (
        <div className="hero-section hero-background">
            <h1 className="page-title">{props.title ?? "Titre de la page"}</h1>
        </div>
    )
}