export const UploadPhotos = async (file) => {
    const formData = new FormData();
    formData.append('myFile', file[0]);
    const response = await fetch(
        'http://localhost:4444/photos/upload', {
            method: 'POST', 
            body : formData
        }
    );
    return response;
}