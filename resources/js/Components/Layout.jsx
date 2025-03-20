import React from 'react'
import Container from '@mui/material/Container';
import AppBar from '@mui/material/AppBar';
import { Button, Typography } from '@mui/material';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import { usePage } from '@inertiajs/react'

export default function Layout({ children }) {
    const { userInfo } = usePage().props
    
    return (
        <Container maxWidth="lg"  className='px-4 pt-24'>
            <AppBar className='py-4'>
                <Container maxWidth="lg">
                    {userInfo && (
                        <div className="flex items-center gap-2">
                            <img 
                                src={userInfo.avatar_url} 
                                alt={userInfo.login}
                                className="w-8 h-8 rounded-full"
                            />
                            <span>Welcome, {userInfo.name || userInfo.login}</span>
                        </div>
                    )}
                </Container>
            </AppBar>
            <Breadcrumbs aria-label="breadcrumb">
                <Link underline="hover" color="inherit" href="/">
                    Assigned Issues
                </Link>
                <Link underline="hover" color="inherit" href="/">
                {window.location.pathname.startsWith('/issue/') && (
                        <Link underline="hover" color="inherit" href={window.location.pathname}>
                            {window.location.pathname.split('/').slice(2).join('/')}
                        </Link>
                    )}
                </Link>
            </Breadcrumbs>
            <main>{children}</main>
        </Container>
    )
}
