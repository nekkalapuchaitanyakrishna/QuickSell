// src/utils/utils.js
export const PRIORITY_MAP = {
    4: { name: 'Urgent', icon: '🔴' },
    3: { name: 'High', icon: '🟠' },
    2: { name: 'Medium', icon: '🟡' },
    1: { name: 'Low', icon: '🟢' },
    0: { name: 'No priority', icon: '⚪' }
};

export const STATUS_ICONS = {
    'Backlog': '📫',
    'Todo': '📝',
    'In progress': '🔄',
    'Done': '✅',
    'Canceled': '❌'
};

export const groupTickets = (tickets, users, groupBy) => {
    switch (groupBy) {
        case 'status':
            return tickets.reduce((groups, ticket) => {
                const status = ticket.status;
                if (!groups[status]) groups[status] = [];
                groups[status].push(ticket);
                return groups;
            }, {});

        case 'user':
            return tickets.reduce((groups, ticket) => {
                const user = users.find(u => u.id === ticket.userId);
                const userName = user ? user.name : 'Unassigned';
                if (!groups[userName]) groups[userName] = [];
                groups[userName].push(ticket);
                return groups;
            }, {});

        case 'priority':
            return tickets.reduce((groups, ticket) => {
                const priority = PRIORITY_MAP[ticket.priority].name;
                if (!groups[priority]) groups[priority] = [];
                groups[priority].push(ticket);
                return groups;
            }, {});

        default:
            return {};
    }
};

export const sortTickets = (tickets, sortBy) => {
    return [...tickets].sort((a, b) => {
        if (sortBy === 'priority') {
            return b.priority - a.priority;
        }
        return a.title.localeCompare(b.title);
    });
};

export const getLocalStorage = () => {
    const savedView = localStorage.getItem('kanbanView');
    return savedView ? JSON.parse(savedView) : { groupBy: 'status', sortBy: 'priority' };
};

export const setLocalStorage = (view) => {
    localStorage.setItem('kanbanView', JSON.stringify(view));
};