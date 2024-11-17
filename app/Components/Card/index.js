import Link from "next/link"
import { ConvertToBRL } from "../ConvertToBRL"
import { FaRegArrowAltCircleRight as Go } from "react-icons/fa";
import { PiCurrencyDollarFill as Sales } from "react-icons/pi";
import { TbArrowsExchange as Trans } from "react-icons/tb";
import { BsCashCoin as Coin } from "react-icons/bs";
import { GrNotes as Orders} from "react-icons/gr";

import style from './layout.module.css'
import { useState } from "react";
export const Card = ({data, CardReady}) => {
    const [Active, setActive] = useState(false)
    const HandleActive = () =>{
        setActive(true)
    }
    const HandleDisable = () =>{
        setActive(false)
    }
    const iconSize = 18
    let link = <Link className={Active ? style.CardLinkActive : style.CardLink } href={data.link}><Go fontSize={iconSize} /></Link>
    if(data.link == "x")
        link = <></>

    let icon = <></>
    switch(data.icon){
        case "sales":
            icon = <Sales fontSize={iconSize} />
            break
        case "trans":
            icon = <Trans fontSize={iconSize}  />
            break
        case "orders":
            icon = <Orders fontSize={iconSize}  />
            break
        case "coin":
            icon = <Coin fontSize={iconSize}  />
            break
        default: 
            icon = <></>
            break
    }

    return CardReady ? <div className={style.Card} onMouseEnter={HandleActive} onMouseLeave={HandleDisable} >
        <div className={style.CardIconDivision} >
            <div className={style.CardIcon}>
                {
                    icon
                }
            </div>
            <div className={style.CardIconLink}>
                {
                    link
                }
            </div>
        </div>

        <div>
            <h1 className={style.CardTitle}>{data.title}</h1>
            <h2 className={style.CardDescription}>{data.description}</h2>
        </div>

        <h3 className={style.CardValues}>{ data.unit == true || data.unit != undefined ? data.values : ConvertToBRL(data.values)}</h3>

        </div> : <div className={style.CardLoading}/>
    
}