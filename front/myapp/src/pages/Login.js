import { useForm } from "react-hook-form";
import { Login_ } from "../components/login/Get_user"
import { ReactSession } from 'react-client-session';
import md5 from "md5";
export default function LoginPage(props){
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmitLogin = async (data) => {
        const userList = await Login_();
        const password = await userList.filter(userList=>userList.password.match(md5(data["password"])))
        if(userList.filter(user=>user.username.match(data["username"])).length>0 & password.length>0){
            userList.filter(user=>user.username.match(data["username"])).map((user,key) =>{
                if(user.username == data["username"] & user.password == md5(data["password"])){
                    ReactSession.set("username",user.username);
                    window.location.replace('/home')
                }})}
            }
    return <form onSubmit={handleSubmit(onSubmitLogin)}> 
    <h1 className='title stroke'>LOGIN</h1> 
    <div className="min-connect-background flex center vertical gap padding-top">
        <div className="flex center gap vertical">
            <div className='align-center flex vertical gap-'>
            <input placeholder="Nom d'utilisateur" {...register("username")} type="text" id="username"/>
            </div>
        </div>
        <div className="flex center gap vertical">
            <div className='align-center flex vertical gap-'>
            <input className='align-center' {...register("password")} type="password" placeholder="Mot de passe" id="password"/>
            </div>
        </div>
        <div className="center">
            <input type="submit" value="Se connecter"/>
        </div>
    </div>
</form>}