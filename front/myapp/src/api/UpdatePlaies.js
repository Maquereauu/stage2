export const UpdatePlaies = async (Plaies) => {
    const response = await fetch(
        'http://stage-dun.vercel.app/plaies/update', {
            method: 'POST', 
            headers: {
                'Accept': 'application/json', 
                'Content-Type':'application/json'
            },
            body : JSON.stringify(Plaies)
        }
    )
    const PlaiesList = await response.json()
    return PlaiesList
}