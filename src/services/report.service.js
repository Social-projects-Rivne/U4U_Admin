import RequestService from './request.service';

const reportService = {
   async getAllReports(){
    try {
        return await RequestService.get('/api/reports');
    } catch (error) {
        throw new Error(error);
    }
   }
};

export default reportService;