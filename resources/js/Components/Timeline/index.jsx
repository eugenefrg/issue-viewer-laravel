import React from 'react';
import { Timeline as MuiTimeline } from '@mui/lab';
import TimelineItem from './TimelineItem';
import TimelineCard from './TimelineCard';
import Event from './Event';
import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en';
import Avatar from '../Avatar';

TimeAgo.addDefaultLocale(en);
const timeAgo = new TimeAgo('en-US');

export default function Timeline({ issue }) {
    return (
        <MuiTimeline className='view-timeline'>
            {/* Main timeline item */}
            <TimelineItem>
                <TimelineCard
                    header={<p className='flex items-center gap-2'>
                        <Avatar user={issue.user} size={20} /> opened this issue {timeAgo.format(new Date(issue.created_at))}
                    </p>}
                    reactions={issue.reactions}
                >
                    <p>{issue.body}</p>
                </TimelineCard>
            </TimelineItem>
            {issue.timeline_items.map((item, index) => (
                <TimelineItem 
                    key={item.data.id}
                    hideConnector={index === issue.timeline_items.length - 1}
                >
                    {item.type === 'comment' ? (
                        <TimelineCard 
                            header={<p><Avatar user={issue.user} size={20} /> commented ${timeAgo.format(new Date(item.created_at))}</p>}
                            reactions={item.data.reactions}
                        >
                            <p>{item.data.body}</p>
                        </TimelineCard>
                    ) : (
                        <Event data={item.data} />
                    )}
                </TimelineItem>
            ))}
        </MuiTimeline>
    );
}
