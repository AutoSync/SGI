"use client"

import { FaLongArrowAltRight as ArrowRight } from "react-icons/fa";
import { PiGearFineFill as Processing } from "react-icons/pi";
import { MdLocalShipping as Shipped } from "react-icons/md";
import { BsBoxSeamFill as Receipt } from "react-icons/bs";
import { ConvertToBRL } from "../ConvertToBRL";

import style from './layout.module.css'

// Status transacations
// 10 Solicitacao,              20 Processamento,   30 Envio,           40 Recebimento,        
// 11 Sem estoque,              21 atraso           31 atraso           41 atraso
// 12 pagamento pendente        22 repondo estoque  32 roubo            42 problema com nota
// 13 maximo de solicitacoes    23 sem estoque      33 err entregas     43 recolhimento receita

export const Transactions = ({transData}) =>{
    
    const ProcessIcon = (data) => {
        let icon = <ArrowRight />
        switch(data.status){
            case 10:
                icon = <ArrowRight />
                break
            case 20:
                icon = <Processing />
                break
            case 30:
                icon = <Shipped />
                break
            case 40:
                icon = <Receipt />
                break
            default: 
                icon = <ArrowRight />
            break
        }   
        return <div className={style.TransIcon}>{icon}</div>
    }

    return <div className={style.Trans}>
        <div className={style.TransContainer}>
            <h3 className={style.TransTitle}>Transacões</h3>
            <input className={style.TransFilter} placeholder="Filtrar"/>
        </div>

        <div className={style.TransList}>
            {
                transData.map((data, key) => (
                    <div key={key} className={style.TransItem}>
                        <h3 className={style.TransInfo}>{data.from}</h3>
                        {
                            ProcessIcon(data)
                        }
                        <h3 className={style.TransInfo}>{data.to}</h3>
                        <h3 className={style.TransInfo}>{data.type}</h3>
                        <h3 className={style.TransInfo}>{data.status}</h3>
                        <h3 className={style.TransInfoValues}>{ConvertToBRL(data.value)}</h3>
                    </div>
                ))
            }
        </div>
    </div>
}