export function Button({label, onclick}) {
    return(
      <>
        <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-xs px-4 py-1.8 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700" onClick={onclick}>
           {label} 
         </button>
      </>  
    );
}