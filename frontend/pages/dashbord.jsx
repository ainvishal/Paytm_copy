import { Appbar } from "../components/Appbar"
import { Balence } from "../components/balence"
import { Users } from "../components/users"
export function Dashbord() {
    return(
        <>
            <div >
                <Appbar/>
                <Balence />
                <Users />
            </div>
        </>
    )
}

