import RequestService from './request.service';

const Role = {
    async checkRole(){
        try{
            const isAdmin = await RequestService.post('/role');
            console.log(isAdmin.admin);
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