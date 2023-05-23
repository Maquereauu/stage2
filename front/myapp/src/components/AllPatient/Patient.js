import { InsertPatient } from "../../api/InsertPatient";   
import { UpdatePatient } from "../../api/UpdatePatient";
import { DeletePatient } from "../../api/DeletePatient"; 

export async function InsertPatient_(user){
    return await InsertPatient(user) ; 
}
       
export async function UpdatePatient_(user){
    return await UpdatePatient(user) ; 
}

export async function DeletePatient_(user){
    return await DeletePatient(user) ; 
}