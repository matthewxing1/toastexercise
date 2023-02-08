import React from 'react';
import {Table, TableContainer, TableHead, TableBody, TableRow, TableCell, Paper} from '@mui/material';

export default function FormsTable({data}) {
  console.log(data);
  return (
    <TableContainer component={Paper}>
        <Table aria-label='simple table'>
            <TableHead>
                <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell>First Name</TableCell>
                    <TableCell>Last Name</TableCell>
                    <TableCell>email</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {data.map((form) => <TableRow key={form.id}>
                    <TableCell>{form.id}</TableCell>
                    <TableCell>{form.data.firstName}</TableCell>
                    <TableCell>{form.data.lastName}</TableCell>
                    <TableCell>{form.data.email}</TableCell>
                </TableRow>)}
            </TableBody>
        </Table>
    </TableContainer>
  );
}
