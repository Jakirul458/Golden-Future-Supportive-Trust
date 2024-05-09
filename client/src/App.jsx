import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home } from "./pages/Home";
import { CreateAccount } from "./pages/Create-Account";
import { DepositAmount } from "./pages/DepositAmount";
import { WithdrawAmount } from "./pages/WithdrawAmount";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Error } from "./pages/Error";
import { Logout } from "./pages/Logout";
import { AdminLayout } from "./components/Layout/Admin-layout";
import { AdminAddProducts } from "./pages/Admin-Add-New-Products";
import { AdminUsers } from "./pages/Admin-Users";
import { AdminUpdate } from "./pages/Admin-Update";
import { AllConsumerData } from "./pages/AllConsumerData";
import { UpdateConsumerData } from "./pages/AllConsumerData-Update";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <>
      <div>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/Logout" element={<Logout />} />


            <Route path="/admin/*" element={<AdminLayout />}>
              <Route path="users" element={<AdminUsers />} />
              <Route path="productsEditor" element={<AdminAddProducts />} />
              <Route path="users/:id/edit" element={<AdminUpdate />} />
              <Route path="createaccount" element={<CreateAccount />} />
              <Route path="depositamount" element={<DepositAmount />} />
              <Route path="withdrawamount" element={<WithdrawAmount />} />
              <Route path="allconsumers" element={<AllConsumerData />} />
              <Route path="allConsumers/:id/edit" element={<UpdateConsumerData />} />
            </Route>
            <Route path="*" element={<Error />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
};

export default App;
