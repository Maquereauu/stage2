export const GetPatient_ = async () => {
    const response = await fetch(
        'https://stage2-backend.vercel.app/patient/list', {
            method: 'GET', 
            headers: {
                'Accept': 'application/json', 
                'Content-Type':'application/json'
            }
        }
    )
    const PatientList = await response.json()
    return PatientList
}