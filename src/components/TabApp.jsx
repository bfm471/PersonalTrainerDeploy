import React, { useState } from 'react';
import { Tabs, Tab } from '@mui/material';
import Welcome from './Welcome';
import Customers from './Customers';
import Exercises from './Exercises';
import MyCalendar from './Calender';

export default function TabApp() {
    const [value, setValue] = useState("home");

    const handleChange = (event, value) => {
        setValue(value);
    }

    return (
        <div>
            <Tabs value={value} onChange={handleChange}>
                <Tab value="home" label="Home" />
                <Tab value="customers" label="Customers" />
                <Tab value="exercises" label="Exercises" />
                <Tab value="calender" label="Calender" />
            </Tabs>
            {value === 'home' && <div><Welcome /></div>}
            {value === 'customers' && <div><Customers /></div>}
            {value === 'exercises' && <div><Exercises /></div>}
            {value === 'calender' && <div><MyCalendar /></div>}
        </div>

    )

}