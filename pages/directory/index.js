import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Dir.module.css";
import { FaFacebook, FaGlobe } from "react-icons/fa";
import { MdSchool } from "react-icons/md";
import { Advert, Card } from "../../components/Card";

const links = [
  {
    title: "Facebook",
    url: "https://www.facebook.com/GhostRezIT/",
    icon: <FaFacebook size={240} />,
    color: "rgb(46, 125, 243)",
  },
  {
    title: "Website",
    url: "https://ghostrez.net",
    icon: <FaGlobe size={240} />,
    color: "#3d3d3d",
  },
  {
    title: "Portfolio",
    url: "https://portfolio.ghostrez.net",
    icon: <MdSchool size={240} />,
    color: "rgb(233, 69, 69)",
  },
];
const businesses = [
  {
    title: "Everything in Between",
    url: "https://everythinginbetween.com.au/",
    color: "#3d3d3d",
  },
];

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Directory</title>
        <meta name="description" content="GhostRez IT Business Directory" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.dirrow}>
          {links.map((i) => (
            <Card
              icon={i.icon}
              title={i.title}
              url={i.url}
              color={i.color}
              key={i.title}
            />
          ))}
        </div>
        <div className={styles.adintro}>
          <h2>Check these out!</h2>
        </div>
        <div className={styles.dirrow}>
          {businesses.map((b) => (
            <Advert title={b.title} url={b.url} color={b.color} key={b.title} />
          ))}
        </div>
      </main>
    </div>
  );
}
