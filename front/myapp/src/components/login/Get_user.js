import { Login } from "../../api/Login";   
       
export async function Login_(user){
    return await Login(user) ; 
}