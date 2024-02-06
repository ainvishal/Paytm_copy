import { Link } from "react-router-dom";

export function Bottonlink({label, bottontext, to}) {
    return(
        <>
            <div className="text-sm flex justify-center  px-1">
                <div>
                    {label}
                </div>
                <Link to={to} className="cursor-pointer underline" >
                    {bottontext}
                </Link>
            </div>
        </>
    );
}