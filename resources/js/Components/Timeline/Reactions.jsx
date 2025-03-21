import React from 'react';
import { Typography } from '@mui/material';

const REACTION_EMOJIS = {
    '+1': '👍',
    '-1': '👎',
    laugh: '😄',
    hooray: '🎉',
    confused: '😕',
    heart: '❤️',
    rocket: '🚀',
    eyes: '👀',
};

export default function Reactions({ reactions }) {
    if (!reactions) return null;

    return (
        <div className="flex gap-2 p-4">
            {Object.entries(REACTION_EMOJIS).map(
                ([key, emoji]) =>
                    reactions[key] > 0 && (
                        <Typography key={key} variant="body2" color="textSecondary">
                            {emoji} {reactions[key]}
                        </Typography>
                    )
            )}
        </div>
    );
}
