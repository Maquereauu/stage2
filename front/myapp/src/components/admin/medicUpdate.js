import { useForm } from "react-hook-form";
import { UpdatePlaies_ } from "../../components/AllPlaies/Plaies";
export function MedicUpdate(props) {
    const { register, handleSubmit } = useForm();
    const onSubmitUpdatePlaies = async (data) => {
        UpdatePlaies_(data)
        window.location.replace('/patients');
    }
    return <form onSubmit={handleSubmit(onSubmitUpdatePlaies)} className="align-center flex vertical center" >
        <h1 className="title flex2 center margin-top--">Plaies</h1>
        <div className="flex2 vertical center">
            <h2 className='title top left align-center'>Information</h2>
            <div className="flex2 margin-top--- vertical align-center">
                <div className="flex gap">
                    <input type="hidden" {...register("id")} id="id" defaultValue={props.plaiesInfo.id}/>
                    <input className='background my-account- margin-top--- margin-right--' {...register("text")} defaultValue={props.plaiesInfo.text} placeholder="text" type="text" id="text" />
                </div>
            </div>
            <div className="flex2 center margin-top--">
                <input type="submit" value="Modifier le Plaies"/>
            </div>
        </div>
    </form>
}