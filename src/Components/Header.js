// import { Link } from "react-router-dom"
// import { LOGO_URL } from "../config"
// import { useSelector } from "react-redux"
// const Header=()=>{
//     const cardItems=useSelector(store=>store.cart.items)
//     return(
//         <>
//         <div className="header">
//             <Link to='/'><img src={LOGO_URL} /></Link>
//             <ul>
//                 <li><Link to='/SwiggyCorporate'>Swiggy Corporate</Link></li>
//                 <li><Link to='/offers'>Offers</Link></li>
//                 <li><Link to='/help'>Help</Link></li>
//                 <li>Sign In</li>
//                 <li><Link to='/cart'>Cart-{cardItems.length}</Link></li>
//             </ul>
//         </div>
//         </>
//     )
// }
// export default Header


import { Link } from "react-router-dom";
import { LOGO_URL } from "../config";
import { useSelector } from "react-redux";

const Header = () => {
  // Get the cart items from the Redux store
  const cardItems = useSelector((store) => store.cart.items);

  return (
    <div className="sticky top-0 z-50 bg-white shadow-md flex justify-between items-center px-6 py-4 ">
      {/* Logo */}
      <Link to="/">
        <img src={LOGO_URL} alt="Logo" className="h-12 w-auto" />
      </Link>

      {/* Navigation Links */}
      <ul className="flex space-x-8 list-none m-0 p-0">
        <li>
          <Link
            to="/SwiggyCorporate"
            className="text-orange-500 hover:text-orange-600 transition duration-300"
          >
            Swiggy Corporate
          </Link>
        </li>
        <li>
          <Link
            to="/offers"
            className="text-orange-500 hover:text-orange-600 transition duration-300"
          >
            Offers
          </Link>
        </li>
        <li className="text-orange-500 hover:text-orange-600 transition duration-300">
          
            
            
          
            Help
          
        </li>
        <li className="text-orange-500 hover:text-orange-600 transition duration-300">
          Sign In
        </li>
        <li>
          <Link
            to="/cart"
            className="text-orange-500 hover:text-orange-600 transition duration-300"
          >
            Cart - {cardItems.length}
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;


