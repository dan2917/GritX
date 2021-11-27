import React, { Component } from "react";
import styles from "../styles/Footer.module.css";
import "semantic-ui-css/semantic.min.css";
import { List } from "semantic-ui-react";

export default class Footer extends Component {
  render() {
    return (
      <footer className={styles.footer}>
        <List celled horizontal>
          <List.Item>&copy;2021 GhostRez IT</List.Item>{" "}
          <List.Item>
            <a>Terms and Conditions</a>
          </List.Item>
          <List.Item>
            <a>Privacy Policy</a>
          </List.Item>
        </List>
      </footer>
    );
  }
}
