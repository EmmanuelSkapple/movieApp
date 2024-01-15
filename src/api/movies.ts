import axios from "axios";
import { API_URL } from "./constants";


export const getMovies = async () => {
    try {
        const response = await axios.get(`${API_URL}/movies/get`);
        if (response.status !== 200) {
            throw new Error(response.data.error);
        }
        return response.data;
    } catch (error) {
        console.error(error);
        return null;
    }
}


export const createMovie = async (movie: any) => {
    try {
        const response = await axios.post(`${API_URL}/movies/create`, {movie});
        if (response.status !== 200) {
            throw new Error(response.data.error);
        }
        return true;
    } catch (error) {
        console.error(error);
        return null;
    }
}
