import React, { useEffect, useState } from "react";
import { useAuth } from "../store/auth";
import { useParams } from "react-router-dom";
import { toast } from 'react-toastify';

export const UpdateConsumerData = () => {
  const [data, setData] = useState({
    date: "",
    serial_no: "",
    account_no: "",
    consumer_name: "",
    address: "",
    aadhar_no: "",
    mobile_no:"",
    mail_id:"",
    opening_bal:"",
  });

  const params = useParams();
  const { authorizationToken } = useAuth();

  useEffect(() => {
    const fetchConsumerData = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/admin/allConsumers/${params.id}`, {
          method: "GET",
          headers: {
            Authorization: authorizationToken,
          },
        });
        const dataFromServer = await response.json();
        setData(dataFromServer);
      } catch (error) {
        console.log(error);
      }
    };

    fetchConsumerData();
  }, [authorizationToken, params.id]);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`http://localhost:3000/api/admin/allConsumers/update/${params.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: authorizationToken,
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast.success("User data updated successfully");
      } else {
        toast.error("Sorry, user data not updated");
      }
    } catch (error) {
      console.log({message: error.message});
    }
  };

  return (
    <div>
      <section>
        <main>
          <div className="section-registration">
            <h1>Update Consumer Data</h1>
            <br/>
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="date"> Date</label>
                <input 
                  type="date" 
                  name="date"
                  placeholder="Enter your date"
                  id="date"
                  required 
                  autoComplete="off"
                  value={data.date}
                  onChange={handleInput}
                />
              </div>
              {/* Repeat this pattern for other input fields */}
              <button type="submit">Save</button>
            </form>
          </div>
        </main>
        <section></section>
      </section>
    </div>
  );
};
