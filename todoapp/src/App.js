// src/App.jsx
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Board from './components/Board';
import { fetchKanbanData } from './utils/api';
import { groupTickets, sortTickets, getLocalStorage, setLocalStorage } from './utils/utils';
import './App.css';

function App() {
    const [tickets, setTickets] = useState([]);
    const [users, setUsers] = useState([]);
    const [view, setView] = useState(getLocalStorage());
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadData = async () => {
            try {
                const data = await fetchKanbanData();
                setTickets(data.tickets);
                setUsers(data.users);
                setLoading(false);
            } catch (error) {
                console.error('Failed to load data:', error);
                setLoading(false);
            }
        };
        loadData();
    }, []);

    useEffect(() => {
        setLocalStorage(view);
    }, [view]);

    const handleViewChange = (newView) => {
        setView(newView);
    };

    if (loading) {
        return <div className="loading">Loading...</div>;
    }

    const groupedTickets = groupTickets(tickets, users, view.groupBy);
    Object.keys(groupedTickets).forEach(key => {
        groupedTickets[key] = sortTickets(groupedTickets[key], view.sortBy);
    });

    return (
        <div className="app">
            <Header onViewChange={handleViewChange} currentView={view} />
            <Board 
                groupedTickets={groupedTickets}
                users={users}
                groupBy={view.groupBy}
            />
        </div>
    );
}

export default App;