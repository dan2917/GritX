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
        <div id="fb-root"></div>
        <script
          async
          defer
          src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.2"
        ></script>

        <div className={styles.contentWrap}>
          <motion.div
            initial="load"
            animate="visible"
            variants={{
              load: {
                scale: 0.5,
                opacity: 0,
                y: "-100vw",
              },
              visible: {
                scale: 1,
                opacity: 1,
                y: 0,

                transition: {
                  delay: 1.7,
                  duration: 0.5,
                },
              },
            }}
          >
            <div className={styles.standardComponent}>
              <div className={styles.descriptionBubblesSizing}>
                <h2 className={styles.standardTitle}>Affordable</h2>
                <p className={styles.standardText}>
                  We maintain low overhead costs, and pass on the savings to
                  you.
                </p>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial="load"
            animate="visible"
            variants={{
              load: {
                scale: 0.5,
                opacity: 0,
                x: "-100vh",
              },
              visible: {
                scale: 1,
                opacity: 1,
                x: 0,

                transition: {
                  delay: 1.5,
                  duration: 0.5,
                },
              },
            }}
          >
            <div className={styles.standardComponent}>
              <div className={styles.descriptionBubblesSizing}>
                <h2 className={styles.standardTitle}>Local Focus</h2>
                <p className={styles.standardText}>
                  We value our local businesses and support them as often as
                  possible.
                </p>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial="load"
            animate="visible"
            variants={{
              load: {
                scale: 0.5,
                opacity: 0,
                x: "100vw",
              },
              visible: {
                scale: 1,
                opacity: 1,
                x: 0,

                transition: {
                  delay: 2.1,
                  duration: 0.5,
                },
              },
            }}
          >
            <div className={styles.standardComponent}>
              <div className={styles.descriptionBubblesSizing}>
                <h2 className={styles.standardTitle}>Personalized</h2>
                <p className={styles.standardText}>
                  We get to know you and your needs to provide what YOU need.
                </p>
              </div>
            </div>
          </motion.div>{" "}
          <motion.div
            initial="load"
            animate="visible"
            variants={{
              load: {
                scale: 0.5,
                opacity: 0,
                y: "100vh",
              },
              visible: {
                scale: 1,
                opacity: 1,
                y: 0,

                transition: {
                  delay: 1.9,
                  duration: 0.5,
                },
              },
            }}
          >
            <div className={styles.standardComponent}>
              <div className={styles.descriptionBubblesSizing}>
                <h2 className={styles.standardTitle}>Excellence</h2>
                <p className={styles.standardText}>
                  We research and investigate to ensure you get the best
                  solution or product possible.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
        <motion.div
          className={styles.contentWrap}
          initial="load"
          animate="visible"
          variants={{
            load: {
              scale: 0.5,
              opacity: 0,
              y: "100vh",
            },
            visible: {
              scale: 1,
              opacity: 1,
              y: 0,

              transition: {
                delay: 2.2,
                duration: 0.5,
              },
            },
          }}
        >
          <div className={styles.standardComponent}>
            <h2 className={styles.standardTitle}>Our Reviews</h2>
            <div className={styles.reviewSizing}><div className={styles.reviewGaylene}>
              <motion.iframe
              initial="load"
              animate="visible"
              variants={{
                load: {
                  scale: 0.5,
                  opacity: 0,
                  y: "100vh",
                },
                visible: {
                  scale: 1,
                  opacity: 1,
                  y: 0,
    
                  transition: {
                    delay: 2.4,
                    duration: 0.5,
                  },
                },
              }}
                src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fgaylene.vanes%2Fposts%2F10226233494562067&show_text=true&width=500"
                width="320"
                height="250"
                style={{ border: "none", overflow: "hidden" }}
                scrolling="no"
                frameBorder="0"
                allowFullScreen="true"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              ></motion.iframe></div><div className={styles.reviewChrissy}>
              <motion.iframe initial="load"
              animate="visible"
              variants={{
                load: {
                  scale: 0.5,
                  opacity: 0,
                  y: "100vh",
                },
                visible: {
                  scale: 1,
                  opacity: 1,
                  y: 0,
    
                  transition: {
                    delay: 2.4,
                    duration: 0.5,
                  },
                },
              }}
                src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fchrissysarojini%2Fposts%2F10159077287629091&show_text=true&width=500"
                width="320"
                height="219"
                style={{ border: "none", overflow: "hidden" }}
                scrolling="no"
                frameBorder="0"
                allowFullScreen="true"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              ></motion.iframe></div><div className={styles.reviewAlison}>
              <motion.iframe initial="load"
              animate="visible"
              variants={{
                load: {
                  scale: 0.5,
                  opacity: 0,
                  y: "100vh",
                },
                visible: {
                  scale: 1,
                  opacity: 1,
                  y: 0,
    
                  transition: {
                    delay: 2.4,
                    duration: 0.5,
                  },
                },
              }}
                src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Falison.davis.1426%2Fposts%2F10158842038787670&show_text=true&width=500"
                width="320"
                height="270"
                style={{ border: "none", overflow: "hidden" }}
                scrolling="no"
                frameBorder="0"
                allowFullScreen="true"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              ></motion.iframe></div><div className={styles.reviewBella}>
              <motion.iframe initial="load"
              animate="visible"
              variants={{
                load: {
                  scale: 0.5,
                  opacity: 0,
                  y: "100vh",
                },
                visible: {
                  scale: 1,
                  opacity: 1,
                  y: 0,
    
                  transition: {
                    delay: 2.4,
                    duration: 0.5,
                  },
                },
              }}
                src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fbella.johnson.56679015%2Fposts%2F1935163293311483&show_text=true&width=500"
                width="320"
                height="232"
                style={{ border: "none", overflow: "hidden" }}
                scrolling="no"
                frameBorder="0"
                allowFullScreen="true"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              ></motion.iframe></div><div className={styles.reviewBruce}>

              <motion.iframe initial="load"
              animate="visible"
              variants={{
                load: {
                  scale: 0.5,
                  opacity: 0,
                  y: "100vh",
                },
                visible: {
                  scale: 1,
                  opacity: 1,
                  y: 0,
    
                  transition: {
                    delay: 2.4,
                    duration: 0.5,
                  },
                },
              }}
                src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fbruce.godwin.359%2Fposts%2F1200234943787632&show_text=true&width=500"
                width="320"
                height="370"
                style={{ border: "none", overflow: "hidden" }}
                scrolling="no"
                frameBorder="0"
                allowFullScreen="true"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              ></motion.iframe></div>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
