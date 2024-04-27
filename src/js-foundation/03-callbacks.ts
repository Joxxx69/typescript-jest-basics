
interface User{
    id: number;
    name: String;
}


const users:User[] = [
    {
        id: 1,
        name:'Jane Doe'
    },
    {
        id: 2,
        name:'Jane Doe'
    }
]

export function getUserById(id:number, callback:(err?:string, user?:User)=>void) {

    const user = users.find((user) => user.id === id);

    return (!user) ? callback(`User not found with id ${id}`) : callback(undefined, user);
}

