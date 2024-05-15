import { useState, useEffect } from "react";

const Header = () => {
    const [selectValue, setSelectValue] = useState('');

    useEffect(() => {
        console.log(selectValue);
    }, [selectValue])

    return (
        <div className="min-h-[30vh] flex flex-col justify-center items-center gap-10">
            <h2 className="text-5xl text-white">TeamMember Manager</h2>
            <select className="text-black h-[3rem] w-[80%] pl-5 text-xl rounded-md" value={selectValue} onChange={(e) => {setSelectValue(e.target.value)}}>
                <option value="Select" hidden>Select a Team</option>
                <option value="Everybody">All Members</option>
                <option value="Team A">Team A</option>
                <option value="Team B">Team B</option>
                <option value="Team C">Team C</option>
                <option value="Team D">Team D</option>
            </select>
        </div>
        
    )
}


export default Header;