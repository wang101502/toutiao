import axios from '@/utils/request'

export function getInfo(mobile, code) {
    return axios({
        method: 'post',
        url: '/authorizations',
        data: {
            mobile,
            code
        }
    })
}