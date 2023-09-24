import { MouseEvent, RefObject } from 'react';
import { IString } from '../../consts';

export interface Props {
  innerRef?: RefObject<HTMLTableRowElement>;
  onClick?: (e: MouseEvent<HTMLTableRowElement>) => void;
  level?: number;
  currentData?: IString;
}
