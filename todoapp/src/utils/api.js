import axios from 'axios';

const API_URL = 'https://api.quicksell.co/v1/internal/frontend-assignment';

export const fetchKanbanData = () => {
    return axios.get(API_URL)
        .then((response) => {
            return response.data; 
        })
        .catch((error) => {
            console.error("Error fetching data:", error.message);
            throw error; 
        });
};