"use client"

import Link from "next/link";
import { CodeTrans } from "../../Processing/CodeTrans";
import { ConvertToBRL } from "../ConvertToBRL";

import style from './layout.module.css'
import { LimitText } from "../../Resources/LimitText";

// 100 COMPRA 200 VENDAS 300 PAGAMENTOS 400 INVESTIMENTOS

export const Transactions = ({transData, ready}) =>{
    let isEmpty = transData === null || transData === undefined || transData.length === 0;
    let emptyData = [
        { Cliente:"Cliente", Codigo: "Codigo", Valor: 0, TBM: "TBM", COT: "COT" },
        { Cliente:"Cliente", Codigo: "Codigo", Valor: 0, TBM: "TBM", COT: "COT" },	
        { Cliente:"Cliente", Codigo: "Codigo", Valor: 0, TBM: "TBM", COT: "COT" },	
        { Cliente:"Cliente", Codigo: "Codigo", Valor: 0, TBM: "TBM", COT: "COT" },	
        { Cliente:"Cliente", Codigo: "Codigo", Valor: 0, TBM: "TBM", COT: "COT" },	
        { Cliente:"Cliente", Codigo: "Codigo", Valor: 0, TBM: "TBM", COT: "COT" },	
        { Cliente:"Cliente", Codigo: "Codigo", Valor: 0, TBM: "TBM", COT: "COT" },	
        { Cliente:"Cliente", Codigo: "Codigo", Valor: 0, TBM: "TBM", COT: "COT" },	
        { Cliente:"Cliente", Codigo: "Codigo", Valor: 0, TBM: "TBM", COT: "COT" },	
        { Cliente:"Cliente", Codigo: "Codigo", Valor: 0, TBM: "TBM", COT: "COT" },	
    ]
    let data = []

    if(!isEmpty){
        data = []
        for(let i =0; i < transData.length; i++){
            const t = transData[i]
            data.push({
                Cliente: t.client,
                Codigo: t.code,
                Valor: t.value,
                TBM: t.value * 0.001, //0.01%
                COT: t.cot
            })
        }
    }
    
    return <div className={style.Trans}>
        <div className={style.TransContainer}>
            <h3 className={style.TransTitle}>Transações</h3>
            <input className={style.TransFilter} placeholder="Filtrar"/>
        </div>

        {
            ready ? isEmpty ? <></> : 
            <div className={style.TransList}>
            <div className={style.TransHeaderTr}>
                {
                    Object.keys(data[0]).map((item) => (
                        <h1 key={item} className={style.TransHeaderTd}>{item}</h1>
                    ))
                }
            </div>
           
            </div> : <></>
        }
        {
            ready ? isEmpty ? <div className={style.TransEmptyContainer}><h1 className={style.TransEmpty}>Nenhuma Transação Encontrada.</h1></div> : <div className={style.TransList}>
            {
                data.map((item, index) => (
                    <div key={index} className={ index == (data.length - 1) ? style.TransTrLast : index % 2 == 0 ? style.TransTr : style.TransTrs}>
                        <h1 className={style.TransTd}>{item.Cliente}</h1>
                        <h1 className={style.TransTd}>{CodeTrans(item.Codigo)}</h1>
                        <h1 className={style.TransTd}>{ConvertToBRL(item.Valor)}</h1>
                        <h1 className={style.TransTd}>{ConvertToBRL(item.TBM)}</h1>
                        <a className={style.TransId} href="#">{item.COT}</a>
                    </div>
                ))
            }
        </div> : <div className={style.TransList}>
                {
                    emptyData.map((item, index) => (
                        <div key={index} className={style.TransTrLoading}>
                            <div className={style.TransLoading}>Carregando...</div>
                            <div className={style.TransLoading}>Carregando...</div>
                            <div className={style.TransLoading}>Carregando...</div>
                            <div className={style.TransLoading}>Carregando...</div>
                            <div className={style.TransLoading}>Carregando...</div>
                        </div>
                    ))
                }
            </div>
                
        }

    </div>
}