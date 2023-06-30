export const DeleteBilan = async (Bilan) => {
    const response = await fetch(
        'http://stage-dun.vercel.app/bilan/delete', {
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