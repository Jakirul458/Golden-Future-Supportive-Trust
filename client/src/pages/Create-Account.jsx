import React, { useState } from "react";
import { useAuth } from "../store/auth";
import { toast } from 'react-toastify';

const defaultContactFormData = {
  date: '',

  account_no: '',
  consumer_name: '',
  address: '',
  aadhar_no: '',
  mobile_no: '',
  mail_id: '',
  opening_bal: ''
};

export const CreateAccount = () => {
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
        toast.success("Account create successfully");
      }
    } catch (error) {
      console.error("Error create account:", error);
      toast.error("Account not created");
    }
  };

  return (
    <div>
      <section>
        <main>
          <div className="section-registration">
            <h1>Create Account</h1>
            <br />
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
                <label htmlFor="name"> Consumer Name</label>
                <input
                  type="text"
                  name="consumer_name"
                  placeholder="Enter consumer name"
                  id="text"
                  required
                  autoComplete="off"
                  value={member.consumer_name}
                  onChange={handleInput}
                />
              </div>
              <div>
                <label htmlFor="address"> Address</label>
                <input
                  type="text"
                  name="address"
                  placeholder="Enter your address"
                  id="text"
                  required
                  autoComplete="off"
                  value={member.address}
                  onChange={handleInput}
                />
              </div>
              <div>
                <label htmlFor="number"> Aadhar Number</label>
                <input
                  type="number"
                  name="aadhar_no"
                  placeholder="Enter your Aadhar number"
                  id="text"
                  required
                  autoComplete="off"
                  value={member.aadhar_no}
                  onChange={handleInput}
                />
              </div>
              <div>
                <label htmlFor="phone"> Mobile Number</label>
                <input
                  type="number"
                  name="mobile_no"
                  placeholder="Enter your mobile number"
                  id="text"
                  required
                  autoComplete="off"
                  value={member.mobile_no}
                  onChange={handleInput}
                />
              </div>
              <div>
                <label htmlFor="emai"> Gmail id</label>
                <input
                  type="email"
                  name="mail_id"
                  placeholder="Enter your email address"
                  id="text"
                  required
                  autoComplete="off"
                  value={member.mail_id}
                  onChange={handleInput}
                />
              </div>
              <div>
                <label htmlFor="balance"> Opening balance</label>
                <input
                  type="text"
                  name="opening_bal"
                  placeholder="Enter opening balance"
                  id="text"
                  required
                  autoComplete="off"
                  value={member.opening_bal}
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
}


