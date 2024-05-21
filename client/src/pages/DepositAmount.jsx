import React, { useState } from "react";
import { useAuth } from "../store/auth";
import { toast } from 'react-toastify';

const defaultContactFormData = {
  type: 'deposit',
  date: '',
  account_no: '',
  transaction_no: '',
  deposit_bal: '',
  remarks: ''
};

export const DepositAmount = () => {
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
      const response = await fetch(`http://localhost:3000/api/admin/deposit`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: authorizationToken,
        },
        body: JSON.stringify(member),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        toast.success("Money Added successfully");
        setMember(defaultContactFormData); // Clear form on successful submission
      } else {
        const errorData = await response.json(); // Handle specific error messages from server
        toast.error(errorData.message || "Money Not Added");
      }
    } catch (error) {
      console.error("Error adding money:", error);
      toast.error("Money Not Added");
    }
  };

  return (
    <div>
      <section>
        <main>
          <div className="section-registration">
            <h1>Deposit money</h1>
            <br/>
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="date"> Date</label>
                <input 
                  type="date" 
                  name="date"
                  id="date"
                  placeholder="Enter your date"
                  required 
                  autoComplete="off"
                  value={member.date}
                  onChange={handleInput}
                />
              </div>
             
              <div>
                <label htmlFor="account_no"> Account Number</label>
                <input 
                  type="number" 
                  name="account_no"
                  id="account_no"
                  placeholder="Enter account number"
                  required 
                  autoComplete="off"
                  value={member.account_no}
                  onChange={handleInput}
                />
              </div>
              <div>
                <label htmlFor="transaction_no"> Transaction id</label>
                <input 
                  type="number" 
                  name="transaction_no"
                  id="transaction_no"
                  placeholder="Transaction id"
                  required 
                  autoComplete="off"
                  value={member.transaction_no}
                  onChange={handleInput}
                />
              </div>

              <div>
                <label htmlFor="deposit_bal"> Deposit Amount</label>
                <input 
                  type="number" 
                  name="deposit_bal"
                  id="deposit_bal"
                  placeholder="Deposit amount"
                  required 
                  autoComplete="off"
                  value={member.deposit_bal}
                  onChange={handleInput}
                />
              </div>

              <div>
                <label htmlFor="remarks"> Remarks</label>
                <textarea 
                  name="remarks"
                  id="remarks"
                  placeholder="Remarks"
                  required 
                  autoComplete="off"
                  value={member.remarks}
                  onChange={handleInput}
                />
              </div>
              
              <button type="submit">Save</button>
            </form>
          </div>
        </main>
      </section>
    </div>
  );
};
