import Image from "next/image"
import Link from "next/link"

import SGI_White from "../../app/public/icons/sgi_white.svg"

const Header = () =>{
    return <div className="landing-header-container">

        <div className="landing-menu">
            
            <Image className="landing-menu-item-start" src={SGI_White} alt="White Logo" width={40} height={50}/>
            <a href="#features" className="landing-menu-item">EXTRAS</a>
            <a href="#tools" className="landing-menu-item">FERRAMENTAS</a>
            <a href="#sims" className="landing-menu-item">SIMULAÇÕES</a>
            <a href="#footer" className="landing-menu-item">SOBRE</a>
            <Link className="landing-menu-item-end" href={"/application/selector"}>LOGIN</Link>
        </div>

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