import styles from "./ThankYou.module.css";

export default function ThankYou() {
  return (
    <div className={styles.thankyou}>
      <img
        className={styles.img}
        src={"../../../../public/assets/images/icon-thank-you.svg"}
        alt="thank you"
      />
      <h1 className={styles.heading}>Thank You!</h1>
      <p className={styles.content}>
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support please feel free to email us at
        support@loremgaming.com.
      </p>
    </div>
  );
}
