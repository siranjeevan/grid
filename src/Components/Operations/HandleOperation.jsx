import { useDataContext } from '../../Data/ContextAPI.jsx';
import Delete from './Delete.jsx';
import Insert from './Insert.jsx';
import { useState } from 'react';
import OperationShowing from './OperationsShowing.jsx';

function HandleOperation() {

const { operation } = useDataContext()

  if (operation == "back")
  {
    return(
      <>
      <OperationShowing />
      </>
    )
  }
  else if (operation == "insert")
  {
    return(
      <>
      <Insert/>
      </>
    )
  }
  else
  {
    return(
      <>
      <Delete/>
      </>
    )
  }

}
export default HandleOperation;