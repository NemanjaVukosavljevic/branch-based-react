const Header = ({selectedTeam, teamMemberCount}) => {

    return (
        <>
            <div className="h-[10rem] flex flex-col justify-center gap-10 lg:pt-10 p-5 text-center">
                <h1 className="text-3xl lg:text-[4rem]">TeamMember <span className="text-blue-600">Manager</span></h1>
                <h1 className="text-2xl lg:text-3xl">{selectedTeam ? `${selectedTeam} has ${teamMemberCount} ${teamMemberCount === 1 ? "member" : "members"}`: `Select a Team`}</h1>
            </div>
        </>
    )
}

export default Header;