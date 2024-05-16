import { useState } from "react";

const GroupedTeamMembers = ({ employees, selectValue, setEmployees }) => {
    const groupTeamMembers = () => {
        let teams = [];

        let teamAMembers = employees.filter((employee) => employee.teamName === 'Team A');
        let teamA = { team: 'Team A', members: teamAMembers, collapsed: selectValue === 'Team A' ? false : true };
        teams.push(teamA);

        let teamBMembers = employees.filter((employee) => employee.teamName === 'Team B');
        let teamB = { team: 'Team B', members: teamBMembers, collapsed: selectValue === 'Team B' ? false : true };
        teams.push(teamB);

        let teamCMembers = employees.filter((employee) => employee.teamName === 'Team C');
        let teamC = { team: 'Team C', members: teamCMembers, collapsed: selectValue === 'Team C' ? false : true };
        teams.push(teamC);

        let teamDMembers = employees.filter((employee) => employee.teamName === 'Team D');
        let teamD = { team: 'Team D', members: teamDMembers, collapsed: selectValue === 'Team D' ? false : true };
        teams.push(teamD);

        return teams;
    }

    const [groupedEmployees, setGroupedEmployees] = useState(groupTeamMembers())

    const handleTeamClick = (event) => {
        let transformedGroupData = groupedEmployees.map((groupedData) => groupedData.team === event.currentTarget.id
            ? { ...groupedData, collapsed: !groupedData.collapsed }
            : groupedData)

        setGroupedEmployees(transformedGroupData)
        setEmployees(event.currentTarget.id)
    }

    return (
        <>
            <div className="flex flex-col justify-center gap-4 lg:mx-[20rem] p-5 text-center">
                <h1 className="text-3xl lg:text-5xl">Team Members</h1>
                {
                    groupedEmployees.map((item) => {
                        return (
                            <div key={item.team} style={{ cursor: "pointer" }}>
                                <h4 id={item.team} className="bg-white flex items-center justify-center h-[3rem]" onClick={handleTeamClick}>
                                    Team Name: {item.team}
                                </h4>

                                <div id={"collapse_" + item.team} className={`transition-all duration-500 ease-in-out ${item.collapsed ? 'h-0 overflow-hidden' : 'h-auto'}`}>
                                    <hr />
                                    {
                                        item.members.map((member) => {
                                            return (
                                                <div className="my-6 text-center" key={member.id}>
                                                    <h5 className="mt-2">
                                                        <span>
                                                            <span className="text-blue-600">Name:</span> {member.fullName}
                                                        </span>
                                                    </h5>
                                                    <p>
                                                        <span className="text-blue-600">Designation:</span> {member.designation}
                                                    </p>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default GroupedTeamMembers;
