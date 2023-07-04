export const GetPatient_ = async () => {
    const response = await fetch(
        'http://localhost:4444/patient/list', {
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