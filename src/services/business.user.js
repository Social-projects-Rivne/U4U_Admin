import RequestService from './request.service';

const BusinessService = {
    async getAllBusiness(){
        try{
            const response = await RequestService.get('/api/business');
            return response;
        }
        catch(error){
            throw new Error(error);
        }
    }
};

export default BusinessService;