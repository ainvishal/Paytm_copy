import { useState, useEffect } from "react";
import {useNavigate} from 'react-router-dom'
import {Button} from './button'
import axios from 'axios'

export function Users() {
    const [users, setuser] = useState([])
    const [name, setname] = useState('')
 

    useEffect(() => {
        async function getUsers() {
            const responce = await axios.get(`http://localhost:3000/api/v1/user/bulk` ,{
                params: {
                    filter: name
                }
            })
            setuser(responce.data.user)
        }
        getUsers()
    }, [name])

    return(
        <>
            <div className="my-3 py-1 px-2">
                <div className="font-bold py-1">
                    Users
                </div>
                <div className="py-1">
                    <input type="text" placeholder="Search here...." value={name} onChange={(e) => {setname(e.target.value)}} className="border rounded-sm w-full"/>
                </div>
                <div>
                    {users.map(user => <User user={user} key={user._id}/>)}
                </div>
            </div>
        </>
    );
}

function User({user}){
    const navigate = useNavigate()
    return(
        <>
            <div className="flex flex-row py-4 px-2 justify-between h-9">
                <div className="flex flex-row">
                   <div className="w-6 h-6 bg-slate-300 rounded-full text-center">{user.firstName.charAt(0)}</div> <div className="px-1">{user.firstName} {user.lastName}</div> 
                </div>
                <div>
                    <Button label={"Send"}  onclick={() => {
                        navigate(`/send?id=${user._id}&name=${user.firstName}`)
                    }}/>
                </div>
            </div>
        </>
    )
}