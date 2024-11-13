'use client'
import Link from "next/link"
import { HiExternalLink } from "react-icons/hi";

export const SelectorCard = ({data}) =>{

    return <div className="selector-card" >

            {
                data.enable ? <></> : <h1 className="selector-soon">Em Breve</h1>
            }
            <h1 className="selector-title">{data.title}</h1>
            <p className="selector-description">
                {data.description}</p>
            {
                data.enable ? <Link className="selector-link" href={data.link}>Acesso <HiExternalLink /> </Link> : <></>
            }
            </div>
}