import { Heading } from "../components/heading"
import { Inputfield } from "../components/inputfield"
import { Subheading } from "../components/subheading"
import { Button } from "../components/button"
import { Bottonlink } from "../components/bottonlink"
import { useState } from "react"
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

export function Signin() {
    const [email, setmail] = useState();
    const [password, setpassword] = useState();
    const [userexits, setuser] = useState(false);
    const navigate = useNavigate();
    return(
        <>
            <div className="h-screen bg-slate-300 flex  justify-center">
                <div className="flex flex-col justify-center">
                    <div className="w-80 h-max bg-white text-center rounded-lg px-2 py-2">
                        <Heading label={"Sign in"} />
                        <Subheading label={"Enter your details and log in"}/>
                        <Inputfield label={"Email"} value={email} onchange={e => setmail(e.target.value)} placeholder={"email"}/>
                        <Inputfield label={"Password"} value={password} onchange={e => setpassword(e.target.value)} placeholder={"password"}/>
                        <div className="py-2 px-2">
                            <Button label={"Sign in"} onclick={ async() => {
                                const responce = await axios.post(`http://localhost:3000/api/v1/user/signin`, {
                                    email: email,
                                    password: password
                                })
                                if( responce.data.token){
                                    localStorage.setItem('responce', responce.data.token);
                                    navigate('/dashbord')
                                }
                                setuser(responce.data.exits)
                            }} />
                        </div>
                        <Bottonlink label={"Don't have an account?"} to={"/signup"} bottontext={"Signup"} />
                        <div className="px-2">
                            {userexits?"user doesn't exits":''}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

