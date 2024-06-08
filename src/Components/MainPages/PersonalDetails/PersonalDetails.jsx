import styles from "./PersonalDetails.module.css";
import "../../../index.css";
import Header from "../../Header/Header";
import { useState } from "react";

export default function PersonalDetails() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState(0);

  function handleChange(e) {
    console.log(e.target.value);
    setName(e.target.value);
  }
  return (
    <div className={styles.personalDetails}>
      <Header
        heading={"Personal Info"}
        subHeading={
          "Please provide your name, email address, and phone number."
        }
      />

      <div className={styles.details}>
        <div className={`${styles.det} ${"p-medium"}`}>
          <label htmlFor="name" className={styles.detHeading}>
            Name
          </label>
          {!name && <p>This field is required!</p>}
          <input
            id="name"
            className={styles.input}
            type="text"
            placeholder="e.g. Stephen King"
            value={name}
            onChange={(e) => handleChange(e)}
          ></input>
        </div>

        <div className={`${styles.det} ${"p-medium"}`}>
          <label htmlFor="email" className={styles.detHeading}>
            Email address
          </label>

          <input
            id="email"
            className={styles.input}
            type="email"
            placeholder="e.g. stephenking@lorem.com"
            value={email}
          ></input>
        </div>

        <div className={`${styles.det} ${"p-medium"}`}>
          <label htmlFor="phoneNo" className={styles.detHeading}>
            Phone Number
          </label>

          <input
            id="phoneNo"
            className={styles.input}
            type="text"
            placeholder="e.g. +1 234 567 890"
            value={contact}
          ></input>
        </div>
      </div>
    </div>
  );
}
