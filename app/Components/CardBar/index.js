import { Card } from "../Card"
import style from './layout.module.css'


export const CardBar = ({cards}) =>{
    return <div className={style.CardBar}>
        {
        cards.map( (card, key) => (
            <Card key={key} data={card}/>
        ) )
        }
        
    </div>
}
