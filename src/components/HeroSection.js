import { Components } from ".";

export function HeroSection(props) {
    return (
        <div className="container">
                <div className="row">
                    <Components.SearchBar />
                    <Components.Menu />
                    <Components.NavBar categories={props.categories ?? []}/>
                    <Components.Slide />
                </div>
            </div>
    )
}