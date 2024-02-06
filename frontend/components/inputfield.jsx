
export function Inputfield({label, placeholder}) {
    return(
        <div >
            <div className="text-sm text-left px-2 py-2 font-bold">
                {label}:
            </div>
            <input type="text" placeholder={placeholder} className="w-full px-2 border rounded-sm "/>
        </div>
        
    );
}