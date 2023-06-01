import { InsertPhotos } from "../../api/InsertPhotos";   
import { UpdatePhotos } from "../../api/UpdatePhotos";
import { DeletePhotos } from "../../api/DeletePhotos"; 
import { UploadPhotos } from "../../api/UploadPhotos"; 

export async function InsertPhotos_(user){
    return await InsertPhotos(user) ; 
}
       
export async function UpdatePhotos_(user){
    return await UpdatePhotos(user) ; 
}

export async function DeletePhotos_(user){
    return await DeletePhotos(user) ; 
}

export async function UploadPhotos_(user){
    return await UploadPhotos(user) ; 
}