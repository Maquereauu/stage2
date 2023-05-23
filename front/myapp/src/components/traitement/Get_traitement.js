import { GetTraitement_ } from "../../api/GetTraitement";   
       
export async function Traitement_(user){
    return await GetTraitement_(user) ; 
}