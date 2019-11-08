import RequestService from './request.service';

const userService = {
    async getAllUsers(){
        try{
            const response = await RequestService.get('/api/allUsers');
            return response;
        }
        catch(error){
            throw new Error(error);
        }
    }
};

export default userService;