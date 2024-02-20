
export function Inputfield({label, placeholder, type, value, onchange}) {
    return(
        <div >
            <div className="text-sm text-left px-2 py-2 font-bold">
                {label}:
            </div>
            <input type={type} placeholder={placeholder} value={value} onChange={onchange} className="w-full px-2 border rounded-sm "/>
        </div>
        
    );
}