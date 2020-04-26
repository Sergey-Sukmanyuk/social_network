import * as axios from "axios";


let instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '952a64fa-c549-4c2b-ac3a-10ad8cd9da9e'
    }
})


export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    unfollowUser(userId) {
        return instance.delete(`follow/${userId}`)
            .then(response => response.data)
    },
    followUser(userId) {
        return instance.post(`follow/${userId}`)
            .then(response => response.data)
    }
}

export const authAPI = {
    authorization() {
        return instance.get(`auth/me`)
            .then(response => response.data)
    }
}

export const profileAPI = {
    getUserProfile(userId) {
        return instance.get(`profile/${userId}`)
    },

    getUserStatus(userId) {
        return instance.get(`/profile/status/${userId}`)
    },

    setUserStatus(status){
        return instance.put(`/profile/status`, {status})
    }
}