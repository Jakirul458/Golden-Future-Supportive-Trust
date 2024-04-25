import { NavLink ,Outlet} from "react-router-dom";
import { FaUser } from "react-icons/fa6";
import { MdContactMail } from "react-icons/md";
import { RiServiceLine } from "react-icons/ri";
import { FaHome } from "react-icons/fa";

export const AdminLayout =()=>{

   return (

 <header>
 <div className="container">
  <nav>
    <ul>
      <li><NavLink to="users"> <FaUser />Users</NavLink></li>

        <li ><NavLink to="productsEditor"> <FaHome />Products Editor</NavLink></li>

        <li><NavLink to="/createaccount"> <FaHome /> Create account </NavLink></li>
            <li><NavLink to="/depositamount"> <FaHome /> Deposit </NavLink></li>
            <li><NavLink to="/withdrawamount"> <FaHome /> Withdraw  </NavLink></li>
            <li><NavLink to="/findaccount"> <FaHome /> Find Account  </NavLink></li>
            <li><NavLink to="/allconsumers"> <FaHome /> All Consumer  </NavLink></li>
            <li><NavLink to="/statement"> <FaHome /> Statement  </NavLink></li>

            
    </ul>
    </nav>
 </div>
 <Outlet/>
 </header>
   
   );



}