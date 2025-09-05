import Link from 'next/link';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <div className={styles.logo}>星</div>
        <span className={styles.logoText}>AI内容星球</span>
      </div>
      <nav>
        <Link href="/help" className="button-primary">
          帮助与文档
        </Link>
      </nav>
    </header>
  );
};

export default Header;
