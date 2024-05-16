
import malePhoto from '../Images/man.png'
import femalePhoto from '../Images/woman.png'

const Employees = ( {employees, selectValue, handleEmployeeCardClick, handleTeamSelectionChange} ) => {

    return (
        <>
            <div className="min-h-[30vh] flex flex-col justify-center items-center">
                    <select className="text-black h-[3rem] w-[80%] pl-5 text-xl rounded-md" value={selectValue} onChange={handleTeamSelectionChange}>
                        <option value="Select" hidden>Select a Team</option>
                        <option value="Team A">Team A</option>
                        <option value="Team B">Team B</option>
                        <option value="Team C">Team C</option>
                        <option value="Team D">Team D</option>
                    </select>
            </div>

            <div className="flex flex-col lg:grid lg:grid-cols-3 gap-10 pb-5 mx-3 lg:mx-10">
                        {
                            employees.map((employee) => (
                                <div key={employee.id} className={(employee.teamName === selectValue ? "h-[20rem] standout rounded-md flex flex-col justify-center items-center gap-5 text-xl cursor-pointer" : "h-[20rem] flex flex-col justify-center items-center gap-5  text-xl cursor-pointer")} onClick={() => handleEmployeeCardClick(employee.id)}>
                                    <div className="h-[50%]">
                                        {
                                            employee.gender === 'male' ? <img src={malePhoto} alt={employee.fullName}className="h-full"/> : <img src={femalePhoto} alt={employee.fullName}className="h-full"/>
                                        }
                                    </div>
                                    <div className="flex flex-col text-center gap-3">
                                        <h1>{employee.fullName}</h1>
                                        <h1>{employee.designation}</h1>
                                        <h1>{employee.teamName}</h1>
                                    </div>
                                </div>
                            ))
                        }
            </div>                    

        </>
    )
}


export default Employees;