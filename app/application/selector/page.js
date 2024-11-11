'use client'

import Link from "next/link";
import { Styles } from "../../Components/Styles";
import { useState } from "react";
import { SelectorCard } from "../../Components/SelectorCard";


export default function Selector(){

    const MyStyles = {
        //Aplicativo Geral
        Container: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: Styles.backgroundSelectorPage,
            color: Styles.FontColor,
            width: "100%", height: "100vh"
        },
        //Titulo da Escolha
        TitleChoose:{
            fontSize: "12pt",
            fontWeight: "400"
        },
        //Titulo do rodape
        TitleFooter: {
            fontSize: "12pt",
            fontWeight: "400"
        },
        //Contaienr dos selector cards
        SelectorContainer: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center"
        },
        
    }


    return <div style={MyStyles.Container}>
        
        <h1 style={MyStyles.TitleChoose}>Escolha o Sistema</h1>

        <div style={MyStyles.SelectorContainer}>

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

        <h1 style={MyStyles.TitleFooter}>2024 &copy; AutoSync SGI &trade;</h1>
        <h1 style={MyStyles.TitleFooter}>powered by Erick Andrade</h1>




    </div>
}