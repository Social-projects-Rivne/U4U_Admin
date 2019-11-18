import { TokenService } from './token.service.js'
import RequestService from './request.service.js'

const AuthService = {
    getHeaders(accessToken) {
        return {
            'Content-Type': 'application/json',
            'Accept-Type': 'application/json',
            Authorization: accessToken ? accessToken : '',
        }
    },

    async login(login, password) {
        try {
            const body = {
                "email": login,
                "password": password
            };


            const response = await RequestService.post('/login', body, this.getHeaders())

            TokenService.saveToken(response.accessToken)
            TokenService.saveRefreshToken(response.refreshToken)

            return response
        }
        catch (errors) {
            throw errors
        }
    },

    async logout() {
        try {
            const token = TokenService.getToken()
            const body = {
                "accessToken": token
            }

            const { status } = await RequestService.post('/logout', body, this.getHeaders(token))

            TokenService.removeToken()
            TokenService.removeRefreshToken()

            if (!status) {
                throw new Error("Error logout status: " + status)
            }
        }
        catch(errors) {
            throw errors
        }
    }
}

export default AuthService