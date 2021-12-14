import React from "react";
import styles from '../styles/payment.module.css'

 const Payments = () => (
  <div className={styles.paymentwrapper}>
    <iframe
      src="https://checkout.square.site/merchant/MLGCYTX6F0QWW/checkout/LJB3HA62ZJDS4LHBUZ22RNYU"
      width="100%"
      height="1100"
      scrolling="no"
      title="Payment"
    ></iframe>
  </div>
);
export default Payments