import RequestService from './request.service';

const moderatorService = {
    async getAllModerators(){
        try{
            const response = await RequestService.get('/api/moderators');
            return response;
        }
        catch(error){
            throw new Error(error);
        }
    },
    async getCurrentModerator(){
        try{
            const response = await RequestService.get('/api/currentModerator');
            return response;
        }
        catch(error){
            throw new Error(error);
        }
    }
};

export default moderatorService;