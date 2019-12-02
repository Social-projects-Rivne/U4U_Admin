import RequestService from './request.service';
import {TokenService} from './token.service';
 
const BlockUserService = {
    async blockUser(reason,blockedUserInfo){
            const body = {
                reason,
                id:blockedUserInfo.id,
                name:blockedUserInfo.name,
                ban_start: Date.now()
            }
            const token = TokenService.getToken();
            const headers = {
                Authorization: token,
                'Content-Type': 'application/json'
            }
            await RequestService.post('/api/block-user', body, headers);
       
    },
    async unblockUser(userInfo){
        const body = {
            id: userInfo.user_id
        }
        const token = TokenService.getToken();
        const headers = {
            Authorization: token,
            'Content-Type': 'application/json'
        }
        await RequestService.post('/api/block-user', body, headers);
       
    }
}
export default BlockUserService;