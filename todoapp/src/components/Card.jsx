// src/components/Card.jsx
import React from 'react';
import { PRIORITY_MAP, STATUS_ICONS } from '../utils/utils';
import '../styles/Card.css';

const Card = ({ ticket, user }) => {
    return (
        <div className="card">
            <div className="card-header">
                <span className="ticket-id">{ticket.id}</span>
                <div className="user-avatar">
                    {user?.available ? '🟢' : '⚫'}
                    {user?.name?.charAt(0) || '?'}
                </div>
            </div>
            
            <div className="card-title">
                {STATUS_ICONS[ticket.status]}
                <p>{ticket.title}</p>
            </div>
            
            <div className="card-footer">
                <div className="priority-tag">
                    {PRIORITY_MAP[ticket.priority].icon}
                </div>
                <div className="feature-tag">
                    <span>●</span>
                    {ticket.tag.join(', ')}
                </div>
            </div>
        </div>
    );
};

export default Card;