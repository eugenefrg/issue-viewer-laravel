import Layout from '../../Components/Layout';
import { Head } from '@inertiajs/react';
import React from 'react';
import Chip from '../../Components/Chip';
import { Typography, Divider, Card, CardActionArea } from '@mui/material';

export default function List({ issues }) {
    return (
        <Layout>
            <Head title="List of Issues" />
            {issues.map((issue) => (
                <Card
                    key={issue.id}
                    className="my-4"
                    onClick={() => {
                        window.location.href = `/issue/${issue.repository.owner.login}/${issue.repository.name}/${issue.number}`;
                    }}
                >
                    <CardActionArea>
                        <div className="p-4 px-4">
                            <div className="flex items-center gap-2">
                                <Typography
                                    variant="h6"
                                    className="font-bold"
                                    component="span"
                                    color="text.secondary"
                                >
                                    {issue.repository.owner.login}/{issue.repository.name}
                                </Typography>
                                <Typography variant="h6" className="font-bold" component="span">
                                    {issue.title}
                                </Typography>
                            </div>
                            <div className="flex items-center gap-1 text-sm text-gray-600">
                                <span>#{issue.number}</span>
                                <span>opened {issue.created_at}</span>
                                <span>by {issue.user.login}</span>
                            </div>
                            <div className="flex gap-2 pt-2 pb-4">
                                {issue.labels.map((label) => (
                                    <Chip
                                        key={label.id}
                                        label={label.name}
                                        color={label.color}
                                        className="p-8"
                                    />
                                ))}
                            </div>

                            <p className="text-gray-600">{issue.body}</p>
                        </div>
                    </CardActionArea>
                </Card>
            ))}
        </Layout>
    );
}
