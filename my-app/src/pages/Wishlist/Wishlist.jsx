import React, { useState } from 'react'

const Wishlist = () => {
    const [wishlist,setWishlist]=useState(localStorage.getItem("favItem")?JSON.parse(localStorage.getItem("favItem")):[])

    const deleteWishlist=(id)=>{
        const target=wishlist.find(prod=>prod._id===id)
        wishlist.splice(wishlist.indexOf(target),1)
        setWishlist([...wishlist])
        localStorage.setItem("favItem",JSON.stringify([...wishlist]))
    }

    const removeAll=()=>{
        setWishlist([])
        localStorage.removeItem("favItem")
    }

  return (
    <>
    <button style={{marginTop:"20px"}} className='btn btn-danger' onClick={removeAll}>Remove All</button>
    <div  className='container' style={{width:"400px",marginTop:"20px",display:"flex",alignItems:"center",justifyContent:"center",gap:"100px"}}>
        {
            wishlist.map((item,index)=>{
                return <div className='card-body' key={index}>
                    <img style={{width:"360px"}} src={item.image} alt="" />
                    <p>{item.title}</p>
                    <p>{item.desc}</p>
                    <p>{item.price}</p>
                    <button className='btn btn-danger' onClick={()=>{
                        deleteWishlist(item._id)
                    }}>Delete</button>
                </div>
            })
        }
    </div>
    </>
    
  )
}

export default Wishlist