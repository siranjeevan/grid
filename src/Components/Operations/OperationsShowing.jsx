import { useDataContext } from "../../Data/ContextAPI"
function OperationShowing() {
    const {setOperation } = useDataContext();
    return (
        <>
            <button onClick={() => { setOperation("insert"); console.log("click") }} className="bg-blue-500 p-3 w-30 rounded-2xl mx-10 text-white font-bold " >Insert ⊕ </button>
            <button onClick={() => { setOperation("delete") }} className="bg-red-500 p-3 w-30 rounded-2xl text-white font-bold " >Delete 🗑️</button>
        </>
    )
}

export default OperationShowing;