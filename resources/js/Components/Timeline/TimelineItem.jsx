import React from 'react';
import { TimelineItem as MuiTimelineItem } from '@mui/lab';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

export default function TimelineItem({ children, hideConnector = false }) {
    return (
        <MuiTimelineItem>
            <TimelineSeparator>
                <TimelineDot />
                {!hideConnector && <TimelineConnector />}
            </TimelineSeparator>
            <TimelineContent>{children}</TimelineContent>
        </MuiTimelineItem>
    );
}
