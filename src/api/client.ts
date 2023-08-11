import axios from 'axios';

const URL =
    'https://eventio-testproject-eieqpn2nu-strvcom.vercel.app/api/rest/v1';

const API_KEY = '9c7c5024-605b-4224-829d-da9ea9c9600c';

export const apiClient = axios.create({
    baseURL: URL,
    headers: {
        'Content-type': 'application/json',
        APIkey: API_KEY,
    },
});
