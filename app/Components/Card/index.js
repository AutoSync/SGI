import Link from "next/link"
import { ConvertToBRL } from "../ConvertToBRL"
import { FaRegArrowAltCircleRight as Go } from "react-icons/fa";
import { PiCurrencyDollarFill as Sales } from "react-icons/pi";
import { TbArrowsExchange as Trans } from "react-icons/tb";
import { BsCashCoin as Coin } from "react-icons/bs";
import { GrNotes as Orders} from "react-icons/gr";

import style from './layout.module.css'
export const Card = ({data}) => {

    let link = <Link className={style.CardLink} href={data.link}><Go /></Link>
    if(data.link == "x")
        link = <></>

    let icon = <></>
    switch(data.icon){
        case "sales":
            icon = <Sales />
            break
        case "trans":
            icon = <Trans />
            break
        case "orders":
            icon = <Orders />
            break
        case "coin":
            icon = <Coin />
            break
        default: 
            icon = <></>
            break
    }

    return <div className={style.Card}>
        <div className={style.CardIconDivision}>
            {
                icon
            }
            {
                link
            }
        </div>
        <div>
            <h1 className={style.CardTitle}>{data.title}</h1>
            <h2 className={style.CardDescription}>{data.description}</h2>
        </div>

        <h3 className={style.CardValues}>{ data.unit == true || data.unit != undefined ? data.values : ConvertToBRL(data.values)}</h3>

    </div>
}