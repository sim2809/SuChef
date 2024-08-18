// src/pages/Blog.js
import React from 'react';
import { Container, Typography, Box } from '@mui/material';

function Blog() {
    return (
        <Container maxWidth="lg">
            <Box my={4}>
                <Typography variant="h4" component="h1" gutterBottom>
                    Blog Page
                </Typography>
            </Box>
        </Container>
    );
}

export default Blog;
