import RequestService from './request.service';

const BannedService = {
    async getAllBanned(){
        try{
            const response = await RequestService.get('/api/banned-users');
            return response;
        }
        catch(error){
            throw new Error(error);
        }
    }
};

export default BannedService;