import RequestService from './request.service';

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
            return response;
        }
        catch(error){
            throw new Error(error);
        }
    },
    async getAllUsers(){
        try{
            const response = await RequestService.get('/api/allUsers');
            return response;
        }
        catch(error){
            throw new Error(error);
        }
    },
    async getAllReviews(){
        try{
            const response = await RequestService.get('/api/reviews');
            return response;
        }
        catch(error){
            throw new Error(error);
        }
    }
};

export default UserService;
