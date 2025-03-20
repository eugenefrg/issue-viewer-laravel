import React from 'react';

export default function Avatar({ user, size = 20 }) {
    return (
        <a href={user.html_url} className="flex items-center gap-2">
            <img
                src={user.avatar_url}
                alt={user.login}
                style={{
                    width: size,
                    height: size,
                    borderRadius: '50%',
                }}
            />
            {user.login}
        </a>
    );
}
