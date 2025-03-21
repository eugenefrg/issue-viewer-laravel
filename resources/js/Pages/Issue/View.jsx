import Layout from '../../Components/Layout';
import React from 'react';
import { Typography } from '@mui/material';
import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en';
TimeAgo.addDefaultLocale(en);
import './View.css';
import { Divider } from '@mui/material';
import Timeline from '../../Components/Timeline';
import Grid from '@mui/material/Grid2';
import Chip from '../../Components/Chip';
import IssueMetadata from '../../Components/Issue/IssueMetadata';
import { Button } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function View({ issue }) {
    return (
        <Layout>
            <div>
                <Typography variant="h4">
                    <span style={{ color: '#24292e' }}>{issue.title}</span>{' '}
                    <span style={{ color: '#6a737d' }}>#{issue.number}</span>
                </Typography>
                {/* Could not provide parent issue - can't find it in the api reference */}
                <Chip label={issue.state} color={issue.state === 'open' ? '2cbe4e' : 'cb2431'} />
                <Divider sx={{ my: 2 }} />
                <Grid container spacing={2}>
                    <Grid size={8}>
                        <Timeline issue={issue} />
                    </Grid>
                    <Grid size={4}>
                        <IssueMetadata issue={issue} />
                    </Grid>
                </Grid>
                <div className="flex flex-col justify-items-center mb-32">
                    <Button
                        href="/"
                        startIcon={<ArrowBackIcon />}
                        variant="outlined"
                        fullWidth
                        sx={{ textTransform: 'none' }}
                    >
                        back to your assigned issues
                    </Button>
                </div>
            </div>
        </Layout>
    );
}
