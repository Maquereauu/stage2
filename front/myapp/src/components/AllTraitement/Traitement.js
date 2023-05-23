import { InsertTraitement } from "../../api/InsertTraitement";   
import { UpdateTraitement } from "../../api/UpdateTraitement";
import { DeleteTraitement } from "../../api/DeleteTraitement"; 

export async function InsertTraitement_(user){
    return await InsertTraitement(user) ; 
}
       
export async function UpdateTraitement_(user){
    return await UpdateTraitement(user) ; 
}

export async function DeleteTraitement_(user){
    return await DeleteTraitement(user) ; 
}