import styles from "./layout.module.scss";
import Header from "../shared/Header";
import Footer from "../Footer";

export default function Layout({ children }) {
  return (
    <div>
      <Header />
      <div className={styles.container}>{children}</div>
      <Footer />
    </div>
  );
}
