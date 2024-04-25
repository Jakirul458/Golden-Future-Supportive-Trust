import React, { useState } from "react";
import { useAuth } from "../store/auth";
import { toast } from 'react-toastify';

const defaultContactFormData = {
  date: '',
  account_no: '',
  transaction_id: '',
  withdraw_amount: '',
  remarks:''
};

export const WithdrawAmount = () => {
  const [member, setMember] = useState(defaultContactFormData);
  const { authorizationToken } = useAuth();

  const handleInput = (e) => {
    const { name, value } = e.target;
    setMember({
      ...member,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/api/admin/admincreateaccount", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: authorizationToken,
        },
        body: JSON.stringify(member),
      });

      if (response.ok) {
        setMember(defaultContactFormData);
        const data = await response.json();
        console.log(data);
        toast.success("Money  withdraw successfully");
      }
    } catch (error) {
      console.error("Error withdraw money:", error);
      toast.error("Money not withdraw");
    }
  };

  return (
    <div>
      <section>
        <main>
          <div className="section-registration">
            <h1>Withdraw money</h1>
            <br/>
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="date"> Date</label>
                <input 
                  type="date" 
                  name="date"
                  placeholder="Enter your date"
                  id="text"
                  required 
                  autoComplete="off"
                  value={member.date}
                  onChange={handleInput}
                />
              </div>
             
              <div>
                <label htmlFor="account_number"> Account Number</label>
                <input 
                  type="text" 
                  name="account_no"
                  placeholder="Enter account number"
                  id="text"
                  required 
                  autoComplete="off"
                  value={member.account_no}
                  onChange={handleInput}
                />
              </div>
              <div>
                <label htmlFor="name"> Transaction id</label>
                <input 
                  type="text" 
                  name="transaction_id"
                  placeholder="Transaction id"
                  id="text"
                  required 
                  autoComplete="off"
                  value={member.transaction_id}
                  onChange={handleInput}
                />
              </div>

              <div>
                <label htmlFor="name"> Withdraw amount</label>
                <input 
                  type="text" 
                  name="withdraw_amount"
                  placeholder="Withdraw amount"
                  id="text"
                  required 
                  autoComplete="off"
                  value={member.withdraw_amount}
                  onChange={handleInput}
                />
              </div>

              <div>
                <label htmlFor="remarks"> Remarks</label>
                <input 
                  type="text" 
                  name="remarks"
                  id="remarks"
                  placeholder="Remarks"
                  required 
                  autoComplete="off"
                  value={member.remarks}
                  onChange={handleInput}
                />
              </div>
              
              <button type="Withdraw">Withdraw</button>
            </form>
          </div>
        </main>
      </section>
    </div>
  );
}
