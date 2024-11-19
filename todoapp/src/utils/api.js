// src/services/api.js
const API_URL = 'https://api.quicksell.co/v1/internal/frontend-assignment';

export const fetchKanbanData = async () => {
    try {
        const response = await fetch(API_URL);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.json();
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
    }
};