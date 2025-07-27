import {useDataContext} from "../../Data/ContextAPI.jsx";
import React from "react";
import { AllCommunityModule, ModuleRegistry } from 'ag-grid-community';
import { AgGridReact } from 'ag-grid-react'; // React Data Grid Component
import {defaultCol} from '../GridToolbar/TextFilter.jsx';
import {rowSelectionConfig } from '../GridToolbar/RowSelect.jsx';
import Insert from "../Operations/Insert.jsx";
import Delete from "../Operations/Delete.jsx";
import Layout from "../Operations/OperationTabLayout.jsx"
import OperationShowing from "../Operations/OperationsShowing.jsx";
import HandleOperation from "../Operations/HandleOperation.jsx";

// Register all Community features
ModuleRegistry.registerModules([AllCommunityModule]);

function Grid() {
    const { rowData , columnDefs} = useDataContext();

    return (
        <>

            <div className=" h-150 w-[1100px] mx-90 my-25 shadow-lg ">
                
                <AgGridReact 
                rowData={rowData} 
                columnDefs={columnDefs}
                rowSelection={rowSelectionConfig}
                defaultColDef={defaultCol}
                pagination={true}
                paginationPageSize={5}
                paginationPageSizeSelector={[5 ,10, 25, 50]}
                />
                <Layout >
                 <HandleOperation />
                </Layout>
            </div>

        </>
    );
}
export default Grid;