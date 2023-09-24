import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import { useAppSelector } from '../../redux';
import { useGetTreeRowsQuery } from '../../redux/service';
import { EditRow } from '../EditRow';
import { InfoRow } from '../InfoRow';
import styles from './BasicTable.style.module.scss';

export const BasicTable = () => {
  const { data } = useGetTreeRowsQuery('');

  console.log(data);

  const { isCreating, level } = useAppSelector((state) => state.table);

  return (
    <Table className={styles.table}>
      <TableHead>
        <TableRow>
          <TableCell>Уровень</TableCell>
          <TableCell>Наименование работ</TableCell>
          <TableCell>Основная з/п</TableCell>
          <TableCell>Оборудование</TableCell>
          <TableCell>Накладные расходы</TableCell>
          <TableCell>Сметная прибыль</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {data && data.length > 0 ? (
          data?.map((item) => <InfoRow {...item} key={item.id} />)
        ) : (
          <EditRow />
        )}
        {isCreating && <EditRow level={level} />}
      </TableBody>
    </Table>
  );
};
