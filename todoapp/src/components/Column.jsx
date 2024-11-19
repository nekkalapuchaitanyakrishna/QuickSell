// src/components/Column.jsx
import React from 'react';
import Card from './Card';
import '../styles/Column.css';

const Column = ({ title, tickets, users, icon }) => {
    return (
        <div className="column">
            <div className="column-header">
                <div className="column-title">
                    <span className="column-icon">{icon}</span>
                    <h3>{title}</h3>
                    <span className="ticket-count">{tickets.length}</span>
                </div>
                <div className="column-actions">
                    <button className="action-button">+</button>
                    <button className="action-button">⋮</button>
                </div>
            </div>
            
            <div className="cards-container">
                {tickets.map(ticket => (
                    <Card 
                        key={ticket.id} 
                        ticket={ticket}
                        user={users.find(u => u.id === ticket.userId)}
                    />
                ))}
            </div>
        </div>
    );
};

export default Column;