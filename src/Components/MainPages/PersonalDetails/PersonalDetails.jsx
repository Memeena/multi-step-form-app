import styles from "./PersonalDetails.module.css";
import "../../../index.css";
import Header from "../../Header/Header";
import { useState } from "react";

export default function PersonalDetails({ dispatch }) {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    contact: "",
  });

  const [errors, setErrors] = useState({});

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function handleSubmit(e) {
    console.log('submit clicked');
    e.preventDefault();
    const newErrors = validateForm(formData);
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      dispatch({ type: "nextStep" });
    }
  }

  const validateForm = (data) => {
    const errors = {};

    if (!data.username) {
      errors.username = "Username is required!";
    }

    if (!data.email) {
      errors.email = "Email is required!";
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      errors.email = "Email is invalid!";
    }
    if (!data.contact) {
      errors.contact = "Contact information is required!";
    }

    return errors;
  };

  return (
    <div className={styles.personalDetails}>
      <Header
        heading={"Personal Info"}
        subHeading={
          "Please provide your name, email address, and phone number."
        }
      />

      <form className={styles.details} onSubmit={handleSubmit}>
        <div className={`${styles.det} ${"p-medium"}`}>
          <label htmlFor="name" className={styles.detHeading}>
            Name
            {errors.username && (
              <span className={`${styles.errorMessage} p-small`}>
                {errors.username}
              </span>
            )}
          </label>

          <input
            id="name"
            className={styles.input}
            name="username"
            type="text"
            value={formData.username}
            placeholder="e.g. Stephen King"
            onChange={handleChange}
            style={{
              border: errors.username
                ? "1px solid var(--color-strawberry-red)"
                : "1px solid var(--color-cool-gray)",
            }}
          ></input>
        </div>

        <div className={`${styles.det} ${"p-medium"}`}>
          <label htmlFor="email" className={styles.detHeading}>
            Email address
            {errors.email && (
              <span className={`${styles.errorMessage} p-small`}>
                {errors.email}
              </span>
            )}
          </label>

          <input
            id="email"
            className={styles.input}
            type="email"
            name="email"
            placeholder="e.g. stephenking@lorem.com"
            value={formData.email}
            onChange={handleChange}
            style={{
              border: errors.email
                ? "1px solid var(--color-strawberry-red)"
                : "1px solid var(--color-cool-gray)",
            }}
          ></input>
        </div>

        <div className={`${styles.det} ${"p-medium"}`}>
          <label htmlFor="phoneNo" className={styles.detHeading}>
            Phone Number
            {errors.contact && (
              <span className={`${styles.errorMessage} p-small`}>
                {errors.contact}
              </span>
            )}
          </label>

          <input
            id="phoneNo"
            className={styles.input}
            type="text"
            name="contact"
            placeholder="e.g. +1 234 567 890"
            value={formData.contact}
            onChange={handleChange}
            style={{
              border: errors.contact
                ? "1px solid var(--color-strawberry-red)"
                : "1px solid var(--color-cool-gray)",
            }}
          ></input>
        </div>
        <button className={`${"btn-next"} ${styles.btnNext}`} type="submit">
          Next Step
        </button>
      </form>
    </div>
  );
}
