import { Link } from "react-router-dom";


const Nav = () => {
    return (
        <nav>
            <ul className="flex flex-row gap-5 p-5 text-xl text-white bg-gray-800">
                <li>
                    <Link to="/">Home</Link> 
                </li>
                <li>
                    <Link to="/GroupedTeamMembers">Teams</Link> 
                </li>
            </ul>
        </nav>
    )
}


export default Nav;