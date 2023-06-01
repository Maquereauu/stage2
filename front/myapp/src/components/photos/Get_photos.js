import { GetPhotos_ } from "../../api/GetPhotos";   
       
export async function Photos_(user){
    return await GetPhotos_(user) ; 
}