import { GetBilan_ } from "../../api/GetBilan";   
       
export async function Bilan_(user){
    return await GetBilan_(user) ; 
}