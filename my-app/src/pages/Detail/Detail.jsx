import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

const Detail = () => {
    const {_id}=useParams()
    const [deatil,setDatail]=useState([])

    useEffect(()=>{
        axios.get(`http://localhost:8089/models/${_id}`).then(res=>{
            setDatail(res.data)
        })
    },[])
  return (
    <div class="card" style={{ width: "30%",marginTop:"20px" ,marginLeft:"35%"}}>
       <img class="card-img-top" src={deatil.image} alt="" />
       <p class="card-text">{deatil.title}</p>
       <p class="card-text">{deatil.desc}</p>
       <p class="card-text">{deatil.price}</p>
    </div>
  )
}

export default Detail