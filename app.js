
import reactDOM from 'react-dom/client'
import Header from './src/Components/Header'
import Body from './src/Components/Body'
import Footer from './src/Components/Footer'
// import SwiggyCorporate from './src/Components/SwiggyCorporate'
// import Cart from './src/Components/Cart'
// import Offers from './src/Components/Offers'
import { createBrowserRouter,RouterProvider,Outlet } from 'react-router-dom'
import RestaurantMenu from './src/Components/RestaurantMenu'
import { lazy, Suspense } from 'react'
import { Provider } from 'react-redux'
import store from './src/utils/store'

const SwiggyCorporate=lazy(()=> import("./src/Components/SwiggyCorporate"))
const Cart=lazy(()=> import("./src/Components/Cart"))
const Offers=lazy(()=> import("./src/Components/Offers"))

const AppLayout=()=>{
    return(
        <Provider store={store}>
        
        <Header />
        <Outlet/>
        {/* <Body/>
        <Footer/> */}
        
        </Provider>
    )
}
const AppRouter=createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        children:[
            {
                path:"/",
                element:<Body/>
            },
            {
                path:"/SwiggyCorporate",
                element:<Suspense><SwiggyCorporate/></Suspense>
            },
            {
                path:"/offers",
                element:<Suspense><Offers/></Suspense>
            },
            {
                path:"/cart",
                element:<Suspense><Cart/></Suspense>
            },
            {
                path:"/restaurant/:id",
                element:<RestaurantMenu/>
            },
        ]
    }
])
const root=reactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={AppRouter}/>)
