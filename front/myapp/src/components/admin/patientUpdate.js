import { useForm } from "react-hook-form";
import { UpdatePatient_ } from "../../components/AllPatient/Patient";
export function PatientUpdate(props) {
    const { register, handleSubmit } = useForm();
    const onSubmitUpdatePatient = async (data) => {
        UpdatePatient_(data)
        window.location.replace('/patients');
    }
    return <form onSubmit={handleSubmit(onSubmitUpdatePatient)} className="align-center flex vertical center" >
        {console.log(props.patientInfo.id)}
        <h1 className="title flex2 center margin-top--">Patient</h1>
        <div className="flex2 vertical center">
            <h2 className='title top left align-center'>Information</h2>
            <div className="flex2 margin-top--- vertical align-center">
                <div className="flex gap">
                    <input type="hidden" {...register("id")} id="id" defaultValue={props.patientInfo.id}/>
                    <input className='background my-account- margin-top--- margin-right--' {...register("nom")} defaultValue={props.patientInfo.nom} placeholder="Nom" type="text" id="nom" />
                    <input className='background my-account- margin-top---' {...register("prenom")} defaultValue={props.patientInfo.prenom} placeholder="prenom" type="text" id="prenom" />
                </div>
                <div className="flex gap">
                    <input className='background my-account- margin-top--- margin-right--' {...register("adresse")} defaultValue={props.patientInfo.adresse} placeholder="adresse" type="text" id="adresse" />
                    <input className='background my-account- margin-top---' {...register("tel")} defaultValue={props.patientInfo.tel} placeholder="tel" type="text" id="tel" />

                </div>
                <div className="flex gap">
                    <input className='background my-account- margin-top--- margin-right--' {...register("tel_proche")} defaultValue={props.patientInfo.tel_proche} placeholder="tel_proche" type="text" id="tel_proche" />
                    <input className='background my-account- margin-top---' {...register("medecin")} defaultValue={props.patientInfo.medecin} placeholder="medecin" type="text" id="medecin" />
                </div>
            </div>
            <div className="flex2 center margin-top--">
                <input type="submit" value="Modifier le patient"/>
            </div>
        </div>
    </form>
}