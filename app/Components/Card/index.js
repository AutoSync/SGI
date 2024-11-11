import Link from "next/link"
import { ConvertToBRL } from "../ConvertToBRL"
import { FaRegArrowAltCircleRight as Go } from "react-icons/fa";
import { PiCurrencyDollarFill as Sales } from "react-icons/pi";
import { TbArrowsExchange as Trans } from "react-icons/tb";
import { BsCashCoin as Coin } from "react-icons/bs";
import { GrNotes as Orders} from "react-icons/gr";


export const Card = ({data}) => {

    let link = <Link className="card-link" href={data.link}><Go /></Link>
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


    return <div className="card">
        <div className="card-icon-division">
            {
                icon
            }
            {
                link
            }
        </div>
        <div>
            <h1 className="card-title">{data.title}</h1>
            <h2 className="card-description">{data.description}</h2>
        </div>

        <h3 className="card-values">{ data.unit == true || data.unit != undefined ? data.values : ConvertToBRL(data.values)}</h3>

    </div>
}