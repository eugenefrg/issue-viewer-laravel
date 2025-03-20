import React from 'react'
import Container from '@mui/material/Container';
import AppBar from '@mui/material/AppBar';
import { Button, Typography } from '@mui/material';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';

export default function Layout({ children }) {
  return (
    <Container maxWidth="lg"  className='px-4 pt-24'>
        <AppBar className='py-4'>
            <Container maxWidth="lg">
                <Typography variant="h6">Issue Viewer</Typography>
            </Container>
        </AppBar>
        <Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover" color="inherit" href="/">
                Issues
            </Link>
        </Breadcrumbs>
      {children}
    </Container>
  )
}
