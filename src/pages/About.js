// src/pages/About.js
import React from 'react';
import { Container, Typography, Box } from '@mui/material';

function About() {
    return (
        <Container maxWidth="lg">
            <Box my={4}>
                <Typography variant="h4" component="h1" gutterBottom>
                    About Us Page
                </Typography>
            </Box>
        </Container>
    );
}

export default About;
