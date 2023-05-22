import { useForm } from "react-hook-form";
import { InsertPatient_ } from "../../components/InsertPatient/Patient";

export function PatientInsert(props) {
    const { register, handleSubmit } = useForm();
    const onSubmitInsertPatient = async (data) => {
        InsertPatient_(data)
        console.log(data)
        // window.location.replace('/patients');
    }
    return <form onSubmit={handleSubmit(onSubmitInsertPatient)} className="align-center flex vertical center" >
        <h1 className="title flex2 center margin-top--">Patient</h1>
        <div className="flex2 vertical center">
            <h2 className='title top left align-center'>Information</h2>
            <div className="flex2 margin-top--- vertical align-center">
                <div className="flex gap">
                    <input className='background my-account- margin-top--- margin-right--' {...register("nom")} placeholder="Nom" type="text" id="nom" />
                    <input className='background my-account- margin-top---' {...register("prenom")} placeholder="prenom" type="text" id="prenom" />
                </div>
                <div className="flex gap">
                    <input className='background my-account- margin-top--- margin-right--' {...register("adresse")} placeholder="adresse" type="text" id="adresse" />
                    <input className='background my-account- margin-top---' {...register("tel")} placeholder="tel" type="text" id="tel" />

                </div>
                <div className="flex gap">
                    <input className='background my-account- margin-top--- margin-right--' {...register("tel_proche")} placeholder="tel_proche" type="text" id="tel_proche" />
                    <input className='background my-account- margin-top---' {...register("medecin")} placeholder="medecin" type="text" id="medecin" />
                </div>
            </div>
            <div className="flex2 center margin-top--">
                <input type="submit" value="Insérer le nouveau patient" />
            </div>
        </div>
    </form>
}