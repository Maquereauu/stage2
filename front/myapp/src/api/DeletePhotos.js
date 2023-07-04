export const DeletePhotos = async (photos) => {
    const response = await fetch(
        'http://localhost:4444/photos/delete', {
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