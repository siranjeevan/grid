import { useDataContext } from "../../Data/ContextAPI.jsx";
import React from "react";
import { AllCommunityModule, ModuleRegistry } from "ag-grid-community";
import { AgGridReact } from "ag-grid-react";
import { defaultCol } from "../GridToolbar/TextFilter.jsx";
import Layout from "../Operations/OperationTabLayout.jsx";
import HandleOperation from "../Operations/NewInsert.jsx";
import DeletePopUp from "../Popup/DeletePopUp.jsx";
import InsertPopUp from "../Popup/InsertPopUp.jsx";

ModuleRegistry.registerModules([AllCommunityModule]);

function Grid() {
  const { rowData, columnDefs, setGridApi, operation } =
    useDataContext();

  return (
    <>
      <div className="relative h-150 w-[1100px] mx-90 my-25 shadow-lg">
        {operation === "delete" && <DeletePopUp />}
        {operation === "insert" && <InsertPopUp />}

        <AgGridReact
          rowData={rowData}
          columnDefs={columnDefs}
          rowSelection="multiple" 
          pagination={true}
          paginationPageSize={5}
          paginationPageSizeSelector={[5, 10, 25, 50]}
          onGridReady={(params) => setGridApi(params.api)}
        />
        <Layout>
            <HandleOperation />
        </Layout>
      </div>
    </>
  );
}

export default Grid;
