import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import MainContext from './context/Context';
import ROUTER from './routes/Product.routes';
import { useEffect, useState } from 'react';
import axios from "axios"
import toast from "react-hot-toast"

const router=createBrowserRouter(ROUTER)

function App() {
  const [data,setData]=useState([])
  const [wishlist,setWishlist]=useState(localStorage.getItem("favItem")?JSON.parse(localStorage.getItem("favItem")):[])
  const [basket,setBasket]=useState(localStorage.getItem("basKet")?JSON.parse(localStorage.getItem("basKet")):[])
  const [filterdData,setFilteredData]=useState([])

  useEffect(()=>{
    axios.get("http://localHost:8089/models").then(res=>{
      setData(res.data)
      setFilteredData(res.data)
    })
  },[])

  const sortedData=(e)=>{
    const sort=e.target.value
    if(sort=="df"){
      setData([...data])
    }
    else if(sort=="az"){
      const sortAZ=data.sort((a,b)=>a.title.localeCompare(b.title))
      setData([...sortAZ])
    }
    else if(sort=="za"){
      const sortZA=data.sort((a,b)=> b.title.localeCompare(a.title))
      setData([...sortZA])
    }
    else if(sort=="0-9"){
      const sort09=data.sort((a,b)=>a.price-b.price)
      setData([...sort09])
    }
    else if(sort=="9-0"){
      const sort90=data.sort((a,b)=>b.price-a.price)
      setData([...sort90])
    }
  }

  const addWishlist=(id)=>{
    const target=data.find(prod=>prod._id===id)
    if(!wishlist.find(prod=>prod._id===id)){
      setWishlist([...wishlist,target])
      localStorage.setItem("favItem",JSON.stringify([...wishlist,target]))
      toast.success("item wishliste elave olundu")
    }
    else{
      toast.error("item movcuddur")
    }
  }

  const search=(searchValue)=>{
    if(searchValue==""){
      setData([...filterdData])
    }
    else{
      setData([...data.filter(item=>item.title.toLowerCase().trim().includes(searchValue))])
    }
  }

  const addBasket=(item)=>{
    const target=basket.find(prod=>prod._id===item._id)
    if(!target){
      const newItem={...item, count:1, totalPrice:item.price}
      setBasket([...basket,newItem])
      localStorage.setItem("basKet",JSON.stringify([...basket,newItem]))
      toast.success("baskete elave olundu")
    }
    else{
      const newData={...item, count:target.count, totalPrice:item.price*(target.count+1)}
      setBasket([...basket.filter(basketItem=>basketItem._id !=item._id),newData])
      localStorage.setItem("basKet",JSON.stringify([...basket.filter(basketItem=>basketItem._id !=item._id),newData]))
      toast.success("elave olundu")
    }
  }

  const increase=(item)=>{
    const updatedData=[...basket]
    const target=basket.find(prod=>prod._id===item._id)
    target.count+=1
    target.totalPrice=target.count*item.price
    setBasket(updatedData)
    localStorage.setItem("basKet",JSON.stringify(updatedData))
  }

  const decrease=(item)=>{
    const updatedData=[...basket]
    const target=basket.find(prod=>prod._id===item._id)
    if(target.count>1){
      target.count-=1
      target.totalPrice=target.count*item.price
      setBasket(updatedData)
      localStorage.setItem("basKet",JSON.stringify(updatedData))
    }
    else{
      const data=updatedData.find(prod=>prod._id===item._id)
      updatedData.splice(updatedData.indexOf(data),1)
      setBasket(updatedData,data)
      localStorage.setItem("basKet",JSON.stringify(updatedData,data))
      
    }
  }

  const datas={
    data,setData,
    addWishlist,
    basket,setBasket,
    increase,decrease,
    addBasket,
    search,
    filterdData,
    sortedData
  }
  return (
    <MainContext.Provider value={datas}>
      <RouterProvider router={router} className="App">
      <Home/>
    </RouterProvider>
    </MainContext.Provider>
    
  );
}

export default App;
