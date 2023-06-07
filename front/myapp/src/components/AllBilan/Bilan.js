import { InsertBilan } from "../../api/InsertBilan";   
import { UpdateBilan } from "../../api/UpdateBilan";
import { DeleteBilan } from "../../api/DeleteBilan"; 

export async function InsertBilan_(user){
    return await InsertBilan(user) ; 
}
       
export async function UpdateBilan_(user){
    return await UpdateBilan(user) ; 
}

export async function DeleteBilan_(user){
    return await DeleteBilan(user) ; 
}