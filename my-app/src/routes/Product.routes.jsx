import Add from "../pages/Add/Add"
import Basket from "../pages/Basket/Basket"
import Detail from "../pages/Detail/Detail"
import Home from "../pages/Home/Home"
import SiteRoot from "../pages/SiteRoot"
import Wishlist from "../pages/Wishlist/Wishlist"

const ROUTER=[{
    path:"/",
    element:<SiteRoot/>,
    children:[{
        path:"",
        element:<Home/>
    },{
        path:"Wishlist",
        element:<Wishlist/>
    },{
        path:"Basket",
        element:<Basket/>
    },
    {
        path:"Add",
        element:<Add/>
    },
    {
        path:"/:_id",
        element:<Detail/>
    }
]
}]

export default ROUTER