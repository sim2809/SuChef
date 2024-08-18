// src/pages/Login.js
import React from 'react';
import { Container, Typography, Box } from '@mui/material';

function Login() {
    return (
        <Container maxWidth="lg">
            <Box my={4}>
                <Typography variant="h4" component="h1" gutterBottom>
                    Login Page
                </Typography>
            </Box>
        </Container>
    );
}

export default Login;
