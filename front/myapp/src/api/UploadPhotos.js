export const UploadPhotos = async (file) => {
    const formData = new FormData();
    formData.append('myFile', file[0]);
    const response = await fetch(
        'http://stage-dun.vercel.app/photos/upload', {
            method: 'POST', 
            body : formData
        }
    );
    return response;
}