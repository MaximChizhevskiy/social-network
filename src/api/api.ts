import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '2960ec12-c225-4335-9625-b5eb957babfa'
    }
})

export const usersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get( `users?page=${currentPage}&count=${pageSize}`)
        .then(response => {
            return response.data
        })
    }
}
