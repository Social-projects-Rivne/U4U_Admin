const TOKEN_KEY = 'accessToken'
const REFRESH_TOKEN_KEY = 'refreshToken'

const TokenService = {
    async checkToken() {
        try {
            const accessToken = this.getToken()
            const body = {
                accessToken: accessToken
            }

            const response = await fetch(process.env.VUE_APP_PRODUCTION_PATH + '/check-token', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json;charset=utf-8' },
                body: JSON.stringify(body)
            })

            if (response.ok) {
                const { status, admin } = await response.json()
                console.log(status, admin);

                if(status)
                    return accessToken
                else
                    return this.refreshToken()
            } else {
                const { error } = await response.json()
                throw new Error(JSON.stringify(error.message))
            }
        } catch (error) {
            throw new Error(error.message)
        } 
    },

    getToken() {
        const accessToken = localStorage.getItem(TOKEN_KEY)
        
        if(accessToken)
            return localStorage.getItem(TOKEN_KEY)
        else
        {
            const errorsObj = {
                errors : [{ mgs: "Can`t find access token" }]
            }

            throw new Error(JSON.stringify(errorsObj))
        }
    },

    saveToken(accessToken) {
        localStorage.setItem(TOKEN_KEY, accessToken)
    },

    removeToken() {
        localStorage.removeItem(TOKEN_KEY)
    },


    async refreshToken() {
        try {
            const refreshToken = this.getRefreshToken()
            const body = {
                refreshToken: refreshToken
            }

            const response = await fetch(process.env.VUE_APP_PRODUCTION_PATH + '/refresh-token', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json;charset=utf-8' },
                body: JSON.stringify(body)
            })

            if (response.ok) {
                const { newAccessToken, newRefreshToken } = await response.json();

                this.saveToken(newAccessToken)
                this.saveRefreshToken(newRefreshToken)

                return newAccessToken
            } else {
                const resp = await response.json()
                const errorsArr = resp.errors
                
                for(let i = 0; i < errorsArr.length; i++) {
                    if(errorsArr[i].param === "refreshExpired") {
                        this.removeToken()
                        this.removeRefreshToken()
                    }
                }
               
                throw new Error(JSON.stringify(resp))
            }
        } catch (error) {
            throw new Error(error.message)
        }
    },

    getRefreshToken() {
        const refreshToken = localStorage.getItem(REFRESH_TOKEN_KEY)

        if(refreshToken)
            return localStorage.getItem(REFRESH_TOKEN_KEY)
        else
        {
            const errorsObj = {
                errors : [{ mgs: "Can`t find refresh token" }]
            }

            throw new Error(JSON.stringify(errorsObj))
        }
    },

    saveRefreshToken(refreshToken) {
        localStorage.setItem(REFRESH_TOKEN_KEY, refreshToken)
    },

    removeRefreshToken() {
        localStorage.removeItem(REFRESH_TOKEN_KEY)
    }
}

export { TokenService }