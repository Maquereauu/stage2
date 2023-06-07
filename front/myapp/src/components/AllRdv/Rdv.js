import { InsertRdv } from "../../api/InsertRdv";   
import { UpdateRdv } from "../../api/UpdateRdv";
import { DeleteRdv } from "../../api/DeleteRdv"; 

export async function InsertRdv_(user){
    return await InsertRdv(user) ; 
}
       
export async function UpdateRdv_(user){
    return await UpdateRdv(user) ; 
}

export async function DeleteRdv_(user){
    return await DeleteRdv(user) ; 
}