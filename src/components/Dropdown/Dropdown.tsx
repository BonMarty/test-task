import DashboardIcon from '@mui/icons-material/Dashboard';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import styles from './Dropdown.style.module.scss';
import { data } from './config';

export const Dropdown = () => {
  return (
    <Accordion
      TransitionProps={{ unmountOnExit: true }}
      sx={{
        bgcolor: 'transparent',
        color: 'white',
      }}
      className={styles.dropdown}
      square
      defaultExpanded
      disableGutters>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon className={styles.dropdown__summary__icon} />}
        sx={{
          borderBottom: '1px solid #808080',
        }}>
        <div className={styles.dropdown__summary}>
          <h2>Название проекта</h2>
          <h3>Аббревиатура</h3>
        </div>
      </AccordionSummary>
      <AccordionDetails
        className={styles.dropdown__details}
        sx={{
          padding: 0,
        }}>
        {data.map((item) => (
          <div
            key={item}
            className={
              item === 'СМР'
                ? `${styles.dropdown__item} ${styles.dropdown__item__active}`
                : styles.dropdown__item
            }>
            <DashboardIcon />
            <p>{item}</p>
          </div>
        ))}
      </AccordionDetails>
    </Accordion>
  );
};
