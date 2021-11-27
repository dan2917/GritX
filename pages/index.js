import Head from "next/head";
import { motion } from "framer-motion";

import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>GhostRez IT</title>
        <meta name="description" content="Your Local IT Service Provider" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <motion.div
          initial="load"
          animate="visible"
          variants={{
            load: {
              scale: 1,
              opacity: 100,
            },
            visible: {
              scale: 0.5,
              opacity: 1,
              y: -400,
              
              transition: {
                delay: 1.5,
              },
            },
          }}
        >
          <div className={styles.standardComponent}>
            <div className={styles.headerWrap}>
              <img
                className={styles.titleLogo}
                src="/images/design/PhonePC1.png"
                alt="logo"
              />
              <div className={styles.brandContainer}>
                <h1 className={styles.brand}>GhostRez IT</h1>
                <p className={styles.tagline}>
                  Technology solutions for work and play.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
