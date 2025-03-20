import React from 'react';
import { Typography } from '@mui/material';
import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en';
import Avatar from '../Avatar';

TimeAgo.addDefaultLocale(en);
const timeAgo = new TimeAgo('en-US');

const EVENT_MESSAGES = {
    assigned: (data) => (
        <>
            <Avatar user={data.actor} size={20} /> assigned{' '}
            <Avatar user={data.assignee} size={20} />
        </>
    ),
    labeled: (data) => (
        <>
            <Avatar user={data.actor} size={20} /> added the {data.label.name} label
        </>
    ),
    issue_type_added: (data) => (
        <>
            <Avatar user={data.actor} size={20} /> added an issue type
        </>
    ),
    issue_type_changed: (data) => (
        <>
            <Avatar user={data.actor} size={20} /> changed the issue type
        </>
    ),
    issue_type_removed: (data) => (
        <>
            <Avatar user={data.actor} size={20} /> removed the issue type
        </>
    ),
    milestoned: (data) => (
        <>
            <Avatar user={data.actor} size={20} /> added this to the {data.milestone.title}{' '}
            milestone
        </>
    ),
    demilestoned: (data) => (
        <>
            <Avatar user={data.actor} size={20} /> removed this from the {data.milestone.title}{' '}
            milestone
        </>
    ),
    parent_issue_added: (data) => (
        <>
            <Avatar user={data.actor} size={20} /> Parent issue added
        </>
    ),
    sub_issue_added: (data) => (
        <>
            <Avatar user={data.actor} size={20} /> Sub issue added
        </>
    ),
};

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
