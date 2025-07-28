import { useState } from "react";
import { useDataContext } from "../../Data/ContextAPI";

function Delete(){

    const { rowData, setRowData } = useDataContext();
    const [deleteIndex, setDeleteIndex] = useState("");

    function handleChange(e) {
        setDeleteIndex(e.target.value);
    }
    function handleSubmit(e) {
        e.preventDefault();
        const index = parseInt(deleteIndex, 10) - 1;

        if (index >= 0 && index < rowData.length) {
            setRowData((prev) => prev.filter((_, i) => i !== index));
            setDeleteIndex("");
        } else {
            alert("Invalid index. Please enter a valid S.No.");
        }
    }
    const {setOperation } = useDataContext();

    return(
        <>
         <div className="w-full h-10 flex items-center flex-row shadow-lg bg-gray-200 font-bold justify-start p-10">
            <button onClick={()=> {setOperation("back")}} className="bg-red-600 p-2 w-20 rounded-4xl -ml-4 mr-5">back</button>
            <form onSubmit={handleSubmit}>
                <label>Enter Your Deleted Value S.No :  </label>
                <input type="text" value={deleteIndex} onChange={handleChange}  name="make" placeholder="Enter" className="w-40 bg-gray-300 p-1 rounded-[10px] text-center ml-2 " />

                <button type="submit" className="bg-blue-500 text-white p-1 w-19  rounded-[10px] ml-2 ">Delete</button>
            </form>
         </div>
        </>
    )
}
export default Delete;