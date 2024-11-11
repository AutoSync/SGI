import Link from "next/link"

const Header = () =>{
    return <div className="landing-header-container">

        <li id="landing-menu">
            
            <a href="#features" id="landing-menu-item">Extras</a>
            <a href="#tools" id="landing-menu-item">Ferramentas</a>
            <a href="#sims" id="landing-menu-item">Simulações</a>
            <a href="#footer" id="landing-menu-item">Sobre</a>

            <div>
                <Link href={"/application/selector"}>Login</Link>
            </div>

        </li>

    </div>
}

const Features = () =>{
    return <div className="landing-features-container" id="features">
        <h1>Features</h1>
        
    </div>
}

const Tools = () =>{
    return <div className="landing-tools-container" id="tools">
        <h1>Tools</h1>
        
    </div>
}

const Sims = () =>{
    return <div className="landing-sims-container" id="sims">
        <h1>Simulations</h1>
        
    </div>
}

const Footer = () =>{
    return <div className="landing-footer-container" id="footer">
        <h1>Footer</h1>
        
    </div>
}



export const Landing = () => {
    return <div className="landing-container">
        <Header />
        <Features />
        <Tools />
        <Sims />
        <Footer />
    </div>
}