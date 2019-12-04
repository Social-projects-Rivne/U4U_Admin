import RequestService from './request.service';
import { TokenService } from './token.service';

const PlacesService = {
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
    },
    async getApprovedPlaces(){
        try{
            const response = await RequestService.get('/api/approved-places');
            return response;
        }
        catch(error){
            throw new Error(error);
        }
    },
    async getRejectedPlaces(){
        try{
            const response = await RequestService.get('/api/rejected-places');
            return response;
        }
        catch(error){
            throw new Error(error);
        }
    },
    async putRejectPlace(placeId, reason){
        try{
            const body = {
                placeId: placeId,
                reason: reason
            }
            const token = TokenService.getToken();
            const headers = {
                Authorization: token,
                'Content-Type': 'application/json'
            }
            await RequestService.put('/api/reject', body, headers);
        }
        catch(error){
            throw new Error(error);
        }
    }
};

export default PlacesService;
