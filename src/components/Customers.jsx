import React, { useEffect, useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-material.css';
import AddCustomer from './AddCustomer';

export default function Customers() {

    useEffect(() => fetchData(), []);


    // const [customer, setCustomer] = useState({
    //     firstname: '',
    //     lastname: '',
    //     streetaddress: '',
    //     postcode: '',
    //     city: '',
    //     email: '',
    //     phone: ''
    // });

    const [customers, setCustomers] = useState([]);

    const fetchData = () => {
        fetch('http://traineeapp.azurewebsites.net/api/customers')
            .then(response => response.json())
            .then(data => setCustomers(data.content))
            .catch(error => console.error(error))
    }

    const columns = [
        { field: "firstname" },
        { field: "lastname" },
        { field: "email" },
        { field: "phone" },
        { field: "streetaddress" },
        { field: "postcode" },
        { field: "city" }
    ];

    return (
        <div>
            {/* <AddCustomer /> */}
            <div className='ag-theme-material'
                style={{ height: "800px", width: "1400px", margin: 'auto' }}>
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

