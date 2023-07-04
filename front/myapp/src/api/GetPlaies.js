export const GetPlaies_ = async () => {
    const response = await fetch(
        'http://localhost:4444/plaies/list', {
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