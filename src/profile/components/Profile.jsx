import React, { useState } from "react";
import styles from "./Profile.module.css";

export default function ManageProfile() {
  const [form, setForm] = useState({
    firstName: "Ahmad",
    lastName: "Al-Ahmad",
    username: "@ahmad",
    phone: "+44 254 236 5891",
    email: "ahmad@gmail.com",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className={styles.profileContainer}>

      {/* Sidebar */}
      <div className={styles.sidebar}>
        <div className={styles.sidebarUser}>
          <img
            src="https://i.imgur.com/0y8Ftya.png"
            alt="user"
            className={styles.userImg}
          />
          <h3>Ahmad AL-Ahmad</h3>
        </div>

        <ul className={styles.sidebarMenu}>
          <li className={styles.active}>Manage Profile</li>
          <li>My Order</li>
          <li>My bookings</li>
          <li>My Reviews</li>
        </ul>

        <div className={styles.logout}>Log out</div>
      </div>

      {/* Main Content */}
      <div className={styles.content}>
        <h2>Manage Profile</h2>

        <div className={styles.profileHeader}>
          <img
            src="https://i.imgur.com/0y8Ftya.png"
            alt="user"
            className={styles.userImg}
          />
          <div className={styles.changeImage}>Change image</div>
        </div>

        <div className={styles.formGrid}>
          <div className={styles.formGroup}>
            <label>First name</label>
            <input
              type="text"
              name="firstName"
              value={form.firstName}
              onChange={handleChange}
            />
          </div>

          <div className={styles.formGroup}>
            <label>Last name</label>
            <input
              type="text"
              name="lastName"
              value={form.lastName}
              onChange={handleChange}
            />
          </div>

          <div className={styles.formGroup}>
            <label>Username</label>
            <input
              type="text"
              name="username"
              value={form.username}
              onChange={handleChange}
            />
          </div>

          <div className={styles.formGroup}>
            <label>Phone</label>
            <input
              type="text"
              name="phone"
              value={form.phone}
              onChange={handleChange}
            />
          </div>

          <div className={`${styles.formGroup} ${styles.full}`}>
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
            />
          </div>
        </div>

        <button className={styles.saveBtn}>Save Change</button>
      </div>
    </div>
  );
}
