import { useDataContext } from "../../Data/ContextAPI";

function NewDelete() {
  const { gridApi, setOperation, setDeleteIndexes } = useDataContext();

  const handleDeleteClick = () => {
    if (!gridApi) return;
    const selectedNodes = gridApi.getSelectedNodes();
    const selectedIndexes = selectedNodes.map(node => node.rowIndex);
    setDeleteIndexes(selectedIndexes);
    setOperation("delete"); 
  };

  return (
    <button
      className="w-20 text-red-600 text-xl hover:text-red-800"
      onClick={handleDeleteClick}
    >
      🗑️
    </button>
  );
}

export default NewDelete;
