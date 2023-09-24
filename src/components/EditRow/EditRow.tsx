import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import { TableCell, TableRow } from '@mui/material';
import { FC } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux';
import { Input } from '../Input';
import {
  costsOnChange,
  equipmentOnChange,
  profitOnChange,
  rowNameOnChange,
  salaryOnChange,
} from './EditRow.service';
import styles from './EditRow.style.module.scss';
import { Props } from './EditRow.types';

export const EditRow: FC<Props> = ({ innerRef, onClick, level }) => {
  const { rowName, salary, equipmentCosts, mainCosts, estimatedProfit } = useAppSelector(
    (state) => state.edit,
  );

  const dispatch = useAppDispatch();

  return (
    <TableRow className={styles.edit} ref={innerRef && innerRef} onClick={onClick && onClick}>
      <TableCell>
        <button
          className={`${styles.edit__create} ${
            level === 2
              ? styles.edit__create__second
              : level === 3
              ? styles.edit__create__third
              : ''
          }`}>
          <TextSnippetIcon />
        </button>
      </TableCell>
      <TableCell>
        <Input
          value={rowName}
          onChange={(e) => dispatch(rowNameOnChange(e.target.value))}
          type="text"
        />
      </TableCell>
      <TableCell>
        <Input
          value={salary}
          onChange={(e) => dispatch(salaryOnChange(Number(e.target.value)))}
          type="number"
        />
      </TableCell>
      <TableCell>
        <Input
          type="number"
          value={equipmentCosts}
          onChange={(e) => dispatch(equipmentOnChange(Number(e.target.value)))}
        />
      </TableCell>
      <TableCell>
        <Input
          type="number"
          value={mainCosts}
          onChange={(e) => dispatch(costsOnChange(Number(e.target.value)))}
        />
      </TableCell>
      <TableCell>
        <Input
          type="number"
          value={estimatedProfit}
          onChange={(e) => dispatch(profitOnChange(Number(e.target.value)))}
        />
      </TableCell>
    </TableRow>
  );
};
