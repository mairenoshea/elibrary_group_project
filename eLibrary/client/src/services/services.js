import axios from "axios"

const USER_INSTANCE = axios.create({
    baseURL: 'http://localhost:5173/api'
})


export const addUser = async (data) => {
    try {
        const RES = await USER_INSTANCE.post('/users', data)
        return RES.data
    }
    catch (error) { throw error.response.data.errors }
}


export const getAllUser = async () => {
    try {
        const RES = await USER_INSTANCE.get('/users')
        return RES.data
    }
    catch (error) { throw error }
}



export const getOneUserByid = async (id) => {
    try {
        const RES = await USER_INSTANCE.get(`/users/${id}`)
        return RES.data
    } catch (error) { throw error }
}


export const updateOneUser = async (data) => {
    try {
        const RES = await USER_INSTANCE.put(`/users/${data._id}`, data)
        return RES.data
    }
    catch (error) { throw error.response.data.errors }
}


export const deleteUserByid = async (id) => {
    try {
        const RES = await USER_INSTANCE.delete(`/users/${id}`)
        return RES.data
    }
    catch (error) { throw error }
}
