import React from "react";
import styles from "./Placeholder.module.scss";

interface Props {
  text?: string;
}
const Placeholder: React.FC<Props> = ({ text = "Nothing found!" }) => {
  return <h2 className={styles.text}>{text}</h2>;
};

export default Placeholder;
