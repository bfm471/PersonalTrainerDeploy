import React, { useEffect, useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-material.css';
import DeleteIcon from '@mui/icons-material/Delete';
import Tooltip from '@mui/material/Tooltip';

import AddCustomer from './AddCustomer';
import EditCustomer from './EditCustomer';
import AddExercise from './AddExcercise';

export default function Customers() {

    useEffect(() => fetchData(), []);

    const [customers, setCustomers] = useState([]);

    const fetchData = () => {
        fetch('http://traineeapp.azurewebsites.net/api/customers')
            .then(response => response.json())
            .then(data => setCustomers(data.content))
            .catch(error => console.error(error))
    }

    const saveObject = (object, href, httpMethod) => {
        const options = {
            method: httpMethod,
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(object)
        }
        fetch(href, options)
            .then(_ => fetchData())
            .catch(error => console.error(error))
    }

    // testaa tähän mui:n dialog alert
    const deleteCustomer = href => {
        const options = { method: 'delete' }

        if (window.confirm('Delete customer?')) {
            fetch(href, options)
                .then(_ => fetchData())
                .catch(error => console.error(error))
        }
    };

    const columns = [
        {
            headerName: "Customer Name",
            valueGetter: params => {
                return `${params.data.firstname} ${params.data.lastname}`;
            }
        },
        { field: "email" },
        { field: "phone" },
        { field: "streetaddress" },
        { field: "postcode" },
        { field: "city" },
        {
            sortable: false,
            filter: false,
            floatingFilter: false,
            width: 10,
            cellRenderer: row => <AddExercise saveObject={saveObject} customer={row} />
        },
        {
            sortable: false,
            filter: false,
            floatingFilter: false,
            width: 10,
            cellRenderer: row => <EditCustomer saveObject={saveObject} customer={row.data} />
        },
        {
            headerName: "",
            sortable: false,
            filter: false,
            floatingFilter: false,
            width: 10,
            cellRenderer: params => {
                return (
                    <Tooltip title="Delete customer">
                        <DeleteIcon
                            color='error'
                            cursor='pointer'
                            fontSize='small'
                            onClick={() => {
                                // console.log(params.data.links[0].href)
                                deleteCustomer(params.data.links[0].href)
                            }}
                        />
                    </Tooltip>
                )
            }
        }

    ];

    return (
        <div>
            <AddCustomer saveObject={saveObject} />
            <div className='ag-theme-material'
                style={{ height: "1000px", width: "1600px", margin: 'auto' }}>
                <AgGridReact
                    columnDefs={columns}
                    rowData={customers}
                    defaultColDef={{
                        sortable: true,
                        filter: true,
                        floatingFilter: true
                    }}>
                </AgGridReact>
            </div>
        </div>
    );
};

