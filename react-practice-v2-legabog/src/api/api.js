import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "ef0d76e3-4021-4548-9c3d-00a0e96d3742"
    }
})

export const userAPI = {
    getUsers(currentPage = 1, pageSize = 6) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(responce => {
            return responce.data;
        })
    },

    authMe() {
        return instance.get(`auth/me`)
        .then(responce => {
            return responce.data;
        })

    },

    getProfile(userId) {
        return instance.get(`profile/${userId}`)
        .then(responce => {
            return responce.data;
        })
    },

    unfollow(id) {
        return instance.delete(`follow/${id}`)
        .then(responce => {
            return responce.data;
        })
    },

    follow(id) {
        return instance.post(`follow/${id}`)
        .then(responce => {
            return responce.data;
        })

    }
}

