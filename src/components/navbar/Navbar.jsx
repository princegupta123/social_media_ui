import "./navbar.scss";
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SearchIcon from '@mui/icons-material/Search';
import GridViewIcon from '@mui/icons-material/GridView';
const Navbar = () => {
    return (
        <div className="navbar">
            <div className="left">
                <Link to="/" style={{ textDecoration: "none" }}>
                    <span>Social Media</span>
                </Link>
                <HomeIcon />
                <DarkModeIcon />
                <GridViewIcon />
                <div className="search">
                    <SearchIcon />
                    <input type='search' placeholder='Search...' />
                </div>
            </div>
            <div className="right">
                <EmailIcon/>
                <PersonIcon/>
                <NotificationsNoneIcon/>
                <div className="user">
                    <img src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                    <span>Prince Gupta</span>
                </div>
            </div>
        </div>
    )
}

export default Navbar