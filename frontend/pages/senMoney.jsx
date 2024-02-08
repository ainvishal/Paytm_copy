import { Button } from "../components/button"

export function Sendmoney() {
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
                                A
                            </div>
                            <div className="pl-3">
                                Friends Name
                            </div>
                        </div>
                        <div className="pt-2  pb-2 ">
                            <input type="number" id="amount" placeholder="amount" className="w-full rounded-sm border" />
                        </div>
                        <div className="text-center py-3">
                            <Button label={"Initiate Transfer"}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

