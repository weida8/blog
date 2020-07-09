import axios from 'axios'
import {pexel_key} from '../config'

const photoSearch = async (query) => {
    const response = await axios.get(`https://api.pexels.com/v1/search?query=${query}`, {
        headers: {
            "Authorization": pexel_key
        }
    })
    return response
}

export default photoSearch