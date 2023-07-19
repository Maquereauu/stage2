export const InsertBilan = async (Bilan) => {
    const response = await fetch(
        'https://stage2-backend.vercel.app/bilan/insert', {
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