import React, { Component } from "react";
import { motion } from "framer-motion";
import Link from 'next/link'
import styles from "../styles/Nav.module.css";

export default class Nav extends Component {
  render() {
    return (
      <div className={styles.standardComponent}>
        <div className={styles.headerWrap}>
          <div className={styles.logoWrap}>
            <img
              className={styles.titleLogo}
              src="/images/design/PhonePC1.png"
              alt="logo"
            />
          </div>
          <div className={styles.brandContainer}>
            <h1 className={styles.brand}>GhostRez IT</h1>
            <p className={styles.tagline}>
              Technology solutions for work and play.
            </p>
          </div>
          <div className={styles.buttonContainer}>
            <Link href="/">
              <motion.div
                initial="load"
                animate="visible"
                variants={{
                  load: {
                    scale: 0.8,
                    opacity: 1,
                  },
                  visible: {
                    scale: 1,
                    opacity: 1,
                    

                    transition: {
                      delay: 0.2,
                      duration: 0.2,
                    },
                  },
                }}
              >
                <div className={styles.button}>Home</div>
              </motion.div>
            </Link>
            <Link href="/services">
              <motion.div
                initial="load"
                animate="visible"
                variants={{
                  load: {
                    scale: 0.8,
                    opacity: 1,
                 
                  },
                  visible: {
                    scale: 1,
                    opacity: 1,
                    y: 0,

                    transition: {
                      delay: 0.2,
                      duration: 0.2,
                    },
                  },
                }}
              >
                <div className={styles.button}>Services</div>
              </motion.div>
            </Link>
            <Link href="/">
              <motion.div
                initial="load"
                animate="visible"
                variants={{
                  load: {
                    scale: 0.8,
                    opacity: 1,
             
                  },
                  visible: {
                    scale: 1,
                    opacity: 1,
                    y: 0,

                    transition: {
                      delay: 0.2,
                      duration: 0.2,
                    },
                  },
                }}
              >
                <div className={styles.button}>How Tos</div>
              </motion.div>
            </Link>
            <Link href="/">
              <motion.div
                initial="load"
                animate="visible"
                variants={{
                  load: {
                    scale: 0.8,
                    opacity: 1,
                 
                  },
                  visible: {
                    scale: 1,
                    opacity: 1,
                    y: 0,

                    transition: {
                      delay: 0.2,
                      duration: 0.2,
                    },
                  },
                }}
              >
                <div className={styles.button}>Contact Us</div>
              </motion.div>
            </Link>
            <Link href="/">
              <motion.div
                initial="load"
                animate="visible"
                variants={{
                  load: {
                    scale: 0.8,
                    opacity: 1,
                  
                  },
                  visible: {
                    scale: 1,
                    opacity: 1,
                    y: 0,

                    transition: {
                      delay: 0.2,
                      duration: 0.2,
                    },
                  },
                }}
              >
                {" "}
                <div className={styles.button}>Create Ticket</div>
              </motion.div>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
