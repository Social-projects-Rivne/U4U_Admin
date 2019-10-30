import ApiService from './api.service';

const Role = {
    async checkRole(){
        try{
            const isAdmin = await ApiService.post('/role');
            return isAdmin;
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