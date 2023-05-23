import { useForm } from "react-hook-form";
import { UpdateTraitement_ } from "../../components/AllTraitement/Traitement";
export function TraitementUpdate(props) {
    const { register, handleSubmit } = useForm();
    const onSubmitUpdateTraitement = async (data) => {
        UpdateTraitement_(data)
        window.location.replace('/Traitements');
    }
    return <form onSubmit={handleSubmit(onSubmitUpdateTraitement)} className="align-center flex vertical center" >
        <h1 className="title flex2 center margin-top--">Traitement</h1>
        <div className="flex2 vertical center">
            <h2 className='title top left align-center'>Information</h2>
            <div className="flex2 margin-top--- vertical align-center">
                <div className="flex gap">
                    <input type="hidden" {...register("id")} id="id" defaultValue={props.traitementInfo.id}/>
                    <input className='background my-account- margin-top--- margin-right--' {...register("traitement")} defaultValue={props.traitementInfo.nom} placeholder="traitement" type="text" id="traitement" />
                </div>
            </div>
            <div className="flex2 center margin-top--">
                <input type="submit" value="Modifier le Traitement"/>
            </div>
        </div>
    </form>
}