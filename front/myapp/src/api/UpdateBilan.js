export const UpdateBilan = async (Bilan) => {
    const response = await fetch(
        'https://stage-dun.vercel.app/bilan/update', {
            method: 'POST', 
            headers: {
                'Accept': 'application/json', 
                'Content-Type':'application/json'
            },
            body : JSON.stringify(Bilan)
        }
    )
    const BilanList = await response.json()
    return BilanList
}