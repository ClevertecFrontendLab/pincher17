import axios from "axios";


export const instance = axios.create({
    baseURL: 'https://marathon-api.clevertec.ru/',
    headers: {
        'accept': 'application/json',
        'Content-Type': 'application/json',
      },

})

const accessToken = localStorage.getItem('accessToken');


if (!accessToken) {

    console.error('Access token not found in localStorage');
} else {

    /* instance.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`; */
}

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
    getFeedback(accessToken) {
        const config = {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        };
    
        return instance.get('/feedback', config)
            .then(response => {
                return response.data; 
            })
            .catch(error => {
                throw error; 
            });
    },
    sendFeedback(accessToken, message, rating) {
        const config = {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        };
    
        return instance.post('/feedback', {message, rating}, config)
            .then(response => {
                return response.data; 
            })
            .catch(error => {
                throw error; 
            });
    },
};