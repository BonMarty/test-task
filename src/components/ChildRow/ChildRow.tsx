import { TableCell, TableRow } from '@mui/material';

import DeleteIcon from '@mui/icons-material/Delete';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';

import { FC, MouseEvent } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux';
import { useGetTreeRowsQuery } from '../../redux/service';
import { setCurrentRowId, toggleCreate, toggleEdit } from '../../redux/slice';
import { useDeleteStringMutation } from '../BasicTable/BasicTable.service';
import { EditRow } from '../EditRow';
import styles from './ChildRow.style.module.scss';
import { Props } from './ChildRow.types';

export const ChildRow: FC<Props> = ({ innerRef, string, level }) => {
  const { rowName, salary, equipmentCosts, mainCosts, estimatedProfit, id } = string;

  const [deleteString] = useDeleteStringMutation();
  const { refetch } = useGetTreeRowsQuery('');

  const { isEditing, rowId } = useAppSelector((state) => state.table);
  const dispatch = useAppDispatch();

  const handleAdd = () => {
    if (level! < 3) {
      dispatch(toggleCreate(level! + 1));
    }
  };

  const handleDelete = async (id: number) => {
    await deleteString(id);
    refetch();
  };

  const handleDoubleClick = (e: MouseEvent<HTMLTableRowElement>) => {
    dispatch(setCurrentRowId(id!));
    console.log(id);

    if (e.detail === 2 && rowId === id) {
      dispatch(toggleEdit());
    }
  };

  if (isEditing && rowId === id)
    return <EditRow onClick={(e) => handleDoubleClick(e)} innerRef={innerRef} level={level} />;

  return (
    <TableRow className={styles.child} ref={innerRef} onClick={(e) => handleDoubleClick(e)}>
      <TableCell>
        <div
          className={`${styles.child__buttons} ${
            level === 2
              ? styles.child__buttons__second
              : level === 3
              ? styles.child__buttons__third
              : ''
          }`}>
          <button onClick={() => handleAdd()} className={styles.child__buttons__create}>
            <TextSnippetIcon />
          </button>
          <button onClick={() => handleDelete(id!)} className={styles.child__buttons__delete}>
            <DeleteIcon />
          </button>
        </div>
      </TableCell>
      <TableCell>{rowName}</TableCell>
      <TableCell>{salary}</TableCell>
      <TableCell>{equipmentCosts}</TableCell>
      <TableCell>{mainCosts}</TableCell>
      <TableCell>{estimatedProfit}</TableCell>
    </TableRow>
  );
};
