import axios from "axios";

const API_KEY = "49833944-6607058f780df4ba7a1e9afed";

export function getImagesByQuery(query) {
    return axios("https://pixabay.com/api/", {
        params: {
            key: API_KEY,
            q: query,
            image_type: "photo",
            orientation: "horizontal",
            safesearch: true,
            per_page: 9,
        }
    }).then(response => response.data);
}