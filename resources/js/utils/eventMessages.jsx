import React from 'react';
import Avatar from '../Components/Avatar';
import Chip from '../Components/Chip';

export const EVENT_MESSAGES = {
    assigned: (data) => (
        <>
            <Avatar user={data.actor} size={20} /> assigned{' '}
            <Avatar user={data.assignee} size={20} />
        </>
    ),
    labeled: (data) => (
        <>
            <Avatar user={data.actor} size={20} /> added{' '}
            <Chip label={data.label.name} color={data.label.color} size="small" /> label
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
            <Avatar user={data.actor} size={20} /> added this to the <u>{data.milestone.title}</u>{' '}
            milestone
        </>
    ),
    demilestoned: (data) => (
        <>
            <Avatar user={data.actor} size={20} /> removed this from the{' '}
            <u>{data.milestone.title}</u> milestone
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

export const getEventMessage = (data) => {
    return EVENT_MESSAGES[data.event]?.(data) || null;
};
