import Image from 'next/image'
import styles from './Loading.module.css'
import Logo from '../public/icons/sgi_white.svg'

export default function Loading(){
    return <div className={styles.Container}>
        <div>
            <Image 
            src={Logo} 
            alt="AutoSync SGI" 
            width={150} 
            height={150} />
            <h1>Carregando...</h1>
        </div>
    </div>
}