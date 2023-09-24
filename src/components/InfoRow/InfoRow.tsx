import { TableCell, TableRow } from '@mui/material';

import DeleteIcon from '@mui/icons-material/Delete';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';

import { FC, Fragment, MouseEvent, useRef } from 'react';
import { IString } from '../../consts';
import { useAppDispatch, useAppSelector } from '../../redux';
import { useGetTreeRowsQuery } from '../../redux/service';
import { setCurrentRowId, toggleCreate, toggleEdit } from '../../redux/slice';
import { useDeleteStringMutation } from '../BasicTable/BasicTable.service';
import { ChildRow } from '../ChildRow';
import { EditRow } from '../EditRow';
import styles from './InfoRow.style.module.scss';

export const InfoRow: FC<IString> = ({
  rowName,
  salary,
  equipmentCosts,
  mainCosts,
  estimatedProfit,
  id,
  child,
}) => {
  const { refetch } = useGetTreeRowsQuery('');
  const [deleteString] = useDeleteStringMutation();

  const { isEditing, rowId } = useAppSelector((state) => state.table);

  const dispatch = useAppDispatch();

  const parentRef = useRef<HTMLTableRowElement>(null);
  const firstChildRef = useRef<HTMLTableRowElement>(null);
  const secondChildRef = useRef<HTMLTableRowElement>(null);

  const handleAdd = (level: number) => {
    dispatch(toggleCreate(level));
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
    return (
      <>
        <EditRow onClick={(e) => handleDoubleClick(e)} innerRef={parentRef} />
        {child &&
          child.map((child) => (
            <Fragment key={child.id}>
              <ChildRow innerRef={firstChildRef} string={child} level={2} />

              {child.child &&
                child.child.map((child) => (
                  <ChildRow key={child.id} innerRef={secondChildRef} string={child} level={3} />
                ))}
            </Fragment>
          ))}
      </>
    );

  return (
    <>
      <TableRow className={styles.info} ref={parentRef} onClick={(e) => handleDoubleClick(e)}>
        <TableCell>
          <div className={`${styles.info__buttons}`}>
            <button onClick={() => handleAdd(2)} className={styles.info__buttons__create}>
              <TextSnippetIcon />
            </button>
            <button onClick={() => handleDelete(id!)} className={styles.info__buttons__delete}>
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
      {child &&
        child.map((child) => (
          <Fragment key={child.id}>
            <ChildRow innerRef={firstChildRef} string={child} level={2} />

            {child.child &&
              child.child.map((child) => (
                <ChildRow key={child.id} innerRef={secondChildRef} string={child} level={3} />
              ))}
          </Fragment>
        ))}
    </>
  );
};
