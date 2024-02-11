import { Button } from "../components/button"
import { useEffect, useState } from "react"
import { useSearchParams, useNavigate } from "react-router-dom"
import axios from 'axios'

export function Sendmoney() {
    const [searchUrl] = useSearchParams()
    const user = searchUrl.get('name')
    const userid = localStorage.getItem('responce')
    const toid = searchUrl.get('id')
    const [amount, setamount] = useState()
    const [balence, setbalence] = useState(0)
    const navigate = useNavigate()
    useEffect(() => {
        async function getbalence() {
            const balenceResponce = await axios.get("http://localhost:3000/api/v1/account/balence", {
                params: {
                    id:userid
                }
            })
            setbalence(balenceResponce.data.balence)
        }
        getbalence()
    }, [ userid ,balence])

    return(
        <>
            <div className="h-screen flex justify-center ">
                <div className="flex flex-col h-full justify-center">
                    <div className="border rounded shadow-lg w-96 h-60  px-2">
                        <div className="flex justify-center h-24">
                            <h2 className="pt-8 font-bold">Send Money</h2>
                        </div>
                        <div className="flex flex-row">
                            <div className="w-6 h-6 bg-slate-300 rounded-full text-center">
                                {user.charAt(0)}
                            </div>
                            <div className="pl-3">
                                {user}
                            </div>
                        </div>
                        <div className="pt-2  pb-2 ">
                            <input type="number" id="amount" placeholder="amount" value={amount} onChange={(e) => {setamount(e.target.value)}} className="w-full rounded-sm border" />
                        </div>
                        <div className="text-center py-3">
                            <Button label={"Initiate Transfer"} onclick={ async() => {


                                const transferResponce = await axios.post(`http://localhost:3000/api/v1/account/transfer`, {
                                    userid: userid,
                                    balence:balence,
                                    to:toid,
                                    amount:parseInt(amount)
                                })
                                console.log(transferResponce.data)
                                navigate('/dashbord')
                            }}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

