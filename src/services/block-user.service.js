import RequestService from './request.service';
import { TokenService } from './token.service';
 
const BlockUserService = {
    async blockUser(reason, blockedUserInfo){
        const body = {
            reason,
            id:blockedUserInfo.id,
            ban_start: Date.now()
            }
            const token = TokenService.getToken();
            const headers = {
                Authorization: token,
                'Content-Type': 'application/json'
            }
            return await RequestService.post('/api/block-user', body, headers);
     },
    async unblockUser(id){
        const body = {
            id:id
        }
        const token = TokenService.getToken();
        const headers = {
            Authorization: token,
            'Content-Type': 'application/json'
        }
        return await RequestService.post('/api/unblock-users', body, headers);  
    }
}
export default BlockUserService;