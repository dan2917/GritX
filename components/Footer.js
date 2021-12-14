import React, { Component } from "react";
import styles from "../styles/Footer.module.css";

export default class Footer extends Component {
  render() {
    return (
      <footer className={styles.footer}>
        <ul celled horizontal>
          <li>&copy;2021 GhostRez IT</li>{" "}
          <li>
            <a>Terms and Conditions</a>
          </li>
          <li>
            <a>Privacy Policy</a>
          </li>
        </ul>
      </footer>
    );
  }
}
