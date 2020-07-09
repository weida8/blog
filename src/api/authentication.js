import axios from 'axios'

export const postLogin = async (userCredential) => {
    userCredential.hostname = 'dev.trailblazer'
    console.log(userCredential)
    const response = await axios.post('/login', userCredential)
    return response
}