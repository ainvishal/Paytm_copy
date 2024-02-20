import { Heading } from "../components/heading"
import { Subheading } from "../components/subheading"
import { Inputfield } from "../components/inputfield"
import { Button } from "../components/button"
import { Bottonlink } from "../components/bottonlink"
import { useState } from "react"
import {useNavigate} from 'react-router-dom'
import axios from 'axios';


export function Signup() {
  const [firstName, setfname] = useState('');
  const [lastName, setlname] = useState('');
  const [password, setpass] = useState('');
  const [email, setemail] = useState('');
  const [userExits, setexits] = useState(false);
  const history = useNavigate();


    return(
        <>
          <div className="bg-slate-300 h-screen flex justify-center">
            <div className="flex flex-col justify-center ">
              <div className="w-80 h-max bg-white text-center rounded-lg px-2 py-2 ">
                <Heading label="Sign Up"/>
                <Subheading label="Enter your information to create an account" />
                <Inputfield label="First Name" placeholder="first name" type="text" value={firstName} onchange={(e) => {setfname(e.target.value)}}/>
                <Inputfield label="Last Name" placeholder="last name" value={lastName} onchange={(e) => {setlname(e.target.value)}}/>
                <Inputfield label="Email" placeholder="Email" value={email} onchange={(e) => {setemail(e.target.value)}}/>
                <Inputfield label="Password" placeholder="password" type="password" value={password} onchange={(e) => {setpass(e.target.value)}}/>
                <div className="py-2 px-2">
                  <Button label="Sign up"   onclick={ async() => {
                      const responce = await axios.post(`https://paytm-copy-server.vercel.app/api/v1/user/signup`,{
                        email:email,
                        firstName:firstName,
                        lastName:lastName,
                        password:password
                      })
                      if(responce.data.token ){
                        localStorage.setItem('responce', responce.data.token);
                        localStorage.setItem('name', responce.data.name)
                        history('/dashbord')
                      }
                      setexits(responce.data.exits);
                      
                  }}/>
                </div>
                <Bottonlink label="are you already an existing user?" bottontext="Sign in" to={"/"}/>
                <div className="px-2">
                  {userExits? "user already exits": ''}
              </div>
              </div>
            </div>
          </div>
        </>
    )
}
