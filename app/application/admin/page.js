'use client'
import styles from './page.module.css'
import SGI from '../../public/icons/sgi_white.svg'
import Image from 'next/image'
import { BsBoxSeam, BsBuilding, BsCart, BsColumns, BsShare, BsTag } from 'react-icons/bs'
import { TabAdmin } from '../../Components/TabAdmin/TabAdmin'
import { Dashboard } from '../../Components/Dashboard/Dashboard'


function Logo(){
    return <div className={styles.Logo}>
        <Image src={SGI} alt='SGI logo'
        width={50} height={50}
        />
    </div>
}
export default function Admin(){

    return <div className={styles.Admin}>

        <TabAdmin
        tabData={[
            { label:  "x", content: <Logo />, type: true },
            { label: <BsColumns/> , content: Dashboard() },
            { label: <BsShare/> , content: "Nodes" },
            { label: <BsBoxSeam/> , content: "Products" },
            { label: <BsTag/> , content: "Distributors" },
            { label: <BsCart/> , content: "Clients" },
            { label: <BsBuilding/> , content: "Factories" },
        ]}
        indexActive={1}
        />
        
    </div>
}