import { ReactNode } from 'react';
import { ColumnType } from 'antd/es/table';

export function TableColumn<T>(
  title: string | ReactNode,
  render: (row: T, index: number) => string | ReactNode,
  options?: ColumnType<T>,
): ColumnType<T> {

  return {
    key: typeof title === 'string' ? title : (options?.key ?? String(title)),
    title: title,
    render: (value, record, index) => render(record, index),
    align: 'center',
    ...options,
  };
}