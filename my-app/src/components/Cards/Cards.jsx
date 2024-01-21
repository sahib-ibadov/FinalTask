import React, { useContext } from 'react'
import MainContext from '../../context/Context'
import Card from '../Card/Card'
import { Toaster } from 'react-hot-toast'

const Cards = () => {
    const { data,search,sortedData } = useContext(MainContext)
    return (
        <>
        <input type="text" placeholder='Search' onChange={(e)=>{
            search(e.target.value)
        }} />

        <select name="" id="" onChange={sortedData}>
            <option value="df">Default</option>
            <option value="az">A-Z</option>
            <option value="za">Z-A</option>
            <option value="0-9">Azdan-Coxa</option>
            <option value="9-0">Coxdan-Aza</option>
        </select>
        <div className='container'>
            <div className='row' style={{gap:"20px",marginTop:"20px"}}>
                {
                    data?.map((item, index) => {
                        return <Card key={index} item={item} />
                    })
                }
            </div>

            <Toaster />
        </div>
        </>
        
    )
}

export default Cards