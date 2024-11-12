'use client'
import { useState } from "react"




export const Table = ({data}) => {

    const [order, serOrder] = useState(data)

    const sortTable = (column) => {
        serOrder({...order, body: [...order.body].sort((a, b) => a[column] > b[column]? 1 : -1) })
    }


    return <div className="table-main">
        <div className="table-main-head">
            {
                order.head.map((td, key) => (
                    <button key={key} onClick={sortTable(key)} className="table-main-head-td">{td}</button>
                ))
            }
        </div>
        <div className="table-main-body">
            {
                order.body.map((row, key, index) => (
                    <div key={key} className={index == data.body.length ? "table-main-row-last" : "table-main-row"}>
                        {
                            row.map((td, index) => (
                                <div key={index} className="table-main-cell">{td}</div>
                            ))
                        }
                    </div>
                ))
            }
        </div>
    </div>
}