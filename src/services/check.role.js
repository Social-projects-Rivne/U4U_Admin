import RequestService from './request.service';
import { TokenService } from './token.service';

const Role = {
    async checkRole(){
        try{
            const token = await TokenService.getToken();
            const headers = {
                Authorization: token
            }
            const isAdmin = await RequestService.post('/role', null, headers);
            console.log(`Admin : ${isAdmin.admin}`);
            return isAdmin.admin;
        }
        catch(error){
            const errorsObj = {
                errors : [{ mgs: "Can`t find access token" }]
            }
            throw new Error(JSON.stringify(errorsObj))
        }
    }
}

export default Role;