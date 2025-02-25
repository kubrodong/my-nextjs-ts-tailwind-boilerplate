'use client'; // For Next.js app directory

import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
  useMemo,
} from 'react';
import { getUsers } from '@/services/UserService';
import { UserResponse } from '@/types/api-response';

interface TableUserContextProps {
  data: UserResponse;
}

const TableUserContext = createContext<TableUserContextProps | null>(null);

export const useTableUserContext = () => {
  const context = useContext(TableUserContext);
  if (!context)
    throw new Error('TableUserContext must be used within TableUserProvider');
  return context;
};

const initData: UserResponse = {
  users: [],
  total: 0,
  limit: 0,
  skip: 0,
};
export const TableUserProvider = ({ children }: { children: ReactNode }) => {
  const [data, setData] = useState(initData);

  useEffect(() => {
    const fetchUsers = async () => {
      await getUsers().then((res) => setData(res));
    };

    fetchUsers();
  }, []);

  // ✅ Memoize the context value to avoid unnecessary re-renders
  const contextValue = useMemo(() => ({ data }), [data]);

  return (
    <TableUserContext.Provider value={contextValue}>
      {children}
    </TableUserContext.Provider>
  );
};
