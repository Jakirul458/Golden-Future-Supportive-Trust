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
        <table style={{ borderCollapse: "collapse", width: "100%" }}>
          <thead>
            <tr style={{ backgroundColor: "#f2f2f2" }}>
              <th style={{ padding: "12px", textAlign: "left" }}>Date</th>
              <th style={{ padding: "12px", textAlign: "left" }}>Serial Number</th>
              <th style={{ padding: "12px", textAlign: "left" }}>Account Number</th>
              <th style={{ padding: "12px", textAlign: "left" }}>Consumer Name</th>
              <th style={{ padding: "12px", textAlign: "left" }}>Address</th>
              <th style={{ padding: "12px", textAlign: "left" }}>Aadhar No</th>
              <th style={{ padding: "12px", textAlign: "left" }}>Mobile Number</th>
              <th style={{ padding: "12px", textAlign: "left" }}>Mail Id</th>
              <th style={{ padding: "12px", textAlign: "left" }}>Opening Bal</th>
              <th style={{ padding: "12px", textAlign: "left" }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((curUser) => (
              <tr key={curUser._id} style={{ borderBottom: "1px solid #ddd" }}>
                <td style={{ padding: "12px", textAlign: "left" }}>{curUser.date}</td>
                <td style={{ padding: "12px", textAlign: "left" }}>{curUser.serial_no}</td>
                <td style={{ padding: "12px", textAlign: "left" }}>{curUser.account_no}</td>
                <td style={{ padding: "12px", textAlign: "left" }}>{curUser.consumer_name}</td>
                <td style={{ padding: "12px", textAlign: "left" }}>{curUser.address}</td>
                <td style={{ padding: "12px", textAlign: "left" }}>{curUser.aadhar_no}</td>
                <td style={{ padding: "12px", textAlign: "left" }}>{curUser.mobile_no}</td>
                <td style={{ padding: "12px", textAlign: "left" }}>{curUser.mail_id}</td>
                <td style={{ padding: "12px", textAlign: "left" }}>{curUser.opening_bal}</td>
                <td style={{ padding: "12px", textAlign: "left" }}>
                  <Link to={`/admin/allConsumers/${curUser._id}/edit`} style={{ marginRight: "8px" }}>Edit</Link>
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
