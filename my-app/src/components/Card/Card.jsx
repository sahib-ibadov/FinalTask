import React, { useContext } from 'react'
import MainContext from '../../context/Context'
import { Link } from 'react-router-dom'
import "./Card.css"

const Card = ({ item }) => {
    const { addWishlist, addBasket } = useContext(MainContext)
    return (
        <div class="card" style={{ width: "400px" }} >
            <img class="card-img-top" src={item.image} alt="Card image cap" />
            <div class="card-body">
                <h5 class="card-title">{item.title}</h5>
                <p class="card-text">{item.desc}</p>
                <p>{item.price}</p>
                <div className='card__div2'>
                    <button className='btn btn-primary' onClick={() => {
                        addWishlist(item._id)
                    }}>Add Wishlist</button>
                    <button className='btn btn-secondary' onClick={() => {
                        addBasket(item)
                    }}>Add Basket</button>
                    <button className='btn btn-info'>
                        <Link style={{textDecoration:"none"}} to={`/${item._id}`}>Detail</Link>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Card