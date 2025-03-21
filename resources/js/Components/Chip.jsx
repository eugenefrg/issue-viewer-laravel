import React from 'react';
import { Chip as MuiChip } from '@mui/material';

export default function Chip({ label, color, className = '', size = 'medium' }) {
    return (
        <MuiChip
            label={label}
            size={size}
            className={className}
            variant="outlined"
            sx={{
                backgroundColor: `#${color}`,
                color: '#fff',
                textTransform: 'capitalize',
                textShadow: '-1px -1px 0 #444, 1px -1px 0 #444, -1px 1px 0 #444, 1px 1px 0 #444',
            }}
        />
    );
}
