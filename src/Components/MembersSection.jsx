import { useState } from "react"
import malePhoto from '../Images/man.png'
import femalePhoto from '../Images/woman.png'


const MembersSection = () => {

    const [employees, setEmployees] = useState([
        {
            id: 1,
            fullName: "Bob Jones",
            designation: "JavaScript Developer",
            gender: "male",
            teamName: "TeamA"
          },
          {
            id: 2,
            fullName: "Jill Bailey",
            designation: "Node Developer",
            gender: "female",
            teamName: "TeamA"
          },
          {
            id: 3,
            fullName: "Gail Shepherd",
            designation: "Java Developer",
            gender: "female",
            teamName: "TeamA"
          },
          {
            id: 4,
            fullName: "Sam Reynolds",
            designation: "React Developer",
            gender: "male",
            teamName: "TeamB"
          },
          {
            id: 5,
            fullName: "David Henry",
            designation: "DotNet Developer",
            gender: "male",
            teamName: "TeamB"
          },
          {
            id: 6,
            fullName: "Sarah Blake",
            designation: "SQL Server DBA",
            gender: "female",
            teamName: "TeamB"
          },
          {
            id: 7,
            fullName: "James Bennet",
            designation: "Angular Developer",
            gender: "male",
            teamName: "TeamC"
          },
          {
            id: 8,
            fullName: "Jessica Faye",
            designation: "API Developer",
            gender: "female",
            teamName: "TeamC"
          },
          {
            id: 9,
            fullName: "Lita Stone",
            designation: "C++ Developer",
            gender: "female",
            teamName: "TeamC"
          },
          {
            id: 10,
            fullName: "Daniel Young",
            designation: "Python Developer",
            gender: "male",
            teamName: "TeamD"
          },
          {
            id: 11,
            fullName: "Adrian Jacobs",
            designation: "Vue Developer",
            gender: "male",
            teamName: "TeamD"
          },
          {
            id: 12,
            fullName: "Devin Monroe",
            designation: "Graphic Designer",
            gender: "male",
            teamName: "TeamD"
          }
    ])
    
    return (
        <>
            <div className="flex flex-col lg:grid lg:grid-cols-3">
                {
                    employees.map((employee) => (
                        <div key={employee.id} className="h-[20rem] flex flex-col justify-center items-center gap-5 text-white text-xl">
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


export default MembersSection