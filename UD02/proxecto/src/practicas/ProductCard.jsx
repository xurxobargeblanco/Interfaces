import styles from "./ProductCard.module.css";

export default function ProductCard({nome,precio}) {
  return <div className={styles.productCard}>{nome} : {precio}</div>;
}