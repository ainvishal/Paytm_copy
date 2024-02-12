import { useState, useEffect } from "react"
import axios from 'axios'
export function Balence() {
    const [balence, setbalence] = useState(0);
    useEffect( () => {
        async function getResponce() {
            const userid = localStorage.getItem('responce')
            const responce = await axios.get(`https://paytm-copy-server.vercel.app/api/v1/account/balence`, {
                params: {
                    id: userid
                }
            },{
                headers: {
                  'Content-Type': 'application/json',
                  'Access-Control-Allow-Origin': '*',
                  'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Z-Key',
                  'Access-Control-Allow-Methods': 'GET, HEAD, POST, PUT, DELETE, OPTIONS'
                }
              })
            setbalence(responce.data.balence)
        }
        getResponce()
    }, [balence])
    return(
        <>
            <div className="flex flex-row justify-start h-10 px-4">
                <div className="py-1 px-1">   
                    Your Balence {balence}
                </div>
            </div>
        </>
    );
}