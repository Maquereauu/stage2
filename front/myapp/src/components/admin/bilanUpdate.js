import { useForm } from "react-hook-form";
import { UpdateBilan_ } from "../../components/AllBilan/Bilan";
export function BilanUpdate(props) {
    const { register, handleSubmit } = useForm();
    const onSubmitUpdateBilan = async (data) => {
        UpdateBilan_(data)
        window.location.replace('/patients');
    }
    return <form onSubmit={handleSubmit(onSubmitUpdateBilan)} className="align-center flex vertical center" >
        <h1 className="title flex2 center margin-top--">Bilan</h1>
        <div className="flex2 vertical center">
            <h2 className='title top left align-center'>Information</h2>
            <div className="flex2 margin-top--- vertical align-center">
                <div className="flex gap">
                    <input type="hidden" {...register("id")} id="id" defaultValue={props.bilanInfo.id}/>
                    <input className='background my-account- margin-top--- margin-right--' {...register("text")} defaultValue={props.bilanInfo.text} placeholder="text" type="text" id="text" />
                </div>
            </div>
            <div className="flex2 center margin-top--">
                <input type="submit" value="Modifier le Bilan"/>
            </div>
        </div>
    </form>
}