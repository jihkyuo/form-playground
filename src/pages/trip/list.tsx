import { Table } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { TripDto } from '@/domain/service/service.interface';
import { TableColumn } from '@/components/table/TableColumn';
import { useQuery } from '@tanstack/react-query';
import { getTestApi } from '@/domain/service/api.service';

export default function Index() {
  const { data = [], isLoading } = useQuery({
    queryKey: [ 'list' ],
    queryFn: getTestApi,
  });

  const columns: ColumnsType<TripDto> = [
    TableColumn('id', row => row.id),
    TableColumn('username', row => row.username),
  ];

  return (
    <>
      <Table loading={isLoading}
             bordered
             dataSource={data.map((ele, idx) => ({ ...ele, key: idx }))}
             columns={columns}
             pagination={false} />
    </>
  );
}