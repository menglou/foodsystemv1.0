import {MODIFYPWD,LOGINEXITS,LOGIN} from '../constants/manageruserinfo'

//修改密码
export const modifypwd=()=>{
    return{
        type:MODIFYPWD
    }
}

//退出登录
export const loginexits=()=>{
    return{
        type:LOGINEXITS
    }
}
//登录保存登录信息
export const login=(accout,pwd)=>{
    return{
        type:LOGIN,
        account:accout,
        pwd:pwd,
    }
}