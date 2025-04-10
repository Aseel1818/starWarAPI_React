import React, { useState } from "react";

function PersonalInfo() {
  const [phone, setPhone] = useState("");
  const [age, setAge] = useState("");
  const [address, setAddress] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Personal Info: ${phone}, ${age}, ${address}`);
  };

  return (
    <div>
      <h2>Personal Information</h2>
      <form onSubmit={handleSubmit}>
        <input type="tel" placeholder="Phone Number" value={phone} onChange={(e) => setPhone(e.target.value)} required />
        <input type="number" placeholder="Age" value={age} onChange={(e) => setAge(e.target.value)} required />
        <input type="text" placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)} required />
        <button type="submit">Save Info</button>
      </form>
    </div>
  );
}

export default PersonalInfo;
