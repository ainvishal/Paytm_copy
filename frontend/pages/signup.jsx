import { Heading } from "../components/heading"
import { Subheading } from "../components/subheading"
import { Inputfield } from "../components/inputfield"
import { Button } from "../components/button"
import { Bottonlink } from "../components/bottonlink"
export function Signup() {
    return(
        <>
          <div className="bg-slate-300 h-screen flex justify-center">
            <div className="flex flex-col justify-center ">
              <div className="w-80 h-max bg-white text-center rounded-lg px-2 py-2 ">
                <Heading label="Sign Up"/>
                <Subheading label="Enter your information to create an account" />
                <Inputfield label="First Name" placeholder="first name"/>
                <Inputfield label="Last Name" placeholder="last name"/>
                <Inputfield label="Email" placeholder="Email"/>
                <Inputfield label="Password" placeholder="password"/>
                <div className="py-2 px-2">
                  <Button label="Sign up" />
                </div>
                <Bottonlink label="are you already an existing user?" bottontext="Sign in" to={"/signin"}/>
              </div>
            </div>
          </div>
        </>
    )
}
