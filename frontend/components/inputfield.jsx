
export function Inputfield({label, placeholder, value, onchange}) {
    return(
        <div >
            <div className="text-sm text-left px-2 py-2 font-bold">
                {label}:
            </div>
            <input type="text" placeholder={placeholder} value={value} onChange={onchange} className="w-full px-2 border rounded-sm "/>
        </div>
        
    );
}