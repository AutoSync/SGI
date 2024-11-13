'use client'

import Image from "next/image";
import { SelectorCard } from "../../Components/SelectorCard";
import Logo from "../../public/icons/sgi_dark.svg"

export default function Selector(){

    
    return <div className="selector-app">
        
        <div>
            <Image src={Logo} alt="sgi dark logo" width={100} height={80} />
        </div>

        <div className="selector-container">

            <SelectorCard 
            data={ {title: "Administrador", 
                    description: "Ampla visão sobre o sistema, e acesso a todos os nós",
                    link: "/application/admin", enable: true } }
            />

            <SelectorCard
            data={ { title: "Mercado",
                    description: "Visao do mercado, compras e gerenciamento de estoque e estrategias",
                    link: "/application/market", enable: false }}
            />

            <SelectorCard
            data={ { title: "Distribuidoras",
                    description: "Gerenciamento e distribuicao, modulos de logística",
                    link: "/application/distribuitor", enable: false }}
            />

            <SelectorCard
            data={ { title: "Fabricante",
                    description: "Compra e produção e publicar produtos na Malha",
                    link: "/application/factory", enable: false }}
            />

        </div>

        <h1 className="selector-title-footer">2024 &copy; AutoSync SGI &trade;</h1>
        <h1 className="selector-title-footer">powered by Erick Andrade</h1>

    </div>
}