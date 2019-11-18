import { TokenService } from './token.service.js'

const RequestService = {

    async get(url) {
        try{
            const accessToken = await TokenService.checkToken();
            if(accessToken){
                const response = await fetch(process.env.VUE_APP_PRODUCTION_PATH + url, {
                    headers: {
                        Authorization: accessToken
                    }
                });

                if (response.ok) {
                    return await response.json();
                } else {
                    const errors = await response.json()
                    throw new Error(JSON.stringify(errors))
                }
            }
        }   
        catch(error){
            throw new Error(error.message);
        }
    },

    async post(url, body, headers) {
        try {
            const response = await fetch(process.env.VUE_APP_PRODUCTION_PATH + url, {
                method: 'POST',
                headers,
                body: JSON.stringify(body)
            });

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

export default RequestService