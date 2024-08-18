// src/components/SidebarFilterPanel.js
import React, { useState } from 'react';
import { Box, FormControlLabel, Checkbox, Typography, Divider, IconButton, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function SidebarFilterPanel({ onFilterChange }) {
    const [selectedFilters, setSelectedFilters] = useState({
        Country: [],
        Measure: [],
        Packing: [],
        Availability: []
    });
    const [isMinimized, setIsMinimized] = useState(false);

    const filterOptions = {
        Country: ['Italy', 'France', 'Hungary', 'Japan'],
        Measure: ['kg', 'liters', 'ml', 'grams'],
        Packing: ['packs', 'boxes', 'bottle', 'jar', 'tin', 'bar', 'bag'],
        Availability: ['In Stock', 'Out of Stock'],
    };

    const handleCheckboxChange = (filterCategory, option) => {
        const updatedFilters = { ...selectedFilters };
        if (updatedFilters[filterCategory].includes(option)) {
            updatedFilters[filterCategory] = updatedFilters[filterCategory].filter(item => item !== option);
        } else {
            updatedFilters[filterCategory].push(option);
        }
        setSelectedFilters(updatedFilters);

        // Pass the updated filter state to the parent component
        onFilterChange(updatedFilters);
    };

    const toggleMinimize = () => {
        setIsMinimized(!isMinimized);
    };

    return (
        <Box
            sx={{
                width: isMinimized ? '50px' : '250px',
                padding: '16px',
                backgroundColor: '#f0f0f0',
                position: 'relative', // Relative position to stay under the filter panel
                height: '100vh', // Full height of the viewport
                overflowY: 'auto',
                borderRight: '1px solid #ddd',
                transition: 'width 0.3s ease-in-out',
                zIndex: 999,
            }}
        >
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
                <Typography variant="h6" gutterBottom>
                    Filters
                </Typography>
                <IconButton onClick={toggleMinimize} size="small">
                    {isMinimized ? <ArrowForwardIosIcon /> : <ArrowBackIosNewIcon />}
                </IconButton>
            </Box>
            {!isMinimized && (
                <Box>
                    <Divider />
                    {Object.keys(filterOptions).map((filterCategory) => (
                        <Accordion key={filterCategory} defaultExpanded>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography variant="subtitle1">{filterCategory}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                {filterOptions[filterCategory].map((option) => (
                                    <FormControlLabel
                                        key={option}
                                        control={
                                            <Checkbox
                                                checked={selectedFilters[filterCategory].includes(option)}
                                                onChange={() => handleCheckboxChange(filterCategory, option)}
                                            />
                                        }
                                        label={option}
                                    />
                                ))}
                            </AccordionDetails>
                        </Accordion>
                    ))}
                </Box>
            )}
        </Box>
    );
}

export default SidebarFilterPanel;
