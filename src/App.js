import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import Employees from './Components/Employees';
import Header from './Components/Header';
import employeeData from './Components/employeeData';
import GroupedTeamMembers from './Components/GroupedTeamMembers';
import Nav from './Components/Nav';
import NotFound from './Components/NotFound';


function App() {

    const [employees, setEmployees] = useState(employeeData)
    const [selectValue, setSelectValue] = useState('');

    useEffect(() => {
        console.log(selectValue);
    }, [selectValue])


    const handleEmployeeCardClick = (id) => {
        const updatedEmployees = employees.map(employee => {
            if (employee.id === id) {
                if (employee.teamName === selectValue) {
                    // If the employee is already in the selected team, remove them
                    return { ...employee, teamName: '' };
                } else {
                    // If the employee is not in the selected team, add them to the selected team
                    return { ...employee, teamName: selectValue };
                }
            }
            return employee;
        });
        setEmployees(updatedEmployees);
    }
    

    const handleTeamSelectionChange = (event) => {
        setSelectValue(event.target.value)
    }



    return (
    <div className='min-h-screen flex flex-col bg-gray-300'>
        <Router>
            <Nav />
            <Header
            selectedTeam={selectValue}
            teamMemberCount={employees.filter((employee) => employee.teamName === selectValue).length}
            />
            <Routes>
                <Route 
                path='/'
                element={<Employees 
                    employees={employees}
                    selectValue={selectValue}
                    handleEmployeeCardClick={handleEmployeeCardClick}
                    handleTeamSelectionChange={handleTeamSelectionChange}
                    />}
                >
                </Route>

                <Route path='/GroupedTeamMembers' element={<GroupedTeamMembers employees={employees} selectValue={selectValue} setEmployees = {setSelectValue}/>}> 

                </Route>

                <Route path='*' element={<NotFound />}>

                </Route>
            </Routes>
        </Router>

        
    </div>
    );
}

export default App;
