import apiService from './api.service';

const moderatorService = {
    async getAllModerators(){
        try{
            const response = await apiService.get('/api/moderators');
            return response;
        }
        catch(error){
            throw new Error(error);
        }
    }
};

export default moderatorService;