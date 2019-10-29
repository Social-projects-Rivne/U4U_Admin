import { TokenService } from './token.service.js';
let axiosDefaults = require('axios/lib/defaults');
axiosDefaults.baseURL = 'http://localhost:8080/admin/api/';
const axios = require('axios');

const ApiService = {

    async getBannedUsers(offset, limit, transform = true) {
        const { data } = await axios.get(`bans?offset=${offset}&limit=${limit}`);
        if(transform) {
            return this._transformToBannedTable(data);
        } else {
            return data;
        }
    },

    getHeaders(accessToken) {
        return {
            'Content-Type': 'application/json',
            'Accept-Type': 'application/json',
            Authorization: accessToken ? accessToken : '',
        }
    },

    async get(resource) {
        const accessToken = await TokenService.checkToken()
        //TODO: get
    },

    async post(url, body) {
        try {
            let accessToken;
            if(url !== "/login") {
                accessToken = await TokenService.checkToken()
            }

        
            const response = await fetch(process.env.VUE_APP_PRODUCTION_PATH + url, {
                method: 'POST',
                headers: this.getHeaders(accessToken),
                body: JSON.stringify(body)
            })

            if (response.ok) {
                return await response.json()
            } else {
                const errors = await response.json()
                throw new Error(JSON.stringify(errors))
            }
        } catch (error) {
            throw new Error(error.message)
        }
    },

    async put(resource, data) {
        const accessToken = await TokenService.checkToken()
        //TODO: put
    },

    async delete(resource) {
        const accessToken = await TokenService.checkToken()
        //TODO: delete
    },

    _transformToBannedTable(data) {
        let counter = 0;
        return data.map(e => {
            counter++;
            const { nickname: nickName, email,
                ban: { ban_end: banEnd, ban_start: banStart, banned_by: bannedBy, reason  } } = e;

            return {
                counter,
                nickName,
                email,
                banEnd,
                banStart,
                bannedBy,
                reason
            }
        })
    }
}

export default ApiService