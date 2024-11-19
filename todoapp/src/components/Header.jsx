// src/components/Header.jsx
import React, { useState } from 'react';
import '../styles/Header.css';

const Header = ({ onViewChange, currentView }) => {
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);

    const handleGroupingChange = (e) => {
        onViewChange({ ...currentView, groupBy: e.target.value });
    };

    const handleOrderingChange = (e) => {
        onViewChange({ ...currentView, sortBy: e.target.value });
    };

    return (
        <div className="header">
            <button 
                className="display-button"
                onClick={() => setIsDropdownVisible(!isDropdownVisible)}
            >
                <span className="button-icon">☰</span>
                Display
                <span className="dropdown-arrow">▼</span>
            </button>

            {isDropdownVisible && (
                <div className="dropdown-menu">
                    <div className="dropdown-item">
                        <span>Grouping</span>
                        <select 
                            value={currentView.groupBy}
                            onChange={handleGroupingChange}
                        >
                            <option value="status">Status</option>
                            <option value="user">User</option>
                            <option value="priority">Priority</option>
                        </select>
                    </div>
                    <div className="dropdown-item">
                        <span>Ordering</span>
                        <select 
                            value={currentView.sortBy}
                            onChange={handleOrderingChange}
                        >
                            <option value="priority">Priority</option>
                            <option value="title">Title</option>
                        </select>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Header;