import styles from "../styles/Card.module.css"

export const Advert = (props) => (
    <a href={props.url} target="_blank" rel="noreferrer">
      <div className={styles.cardWrapp}>
        <div className={styles.iframewrap}>
        <iframe
          src={props.url}
          width="318"
          height="300"
          scrolling="no"
          title={props.title}
        ></iframe></div>
        <p className={styles.title} color={props.color}>
          {props.title}
        </p>
      </div>
    </a>
  );
  
  export const Card = (props) => (
    <a href={props.url} target="_blank" rel="noreferrer">
      <div className={styles.cardWrapp}>
        <p className={styles.icon} style={{ color: props.color }}>{props.icon}</p>
        <p className={styles.title} color={props.color}>{props.title}</p>
      </div>
    </a>
  );