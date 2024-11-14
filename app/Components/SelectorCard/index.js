'use client'
import Link from "next/link"
import { HiExternalLink } from "react-icons/hi";

import styles from "./SelectorCard.module.css"

export const SelectorCard = ({data}) =>{

    return <div className={data.enable ? styles.SelectorCard : styles.SelectorCardDisabled}  >

            {
                data.enable ? <></> : <h1 className={styles.SelectorSoon}>Em Breve</h1>
            }
            <h1 className={styles.SelectorTitle}>{data.title}</h1>
            <p className={styles.SelectorDescription}>
                {data.description}</p>
            {
                data.enable ? <Link className={styles.SelectorLink} href={data.link}>Acesso <HiExternalLink /> </Link> : <></>
            }
            </div>
}