import { RefObject } from 'react';
import { IString } from '../../consts';

export interface Props {
  innerRef?: RefObject<HTMLTableRowElement>;
  string: IString;
  level?: number;
}
