// src/components/Navbar.js
import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import { ShoppingCart } from '@mui/icons-material';

function Navbar() {
    return (
        <AppBar position="static" color="default">
            <Toolbar>
                <Typography variant="h6" style={{ flexGrow: 1 }}>
                    Su-Chef
                </Typography>
                <Button color="inherit" component={Link} to="/">Home</Button>
                <Button color="inherit" component={Link} to="/catalogue">Catalogue</Button>
                <Button color="inherit" component={Link} to="/blog">Blog</Button>
                <Button color="inherit" component={Link} to="/about">About Us</Button>
                <Button color="inherit" component={Link} to="/contact">Contact</Button>
                <Button color="inherit" component={Link} to="/login">Login</Button>
                <Button color="inherit" component={Link} to="/register">Register</Button>
                <IconButton color="inherit">
                    <ShoppingCart />
                </IconButton>
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;
