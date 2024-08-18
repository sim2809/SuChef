// src/pages/Catalogue.js
import React, { useState, useEffect } from 'react';
import { Container, Grid, Typography, Box } from '@mui/material';
import ProductCard from '../components/ProductCard';
import PromotionCard from '../components/PromotionCard';
import FilterPanel from '../components/FilterPanel';
import SidebarFilterPanel from '../components/SidebarFilterPanel';
import mockProducts from '../data/mockProducts.json';
import mockPromotions from '../data/mockPromotions.json';

function Catalogue() {
    const [products, setProducts] = useState([]);
    const [promotions, setPromotions] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        setProducts(mockProducts);
        setPromotions(mockPromotions);
        setFilteredProducts(mockProducts); // Initialize with all products
    }, []);

    const handleFilterChange = (filters) => {
        const filtered = products.filter(product => {
            const countryMatch = filters.Country.length === 0 || filters.Country.some(country => product.country.includes(country));
            const measureMatch = filters.Measure.length === 0 || filters.Measure.some(measure => product.measure.includes(measure));
            const packingMatch = filters.Packing.length === 0 || filters.Packing.some(packing => product.packing.includes(packing));
            const availabilityMatch = filters.Availability.length === 0 || filters.Availability.some(avail => {
                return avail === 'In Stock' && product.inStock ||
                    avail === 'Out of Stock' && !product.inStock;
            });

            // Return true only if all active filters match
            return countryMatch && measureMatch && packingMatch && availabilityMatch;
        });

        setFilteredProducts(filtered);
    };

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <FilterPanel onFilterChange={handleFilterChange} />
            <Box sx={{ display: 'flex', flexGrow: 1, mt: '64px' }}> {/* Layout for sidebar and content */}
                <SidebarFilterPanel onFilterChange={handleFilterChange} />
                <Box sx={{ flexGrow: 1 }}>
                    <Container maxWidth="lg" sx={{ my: 4 }}>
                        <Typography variant="h4" component="h2" gutterBottom>
                            Promotions
                        </Typography>
                        <Grid container spacing={2} sx={{ overflowX: 'auto', flexWrap: 'nowrap' }}>
                            {promotions.map((promotion) => (
                                <Grid item key={promotion.id} xs={12} sm={6} md={4}>
                                    <PromotionCard promotion={promotion} />
                                </Grid>
                            ))}
                        </Grid>

                        <Box mt={4}>
                            <Typography variant="h4" component="h2" gutterBottom>
                                Products
                            </Typography>
                            <Grid container spacing={4}>
                                {filteredProducts.length > 0 ? (
                                    filteredProducts.map((product) => (
                                        <Grid item key={product.id} xs={12} sm={6} md={4}>
                                            <ProductCard product={product} />
                                        </Grid>
                                    ))
                                ) : (
                                    <Typography variant="body1" component="p" sx={{ marginLeft: 2 }}>
                                        No products match the selected filters.
                                    </Typography>
                                )}
                            </Grid>
                        </Box>
                    </Container>
                </Box>
            </Box>
        </Box>
    );
}

export default Catalogue;
