import React from 'react';
import Avatar from '../Components/Avatar';

export const EVENT_MESSAGES = {
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
};

export const getEventMessage = (data) => {
    return EVENT_MESSAGES[data.event]?.(data) || null;
};
