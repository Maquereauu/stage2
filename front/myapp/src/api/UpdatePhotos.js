export const UpdatePhotos = async (Photos) => {
    const response = await fetch(
        'http://localhost:4444/photos/update', {
            method: 'POST', 
            headers: {
                'Accept': 'application/json', 
                'Content-Type':'application/json'
            },
            body : JSON.stringify(Photos)
        }
    )
    const PhotosList = await response.json()
    return PhotosList
}