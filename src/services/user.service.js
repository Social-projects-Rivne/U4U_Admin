import RequestService from './request.service';
import { TokenService } from './token.service';

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
    },
    async getNotApprovedPlaces(){
        try{
            const response = await RequestService.get('/api/approve-places');
            return response;
        }
        catch(error){
            throw new Error(error);
        }
    },
    async ApprovePlace(id){
        try{
            const body = {
                id: id
            }
            const token = TokenService.getToken();
            const headers = {
                Authorization: token,
                'Content-Type': 'application/json'
            }
            const response = await RequestService.put('/api/approve-places', body, headers);
        }
        catch(error){
            throw new Error(error);
        }
    }
};

export default UserService;
