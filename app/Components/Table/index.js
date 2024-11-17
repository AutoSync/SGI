'use client'
import { useState } from "react"
import styles from './Table.module.css'



export const Table = ({data, ready}) => {

    let isEmpty = data === null || data === undefined || data.length === 0;
    let emptyData = Array(20).fill({name: "Carregando..."})
    const [dataToRender, setData] = useState(isEmpty ? emptyData : data)
    
    return <div className={styles.Table}>
                <div className={styles.TableHeader}>
                {
                    ready ? isEmpty ? <h1>Sem resultados</h1> :  
                    Object.keys(dataToRender[0]).map((key) => (
                        <button key={key} className={styles.TableHeaderButton}
                        onClick={() => {
                            let sorted = [...data].sort((a, b) => 
                                a[key] > b[key] ? 1 : -1
                            )
                            setData(sorted)
                        } }>
                            {key.toUpperCase()}
                        </button>
                        
                    )) : <></>
                }
            </div>
            <div className={styles.TableMain}>
                {
                    ready ? isEmpty ? <div className={styles.TableMainEmpty}>Nenhum item na lista</div> : 
                    dataToRender.map((item, index) => (
                        <div key={index} className={index == (data.length - 1) ? styles.TableMainTrLast : styles.TableMainTr}>
                            <div className={styles.TableMainIndex}>{index + 1}</div>
                            {
                                Object.values(item).map((value, key) => (
                                    <div key={key}  className={styles.TableMainTd}> {value} </div>
                                ))
                            }
                        </div>
                    )) : <div className={styles.TableMainLoading}>
                        {
                            emptyData.map((key) => (
                                <div key={key} className={styles.TableLoadingTr}>
                                    <div key={key} className={styles.TableLoadingTd}/>
                                    <div key={key} className={styles.TableLoadingTd}/>
                                    <div key={key} className={styles.TableLoadingTd}/>
                                    <div key={key} className={styles.TableLoadingTd}/>
                                    <div key={key} className={styles.TableLoadingTd}/>
                                </div>
                            ))
                        }
                    </div>   
                }
            </div>
    </div>
}