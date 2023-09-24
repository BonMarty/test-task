import { ChangeEvent } from 'react';

export interface Props {
  value?: string | number;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  isEditing?: boolean;
  id?: number;
  type: 'text' | 'number';
}
