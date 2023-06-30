export const UpdatePhotos = async (Photos) => {
    const response = await fetch(
        'http://stage-dun.vercel.app/photos/update', {
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