import { Dropdown } from '../Dropdown';
import styles from './Sidebar.style.module.scss';

export const Sidebar = () => {
  return (
    <section className={styles.sidebar}>
      <Dropdown />
    </section>
  );
};
