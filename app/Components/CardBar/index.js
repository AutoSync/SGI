import { Card } from "../Card"



export const CardBar = ({cards}) =>{
    return <div className="card-bar">
        {
        cards.map( (card, key) => (
            <Card key={key} data={card}/>
        ) )
        }
        
    </div>
}
