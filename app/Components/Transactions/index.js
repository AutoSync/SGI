"use client"


import Link from "next/link";
import { CodeTrans } from "../../Processing/CodeTrans";
import { ConvertToBRL } from "../ConvertToBRL";

import style from './layout.module.css'
import { LimitText } from "../../Resources/LimitText";

// 100 COMPRA 200 VENDAS 300 PAGAMENTOS 400 INVESTIMENTOS


export const Transactions = ({transData}) =>{

    let data = []

    for(let i =0; i < transData.length; i++){
        const t = transData[i]
        data.push({
            Cliente: t.client,
            Codigo: t.code,
            Valor: t.value,
            TBM: t.value * 0.005,
            COT: t.cot
        })
    }
    
    return <div className={style.Trans}>
        <div className={style.TransContainer}>
            <h3 className={style.TransTitle}>Transações</h3>
            <input className={style.TransFilter} placeholder="Filtrar"/>
        </div>

        <div className={style.TransList}>
            <div className={style.TransHeaderTr}>
                {
                    Object.keys(data[0]).map((item) => (
                        <h1 className={style.TransHeaderTd}>{item}</h1>
                    ))
                }
            </div>
            {
                data.map((item, index) => (
                    <div key={index} className={ index % 2 == 0 ? style.TransTr : style.TransTrs }>
                        <h1 className={style.TransTd}>{LimitText(item.Cliente, 15)}</h1>
                        <h1 className={style.TransTd}>{ CodeTrans(item.Codigo) }</h1>
                        <h1 className={style.TransTd}>{ ConvertToBRL(item.Valor) }</h1>
                        <h1 className={style.TransTd}>{ ConvertToBRL(item.TBM) }</h1>
                        <Link href={"#"} className={style.TransId}>{item.COT}</Link>
                    </div>
                ))
            }
        </div>
    </div>
}