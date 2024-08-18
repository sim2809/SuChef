// src/components/ProductCard.js
import React from 'react';
import { Card, CardContent, Typography, CardMedia, Button, Box } from '@mui/material';

function ProductCard({ product }) {
    return (
        <Card sx={{ maxWidth: 345, margin: 2 }}>
            <CardMedia
                component="img"
                height="140"
                image={product.image}
                alt={product.name}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {product.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {product.description}
                </Typography>
                <Typography variant="h6" color="text.primary">
                    ${product.price.toFixed(2)}
                </Typography>
                <Typography variant="body2" color={product.inStock ? "green" : "red"}>
                    {product.inStock ? "In Stock" : "Out of Stock"}
                </Typography>
                <Box mt={2}>
                    <Button variant="contained" color="primary" disabled={!product.inStock}>
                        {product.inStock ? "Add to Cart" : "Out of Stock"}
                    </Button>
                </Box>
            </CardContent>
        </Card>
    );
}

export default ProductCard;
