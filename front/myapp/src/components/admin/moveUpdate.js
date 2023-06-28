import { useForm } from "react-hook-form";
import { UpdateRdv_ } from "../../components/AllRdv/Rdv";
export function MoveUpdate(props) {
    const { register, handleSubmit } = useForm();
    const onSubmitUpdateRdv = async (data) => {
        UpdateRdv_(data)
        if(props.isPlanning)
        {window.location.replace('/planning');}
        else{window.location.replace('/patients');}
    }
    return <form onSubmit={handleSubmit(onSubmitUpdateRdv)} className="align-center flex vertical center" >
        <h1 className="title flex2 center margin-top--">Mouvement</h1>
        <div className="flex2 vertical center">
            <h2 className='title top left align-center'>Information</h2>
            <div className="flex2 margin-top--- vertical align-center">
                <div className="flex gap">
                    <input type="hidden" {...register("id")} id="id" defaultValue={props.rdvInfo.id}/>
                    <input className='background my-account- margin-top--- margin-right--' {...register("text")} defaultValue={props.rdvInfo.text} placeholder="text" type="text" id="text" />
                </div>
                <label>Date
            <input required={true} className='background my-account- margin-top--- margin-right--' {...register("date")} defaultValue={props.rdvInfo.date} placeholder="date" type="date" id="date" />
            </label>
            </div>
            <div className="flex2 center margin-top--">
                <input type="submit" value="Modifier le mouvement"/>
            </div>
        </div>
    </form>
}