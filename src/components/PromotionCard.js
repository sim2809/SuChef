// src/components/PromotionCard.js
import React from 'react';
import { Card, CardContent, Typography, CardMedia, Grid } from '@mui/material';

function PromotionCard({ promotion }) {
    return (
        <Card sx={{ maxWidth: 345, margin: 2 }}>
            <CardMedia
                component="img"
                height="140"
                image={promotion.image}
                alt={promotion.title}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {promotion.title}
                </Typography>
                <Grid container spacing={2}>
                    {promotion.products.map((product) => (
                        <Grid item key={product.id} xs={6}>
                            <Card>
                                <CardMedia
                                    component="img"
                                    height="100"
                                    image={product.image}
                                    alt={product.name}
                                />
                                <CardContent>
                                    <Typography variant="body2" color="text.secondary">
                                        {product.name}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </CardContent>
        </Card>
    );
}

export default PromotionCard;
