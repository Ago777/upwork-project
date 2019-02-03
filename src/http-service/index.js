import axios from 'axios';

const Http = {
    getToken: () => localStorage.getItem('token'),

    get: (url) => {
        return new Promise((resolve, reject) => {
            const headers = {
                'Content-Type': 'application/json',
                'Authorization': Http.getToken() || ''
            };
            axios.get(url, {headers})
                .then(response => resolve(response))
                .catch((err) => reject(err));
        });
    },

    post: (url, body) => {
        return new Promise((resolve, reject) => {
            let headers = {
                'Content-Type': 'application/json',
                'Authorization': Http.getToken() || ''
            };
            axios({
                url,
                data: JSON.stringify(body),
                method: 'post',
                timeout: 40000,
                headers
            }).then(response => resolve(response))
                .catch(err => {
                    reject(err);
                });
        })
    },
};

export default Http;
