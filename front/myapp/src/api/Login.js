export const Login = async () => {
    const response = await fetch(
        'https://stage2-backend.vercel.app/user/list', {
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