import axios from 'axios'

export const getBlogs = async () => {
    const response = await axios.get('/getBlogs');
    return response;
}
