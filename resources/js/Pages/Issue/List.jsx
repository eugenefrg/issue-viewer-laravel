import Layout from '../../Components/Layout';
import { Head } from '@inertiajs/react';
import React from 'react';
import Chip from '../../Components/Chip';

export default function List({ issues }) {
    return (
        <Layout>
            <Head title="List of Issues" />
            {issues.map((issue) => (
                <div key={issue.id} className="p-4 border-b">
                    <a
                        href={`/issue/${issue.repository.owner.login}/${issue.repository.name}/${issue.number}`}
                    >
                        <h3 className="font-bold">{issue.title}</h3>
                        <div className="flex gap-2">
                            {issue.labels.map((label) => (
                                <Chip
                                    key={label.id}
                                    label={label.name}
                                    color={label.color}
                                    className="p-8"
                                />
                            ))}
                            <div className="flex items-center gap-1 text-sm text-gray-600">
                                <span>#{issue.number}</span>
                                <span>opened {issue.created_at}</span>
                                <span>by {issue.user.login}</span>
                                {issue.pull_request && (
                                    <span className="text-gray-500">
                                        • linked to PR #{issue.pull_request.number}
                                    </span>
                                )}
                            </div>
                        </div>
                        <p className="text-gray-600">{issue.body}</p>
                    </a>
                </div>
            ))}
        </Layout>
    );
}
