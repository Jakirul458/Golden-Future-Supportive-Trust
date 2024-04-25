import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { useAuth } from "../store/auth";
import { GiMeal } from "react-icons/gi";
import { FaHome } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";
import { FaRegistered } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { FaUserPlus } from "react-icons/fa";

const NavBar = () => {
  const { isLoggedIn } = useAuth();
  return (
    <header>
      <div className="container">
        <div>
          <NavLink to="navbar"> Portfolio webpage </NavLink>
        </div>
        <nav>
          <ul>
            <li><NavLink to="/"> <FaHome /> Home  </NavLink></li>
            <li><NavLink to="/about"> <FaHome /> About  </NavLink></li>
            <li><NavLink to="/contact"> <FaHome /> Contact  </NavLink></li>
      
            {isLoggedIn ? (
              <li>
                <NavLink to="/Logout">Logout</NavLink>

              </li>
            ) : (<>
              <li>
                <NavLink to="/Register"> <FaRegistered />Register </NavLink>
              </li>


              <li>
                <NavLink to="/Login"><FaUser /> Login  </NavLink>
              </li>
            </>
            )}
          </ul>

        </nav>

      </div>
    </header>

  );

}

// const SideBar = () => {
//   const { isLoggedIn } = useAuth();
//   return (
//     <header>
//       <div className="container">
//         <div>
//           <NavLink to="navbar"> Portfolio webpage </NavLink>
//         </div>
//         <nav>
//           <ul>
//             <li><NavLink to="/"> <FaHome /> Home  </NavLink></li>
//             <li><NavLink to="/about"> <FaHome /> About  </NavLink></li>
//             <li><NavLink to="/contact"> <FaHome /> Contact  </NavLink></li>
//             <li><NavLink to="/createaccount"> <FaHome /> Create account </NavLink></li>
//             <li><NavLink to="/depositamount"> <FaHome /> Deposit </NavLink></li>
//             <li><NavLink to="/withdrawamount"> <FaHome /> Withdraw  </NavLink></li>
//             <li><NavLink to="/findaccount"> <FaHome /> Find Account  </NavLink></li>
//             <li><NavLink to="/allconsumer"> <FaHome /> All Consumer  </NavLink></li>
//             <li><NavLink to="/statement"> <FaHome /> Statement  </NavLink></li>



            
//           </ul>

//         </nav>

//       </div>
//     </header>

//   );

// }

export default NavBar;


