export const GetPhotos_ = async () => {
    const response = await fetch(
        'http://stage-dun.vercel.app/photos/list', {
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