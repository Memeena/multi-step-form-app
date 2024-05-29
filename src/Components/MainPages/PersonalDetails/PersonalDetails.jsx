import styles from "./PersonalDetails.module.css";
import "../../../index.css";
import Header from "../../Header/Header";

export default function PersonalDetails() {
  return (
    <div className={styles.personalDetails}>
      <Header heading={'Personal Info'} subHeading={'Please provide your name, email address, and phone number.'}/>     

      <div className={styles.details}>
        <div className={`${styles.det} ${"p-medium"}`}>
          <label htmlFor="name" className={styles.detHeading}>
            Name
          </label>
          <input
            id="name"
            className={styles.input}
            type="text"
            placeholder="e.g. Stephen King"
            // onChange={handleEnteredWord}
            // value={enteredWord}
            // style={inputStyle}
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
          ></input>
        </div>
      </div>
    </div>
  );
}
