
import React, { useState } from "react";
import { useAuth } from "../store/auth";
import { toast } from 'react-toastify';
const defaultContactFormData = {
  date: '',
  transaction_no: '',
  account_no: '',
  consumer_name: '',
  address: '',
  aadhar_no: '',
  mobile_no: '',
  mail_id: '',
  opening_bal: ''
};

const formStyles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  },
  section: {
    marginBottom: '20px',
    padding: '15px',
    border: '1px solid #e0e0e0',
    borderRadius: '5px',
    backgroundColor: '#f9f9f9',
  },
  formGroup: {
    marginBottom: '15px',
  },
  formGroupRow: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  label: {
    marginBottom: '5px',
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '3px',
    fontSize: '16px',
  },
  inputHalf: {
    width: '48%',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '3px',
    fontSize: '16px',
  },
  button: {
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    background: '#007BFF',
    color: '#fff',
    fontSize: '16px',
    cursor: 'pointer',
  },
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
        toast.success("Account created successfully");
      }
    } catch (error) {
      console.error("Error creating account:", error);
      toast.error("Account not created");
    }
  };

  return (
    <div style={formStyles.container}>
      <h1>Create Account</h1>
      <form onSubmit={handleSubmit}>
        <div style={formStyles.section}>
          <div style={formStyles.formGroup}>
            <label htmlFor="date" style={formStyles.label}>Date</label>
            <input
              type="date"
              name="date"
              required
              autoComplete="off"
              value={member.date}
              onChange={handleInput}
              style={formStyles.input}
            />
          </div>
        </div>

        <div style={formStyles.section}>
          <div style={formStyles.formGroup}>
            <label htmlFor="transaction_no" style={formStyles.label}>Transaction ID</label>
            <input
              type="number"
              name="transaction_no"
              placeholder="Enter transaction ID"
              required
              autoComplete="off"
              value={member.transaction_no}
              onChange={handleInput}
              style={formStyles.input}
            />
          </div>
        </div>

        <div style={formStyles.section}>
          <div style={formStyles.formGroup}>
            <label htmlFor="account_no" style={formStyles.label}>Account Number</label>
            <input
              type="number"
              name="account_no"
              placeholder="Enter account number"
              required
              autoComplete="off"
              value={member.account_no}
              onChange={handleInput}
              style={formStyles.input}
            />
          </div>
        </div>

        <div style={formStyles.section}>
          <div style={formStyles.formGroup}>
            <label htmlFor="consumer_name" style={formStyles.label}>Consumer Name</label>
            <input
              type="text"
              name="consumer_name"
              placeholder="Enter consumer name"
              required
              autoComplete="off"
              value={member.consumer_name}
              onChange={handleInput}
              style={formStyles.input}
            />
          </div>
          <div style={formStyles.formGroup}>
            <label htmlFor="address" style={formStyles.label}>Address</label>
            <input
              type="text"
              name="address"
              placeholder="Enter address"
              required
              autoComplete="off"
              value={member.address}
              onChange={handleInput}
              style={formStyles.input}
            />
          </div>
        </div>

        <div style={formStyles.section}>
          <div style={formStyles.formGroup}>
            <label htmlFor="aadhar_no" style={formStyles.label}>Aadhar Number</label>
            <input
              type="number"
              name="aadhar_no"
              placeholder="Enter Aadhar number"
              required
              autoComplete="off"
              value={member.aadhar_no}
              onChange={handleInput}
              style={formStyles.input}
            />
          </div>
          <div style={formStyles.formGroup}>
            <label htmlFor="mobile_no" style={formStyles.label}>Mobile Number</label>
            <input
              type="number"
              name="mobile_no"
              placeholder="Enter mobile number"
              required
              autoComplete="off"
              value={member.mobile_no}
              onChange={handleInput}
              style={formStyles.input}
            />
          </div>
        </div>

        <div style={formStyles.section}>
          <div style={formStyles.formGroup}>
            <label htmlFor="mail_id" style={formStyles.label}>Email</label>
            <input
              type="email"
              name="mail_id"
              placeholder="Enter email address"
              required
              autoComplete="off"
              value={member.mail_id}
              onChange={handleInput}
              style={formStyles.input}
            />
          </div>
          <div style={formStyles.formGroup}>
            <label htmlFor="opening_bal" style={formStyles.label}>Opening Balance</label>
            <input
              type="number"
              name="opening_bal"
              placeholder="Enter opening balance"
              required
              autoComplete="off"
              value={member.opening_bal}
              onChange={handleInput}
              style={formStyles.input}
            />
          </div>
        </div>

        <button type="submit" style={formStyles.button}>Save</button>
      </form>
    </div>
  );
}
/*
import React, { useState } from "react";
import Select from "react-select";
import ReactCountryFlag from "react-country-flag";
import { useAuth } from "../store/auth";
import { toast } from 'react-toastify';

const defaultContactFormData = {
  date: '',
  transaction_no: '',
  account_no: '',
  consumer_name: '',
  address: '',
  aadhar_no: '',
  mobile_no: '',
  mail_id: '',
  opening_bal: ''
};

const countryCodes = [
  { code: "+1", country: "United States", flag: "US" },
  { code: "+44", country: "United Kingdom", flag: "GB" },
  { code: "+91", country: "India", flag: "IN" },
  { code: "+61", country: "Australia", flag: "AU" },
  { code: "+81", country: "Japan", flag: "JP" },
  { code: "+49", country: "Germany", flag: "DE" },
  { code: "+33", country: "France", flag: "FR" },
  { code: "+39", country: "Italy", flag: "IT" },
  { code: "+86", country: "China", flag: "CN" },
  { code: "+7", country: "Russia", flag: "RU" },
  { code: "+55", country: "Brazil", flag: "BR" },
  { code: "+27", country: "South Africa", flag: "ZA" },
  { code: "+34", country: "Spain", flag: "ES" },
  { code: "+52", country: "Mexico", flag: "MX" },
  { code: "+82", country: "South Korea", flag: "KR" },
  { code: "+31", country: "Netherlands", flag: "NL" },
  { code: "+46", country: "Sweden", flag: "SE" },
  { code: "+41", country: "Switzerland", flag: "CH" },
  { code: "+32", country: "Belgium", flag: "BE" },
  { code: "+47", country: "Norway", flag: "NO" },
  { code: "+45", country: "Denmark", flag: "DK" },
  { code: "+90", country: "Turkey", flag: "TR" },
  { code: "+351", country: "Portugal", flag: "PT" },
  { code: "+48", country: "Poland", flag: "PL" },
  { code: "+30", country: "Greece", flag: "GR" },
  { code: "+353", country: "Ireland", flag: "IE" },
  { code: "+358", country: "Finland", flag: "FI" },
  { code: "+64", country: "New Zealand", flag: "NZ" },
  { code: "+54", country: "Argentina", flag: "AR" },
  { code: "+60", country: "Malaysia", flag: "MY" },
  { code: "+65", country: "Singapore", flag: "SG" },
  { code: "+66", country: "Thailand", flag: "TH" },
  { code: "+62", country: "Indonesia", flag: "ID" },
  { code: "+63", country: "Philippines", flag: "PH" },
  { code: "+94", country: "Sri Lanka", flag: "LK" },
  { code: "+977", country: "Nepal", flag: "NP" },
  { code: "+880", country: "Bangladesh", flag: "BD" },
  { code: "+92", country: "Pakistan", flag: "PK" },
  { code: "+98", country: "Iran", flag: "IR" },
  { code: "+964", country: "Iraq", flag: "IQ" },
  { code: "+20", country: "Egypt", flag: "EG" },
  { code: "+212", country: "Morocco", flag: "MA" },
  { code: "+213", country: "Algeria", flag: "DZ" },
  { code: "+216", country: "Tunisia", flag: "TN" },
  // Add more country codes and flags as needed
];

export const CreateAccount = () => {
  const [member, setMember] = useState(defaultContactFormData);
  const [selectedCountry, setSelectedCountry] = useState(countryCodes[0]); // Default country code
  const { authorizationToken } = useAuth();

  const handleInput = (e) => {
    const { name, value } = e.target;
    setMember({
      ...member,
      [name]: value,
    });
  };

  const handleCountryChange = (selectedOption) => {
    setSelectedCountry(selectedOption);
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
        body: JSON.stringify({ ...member, mobile_no: selectedCountry.code + member.mobile_no }),
      });

      if (response.ok) {
        setMember(defaultContactFormData);
        const data = await response.json();
        console.log(data);
        toast.success("Account created successfully");
      }
    } catch (error) {
      console.error("Error creating account:", error);
      toast.error("Account not created");
    }
  };

  const options = countryCodes.map((country) => ({
    value: country,
    label: (
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <ReactCountryFlag countryCode={country.flag} svg style={{ marginRight: 10 }} />
        {country.country} ({country.code})
      </div>
    ),
  }));

  return (
    <div>
      <h1>Create Account</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <div>
            <label htmlFor="date">Date</label>
            <input
              type="date"
              name="date"
              required
              autoComplete="off"
              value={member.date}
              onChange={handleInput}
            />
          </div>
        </div>

        <div>
          <div>
            <label htmlFor="transaction_no">Transaction ID</label>
            <input
              type="number"
              name="transaction_no"
              placeholder="Enter transaction ID"
              required
              autoComplete="off"
              value={member.transaction_no}
              onChange={handleInput}
            />
          </div>
        </div>

        <div>
          <div>
            <label htmlFor="account_no">Account Number</label>
            <input
              type="number"
              name="account_no"
              placeholder="Enter account number"
              required
              autoComplete="off"
              value={member.account_no}
              onChange={handleInput}
            />
          </div>
        </div>

        <div>
          <div>
            <label htmlFor="consumer_name">Consumer Name</label>
            <input
              type="text"
              name="consumer_name"
              placeholder="Enter consumer name"
              required
              autoComplete="off"
              value={member.consumer_name}
              onChange={handleInput}
            />
          </div>
          <div>
            <label htmlFor="address">Address</label>
            <input
              type="text"
              name="address"
              placeholder="Enter address"
              required
              autoComplete="off"
              value={member.address}
              onChange={handleInput}
            />
          </div>
        </div>

        <div>
          <div>
            <label htmlFor="aadhar_no">Aadhar Number</label>
            <input
              type="number"
              name="aadhar_no"
              placeholder="Enter Aadhar number"
              required
              autoComplete="off"
              value={member.aadhar_no}
              onChange={handleInput}
            />
          </div>
          <div>
            <label htmlFor="mobile_no">Mobile Number</label>
            <div>
              <Select
                value={selectedCountry}
                onChange={handleCountryChange}
                options={options}
                isSearchable
              />
              <input
                type="number"
                name="mobile_no"
                placeholder="Enter mobile number"
                required
                autoComplete="off"
                value={member.mobile_no}
                onChange={handleInput}
              />
            </div>
          </div>
        </div>

        <div>
          <div>
            <label htmlFor="mail_id">Email</label>
            <input
              type="email"
              name="mail_id"
              placeholder="Enter email address"
              required
              autoComplete="off"
              value={member.mail_id}
              onChange={handleInput}
            />
          </div>
          <div>
            <label htmlFor="opening_bal">Opening Balance</label>
            <input
              type="number"
              name="opening_bal"
              placeholder="Enter opening balance"
              required
              autoComplete="off"
              value={member.opening_bal}
              onChange={handleInput}
            />
          </div>
        </div>

        <button type="submit">Save</button>
      </form>
    </div>
  );
};
*/
