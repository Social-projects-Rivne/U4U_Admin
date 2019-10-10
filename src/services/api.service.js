import { TokenService } from './token.service.js'

const ApiService = {

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
    }
}

export default ApiService