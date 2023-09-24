import { FC, KeyboardEvent, useRef } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux';
import { useGetTreeRowsQuery } from '../../redux/service';
import { toggleCreate, toggleEdit } from '../../redux/slice';
import { useAddStringMutation, useUpdateStringMutation } from '../BasicTable/BasicTable.service';
import styles from './Input.style.module.scss';
import { Props } from './Input.types';

export const Input: FC<Props> = ({ value, onChange, type }) => {
  const [addString] = useAddStringMutation();
  const [updateString] = useUpdateStringMutation();

  const { refetch } = useGetTreeRowsQuery('');

  const { isEditing, isCreating, rowId, level } = useAppSelector((state) => state.table);

  const edit = useAppSelector((state) => state.edit);

  const dispatch = useAppDispatch();

  const inputRef = useRef<HTMLInputElement>(null);

  const handleEnter = async (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      if (isEditing && !isCreating) {
        await updateString({
          string: edit,
          id: rowId!,
        });
        dispatch(toggleEdit());
        refetch();
      } else if (!isEditing && isCreating) {
        await addString({
          string: edit,
          parentId: rowId,
        });
        dispatch(toggleCreate(level! + 1));
        refetch();
      } else if (!isEditing && !isCreating) {
        await addString({
          string: edit,
          parentId: null,
        });
        refetch();
      }
    }
  };

  return (
    <input
      className={styles.input}
      value={value}
      onClick={() => inputRef.current?.focus()}
      onFocus={() => inputRef.current?.select()}
      onChange={onChange}
      onKeyDown={(e) => handleEnter(e)}
      type={type}
      ref={inputRef}
    />
  );
};
