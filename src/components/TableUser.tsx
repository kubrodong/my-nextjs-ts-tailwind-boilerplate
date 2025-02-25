'use client';

import { useTableUserContext } from '@/context/TableUserContext';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@mui/material';
import React from 'react';

export default function TableUser() {
  const { data } = useTableUserContext();

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Username</TableCell>
          <TableCell>First Name</TableCell>
          <TableCell>Last Name</TableCell>
          <TableCell>Email</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {data.users.map((user) => (
          <TableRow key={user.id}>
            <TableCell>{user.username}</TableCell>
            <TableCell>{user.firstName}</TableCell>
            <TableCell>{user.lastName}</TableCell>
            <TableCell>{user.email}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
