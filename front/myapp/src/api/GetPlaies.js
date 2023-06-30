export const GetPlaies_ = async () => {
    const response = await fetch(
        'http://stage-dun.vercel.app/plaies/list', {
            method: 'GET', 
            headers: {
                'Accept': 'application/json', 
                'Content-Type':'application/json'
            }
        }
    )
    const PlaiesList = await response.json()
    return PlaiesList
}