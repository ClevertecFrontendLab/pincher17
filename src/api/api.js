import axios from "axios";


export const instance = axios.create({
    baseURL: 'https://marathon-api.clevertec.ru/',
    headers: {
        'accept': 'application/json',
        'Content-Type': 'application/json',
      },

})

const config = {
    withCredentials: true
};

export const userApi = {
    registerUser(email, password) {
        return instance.post(`auth/registration`, { email, password })
            .then(response => {
                return response.data; 
            })
            .catch(error => {
                throw error; 
            });
    },
    authUser(email, password) {
        return instance.post(`auth/login`, { email, password })
            .then(response => {
                return response.data; 
            })
            .catch(error => {
                throw error; 
            });
    },
    checkEmail(email) {
        return instance.post(`auth/check-email`, { email })
            .then(response => {
                return response.data; 
            })
            .catch(error => {
                throw error; 
            });
    },
    confirmEmail(email, code) {
        return instance.post(`auth/confirm-email`, { email, code }, config)
            .then(response => {
                return response.data; 
            })
            .catch(error => {
                throw error; 
            });
    },
    changePassword(password, confirmPassword) {
        return instance.post(`auth/change-password`, { password, confirmPassword }, config)
            .then(response => {
                return response.data; 
            })
            .catch(error => {
                throw error; 
            });
    },
};