import Image from "next/image"
import Link from "next/link"

import SGI_White from "../../app/public/icons/sgi_white.svg"

const Header = () =>{
    return <div className="landing-header-container">

        <div className="landing-menu">
            
            <Image className="landing-menu-item-start" src={SGI_White} alt="White Logo" width={40} height={50}/>
            <a href="#erp" className="landing-menu-item">ERP</a>
            <a href="#tools" className="landing-menu-item">FERRAMENTAS</a>
            <a href="#sims" className="landing-menu-item">SIMULAÇÕES</a>
            <a href="#footer" className="landing-menu-item">SOBRE</a>
            <Link className="landing-menu-item-end" href={"/application/selector"}>LOGIN</Link>
        </div>

    </div>
}

const Erp = () =>{
    return <div className="landing-erp-container" id="erp">

        <div className="landing-erp-box-center">
            <h1>Features</h1>

        </div>

        <h3 className="landing-credits-photo">Foto de <a href="https://unsplash.com/pt-br/@marcinjozwiak?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Marcin Jozwiak</a> na <a href="https://unsplash.com/pt-br/fotografias/caminhoes-estacionados-kGoPcmpPT7c?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
        </h3>
        
    </div>
}

const Footer = () =>{
    return <div className="landing-footer-container" id="footer">
        <h1>Footer</h1>
        
    </div>
}

export default function Landing(){
    return <div className="landing-container">
        <Header />
        <Erp />
        <Footer />
    </div>
}