import { Card, CardContent} from '@mui/material'
import Layout from '../../Components/Layout'
import React from 'react'
import { Typography } from '@mui/material'
import TimeAgo from 'javascript-time-ago'
// English.
import en from 'javascript-time-ago/locale/en'
TimeAgo.addDefaultLocale(en)
// Create formatter (English).
import './View.css';
import { Divider } from '@mui/material';
import Timeline from '../../Components/Timeline';
import Grid from '@mui/material/Grid2';
import Avatar from '../../Components/Avatar';

export default function View({issue}) {
    console.log(issue)
    return (
        <Layout>
            <div>
                <Typography variant="h4">
                    <span style={{color: '#24292e'}}>{issue.title}</span>{' '}
                    <span style={{color: '#6a737d'}}>#{issue.number}</span>
                </Typography>
                <Divider sx={{ my: 2 }}/>
                <Grid container spacing={2}>
                    <Grid size={8}>
                        <Timeline issue={issue} />
                    </Grid>
                    <Grid size={4}>
                        <Card>
                            <CardContent>
                                <Typography variant="subtitle1" gutterBottom>
                                    Assignees
                                </Typography>
                                {issue.assignees.length > 0 ? (
                                    issue.assignees.map(assignee => (
                                                <Avatar user={assignee} size={20} />
                                    ))
                                ) : (
                                    <Typography variant="body2" color="text.secondary">
                                        No assignees
                                    </Typography>
                                )}

                                <Typography variant="subtitle1" sx={{ mt: 2 }} gutterBottom>
                                    Labels
                                </Typography>
                                {issue.labels.length > 0 ? (
                                    issue.labels.map(label => (
                                        <Typography 
                                            key={label.id} 
                                            variant="body2" 
                                            component="span"
                                            sx={{
                                                backgroundColor: `#${label.color}`,
                                                padding: '2px 8px',
                                                borderRadius: '12px',
                                                marginRight: 1,
                                                color: '#000'
                                            }}
                                        >
                                            {label.name}
                                        </Typography>
                                    ))
                                ) : (
                                    <Typography variant="body2" color="text.secondary">
                                        No labels
                                    </Typography>
                                )}

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
                    </Grid>
                </Grid>
            </div>
        </Layout>
    )
}
