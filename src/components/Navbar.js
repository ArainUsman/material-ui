import { AppBar, Button, Typography, Toolbar } from '@mui/material'
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import React from 'react'

const Navbar = () => {
    return (
        <AppBar position='fixed'>
            <Toolbar>
                <Typography variant='h6' flexGrow='1'>
                    SweetySweet
                </Typography>
                <Button variant='outlined' color='inherit' sx={{ marginRight: 2 }} startIcon={<LoginIcon />}>
                    Login
                </Button>
                <Button variant='outlined' color='inherit' endIcon={<LogoutIcon />}>
                    Logout
                </Button>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar
