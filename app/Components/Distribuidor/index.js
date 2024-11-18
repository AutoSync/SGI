'use client'
import { LimitText } from '../../Resources/LimitText';
import { Table } from '../Table';
import styles from './distribuidor.module.css'
import { useEffect, useState } from "react";
import { ReadDistsDb } from '../../data/database';


export function Distribuidor() {

    const [dists, setDists] = useState([])
    const [distReady, setDistReady] = useState(false)

    useEffect(() => {

        const dists_carregado = ReadDistsDb()

        setDistReady(false)
        let novos_dists = []
        if(dists_carregado != null){
            for(let i = 0; i < dists_carregado.length; i++){

                const dist = dists_carregado[i]
                novos_dists.push({
                    Id: dist.userId,
                    Nome: LimitText(dist.name, 15),
                    Cidade: LimitText(dist.city, 15),
                    Categoria: dist.category,
                    Conta: dist.account,
                    //payments: dist.payments,
                    })
                }
            }
            
        const timer = setTimeout(() => { 
            setDists(novos_dists)
            setDistReady(true)

        }, 1000);

        return () => clearTimeout(timer)
    }, [])

    return (
        <div className={styles.DistList}>
            <h1>Distribuidores</h1>
            <Table data={dists} header={['Id', 'Nome', 'Cidade', 'Categoria', 'Conta']} ready={distReady} />
        </div>
    );
}