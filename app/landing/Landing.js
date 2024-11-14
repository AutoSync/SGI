'use client'

import Image from "next/image"
import Link from "next/link"
import styles from "./Landing.module.css"
import SGI_White from "../../app/public/icons/sgi_white.svg"
import { useEffect, useState } from "react"

export default function Landing(){

    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY || document.documentElement.scrollTop
            setScrolled(scrollTop > 50)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])


    return <div className={styles.LandingContainer}>
        
        <div className={scrolled ? styles.HeaderScrolled : styles.Header}>

            <div className={styles.Menu}>

                <Image src={SGI_White} alt="AutoSync SGI" width={45} height={50} />

                <div className={styles.MenuList}>
                    <a className={styles.MenuItem} href={"/"}>HOME</a>
                    <a className={styles.MenuItem} href={"#"}>GERENCIAMENTO</a>
                    <a className={styles.MenuItem} href={"#"}>SOBRE</a> 
                </div>

                <div className={styles.Login}>
                    <Link className={styles.LoginLink} href={"/application/selector"}>DEMO</Link>
                </div>

            </div>

        </div>

            <section className={styles.Banner}>
                <h1 className={styles.BannerTitle}>TRANSFORMANDO O <span className={styles.BannerTitleSpan}>MERCADO</span> <br /> EM UM  MUNDO DE OPORTUNIDADES </h1>
            </section>

    </div>
}