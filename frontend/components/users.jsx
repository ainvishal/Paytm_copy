import { useState } from "react";
import {Button} from './button'

export function Users() {
    const [users, setuser] = useState([{
        firstName:'vishal',
        lastName:'aindala',
        _id:1
    },{
        firstName:'vishal',
        lastName:'aindala',
        _id:1
    },{
        firstName:'vishal',
        lastName:'aindala',
        _id:1
    }])

    return(
        <>
            <div className="my-3 py-1 px-2">
                <div className="font-bold py-1">
                    Users
                </div>
                <div className="py-1">
                    <input type="text" placeholder="Search here...." className="border rounded-sm w-full"/>
                </div>
                <div>
                    {users.map(user => <User user={user} key={user._id}/>)}
                </div>
            </div>
        </>
    );
}

function User({user}){
    return(
        <>
            <div className="flex flex-row py-4 px-2 justify-between h-9">
                <div className="flex flex-row">
                   <div className="w-6 h-6 bg-slate-300 rounded-full text-center">{user.firstName.charAt(0)}</div> <div className="px-1">{user.firstName} {user.lastName}</div> 
                </div>
                <div>
                    <Button label={"Send"}  />
                </div>
            </div>
        </>
    )
}