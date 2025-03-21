import React from 'react';
import { Card, CardContent, CardHeader, CardActionArea } from '@mui/material';
import { Typography } from '@mui/material';
import Reactions from './Reactions';
export default function TimelineCard({ header, children, reactions }) {
    return (
        <Card variant="outlined">
            <CardHeader
                title={<Typography variant="subtitle1">{header}</Typography>}
                className="bg-blue-100 flex items-center gap-2"
            />
            <CardContent>{children}</CardContent>
            {reactions && (
                <CardActionArea>
                    <Reactions reactions={reactions} />
                </CardActionArea>
            )}
        </Card>
    );
}
