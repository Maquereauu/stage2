import { useForm } from "react-hook-form";
import { UpdateTraitement_ } from "../../components/AllTraitement/Traitement";
export function TraitementUpdate(props) {
    const { register, handleSubmit } = useForm();
    const onSubmitUpdateTraitement = async (data) => {
        await UpdateTraitement_(data)
        window.location.replace('/patients');
    }
    return <form onSubmit={handleSubmit(onSubmitUpdateTraitement)} className="align-center flex vertical center" >
        <h1 className="title flex2 center margin-top--">Traitement</h1>
        <div className="flex2 vertical center">
            <h2 className='title top left align-center'>Information</h2>
            <div className="flex2 margin-top--- vertical align-center">
                <div className="flex gap">
                    <input type="hidden" {...register("id")} id="id" defaultValue={props.traitementInfo.id}/>
                    <input required className='background my-account- margin-top--- margin-right--' {...register("medicament")} defaultValue={props.traitementInfo.medicament} placeholder="medicament" type="text" id="medicament" />
                    <input required className='background my-account- margin-top--- margin-right--' {...register("dose_matin")} defaultValue={props.traitementInfo.dose_matin} placeholder="dose matin" type="text" id="dose" />
                </div>
                <div className="flex gap">
                    <input required className='background my-account- margin-top--- margin-right--' {...register("dose_midi")} defaultValue={props.traitementInfo.dose_midi} placeholder="dose midi" type="text" id="dose" />
                    <input required className='background my-account- margin-top--- margin-right--' {...register("dose_soir")} defaultValue={props.traitementInfo.dose_soir} placeholder="dose soir" type="text" id="dose" />
                </div>
                <div className="flex gap">
                    <input required className='background my-account- margin-top--- margin-right--' {...register("date_debut")} defaultValue={props.traitementInfo.date_debut} placeholder="date debut" type="text" id="date_debut" />
                    <input required className='background my-account- margin-top--- margin-right--' {...register("date_fin")} defaultValue={props.traitementInfo.date_fin} placeholder="date fin" type="text" id="date_fin" />
                </div>
            </div>
            <div className="flex2 center margin-top--">
                <input type="submit" value="Modifier le Traitement"/>
            </div>
        </div>
    </form>
}