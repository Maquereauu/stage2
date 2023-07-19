export const GetBilan_ = async () => {
    const response = await fetch(
        'https://stage2-backend.vercel.app/bilan/list', {
            method: 'GET', 
            headers: {
                'Accept': 'application/json', 
                'Content-Type':'application/json'
            }
        }
    )
    const BilanList = await response.json()
    return BilanList
}