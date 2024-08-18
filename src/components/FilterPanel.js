// src/components/FilterPanel.js
import React from 'react';
import { Box, Button, ButtonGroup, Menu, MenuItem, FormControlLabel, Checkbox } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

function FilterPanel({ onFilterChange }) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [currentMenu, setCurrentMenu] = React.useState('');
    const [selectedFilters, setSelectedFilters] = React.useState({
        Country: [],
        Type: [],
        Availability: []
    });

    const filterOptions = {
        Country: ['Italy', 'France', 'Hungary', 'Japan'],
        Type: ['Sweets', 'Spices', 'Main Course', 'Snacks'],
        Availability: ['In Stock', 'Out of Stock'],
    };

    const handleMenuClick = (event, menu) => {
        setAnchorEl(event.currentTarget);
        setCurrentMenu(menu);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        setCurrentMenu('');
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

    return (
        <Box
            sx={{
                backgroundColor: '#333',
                py: 2,
                px: 2,
                display: 'flex',
                justifyContent: 'center',
                borderBottom: '1px solid #ddd',
                width: '100%',  // Ensure it spans the full width
                zIndex: 1000,  // Ensure it stays on top of other elements
            }}
        >
            <ButtonGroup variant="contained" aria-label="filter button group">
                {Object.keys(filterOptions).map((filter) => (
                    <div key={filter}>
                        <Button
                            onClick={(event) => handleMenuClick(event, filter)}
                            endIcon={<ArrowDropDownIcon />}
                            sx={{ backgroundColor: '#ffffff', color: '#333', textTransform: 'none', margin: '0 10px' }}
                        >
                            {filter}
                        </Button>
                        <Menu
                            anchorEl={anchorEl}
                            open={currentMenu === filter}
                            onClose={handleMenuClose}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                        >
                            {filterOptions[filter].map((option) => (
                                <MenuItem key={option}>
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                checked={selectedFilters[filter].includes(option)}
                                                onChange={() => handleCheckboxChange(filter, option)}
                                            />
                                        }
                                        label={option}
                                    />
                                </MenuItem>
                            ))}
                        </Menu>
                    </div>
                ))}
            </ButtonGroup>
        </Box>
    );
}

export default FilterPanel;
