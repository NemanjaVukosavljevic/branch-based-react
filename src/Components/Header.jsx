const Header = ({selectedTeam, teamMemberCount}) => {

    return (
        <>
            <div className="h-[10rem] flex flex-col justify-center gap-4 p-5 text-center">
                <h1 className="text-5xl">TeamMember Allocation</h1>
                <h1 className="text-3xl">{selectedTeam ? `${selectedTeam} has ${teamMemberCount} ${teamMemberCount === 1 ? "member" : "members"}`: `Select a Team`}</h1>
            </div>
        </>
    )
}

export default Header;