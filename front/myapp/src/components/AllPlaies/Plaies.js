import { InsertPlaies } from "../../api/InsertPlaies";   
import { UpdatePlaies } from "../../api/UpdatePlaies";
import { DeletePlaies } from "../../api/DeletePlaies"; 

export async function InsertPlaies_(user){
    return await InsertPlaies(user) ; 
}
       
export async function UpdatePlaies_(user){
    return await UpdatePlaies(user) ; 
}

export async function DeletePlaies_(user){
    return await DeletePlaies(user) ; 
}