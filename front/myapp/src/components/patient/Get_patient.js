import { GetPatient_ } from "../../api/GetPatient";   
       
export async function Patient_(user){
    return await GetPatient_(user) ; 
}