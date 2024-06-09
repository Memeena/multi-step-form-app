import styles from "./PersonalDetails.module.css";
import "../../../index.css";
import Header from "../../Header/Header";
import { useState } from "react";

export default function PersonalDetails({ dispatch }) {
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
            {/* {error && <p className={styles.error}>{error}</p>} */}
          </label>

          <input
            id="name"
            className={styles.input}
            type="text"
            placeholder="e.g. Stephen King"
            // value={name}
            onChange={(e) =>
              dispatch({ type: "changeName", payload: e.target.value })
            }
          ></input>
        </div>

        <div className={`${styles.det} ${"p-medium"}`}>
          <label htmlFor="email" className={styles.detHeading}>
            Email address
            {/* {error && <p className={styles.error}>{error}</p>} */}
          </label>

          <input
            id="email"
            className={styles.input}
            type="email"
            placeholder="e.g. stephenking@lorem.com"
            // value={email}
            onChange={(e) =>
              dispatch({ type: "changeEmail", payload: e.target.value })
            }
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
            // value={contact}
            onChange={(e) =>
              dispatch({ type: "changeContact", payload: e.target.value })
            }
          ></input>
        </div>
      </div>
    </div>
  );
}
