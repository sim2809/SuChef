// src/components/Footer.js
import React from 'react';
import { Container, Typography, Box } from '@mui/material';

function Footer() {
    return (
        <Box component="footer" py={4} bgcolor="#f79c20">
            <Container maxWidth="lg">
                <Typography variant="h6" align="center" gutterBottom>
                    Su-Chef
                </Typography>
                <Typography variant="subtitle1" align="center" color="textSecondary">
                    Location: Ervand Kochar Street, 23/4. Yerevan, ER AM
                    <br />
                    Phone: (015) 906090
                    <br />
                    Email: Info.mafgroup@gmail.com
                    <br />
                    Open Hours: Monday - Saturday: 10:00 AM - 8:00 PM
                </Typography>
                <Typography variant="body2" align="center" color="textSecondary" component="p">
                    © {new Date().getFullYear()} Su-Chef, All rights reserved.
                </Typography>
            </Container>
        </Box>
    );
}

export default Footer;
