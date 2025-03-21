import React from 'react';
import { Typography } from '@mui/material';
import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en';
import { EVENT_MESSAGES } from '../../utils/eventMessages';

TimeAgo.addDefaultLocale(en);
const timeAgo = new TimeAgo('en-US');

export default function Event({ data }) {
    const message = EVENT_MESSAGES[data.event]?.(data);

    if (!message) {
        console.warn(`Unsupported event type: ${data.event}`);
        return null;
    }

    return (
        <Typography variant="body2" color="textSecondary" className="flex items-center gap-2">
            {message} {timeAgo.format(new Date(data.created_at))}
        </Typography>
    );
}
