import RequestService from './request.service';

<<<<<<< HEAD
const userService = {
    async getAllUsers(){
        try{
            const response = await RequestService.get('/api/allUsers');
=======
const UserService = {
    async getAllBusiness(){
        try{
            const response = await RequestService.get('/api/business');
            return response;
        }
        catch(error){
            throw new Error(error);
        }
    },
    async getAllBanned(){
        try{
            const response = await RequestService.get('/api/banned-users');
>>>>>>> bebcb21157e00bbae00d403aa1c1e93811bab1a5
            return response;
        }
        catch(error){
            throw new Error(error);
        }
    }
};

<<<<<<< HEAD
export default userService;
=======
export default UserService;
>>>>>>> bebcb21157e00bbae00d403aa1c1e93811bab1a5
