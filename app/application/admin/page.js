'use client'
import styles from './admin.module.css'
import SGI from '../../public/icons/sgi_white.svg'
import Image from 'next/image'
import { BsColumns, BsShare, BsTag } from 'react-icons/bs'
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

    return <div className={styles.App}>

        <TabAdmin
        tabData={[
            { label: <Logo /> , content: "x", typeo: true },
            { label: <BsColumns/> , content: Dashboard() },
            { label: <BsShare/> , content: "Nodes" },
            { label: <BsTag/> , content: "Products" },
        ]}
        indexActive={1}
        />
        
    </div>
}