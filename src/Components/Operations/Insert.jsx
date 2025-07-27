import { useState } from "react";
import { useDataContext } from "../../Data/ContextAPI";

function Insert() {
  const { setRowData } = useDataContext();

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
      ...formData, [name]: type === "checkbox" ? checked : value,
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
  }

  const {setOperation } = useDataContext();

  return (
    <>
        <form
          onSubmit={handleSubmit}
          className="flex justify-center items-center flex-row gap-2 font-bold"
        >
          <button onClick={()=> {setOperation("back")}} className="bg-blue-600 p-2 w-20 rounded-4xl -ml-4">back</button>
          <label>Make:</label>
          <input
            type="text"
            name="make"
            value={formData.make}
            onChange={handleChange}
            placeholder="Enter"
            className="w-30 bg-gray-300 p-0.5 rounded-[10px] text-center"
          />
          <label>Model:</label>
          <input
            type="text"
            name="model"
            value={formData.model}
            onChange={handleChange}
            placeholder="Enter"
            className="w-30 bg-gray-300 p-0.5 rounded-[10px] text-center"
          />
          <label>Price:</label>
          <input
            type="text"
            name="price"
            value={formData.price}
            onChange={handleChange}
            placeholder="Enter"
            className="w-30 bg-gray-300 p-0.5 rounded-[10px] text-center"
          />
          <label>Electric:</label>
          <input
            type="checkbox"
            name="electric"
            checked={formData.electric}
            onChange={handleChange}
            className="mr-5 w-5 h-5 bg-gray-300 p-0.5 rounded-[10px] text-center"
          />
          <label>Month:</label>
          <input
            type="text"
            name="month"
            value={formData.month}
            onChange={handleChange}
            placeholder="Enter"
            className="w-30 bg-gray-300 p-0.5 rounded-[10px] text-center"
          />
          <button
            type="submit"
            className="w-20 bg-red-500 p-0.5 justify-center text-center rounded-[10px]"
          >
            Insert
          </button>
        </form>
    </>
  );
}

export default Insert;
