'use client'
import { useState } from "react"




export const Table = ({data}) => {

    // const [order, serOrder] = useState(data)

    // const sortTable = (column) => {
    //     serOrder({...order, body: [...order.body].sort((a, b) => a[column] > b[column]? 1 : -1) })
    // }


    return <div className="table-main">
            <div className="table-main-header-tr">
                {
                    Object.keys(data[0]).map((key) => (
                        <button key={key} className="table-main-header-td">
                            {key}
                        </button>
                    ))
                }
            </div>
            <div className="table-main-body">
                {
                    data.map((item, index) => (
                        <div key={index} className={index == (data.length - 1) ? "table-main-tr-last" : "table-main-tr"}>
                            {
                                Object.values(item).map((value, i) => (
                                    <div key={i} className="table-main-td"> {value} </div>
                                ))
                            }
                        </div>
                    ))
                }
            </div>
    </div>
}