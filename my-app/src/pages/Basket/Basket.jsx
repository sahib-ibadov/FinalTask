import React, { useContext } from 'react'
import MainContext from '../../context/Context'

const Basket = () => {
    const { basket, setBasket, increase, decrease } = useContext(MainContext)
    let TotalPrice = 0
    return (
        <div class="card" style={{ width: "400px"}}>
            {
                basket.map((item, index) => {
                    TotalPrice += item.totalPrice
                    return <div style={{marginTop:"20px",border:"1px solid black"}} key={index}>
                        <button  className='btn btn-dark' style={{height:'40px'}} onClick={() => {
                            decrease(item)
                        }}><p style={{color:"white"}}>Decrease</p></button>
                        <img class="card-img-top" alt="Card image cap" style={{ width: "320px", height: "280px" }} src={item.image} />
                        <div class="card-body">
                            <h5 class="card-title">{item.title}</h5>
                            <p class="card-text">{item.desc}</p>
                            <p class="card-text">{item.price}</p>
                            <p class="card-text">{item.totalPrice}</p>
                        </div>
                            <button className='btn btn-dark' style={{height:'40px'}} onClick={() => {
                                increase(item)
                            }}> <p style={{color:"white"}}>Increase</p></button>
                        </div>
                })
            }
                        <h1>TOTALPRICE:{TotalPrice}</h1>
                    </div>
    )
            }

            export default Basket