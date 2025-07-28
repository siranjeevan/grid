import { useDataContext } from "../../Data/ContextAPI";

function DeletePopUp() {
  const {
    rowData,
    setRowData,
    deleteIndexes,
    setDeleteIndexes,
    setOperation
  } = useDataContext();

  const handleConfirmDelete = () => {
    const updatedData = rowData.filter((_, i) => !deleteIndexes.includes(i));
    setRowData(updatedData);
    setDeleteIndexes([]);
    setOperation(""); // Close popup
  };

  const handleCancel = () => {
    setDeleteIndexes([]);
    setOperation(""); // Just close popup
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-[300px] text-center">
        <h2 className="text-lg font-semibold mb-4">Confirm Deletion</h2>
        <p className="mb-6">Are you sure you want to delete the selected row(s)?</p>
        <div className="flex justify-around">
          <button
            onClick={handleConfirmDelete}
            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
          >
            Yes, Delete
          </button>
          <button
            onClick={handleCancel}
            className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeletePopUp;
