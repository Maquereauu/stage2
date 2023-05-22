import { InsertPatient } from "../../api/InsertPatient";   
       
export async function InsertPatient_(user){
    return await InsertPatient(user) ; 
}