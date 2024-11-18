'use client'
import styles from './page.module.css'
import SGI from '../../public/icons/sgi_white.svg'
import Image from 'next/image'
import { BsBoxSeam, BsBuilding, BsCart, BsColumns, BsShare, BsTag } from 'react-icons/bs'
import { TabAdmin } from '../../Components/TabAdmin/TabAdmin'
import { Dashboard } from '../../Components/Dashboard/Dashboard'
import { useEffect } from 'react'
import { DataBase, ReadAdminDb, ReadClientsDb, ReadDistsDb, ReadFactoriesDb, ReadProductsDb, WriteAdminDb, WriteClientsDb, WriteDistsDb, WriteFactoriesDb, WriteProductsDb } from '../../data/database'
import { Products } from '../../Components/Products'
import { Distribuidor } from '../../Components/Distribuidor'
import { Markets } from '../../Components/Markets'

function Logo(){
    return <div className={styles.Logo}>
        <Image src={SGI} alt='SGI logo'
        width={50} height={50}
        />
    </div>
}
export default function Admin(){

    useEffect(() => {

        //Carregar Admin
        const adminDb = ReadAdminDb()
        if(!adminDb){
            console.log("Criar Administrador")
            WriteAdminDb(DataBase.admin)
        }else{
            console.log("Administrador Carregado...")
        }
        //Carregar Clientes
        const clientDb = ReadClientsDb()
        if(!clientDb){
            console.log("Criar Clientes")
            WriteClientsDb(DataBase.clients)
        }else{
            console.log("Clientes Carregados...")
        }
        //Carregar Produtos
        const pdb = ReadProductsDb()
        if(!pdb){
            console.log("Criar Produtos")
            WriteProductsDb(DataBase.products)
        }else{
            console.log("Produtos Carregados...")
        }
        //Carregar Distribuidores
        const distsDb = ReadDistsDb()
        if(!distsDb){
            console.log("Criar Distribuidores")
            WriteDistsDb(DataBase.dists)
        }else{
            console.log("Distribuidores Carregados...")
        }
        //Carregar Factories
        const factoryDb = ReadFactoriesDb()
        if(!factoryDb){
            console.log("Criar Factories")
            WriteFactoriesDb(DataBase.factories)
        }else{
            console.log("Factories Carregados...")
        }

    }, [])


    return <div className={styles.Admin}>
        <TabAdmin
        tabData={[
            { label:  "x", content: <Logo key={0} />, type: true },
            { label: <BsColumns/> , content: Dashboard() },
            { label: <BsShare/> , content: "Nodes" },
            { label: <BsCart/> , content: Markets() },
            { label: <BsTag /> , content: Products() },
            { label: <BsBoxSeam/> , content: Distribuidor() },
            { label: <BsBuilding/> , content: "Factories" },
        ]}
        indexActive={3}
        />
        
    </div>
}