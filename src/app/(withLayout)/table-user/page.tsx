import TableUser from '@/components/TableUser';
import { TableUserProvider } from '@/context/TableUserContext';

export default function Home() {
  return (
    <TableUserProvider>
      <TableUser />
    </TableUserProvider>
  );
}
