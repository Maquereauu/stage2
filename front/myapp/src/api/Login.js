export const Login = async () => {
    const response = await fetch(
        'http://stage-backend-ashy.vercel.app/user/list', {
            method: 'GET', 
            headers: {
                'Accept': 'application/json', 
                'Content-Type':'application/json'
            }
        }
    )
    const UserList = await response.json()
    return UserList
}