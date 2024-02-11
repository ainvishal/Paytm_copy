import { useState, useEffect } from "react"
import axios from 'axios'
export function Balence() {
    const [balence, setbalence] = useState(0);
    useEffect( () => {
        async function getResponce() {
            const userid = localStorage.getItem('responce')
            const responce = await axios.get(`${window.location.origin}/api/v1/account/balence`, {
                params: {
                    id: userid
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