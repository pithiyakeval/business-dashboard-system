import React, { useState } from "react";
import axios from "../services/api"; // optional: if you want to send data to backend
import "./Modal.css";

export default function AddUserModal({ closeModal, refresh }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [github, setGithub] = useState("");
  const [photo, setPhoto] = useState(null); // New state for photo

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Use FormData to include photo file
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("linkedin", linkedin);
    formData.append("github", github);
    if (photo) formData.append("photo", photo);

    console.log("New user data:", {
      name,
      email,
      phone,
      linkedin,
      github,
      photo,
    });

    // Optional: send to backend
    try {
      await axios.post("/users", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      refresh(); // refresh user list if you have a table
    } catch (error) {
      console.error(error);
    }

    alert("User added!");
    closeModal();
  };

  return (
    <div className="modal-backdrop">
      <div className="modal">
        <h3>Add New User</h3>
        <form onSubmit={handleSubmit} className="modal-form">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="tel"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <input
            type="url"
            placeholder="LinkedIn Profile URL"
            value={linkedin}
            onChange={(e) => setLinkedin(e.target.value)}
          />
          <input
            type="url"
            placeholder="GitHub Profile URL"
            value={github}
            onChange={(e) => setGithub(e.target.value)}
          />
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setPhoto(e.target.files[0])} // handle photo upload
          />

          <div className="modal-buttons">
            <button type="submit" className="btn-submit">
              Add User
            </button>
            <button
              type="button"
              onClick={closeModal}
              className="btn-cancel"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
