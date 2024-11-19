// src/components/Board.jsx
import React from 'react';
import Column from './Column';
import { PRIORITY_MAP, STATUS_ICONS } from '../utils/utils';
import '../styles/Board.css';

const Board = ({ groupedTickets, users, groupBy }) => {
    const getGroupIcon = (groupName) => {
        switch (groupBy) {
            case 'status':
                return STATUS_ICONS[groupName] || '📋';
            case 'priority':
                return Object.values(PRIORITY_MAP).find(p => p.name === groupName)?.icon || '⚪';
            case 'user':
                const user = users.find(u => u.name === groupName);
                return user?.available ? '🟢' : '⚫';
            default:
                return '📋';
        }
    };

    return (
        <div className="board">
            {Object.entries(groupedTickets).map(([groupName, tickets]) => (
                <Column
                    key={groupName}
                    title={groupName}
                    tickets={tickets}
                    users={users}
                    icon={getGroupIcon(groupName)}
                />
            ))}
        </div>
    );
};

export default Board;