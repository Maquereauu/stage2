export const GetPhotos_ = async () => {
    const response = await fetch(
        'http://localhost:4444/photos/list', {
            method: 'GET', 
            headers: {
                'Accept': 'application/json', 
                'Content-Type':'application/json'
            }
        }
    )
    const PhotosList = await response.json()
    return PhotosList
}