import { FaFileArrowUp  as OrderSent, FaBox as OrderReceived } from "react-icons/fa6";
import { MdOutlineQueryBuilder as OrderProcess} from "react-icons/md";
import { FaShippingFast as OrderShipped } from "react-icons/fa";

/* DATA OBJECT BODY
/ buyer - saller - status - order
/ buyer -> name - saller -> name
/ status -> sent - processed - shipped - received
/ order -> order - descriptions
*/

export const WishCard = ({data}) => {

    const Icon = () =>{
    let type = data.type
    switch(type){
        case "sent":
            return <OrderSent /> 
        case "process":
             return <OrderProcess />
        case "shipped":
            return <OrderShipped />
        case "received":
            return <OrderReceived />
        }
    }

    return <div className="dashboard-wishcard">
            <h3 className="wishcard-seller">{data.seller}</h3>
            <Icon />
            <h3 className="wishcard-buyer">{data.buyer}</h3>
            <h3 className="wishcard-order">{data.order}</h3>
        </div>
}