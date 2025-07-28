import { useState } from "react";
import { useDataContext } from "../../Data/ContextAPI.jsx";

function InsertPopUp() {
  const { setRowData, setOperation } = useDataContext();

  const [formData, setFormData] = useState({
    model: "",
    make: "",
    price: "",
    electric: false,
    month: "",
  });

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setRowData((prev) => [...prev, formData]);
    setFormData({
      model: "",
      make: "",
      price: "",
      electric: false,
      month: "",
    });
    setOperation(""); // close popup
  }

  return (
    <div className="absolute top-24 left-1/2 transform -translate-x-1/2 z-50">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-xl border border-gray-300 rounded-xl px-6 py-5 w-[400px] flex flex-col gap-3 text-sm"
      >
        <h2 className="text-xl font-bold text-gray-700 mb-2 text-center">Insert Car Details</h2>

        <div className="flex flex-col">
          <label>Make:</label>
          <input
            name="make"
            value={formData.make}
            onChange={handleChange}
            className="border px-3 py-1 rounded"
            placeholder="Enter make"
          />
        </div>

        <div className="flex flex-col">
          <label>Model:</label>
          <input
            name="model"
            value={formData.model}
            onChange={handleChange}
            className="border px-3 py-1 rounded"
            placeholder="Enter model"
          />
        </div>

        <div className="flex flex-col">
          <label>Price:</label>
          <input
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="border px-3 py-1 rounded"
            placeholder="Enter price"
          />
        </div>

        <div className="flex items-center gap-2">
          <label>Electric:</label>
          <input
            type="checkbox"
            name="electric"
            checked={formData.electric}
            onChange={handleChange}
            className="w-4 h-4"
          />
        </div>

        <div className="flex flex-col">
          <label>Month:</label>
          <input
            name="month"
            value={formData.month}
            onChange={handleChange}
            className="border px-3 py-1 rounded"
            placeholder="Enter month"
          />
        </div>

        <div className="flex justify-end gap-3 mt-4">
          <button
            type="button"
            onClick={() => setOperation("")}
            className="bg-gray-300 px-4 py-1 rounded hover:bg-gray-400"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-green-600 text-white px-4 py-1 rounded hover:bg-green-700"
          >
            Insert
          </button>
        </div>
      </form>
    </div>
  );
}

export default InsertPopUp;