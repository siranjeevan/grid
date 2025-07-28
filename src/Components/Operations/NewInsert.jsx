import NewDelete from "./NewDelete";
import { useDataContext } from "../../Data/ContextAPI";

function HandleOperation() {
  const { setOperation } = useDataContext();

  return (
    <div className="flex gap-4 mt-4">
      <button
        onClick={() => setOperation("insert")}
        className="bg-blue-500 text-white px-4 py-1 rounded"
      >
        ➕ Insert
      </button>
      <NewDelete />
    </div>
  );
}

export default HandleOperation;
