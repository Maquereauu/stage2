export const DeletePatient = async (patient) => {
    const response = await fetch(
        'https://stage-dun.vercel.app/patient/delete', {
            method: 'POST', 
            headers: {
                'Accept': 'application/json', 
                'Content-Type':'application/json'
            },
            body : JSON.stringify(patient)
        }
    )
    const PatientList = await response.json()
    return PatientList
}