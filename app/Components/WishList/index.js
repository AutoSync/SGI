import { WishCard } from "../WishCard"




export const WishList = ({data}) =>{
    return <div className="dashboard-wish-list">


        {
            data.map((wish, index) => (
                <WishCard data={wish} />
            ))
        }

    </div>
}