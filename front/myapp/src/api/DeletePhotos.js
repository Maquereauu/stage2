export const DeletePhotos = async (photos) => {
    const response = await fetch(
        'https://stage2-backend.vercel.app/photos/delete', {
            method: 'POST', 
            headers: {
                'Accept': 'application/json', 
                'Content-Type':'application/json'
            },
            body : JSON.stringify(photos)
        }
    )
    const PhotosList = await response.json()
    return PhotosList
}