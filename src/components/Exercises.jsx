import React, { useEffect, useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-material.css';
import dayjs from 'dayjs';

export default function Exercises() {

    useEffect(() => fetchData(), []);


    // const [exercise, setExercise] = useState({
    //     id: '',
    //     date: '',
    //     duration: '',
    //     activity: '',
    //     customerId: ''
    // });

    const [exercises, setExercises] = useState([]);

    const fetchData = () => {
        fetch('https://traineeapp.azurewebsites.net/gettrainings')
            .then(response => response.json())
            .then(data => {
                setExercises(data)
            })
            .catch(error => console.error(error))
    }

    const columns = [
        { field: "activity" },
        { 
            field: "date",
            headerName: "Date",
            valueGetter: params => {
                const formattedDate = dayjs(params.data.date).format('DD/MM/YYYY, hh:mm A');
                return formattedDate;
            } 

    },
        { field: "duration" },
        {
            headerName: "Customer Name",
            valueGetter: params => {
              const customer = params.data.customer;
              return `${customer.firstname} ${customer.lastname}`;
            }
        }        
    ];

    return (
        <div>
            {/* <AddExercise /> */}
            <div className='ag-theme-material'
                style={{ height: "800px", width: "1400px", margin: 'auto' }}>
                <AgGridReact
                    columnDefs={columns}
                    rowData={exercises}
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

