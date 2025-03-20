import React from 'react';
import { Card, CardContent, CardHeader, CardActionArea } from '@mui/material';
import { Typography } from '@mui/material';
import Reactions from './Reactions';
export default function TimelineCard({ header, children, reactions }) {
    return (
        <Card>
            <CardHeader title={<Typography variant="subtitle1">{header}</Typography>} />
            <CardContent>{children}</CardContent>
            {reactions && (
                <CardActionArea>
                    <Reactions reactions={reactions} />
                </CardActionArea>
            )}
        </Card>
    );
}
