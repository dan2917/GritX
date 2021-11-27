import React, { Component } from "react";
import styles from "../styles/Nav.module.css";

export default class Nav extends Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.navWrap}>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
