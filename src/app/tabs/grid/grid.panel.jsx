import React, {useEffect} from 'react'

//import {AgGridReact} from 'ag-grid-react'
//import 'ag-grid-community/dist/styles/ag-grid.css'
//import 'ag-grid-community/dist/styles/ag-theme-alpine-dark.css'

import { useSelector, useDispatch } from 'react-redux'
import { getUsers,    selectUsers } from 'app/tabs/grid/grid.slice'
import Typography from '@material-ui/core/Typography'

function UserGridPanel () {

	const users = useSelector(selectUsers);
  const dispatch = useDispatch();
/* 	const config = {
			columnDefs: [
				{headerName: "Id", field: "id"},
				{headerName: "Name", field: "name"},
				{headerName: "Company", field: "company.name"}				
			]
	} */
	
	useEffect(() => dispatch (getUsers()),[dispatch]) 	// dispatch is passed as a dependency 
														// to execute the hook only once

	return (
			<>
 			<Typography color="primary" gutterBottom>
				{users.map(user => <div>{user.name}</div>)}
			</Typography>


			  {/* 
			  <div
 				className="ag-theme-alpine-dark"
				style={{
					height: '500px',
					width: '100%'
				}}
			>
				<AgGridReact
					columnDefs={config.columnDefs}
					rowData = {users}
                    //immutableData={true}
                    //getRowNodeId={data => data.id.toString()}>  
				>
				</AgGridReact>
			</div> 
			*/}
			</> 
		)

}
export default UserGridPanel