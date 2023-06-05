export const DeletePlaies = async (Plaies) => {
    const response = await fetch(
        'http://localhost:4444/plaies/delete', {
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