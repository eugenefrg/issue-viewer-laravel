import React from 'react';
import { Card, CardContent, Typography, Divider, Stack } from '@mui/material';
import Avatar from '../Avatar';
import Chip from '../Chip';

export default function IssueMetadata({ issue }) {
    return (
        <Card>
            <CardContent>
                <Typography variant="subtitle1" gutterBottom>
                    Assignees
                </Typography>
                {issue.assignees.length > 0 ? (
                    issue.assignees.map((assignee) => (
                        <Avatar user={assignee} size={20} key={assignee.id} />
                    ))
                ) : (
                    <Typography variant="body2" color="text.secondary">
                        No assignees
                    </Typography>
                )}

                <Divider sx={{ my: 2 }} />

                <Typography variant="subtitle1" sx={{ mt: 2 }} gutterBottom>
                    Labels
                </Typography>
                <Stack spacing={1} direction="row" useFlexGap sx={{ flexWrap: 'wrap' }}>
                    {issue.labels.length > 0
                        ? issue.labels.map((label) => (
                              <Chip key={label.id} label={label.name} color={label.color} />
                          ))
                        : 'No labels'}
                </Stack>

                <Divider sx={{ my: 2 }} />

                <Typography variant="subtitle1" sx={{ mt: 2 }} gutterBottom>
                    Milestone
                </Typography>
                {issue.milestone ? (
                    <Typography variant="body2" color="text.secondary">
                        {issue.milestone.title}
                    </Typography>
                ) : (
                    <Typography variant="body2" color="text.secondary">
                        No milestone
                    </Typography>
                )}
            </CardContent>
        </Card>
    );
}
