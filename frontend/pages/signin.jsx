import { Heading } from "../components/heading"
import { Inputfield } from "../components/inputfield"
import { Subheading } from "../components/subheading"
import { Button } from "../components/button"
import { Bottonlink } from "../components/bottonlink"
export function Signin() {
    return(
        <>
            <div className="h-screen bg-slate-300 flex  justify-center">
                <div className="flex flex-col justify-center">
                    <div className="w-80 h-max bg-white text-center rounded-lg px-2 py-2">
                        <Heading label={"Sign in"} />
                        <Subheading label={"Enter your details and log in"}/>
                        <Inputfield label={"Email"} placeholder={"email"}/>
                        <Inputfield label={"Password"} placeholder={"password"}/>
                        <div className="py-2 px-2">
                            <Button label={"Sign in"}  />
                        </div>
                        <Bottonlink label={"Don't have an account?"} to={"/signup"} bottontext={"Signup"} />
                    </div>
                </div>
            </div>
        </>
    )
}

