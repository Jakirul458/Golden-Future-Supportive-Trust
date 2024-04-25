import React, { useEffect, useState } from "react";
import { useAuth } from "../store/auth";
import { Link } from "react-router-dom";

export const AllConsumerData = () => {
  const [users, setUsers] = useState([]);
  const { authorizationToken } = useAuth();

  const fetchAllConsumerData = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/admin/allConsumers", {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteUser = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/api/admin/allConsumers/delete/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: authorizationToken,
        },
      });

      if (response.ok) {
        alert("User deleted successfully");
        fetchAllConsumerData();
      } else {
        alert("Failed to delete user");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAllConsumerData();
  }, []);

  return (
    <section className="admin-users-section">
      <div className="container">
        <h1>Consumer list</h1>
      </div>

      <div>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Serial Number</th>
              <th>Account Number</th>
              <th>Consumer Name</th>
              <th>Address</th>
              <th>Aadhar No</th>
              <th>Mobile Number</th>
              <th>Mail Id</th>
              <th>Opening Bal</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((curUser) => (
              <tr key={curUser._id}>
                <td>{curUser.date}</td>
                <td>{curUser.serial_no}</td>
                <td>{curUser.account_no}</td>
                <td>{curUser.consumer_name}</td>
                <td>{curUser.address}</td>
                <td>{curUser.aadhar_no}</td>
                <td>{curUser.mobile_no}</td>
                <td>{curUser.mail_id}</td>
                <td>{curUser.opening_bal}</td>
                <td>
                  <Link to={`/admin/allConsumers/${curUser._id}/edit`}>Edit</Link>
                  <button onClick={() => deleteUser(curUser._id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};
