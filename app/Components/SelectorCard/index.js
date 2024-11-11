'use client'

import Link from "next/link"
import { useState } from "react"
import { Styles } from "../Styles"

import { HiExternalLink } from "react-icons/hi";

const MyStyle = {
    //Selector card
    SelectorCard: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",

        backgroundColor: "#1F1F2D",
        borderRadius: "5px solid",
        borderBottom: "10px solid transparent",
        width: "250px", height: "300px",
        margin: "1rem 2rem 1rem 2em", padding: "1em",
        transition: "200ms",
    },
    SelectorCardHover: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",

        backgroundColor: "#1F1F2D",
        borderRadius: "5px",
        borderBottom: `10px solid ${Styles.yelowSGI}`,
        width: "250px", height: "300px",
        margin: "1rem 2rem 1rem 2em", padding: "1em",
        transition: "200ms",
    },
    SelectorTitle: {
        fontSize: "16pt",
        fontWeight: 600,
    },
    SelectorDescription:{
        fontSize: "12pt",
        fontWeight: 300,
    },
    SelectorLink: {
        textDecoration: "none",
        borderRadius: "5px",
        backgroundColor: Styles.yelowSGI,
        color: "black",

        padding: "1em",
        fontWeight: 400,
    }
    ,SelectorSoon:{
        color: "rgba( 255,255,255, 0.1)"
    }
}


export const SelectorCard = ({data}) =>{

    const [hover, setHover] = useState(MyStyle.SelectorCard)

    const handleMouseEnter = () => {
        setHover(MyStyle.SelectorCardHover)
    }

    const handleMouseLeave = () => {
        setHover(MyStyle.SelectorCard)
    }


    return <div style={hover} 
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                >
            {
                data.enable ? <></> : <h1 style={MyStyle.SelectorSoon}>Em Breve</h1>
            }
            <h1 style={MyStyle.SelectorTitle}>{data.title}</h1>
            <p style={MyStyle.SelectorDescription}>
                {data.description}</p>
            {
                data.enable ? <Link style={MyStyle.SelectorLink} href={data.link}>Acesso <HiExternalLink /> </Link> : <></>
            }
            </div>
}