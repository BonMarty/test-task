import styles from './Header.style.module.scss';

import AppsIcon from '@mui/icons-material/Apps';
import ReplyIcon from '@mui/icons-material/Reply';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__icon}>
        <AppsIcon />
      </div>
      <div className={styles.header__icon}>
        <ReplyIcon />
      </div>

      <div className={`${styles.header__item} ${styles.header__item__active}`}>
        <p>Просмотр</p>
      </div>
      <div className={styles.header__item}>
        <p>Управление</p>
      </div>
    </header>
  );
};
