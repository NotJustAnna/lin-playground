import styles from './index.module.css';
import logo from './logo.svg';

export default function Navbar() {
  return <div className={styles.navbar}>
    <img src={logo} alt=""/>
    <span className={styles.content}>Lin Playground</span>
  </div>;
}
